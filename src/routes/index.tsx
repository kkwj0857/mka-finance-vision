import { createFileRoute } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  ArrowRight,
  ShieldCheck,
  Award,
  Building2,
  Users,
  LineChart,
  FileCheck2,
  Briefcase,
  Hammer,
  HomeIcon,
  TrendingUp,
  Sparkles,
  CheckCircle2,
  Linkedin,
  Twitter,
  Facebook,
} from "lucide-react";
import heroImage from "@/assets/hero-skyline.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "MKA Professional Services | Commercial Finance Consultant UK" },
      {
        name: "description",
        content:
          "Outsourced finance director and commercial finance consultant for UK SMEs, property developers and growing businesses. ACA-qualified. Accounting & compliance included.",
      },
      { name: "keywords", content: "commercial finance consultant UK, SME finance support, outsourced finance director, accountant for growing business, property finance consultant" },
      { property: "og:title", content: "MKA Professional Services | Commercial Finance Advisory" },
      { property: "og:description", content: "Helping UK business owners understand performance, improve cashflow and make better decisions — with full accounting and compliance support." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: heroImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: heroImage },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
});

const PHONE = "07476024342";
const EMAIL = "imran@mkaconsulting.co.uk";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhyMKA />
        <Services />
        <WhoWeWorkWith />
        <WhyClients />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- Header ---------------- */

