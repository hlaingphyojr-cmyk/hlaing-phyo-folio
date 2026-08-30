import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import {
  ArrowUp,
  Award,
  BadgeCheck,
  BookOpen,
  Brain,
  Code2,
  Copy,
  Github,
  Globe,
  GraduationCap,
  Languages,
  Loader2,
  Mail,
  MapPin,
  Moon,
  Phone,
  Send,
  Sparkles,
  Sun,
  Users,
} from "lucide-react";
import photoAsset from "@/assets/hlaing-phyo.png.asset.json";

const GITHUB_URL = "https://github.com/hlaingphyojr-cmyk";
const CREDLY_URL =
  "https://www.credly.com/badges/f02e31c4-352d-4fc9-8a1f-31c843310a3f/public_url";
const EMAIL = "hlaingphyojr@gmail.com";
const PHONE = "+959775 448 041";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hlaing Phyo — Computer Science Student & Developer" },
      {
        name: "description",
        content:
          "Portfolio of Hlaing Phyo, final-year Computer Science student specializing in Knowledge Engineering at UCSM. Open for internships.",
      },
      { property: "og:title", content: "Hlaing Phyo — Computer Science Student & Developer" },
      {
        property: "og:description",
        content:
          "Final-year CS student at UCSM specializing in Knowledge Engineering. AWS Academy certified. Open for internships.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

function useTheme() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return { dark, toggle: () => setDark((d) => !d) };
}

function copyText(text: string, label: string) {
  const fallback = () => {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand("copy");
      toast.success(`${label} copied to clipboard`);
    } catch {
      toast.error("Copy failed");
    }
    ta.remove();
  };
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(text).then(
      () => toast.success(`${label} copied to clipboard`),
      fallback,
    );
  } else {
    fallback();
  }
}

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

function Nav({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="font-display text-lg font-bold tracking-tight">
          HP<span className="text-primary">.</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profile"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% -10%, rgb(0 82 204 / 0.18), transparent 70%)",
        }}
      />
      <div className="mx-auto flex max-w-6xl flex-col items-center px-4 text-center sm:px-6">
        <div className="relative">
          <div className="absolute -inset-2 rounded-full bg-primary/20 blur-2xl" aria-hidden />
          <img
            src={photoAsset.url}
            alt="Portrait of Hlaing Phyo"
            className="relative h-40 w-40 rounded-full border-4 border-background object-cover shadow-2xl ring-2 ring-primary/40 sm:h-48 sm:w-48"
          />
        </div>

        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          OPEN FOR INTERNSHIP
        </span>

        <h1 className="font-display mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
          HLAING PHYO
        </h1>
        <p className="font-display mt-3 text-sm font-medium tracking-[0.2em] text-muted-foreground sm:text-base">
          COMPUTER SCIENCE STUDENT <span className="text-primary">|</span> KNOWLEDGE ENGINEERING
        </p>
        <p className="mt-4 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" /> Taungtha, Mandalay, Myanmar
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => copyText(EMAIL, "Email")}
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.03]"
          >
            <Copy className="h-4 w-4" /> Copy Email
          </button>
          <button
            onClick={() => copyText(PHONE, "Phone number")}
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
          >
            <Phone className="h-4 w-4 text-primary" /> Copy Phone
          </button>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-accent"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href={CREDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/20"
          >
            <BadgeCheck className="h-4 w-4" /> AWS Certified
          </a>
        </div>
      </div>
    </section>
  );
}

