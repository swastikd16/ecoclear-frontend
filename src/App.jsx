const roles = [
  {
    title: "Proponent",
    description:
      "Submit and track clearances effortlessly with automated document generation and status updates.",
    icon: <ClipboardIcon />,
  },
  {
    title: "Scrutiny Team",
    description:
      "Review environmental impacts using smart checklists and AI-assisted compliance verification.",
    icon: <ChecklistIcon />,
  },
  {
    title: "MoM Committee",
    description:
      "Coordinate meeting minutes, agenda scheduling, and stakeholder communication in one place.",
    icon: <PeopleIcon />,
  },
  {
    title: "System Admin",
    description:
      "Full system governance with granular permissions, audit logs, and performance analytics.",
    icon: <ShieldIcon />,
  },
];

const workflow = [
  {
    step: "1",
    title: "Draft Submission",
    description:
      "Proponents enter project details and upload impact reports. The system automatically highlights missing information or potential compliance flags.",
    preview: "draft",
  },
  {
    step: "2",
    title: "Peer & Scrutiny Review",
    description:
      "Multi-disciplinary teams review submissions simultaneously. Direct annotation and feedback tools speed up the clarification process by 40%.",
    preview: "review",
  },
  {
    step: "3",
    title: "Committee Approval",
    description:
      "The MoM committee reviews consolidated reports during formal sessions. Minutes and resolutions are recorded directly into the project timeline.",
    preview: "empty",
  },
  {
    step: "4",
    title: "Finalized Certification",
    description:
      "Upon approval, a digitally signed Environmental Clearance certificate is issued and archived for lifelong accessibility.",
    preview: "badge",
  },
];