function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-sm bg-gradient-to-br from-[oklch(0.82_0.13_82)] to-[oklch(0.72_0.13_70)] flex items-center justify-center text-navy font-display font-semibold text-lg shadow-[var(--shadow-gold)]">
            M
          </div>
          <div className="leading-tight">
            <div className="font-display text-navy-foreground text-lg tracking-tight">MKA</div>
            <div className="text-[10px] uppercase tracking-[0.22em] text-navy-foreground/70">Professional Services</div>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm text-navy-foreground/85">
          <a href="#why" className="hover:text-gold transition-colors">About</a>
          <a href="#services" className="hover:text-gold transition-colors">Services</a>
          <a href="#clients" className="hover:text-gold transition-colors">Who We Help</a>
          <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
        </nav>
        <a
          href={`tel:${PHONE}`}
          className="hidden md:inline-flex items-center gap-2 rounded-sm border border-gold/60 px-4 py-2 text-sm text-navy-foreground hover:bg-gold hover:text-gold-foreground transition-colors"
        >
          <Phone className="h-3.5 w-3.5" />
          {PHONE}
        </a>
      </div>
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center overflow-hidden"
    >
      <img
        src={heroImage}
        alt="London financial district skyline at dusk"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero-overlay)" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_oklch(0.78_0.12_78/0.18),_transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 pt-32 pb-24 w-full">
        <div className="max-w-3xl">
          <div className="reveal flex items-center gap-3 text-navy-foreground/85 text-xs uppercase tracking-[0.28em] mb-8">
            <span className="gold-rule" />
            ACA Qualified · UK Based
          </div>

          <h1 className="reveal reveal-delay-1 text-navy-foreground text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-balance">
            Commercial Finance Support for{" "}
            <span className="italic font-light text-gold">Growing Businesses</span>
          </h1>

          <p className="reveal reveal-delay-2 mt-8 text-lg lg:text-xl text-navy-foreground/85 max-w-2xl text-pretty leading-relaxed">
            Helping business owners understand performance, improve cashflow and make
            better decisions — with full accounting and compliance support included.
          </p>

          <div className="reveal reveal-delay-3 mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${PHONE}`}
              className="group inline-flex items-center justify-center gap-2 bg-gold text-gold-foreground px-7 py-4 rounded-sm font-medium hover:shadow-[var(--shadow-gold)] transition-all"
            >
              <Phone className="h-4 w-4" />
              Book a Call
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 border border-navy-foreground/30 text-navy-foreground px-7 py-4 rounded-sm font-medium hover:bg-navy-foreground/10 hover:border-navy-foreground/60 transition-all backdrop-blur-sm"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
          </div>

          <div className="reveal reveal-delay-4 mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              { v: "ACA", l: "Qualified" },
              { v: "13+", l: "Years Experience" },
              { v: "UK", l: "Banking Background" },
              { v: "SME", l: "Specialist" },
            ].map((s) => (
              <div key={s.l} className="border-l border-gold/50 pl-4">
                <div className="font-display text-2xl text-navy-foreground">{s.v}</div>
                <div className="text-[11px] uppercase tracking-widest text-navy-foreground/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why MKA ---------------- */

function WhyMKA() {
  const trust = [
    { icon: Award, label: "ACA Qualified" },
    { icon: TrendingUp, label: "13+ Years Experience" },
    { icon: Building2, label: "UK Banking Sector" },
    { icon: Briefcase, label: "SME Focused" },
  ];

  return (
    <section id="why" className="relative py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5">
            <SectionEyebrow>About</SectionEyebrow>
            <h2 className="mt-6 text-4xl lg:text-5xl text-navy text-balance leading-[1.05]">
              Why MKA Professional Services
            </h2>
            <div className="gold-rule mt-8" />
          </div>
          <div className="lg:col-span-7 space-y-6 text-lg text-charcoal/85 leading-relaxed">
            <p>
              ACA-qualified finance professional with{" "}
              <span className="text-navy font-medium">13+ years' experience</span>{" "}
              in senior finance roles across the UK banking sector — including
              FP&amp;A, commercial finance and business partnering.
            </p>
            <p>
              We bring large-company financial discipline and insight to SMEs,
              owner-managed businesses and property ventures — translating numbers
              into the decisions that drive growth.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-8">
              {trust.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 border border-border bg-card rounded-sm px-5 py-4 card-hover"
                >
                  <div className="h-9 w-9 rounded-sm bg-navy/5 text-navy flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-sm font-medium text-navy">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services ---------------- */

function Services() {
  const services = [
    {
      icon: LineChart,
      tag: "Core Service",
      title: "Financial Advisory",
      desc: "Ongoing finance support designed to help you run a better business.",
      items: [
        "Monthly / quarterly management reporting",
        "Profitability analysis",
        "Cashflow forecasting",
        "KPI dashboards",
        "Commercial insight & recommendations",
        "Monthly review calls",
      ],
      featured: true,
    },
    {
      icon: FileCheck2,
      tag: "Compliance",
      title: "Accounting & Compliance",
      desc: "Everything required to keep your business compliant and organised.",
      items: [
        "Year-end accounts",
        "Corporation tax",
        "VAT returns",
        "Payroll",
        "Bookkeeping oversight",
        "Companies House filings",
      ],
    },
    {
      icon: Sparkles,
      tag: "Project Work",
      title: "One-Off Projects",
      desc: "Additional support when important decisions or issues arise.",
      items: [
        "Business performance reviews",
        "Forecasting & budgeting",
        "Deal / investment analysis",
        "Finance function clean-up",
        "Process improvement",
        "Property project support",
      ],
    },
  ];

  return (
    <section id="services" className="relative py-28 lg:py-40 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <SectionEyebrow>Services</SectionEyebrow>
          <h2 className="mt-6 text-4xl lg:text-5xl text-navy text-balance leading-[1.05]">
            Built around your business — not a calendar of deadlines.
          </h2>
          <div className="gold-rule mt-8" />
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`relative flex flex-col rounded-sm border bg-card p-8 lg:p-10 card-hover ${
                s.featured ? "border-gold/60 shadow-[var(--shadow-card)]" : "border-border"
              }`}
            >
              {s.featured && (
                <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
              )}
              <div className="flex items-center justify-between">
                <div className="h-12 w-12 rounded-sm bg-navy text-navy-foreground flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-gold font-medium">
                  {s.tag}
                </span>
              </div>

              <h3 className="mt-8 text-2xl text-navy">{s.title}</h3>
              <p className="mt-3 text-charcoal/75 leading-relaxed">{s.desc}</p>

              <div className="my-8 h-px bg-border" />

              <ul className="space-y-3 flex-1">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3 text-sm text-charcoal">
                    <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Who We Work With ---------------- */

function WhoWeWorkWith() {
  const items = [
    { icon: Briefcase, label: "SMEs" },
    { icon: Hammer, label: "Trades & Contractors" },
    { icon: HomeIcon, label: "Property Developers / Investors" },
    { icon: Users, label: "Owner-Managed Businesses" },
  ];

  return (
    <section id="clients" className="relative py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl mx-auto text-center">
          <SectionEyebrow center>Who We Work With</SectionEyebrow>
          <h2 className="mt-6 text-4xl lg:text-5xl text-navy text-balance leading-[1.05]">
            Trusted by ambitious UK businesses.
          </h2>
          <div className="gold-rule mt-8 mx-auto" />
        </div>

        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="group relative bg-card border border-border rounded-sm p-8 lg:p-10 text-center card-hover"
            >
              <div className="mx-auto h-14 w-14 rounded-sm bg-navy/5 text-navy flex items-center justify-center group-hover:bg-navy group-hover:text-navy-foreground transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <div className="mt-6 text-sm font-medium text-navy uppercase tracking-wider">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Clients ---------------- */

function WhyClients() {
  const blocks = [
    { title: "Clear Numbers", desc: "Reporting that actually tells you how the business is performing — not just what HMRC needs." },
    { title: "Better Decisions", desc: "Commercial insight, scenarios and recommendations grounded in 13+ years of senior finance experience." },
    { title: "Ongoing Support", desc: "A finance partner on call — monthly reviews, strategic input and answers when you need them." },
    { title: "Full Compliance Covered", desc: "Year-end, tax, VAT, payroll and filings handled — so nothing falls through the cracks." },
  ];

  return (
    <section className="relative py-28 lg:py-40 overflow-hidden" style={{ background: "var(--gradient-navy)" }}>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_oklch(0.78_0.12_78/0.12),_transparent_55%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-16 items-end">
          <div className="lg:col-span-6">
            <SectionEyebrow light>Our Difference</SectionEyebrow>
            <h2 className="mt-6 text-4xl lg:text-6xl text-navy-foreground text-balance leading-[1.02]">
              Many accountants report the past.{" "}
              <span className="italic font-light text-gold">We help you manage the future.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:pb-3">
            <p className="text-navy-foreground/75 text-lg leading-relaxed">
              MKA combines the rigour of large-company finance with the agility small
              and growing businesses need — giving owners the clarity to lead with confidence.
            </p>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-navy-foreground/10 border border-navy-foreground/10">
          {blocks.map((b, i) => (
            <div
              key={b.title}
              className="bg-[oklch(0.22_0.05_262)] p-8 lg:p-10 hover:bg-[oklch(0.26_0.06_262)] transition-colors"
            >
              <div className="font-display text-gold text-3xl">0{i + 1}</div>
              <h3 className="mt-6 text-xl text-navy-foreground">{b.title}</h3>
              <p className="mt-3 text-sm text-navy-foreground/70 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

function FinalCTA() {
  return (
    <section id="contact" className="relative py-28 lg:py-40 bg-background">
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <SectionEyebrow center>Get In Touch</SectionEyebrow>
        <h2 className="mt-6 text-4xl lg:text-6xl text-navy text-balance leading-[1.05]">
          Need clarity on your <span className="italic font-light">business finances?</span>
        </h2>
        <div className="gold-rule mt-8 mx-auto" />
        <p className="mt-8 text-lg lg:text-xl text-charcoal/75 max-w-2xl mx-auto">
          Book an initial conversation. No obligation — just a clear, professional view of where you are and where you could be.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href={`tel:${PHONE}`}
            className="group inline-flex items-center justify-center gap-2 bg-navy text-navy-foreground px-8 py-4 rounded-sm font-medium hover:bg-charcoal transition-all"
          >
            <Phone className="h-4 w-4" />
            Call Now · {PHONE}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="inline-flex items-center justify-center gap-2 border border-navy/30 text-navy px-8 py-4 rounded-sm font-medium hover:border-gold hover:bg-gold/10 transition-all"
          >
            <Mail className="h-4 w-4" />
            Email Us
          </a>
        </div>

        <div className="mt-10 inline-flex items-center gap-2 text-sm text-charcoal/60">
          <ShieldCheck className="h-4 w-4 text-gold" />
          ACA-qualified · UK based · Fully insured
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="relative bg-[oklch(0.16_0.05_262)] text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-sm bg-gradient-to-br from-[oklch(0.82_0.13_82)] to-[oklch(0.72_0.13_70)] flex items-center justify-center text-navy font-display font-semibold text-lg">
                M
              </div>
              <div>
                <div className="font-display text-lg">MKA Professional Services</div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-navy-foreground/60">
                  Commercial Finance Advisory & Compliance
                </div>
              </div>
            </div>
            <p className="mt-6 text-sm text-navy-foreground/65 max-w-md leading-relaxed">
              Bringing the rigour of UK banking-sector finance to SMEs, owner-managed
              businesses and property ventures.
            </p>
          </div>

          <div className="lg:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold mb-5">Contact</div>
            <ul className="space-y-3 text-sm text-navy-foreground/80">
              <li>
                <a href={`tel:${PHONE}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                  <Phone className="h-3.5 w-3.5" /> {PHONE}
                </a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 hover:text-gold transition-colors">
                  <Mail className="h-3.5 w-3.5" /> {EMAIL}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold mb-5">Explore</div>
            <ul className="space-y-3 text-sm text-navy-foreground/80">
              <li><a href="#why" className="hover:text-gold">About</a></li>
              <li><a href="#services" className="hover:text-gold">Services</a></li>
              <li><a href="#clients" className="hover:text-gold">Clients</a></li>
              <li><a href="#contact" className="hover:text-gold">Contact</a></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <div className="text-[10px] uppercase tracking-[0.22em] text-gold mb-5">Follow</div>
            <div className="flex gap-3">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="h-9 w-9 border border-navy-foreground/15 rounded-sm flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-navy-foreground/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-navy-foreground/50">
          <div>© {new Date().getFullYear()} MKA Professional Services. All rights reserved.</div>
          <div>ACA-qualified · United Kingdom</div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Helpers ---------------- */

function SectionEyebrow({
  children,
  center,
  light,
}: {
  children: React.ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-xs uppercase tracking-[0.28em] ${
        light ? "text-navy-foreground/70" : "text-charcoal/60"
      } ${center ? "justify-center" : ""}`}
    >
      <span className="gold-rule" />
      {children}
    </div>
  );
}
