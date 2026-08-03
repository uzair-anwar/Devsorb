export type ContactFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

export const CONTACT_EMAIL = "hr@devsorb.com";

export function buildContactMailto(form: ContactFormValues): string {
  const name = [form.firstName, form.lastName].filter(Boolean).join(" ");
  const subject = `Website inquiry${name ? ` from ${name}` : ""}`;
  const details = [
    name && `Name: ${name}`,
    form.email && `Email: ${form.email}`,
    form.phone && `Phone: ${form.phone}`,
  ].filter((line): line is string => Boolean(line));

  const body = [form.message, "", "—", ...details].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