const footerColumns = [
  {
    title: "Product",
    links: ["Features", "Pricing", "API Support", "Enterprise"],
  },
  {
    title: "Roles",
    links: ["Proponents", "Reviewers", "Regulators", "Committee"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Compliance"],
  },
];

function App() {
  return (
    <div className="page-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="EcoClear home">
          <LeafMark />
          <span>EcoClear</span>
        </a>

        <nav className="main-nav" aria-label="Primary">
          <a href="#product">Product</a>
          <a href="#roles">Roles</a>
          <a href="#workflow">Workflow</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="header-actions">
          <a href="#login" className="text-link">
            Log In
          </a>
          <a href="#get-started" className="button button-dark button-small">
            Get Started
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="top">
          <div className="hero-copy">
            <span className="eyebrow">Version 2.0 Now Live</span>
            <h1>
              EcoClear: <span>Smart Environmental</span> Clearance Workflow
            </h1>
            <p>
              Streamline environmental approvals with our professional
              compliance management platform. Designed for proponents,
              reviewers, and administrators to collaborate seamlessly.
            </p>

            <div className="hero-actions">
              <a href="#get-started" className="button button-dark">
                Start Free Trial
              </a>
              <a href="#demo" className="button button-light">
                Watch Demo
              </a>
            </div>

            <div className="hero-meta">
              <div className="avatar-group" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p>
                <strong>500+</strong> teams cleared this month
              </p>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="visual-frame">
              <div className="lamp" />
              <div className="plant plant-left">
                <span />
                <span />
                <span />
              </div>
              <div className="plant plant-right">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="table">
                <div className="pot" />
                <div className="pot small" />
              </div>
            </div>
            <div className="stat-card">
              <div className="stat-row">
                <CheckCircle />
                <span>Compliance Rate</span>
              </div>
              <strong>99.4%</strong>
            </div>
          </div>
        </section>

        <section className="roles-band section" id="roles">
          <div className="section-heading centered">
            <h2>Tailored Solutions for Every Role</h2>
            <p>
              Collaborative tools built specifically for the environmental
              regulatory ecosystem.
            </p>
          </div>

          <div className="role-grid">
            {roles.map((role) => (
              <article className="role-card" key={role.title}>
                <div className="role-icon">{role.icon}</div>
                <h3>{role.title}</h3>
                <p>{role.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="workflow section" id="workflow">
          <div className="workflow-intro">
            <h2>Simple, Structured Workflow</h2>
            <p>
              Our automated pipeline takes you from initial draft to final
              certification with zero friction.
            </p>

            <ul className="feature-list">
              <li>
                <CheckCircle />
                Automatic compliance checks
              </li>
              <li>
                <CheckCircle />
                Real-time collaboration
              </li>
              <li>
                <CheckCircle />
                Encrypted data storage
              </li>
            </ul>
          </div>

          <div className="timeline">
            {workflow.map((item, index) => (
              <article className="timeline-item" key={item.step}>
                <div className="timeline-rail">
                  <span>{item.step}</span>
                  {index !== workflow.length - 1 && <i />}
                </div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <WorkflowPreview variant={item.preview} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta section" id="get-started">
          <div className="cta-panel">
            <h2>Ready to simplify your environmental compliance?</h2>
            <p>
              Join leading organizations worldwide in building a more
              sustainable and transparent future with EcoClear.
            </p>
            <a href="#pricing" className="button button-white">
              Start for free
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="product">
        <div className="footer-brand">
          <a className="brand" href="#top">
            <LeafMark />
            <span>EcoClear</span>
          </a>
          <p>
            A modern platform for environmental clearance workflows, bringing
            transparency and efficiency to regulatory compliance.
          </p>
          <div className="socials" aria-label="Social links">
            <a href="#linkedin" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="#mail" aria-label="Email">
              <MailIcon />
            </a>
          </div>
        </div>

        {footerColumns.map((column) => (
          <div className="footer-column" key={column.title}>
            <h3>{column.title}</h3>
            {column.links.map((link) => (
              <a href={`#${link.toLowerCase().replace(/\s+/g, "-")}`} key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}

        <div className="footer-note">
          <p>
            © 2024 EcoClear Systems. All rights reserved. Built for a greener
            future.
          </p>
        </div>
      </footer>
    </div>
  );
}

function WorkflowPreview({ variant }) {
  if (variant === "draft") {
    return (
      <div className="preview-card preview-draft" aria-hidden="true">
        <div className="preview-top" />
        <div className="preview-bar">
          <span />
        </div>
      </div>
    );
  }

  if (variant === "review") {
    return (
      <div className="preview-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (variant === "badge") {
    return (
      <div className="clear-badge" aria-hidden="true">
        <CheckCircle />
        Cleared
      </div>
    );
  }

  return null;
}

function LeafMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 14.5C5 8.75 9.36 4.47 15.8 4c-.52 2.8-2.22 5.58-4.92 7.76C8.67 13.56 6.8 14.2 5 14.5Zm4.2 5.3C5.48 18.2 3 14.63 3 10.54c3.71-.14 6.68-1.28 9.22-3.44 2.53-2.17 4.26-4.68 5.31-7.1C20.93 1.3 23 5.05 23 9.3 23 16.32 17.42 22 10.54 22c-.46 0-.91-.07-1.34-.2Z" />
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m8.2 12.2 2.45 2.45 5.15-5.3" />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M9 4.5h6M9.75 3h4.5A1.75 1.75 0 0 1 16 4.75V6h2.25A1.75 1.75 0 0 1 20 7.75v10.5A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25V7.75A1.75 1.75 0 0 1 5.75 6H8V4.75C8 3.78 8.78 3 9.75 3Z" />
      <path d="M8 10h8M8 14h5" />
    </svg>
  );
}

function ChecklistIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6 7.5h6M6 12h6m-6 4.5h6M16.5 8.5l1.5 1.5 3-3m-4.5 5.5 1.5 1.5 3-3" />
      <rect x="3" y="4" width="18" height="16" rx="2.5" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 11a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm8 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 18a4 4 0 0 1 8 0M12.5 18a4 4 0 0 1 8 0" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 5.5 5.8v5.7c0 4.3 2.6 8.2 6.5 9.7 3.9-1.5 6.5-5.4 6.5-9.7V5.8L12 3Z" />
      <path d="m10.2 12.2 1.5 1.5 2.8-3.1" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3Zm-1 2.5h2v8h-2Zm5 0h1.9v1.1h.1c.3-.6 1.1-1.3 2.3-1.3 2.4 0 2.9 1.6 2.9 3.7V19h-2v-3.8c0-.9 0-2-.1-2.3-.1-.7-.5-1.2-1.4-1.2-1 0-1.6.7-1.8 1.5-.1.2-.1.5-.1.8V19h-2Z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19.3 7.2c.8-.1 1.5-.5 2-.9-.3.9-.9 1.6-1.7 2.1 0 .2 0 .5 0 .7 0 6.7-5.1 10.8-10.3 10.8-2 0-3.9-.6-5.5-1.7.3 0 .6.1 1 .1 1.7 0 3.2-.6 4.4-1.6-1.6 0-2.9-1.1-3.4-2.5.2.1.5.1.8.1.3 0 .6 0 .8-.1-1.7-.3-3-1.8-3-3.6v-.1c.5.3 1 .5 1.6.5-1-.7-1.6-1.8-1.6-3.1 0-.7.2-1.4.5-2 1.9 2.4 4.8 4 8 4.1-.1-.3-.1-.6-.1-.9 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.1.4 2.8 1.2Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 6.5h16A1.5 1.5 0 0 1 21.5 8v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Z" />
      <path d="m4 8 8 5 8-5" />
    </svg>
  );
}

export default App;
