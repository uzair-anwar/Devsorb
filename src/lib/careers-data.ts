export type JobSection = {
  heading: string;
  bullets: string[];
};

export type JobDetail = {
  facts: string[];
  paragraphs: string[];
  sections: JobSection[];
};

export type Job = {
  slug: string;
  title: string;
  blurb: string;
  location: string;
  jobType: string;
  detail?: JobDetail;
};

export const JOBS: Job[] = [
  {
    slug: "senior-software-engineer",
    title: "Senior Software Engineer",
    blurb: "We're looking for a senior software engineer to join our team.",
    location: "Remote",
    jobType: "Full-time",
    detail: {
      facts: [
        "Department: Web Development",
        "No. of Openings : 3",
        "Job Type: Full-Time",
        "Location: Warsaw, Poland",
        "Salary range: $80k to $100k (Based on your experience).",
        "Working days: Weekly 05 days. Sunday To Thursday. 09 AM to 06 PM. (Launch Break 01 Hour)",
        "Application Deadline: October 10, 2023",
        "Experience Required: 6+ Years",
      ],
      paragraphs: [
        "We're looking for an eager and knowledgeable WordPress Developer to join our technical team in Warsaw, Poland. You'll be expected to utilize bleeding edge technology and robust techniques. You should be an excellent communicator and comfortable managing multiple tasks. you also need to be a team player and have a problem solving aptitude.",
        "Working quickly and creatively should come naturally to you, as well as being an innovative problem solver who takes pride in producing logical, simple,and effective solutions to what are often very new and complex issues.",
      ],
      sections: [
        {
          heading: "What you’ll get to do…",
          bullets: [
            "Refactor current code to service oriented architecture.",
            "Collaborate with a unique background of engineering, product, and operations team members to deliver the best solution for our customers.",
            "Solve technical problems that few have solved before  no one else helps local businesses the way we do.",
            "Participate in the decision making progress  we want you to speak up.",
            "Mentor your team members to share your passion for software, your appreciation for the engineering field, and your respect for the craft of software development.",
            "Take on the challenge of making what you build higher quality, faster, and more scalable.",
            "Participate in on call rotation.",
          ],
        },
        {
          heading: "Your experience should include…",
          bullets: [
            "6+ years of previous professional software development experience.",
            "Previous backend restful API development experience.",
            "Strong experience in a programming language like Python, PHP, NodeJS, Java, etc.",
            "Can adapt to new or different programming languages.",
            "Experience integrating a broad variety of technologies via API consumption/production.",
            "Ability to collaborate with a unique background of engineering, product, and operations team members to deliver the best solution for ourcustomers.",
            "Deep knowledge and a passion for coding standards and following proven design patterns.",
            "Solid foundation in data structures and algorithms.",
            "Experience with Agile, working in sprints, and participating in Agile ceremonies.",
          ],
        },
        {
          heading: "You might also have…",
          bullets: [
            "Experience with AWS.",
            "Experience building CI/CD and server/deployment automation solutions.",
            "Experience with open-source puppet, infrastructure as code.",
            "Passion for technology.",
            "You have high standards and want to make a difference with your work.",
            "You are always trying to improve.",
          ],
        },
        {
          heading: "Great benefits…",
          bullets: [
            "Company-wide 401(k) plan.",
            "Life & disability insurance offered.",
            "Competitive compensation salary, bonus, equity.",
            "Medical, dental, and vision; flex spending account.",
            "Flexible paid time off & sick leave.",
          ],
        },
      ],
    },
  },
  {
    slug: "customer-success-manager",
    title: "Customer Success Manager",
    blurb: "We're looking for a customer success manager to join our team.",
    location: "Tokyo",
    jobType: "Full-time",
  },
  {
    slug: "product-designer",
    title: "Product Designer",
    blurb: "We're looking for a mid-level product designer to join our team.",
    location: "Remote",
    jobType: "Full-time",
  },
  {
    slug: "backend-developer",
    title: "Backend Developer",
    blurb: "We're looking for an experienced backend developer to join our team.",
    location: "In House",
    jobType: "Part-time",
  },
  {
    slug: "engineering-manager",
    title: "Engineering Manager",
    blurb: "We're looking for a engineering manager to join our team.",
    location: "New York",
    jobType: "Full-time",
  },
  {
    slug: "content-writer",
    title: "Content Writer",
    blurb: "We're looking for a content writer to join our team.",
    location: "Remote",
    jobType: "Full-time",
  },
];

export function getJobBySlug(slug: string): Job | undefined {
  return JOBS.find((j) => j.slug === slug);
}
