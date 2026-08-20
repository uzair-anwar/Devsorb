-- Devsorb CMS — initial schema
-- Run in the Supabase SQL editor (or `supabase db push`) once the project exists.

-- ============ Content tables ============

create table public.jobs (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  blurb text not null default '',
  location text not null default 'Remote',
  job_type text not null default 'Full-time',
  facts jsonb not null default '[]',      -- ["Department: …", "No. of Openings : …", …]
  paragraphs jsonb not null default '[]', -- intro paragraphs
  sections jsonb not null default '[]',   -- [{heading, bullets: []}]
  published boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.case_studies (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  category text not null default '',
  image_url text,
  detail jsonb,                            -- {intro, challenge, solution, results, snapshot}
  status text not null default 'draft' check (status in ('draft', 'published')),
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.team_members (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  designation text not null default '',
  photo_url text,
  sort_order int not null default 0,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- ============ Visitor submissions ============

create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null default '',
  email text not null,
  phone text not null default '',
  message text not null,
  created_at timestamptz not null default now()
);

create table public.job_applications (
  id uuid primary key default gen_random_uuid(),
  job_slug text,
  name text not null,
  email text not null,
  phone text not null default '',
  address text not null default '',
  job_posting text not null default '',
  heard_from text not null default '',
  expected_salary text not null default '',
  message text not null default '',
  resume_url text,
  created_at timestamptz not null default now()
);

-- ============ updated_at trigger ============

create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end $$;

create trigger jobs_updated_at before update on public.jobs
  for each row execute function public.set_updated_at();
create trigger case_studies_updated_at before update on public.case_studies
  for each row execute function public.set_updated_at();
create trigger team_members_updated_at before update on public.team_members
  for each row execute function public.set_updated_at();

-- ============ Row Level Security ============
-- Public (anon): read published content; insert submissions. Nothing else.
-- Authenticated admins: full access.

alter table public.jobs enable row level security;
alter table public.case_studies enable row level security;
alter table public.team_members enable row level security;
alter table public.contact_submissions enable row level security;
alter table public.job_applications enable row level security;

create policy "anon read published jobs" on public.jobs
  for select using (published = true);
create policy "admin full access jobs" on public.jobs
  for all to authenticated using (true) with check (true);

create policy "anon read published case studies" on public.case_studies
  for select using (status = 'published');
create policy "admin full access case studies" on public.case_studies
  for all to authenticated using (true) with check (true);

create policy "anon read team members" on public.team_members
  for select using (true);
create policy "admin full access team members" on public.team_members
  for all to authenticated using (true) with check (true);

create policy "anon insert contact submissions" on public.contact_submissions
  for insert with check (true);
create policy "admin read contact submissions" on public.contact_submissions
  for select to authenticated using (true);
create policy "admin delete contact submissions" on public.contact_submissions
  for delete to authenticated using (true);

create policy "anon insert job applications" on public.job_applications
  for insert with check (true);
create policy "admin read job applications" on public.job_applications
  for select to authenticated using (true);
create policy "admin delete job applications" on public.job_applications
  for delete to authenticated using (true);

-- ============ Storage buckets ============
-- Public bucket for site imagery (case-study images, team photos);
-- private bucket for resumes (admin-only reads).

insert into storage.buckets (id, name, public) values
  ('site-media', 'site-media', true),
  ('resumes', 'resumes', false);

create policy "admin manage site media" on storage.objects
  for all to authenticated
  using (bucket_id = 'site-media') with check (bucket_id = 'site-media');
create policy "anon read site media" on storage.objects
  for select using (bucket_id = 'site-media');

create policy "anon upload resumes" on storage.objects
  for insert with check (bucket_id = 'resumes');
create policy "admin read resumes" on storage.objects
  for select to authenticated using (bucket_id = 'resumes');