function Section({
  id,
  title,
  icon: Icon,
  children,
}: {
  id: string;
  title: string;
  icon: typeof Code2;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 flex items-center gap-3">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </span>
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function About() {
  return (
    <Section id="about" title="About Me" icon={Sparkles}>
      <div className="glass-card p-6 sm:p-8">
        <p className="max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Motivated Computer Science student specializing in Knowledge Engineering, with a strong
          foundation in programming and software development. Eager to gain practical industry
          experience, apply my technical knowledge to real-world projects, and learn from
          experienced professionals. A fast learner with a responsible attitude and strong
          willingness to contribute as an intern.
        </p>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" /> {EMAIL}
          </span>
          <span className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" /> {PHONE}
          </span>
        </div>
      </div>
    </Section>
  );
}

const TECH_SKILLS = ["Python", "Java", "MySQL", "JavaScript", "HTML/CSS", "Android"];
const SOFT_SKILLS = [
  "Critical Thinking",
  "Problem Solving",
  "Teamwork & Communication",
  "Time Management",
];
const INTERESTS = ["Artificial Intelligence", "Full Stack Developer", "Web Development"];

function Skills() {
  return (
    <Section id="skills" title="Skills & Certifications" icon={Code2}>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card p-6">
          <h3 className="font-display flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
            <Code2 className="h-4 w-4" /> Technical Skills
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {TECH_SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
              >
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-display mt-8 flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
            <Users className="h-4 w-4" /> Soft Skills
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {SOFT_SKILLS.map((s) => (
              <span
                key={s}
                className="rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <h3 className="font-display mt-8 flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
            <Languages className="h-4 w-4" /> Languages
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li className="flex justify-between border-b border-border/60 pb-2">
              <span className="font-medium text-foreground">English</span> Intermediate
            </li>
            <li className="flex justify-between">
              <span className="font-medium text-foreground">Burmese</span> Native
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <a
            href={CREDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="glass-card group block p-6 transition-transform hover:scale-[1.01]"
          >
            <h3 className="font-display flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
              <Award className="h-4 w-4" /> Certifications
            </h3>
            <div className="mt-4 flex items-start gap-4">
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <div>
                <p className="font-semibold group-hover:text-primary">AWS Academy Cloud Foundations</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Verified badge on Credly — click to view credential
                </p>
              </div>
            </div>
          </a>
          <div className="glass-card p-6">
            <h3 className="font-display flex items-center gap-2 text-sm font-semibold tracking-wider text-primary uppercase">
              <Brain className="h-4 w-4" /> Interests
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {INTERESTS.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-primary/30 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const PROJECTS = [
  {
    name: "University Academic Fee Management System",
    context: "Second Year Core Project",
    tech: ["PHP", "MySQL", "JavaScript", "HTML", "CSS"],
    points: [
      "Developed a web-based fee system with secure login and dynamic calculation for student balance updates.",
      "Managed project deadlines efficiently by creating clear timelines and prioritizing tasks step-by-step.",
      "Worked closely with team members, dividing duties and sharing ideas to complete the project smoothly.",
    ],
  },
  {
    name: "EconPlan",
    context: "UCSM AI Hackathon",
    tech: [
      "React 19",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "OpenRouter API",
      "Server-Sent Events",
      "REST API",
    ],
    points: [
      "Built a full-stack platform for sharing, discussing, and optimizing sustainable production plans.",
      "Implemented secure authentication, role-based access control, search, filtering, saving, and threaded comments.",
      "Integrated AI-powered contextual Q&A and automated optimized production plan generation with streaming responses.",
    ],
  },
];

function Projects() {
  return (
    <Section id="projects" title="Projects & Experience" icon={Globe}>
      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <article key={p.name} className="glass-card flex flex-col p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-wider text-primary uppercase">{p.context}</p>
            <h3 className="font-display mt-2 text-xl font-bold">{p.name}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
              {p.points.map((pt) => (
                <li key={pt} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {pt}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education" icon={GraduationCap}>
      <div className="glass-card flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8">
        <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
          <BookOpen className="h-7 w-7" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-lg font-bold">Bachelor of Computer Science (B.C.Sc.)</h3>
          <p className="mt-1 text-muted-foreground">University of Computer Studies, Mandalay (UCSM)</p>
          <p className="mt-2 text-sm font-medium text-primary">
            Knowledge Engineering (Final Year Student) · 2022 – Present
          </p>
        </div>
      </div>
    </Section>
  );
}

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: "Email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    onClick: () => copyText(EMAIL, "Email"),
  },
  {
    icon: Phone,
    label: "Phone",
    value: PHONE,
    href: `tel:${PHONE.replace(/\s/g, "")}`,
    onClick: () => copyText(PHONE, "Phone number"),
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Taungtha, Mandalay, Myanmar",
    href: "https://www.google.com/maps/search/?api=1&query=Taungtha+Mandalay+Myanmar",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/hlaingphyojr-cmyk",
    href: GITHUB_URL,
  },
];

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;
      setForm((f) => ({ ...f, [key]: value }));
      setErrors((er) => ({ ...er, [key]: "" }));
    };

  const validate = () => {
    const next = { name: "", email: "", subject: "", message: "" };
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) next.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Enter a valid email";
    if (!form.subject.trim()) next.subject = "Subject is required";
    if (!form.message.trim()) next.message = "Message is required";
    else if (form.message.trim().length < 10) next.message = "Message is too short (min 10 chars)";
    setErrors(next);
    return !next.name && !next.email && !next.subject && !next.message;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || sending) return;
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      toast.success("Message sent! Thank you for reaching out.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setSending(false);
    }
  };

  const inputCls =
    "rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={onSubmit} noValidate className="glass-card flex flex-col gap-4 p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="field-name" className="text-sm font-medium text-foreground">
            Name
          </label>
          <input
            id="field-name"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name..."
            className={inputCls}
          />
          {errors.name && <span className="text-xs text-destructive">{errors.name}</span>}
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="field-email" className="text-sm font-medium text-foreground">
            Email
          </label>
          <input
            id="field-email"
            type="email"
            value={form.email}
            onChange={update("email")}
            placeholder="Your email..."
            className={inputCls}
          />
          {errors.email && <span className="text-xs text-destructive">{errors.email}</span>}
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="field-subject" className="text-sm font-medium text-foreground">
          Subject
        </label>
        <input
          id="field-subject"
          value={form.subject}
          onChange={update("subject")}
          placeholder="Your subject..."
          className={inputCls}
        />
        {errors.subject && <span className="text-xs text-destructive">{errors.subject}</span>}
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="field-message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="field-message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          placeholder="Your message..."
          className={`resize-none ${inputCls}`}
        />
        {errors.message && <span className="text-xs text-destructive">{errors.message}</span>}
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:scale-[1.02]"
      >
        <Send className="h-4 w-4" /> Send Message
      </button>
    </form>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Get In Touch" icon={Mail}>
      <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        Feel free to reach out for internship opportunities or collaborations!
      </p>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid gap-4 sm:grid-cols-2">
          {CONTACT_CARDS.map((c) => {
            const Icon = c.icon;
            const inner = (
              <div className="glass-card flex h-full flex-col gap-3 p-6 transition-transform hover:scale-[1.01]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-wider text-primary uppercase">{c.label}</p>
                  <p className="mt-1 break-words text-sm font-medium text-foreground">{c.value}</p>
                </div>
              </div>
            );
            if (c.onClick) {
              return (
                <button key={c.label} onClick={c.onClick} className="text-left">
                  {inner}
                </button>
              );
            }
            return (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                {inner}
              </a>
            );
          })}
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Hlaing Phyo. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Github className="h-4 w-4" />
          </a>
          <button
            onClick={() => copyText(EMAIL, "Email")}
            aria-label="Copy email"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
          </button>
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform hover:scale-105"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}

function Index() {
  const { dark, toggle } = useTheme();
  return (
    <div className="min-h-screen">
      <Nav dark={dark} toggle={toggle} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
