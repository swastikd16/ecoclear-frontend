function ProponentDashboard() {
  const dashboardNavItems = [
    { label: "Dashboard", icon: <DashboardIcon />, active: true },
    { label: "New App", icon: <PlusCircleIcon /> },
    { label: "My Apps", icon: <DocumentIcon /> },
    { label: "Payments", icon: <PaymentsIcon /> },
    { label: "Tracking", icon: <PinIcon /> },
  ];

  const dashboardStats = [
    { label: "Draft", value: "12", tone: "neutral", tag: "Active" },
    { label: "Submitted", value: "45", tone: "blue", tag: "Pending" },
    { label: "Under Review", value: "08", tone: "amber", tag: "Reviewing" },
    { label: "Deficiency", value: "03", tone: "red", tag: "Critical" },
    { label: "Finalized", value: "29", tone: "green", tag: "Success" },
  ];

  const dashboardApplications = [
    {
      id: "EC-2023-0842",
      name: "Solar Farm Expansion Phase II",
      category: "Renewable Energy",
      status: "Under Review",
      date: "Oct 12, 2023",
    },
    {
      id: "EC-2023-0711",
      name: "Wetland Remediation Plan",
      category: "Conservation",
      status: "Deficiency",
      date: "Sep 28, 2023",
    },
    {
      id: "EC-2023-0659",
      name: "Industrial Waste Management",
      category: "Waste Systems",
      status: "Finalized",
      date: "Sep 15, 2023",
    },
    {
      id: "EC-2023-0544",
      name: "Urban Greenery Project",
      category: "Urban Planning",
      status: "Submitted",
      date: "Aug 30, 2023",
    },
    {
      id: "EC-2023-0422",
      name: "Coastal Wind Turbine Alpha",
      category: "Renewable Energy",
      status: "Draft",
      date: "Not Submitted",
    },
  ];

  const trendBars = [
    { label: "Mar", height: "40%" },
    { label: "Apr", height: "65%" },
    { label: "May", height: "35%" },
    { label: "Jun", height: "80%" },
    { label: "Jul", height: "55%" },
    { label: "Aug", height: "95%" },
    { label: "Sep", height: "50%" },
    { label: "Oct", height: "75%" },
  ];

  return (
    <div className="dashboard-root">
      <div className="dashboard-shell">
        <aside className="dashboard-sidebar">
          <a className="dashboard-brand" href="/" aria-label="EcoClear home">
            <span className="dashboard-brand-mark">
              <LeafMark />
            </span>
            <span>EcoClear</span>
          </a>

          <nav className="dashboard-nav" aria-label="Sidebar">
            {dashboardNavItems.map((item) => (
              <a
                className={`dashboard-nav-item${item.active ? " is-active" : ""}`}
                href="#"
                key={item.label}
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="dashboard-profile">
            <div className="dashboard-avatar" aria-hidden="true">
              <span />
            </div>
            <div>
              <strong>Alex Rivera</strong>
              <span>Proponent Admin</span>
            </div>
          </div>
        </aside>

        <main className="dashboard-main">
          <header className="dashboard-topbar">
            <a className="dashboard-mobile-brand" href="/">
              <span className="dashboard-brand-mark">
                <LeafMark />
              </span>
              <span>EcoClear</span>
            </a>

            <label className="dashboard-search" aria-label="Search">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search applications, invoices..."
              />
            </label>

            <div className="dashboard-toolbar">
              <button className="dashboard-icon-button" type="button">
                <BellIcon />
                <i />
              </button>
              <button className="dashboard-icon-button" type="button">
                <SettingsIcon />
              </button>
              <span className="dashboard-divider" />
              <a className="dashboard-primary-button" href="#new-application">
                <PlusIcon />
                <span>New Application</span>
              </a>
            </div>
          </header>

          <div className="dashboard-content">
            <section className="dashboard-heading">
              <div>
                <h1>Dashboard</h1>
                <p>
                  Welcome back. Monitoring your environmental compliance status.
                </p>
              </div>
              <span>Last updated: Oct 24, 2023 at 09:42 AM</span>
            </section>

            <section className="dashboard-stats" aria-label="Application stats">
              {dashboardStats.map((stat) => (
                <article className="stat-tile" key={stat.label}>
                  <p>{stat.label}</p>
                  <div className="stat-tile-row">
                    <strong className={stat.tone === "red" ? "is-alert" : ""}>
                      {stat.value}
                    </strong>
                    <span className={`status-chip is-${stat.tone}`}>{stat.tag}</span>
                  </div>
                </article>
              ))}
            </section>

            <section className="dashboard-panel">
              <div className="dashboard-panel-header">
                <h2>Recent Applications</h2>
                <div className="dashboard-panel-actions">
                  <button className="dashboard-ghost-button" type="button">
                    <FilterIcon />
                    <span>Filter</span>
                  </button>
                  <button className="dashboard-ghost-button" type="button">
                    <span>Export</span>
                  </button>
                </div>
              </div>

              <div className="dashboard-table-wrap">
                <table className="dashboard-table">
                  <thead>
                    <tr>
                      <th>Application ID</th>
                      <th>Project Name</th>
                      <th>Category</th>
                      <th>Status</th>
                      <th>Date Submitted</th>
                      <th className="align-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dashboardApplications.map((application) => (
                      <tr key={application.id}>
                        <td className="app-id">{application.id}</td>
                        <td className="app-name">{application.name}</td>
                        <td className="app-category">{application.category}</td>
                        <td>
                          <span
                            className={`status-chip is-${slugify(
                              application.status,
                            )}`}
                          >
                            {application.status}
                          </span>
                        </td>
                        <td className="app-category">{application.date}</td>
                        <td className="align-right">
                          <button className="table-action" type="button">
                            <MoreIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="dashboard-panel-footer">
                <p>Showing 5 of 107 applications</p>
                <div className="pager">
                  <button type="button" disabled>
                    Previous
                  </button>
                  <button type="button">Next</button>
                </div>
              </div>
            </section>

            <section className="dashboard-secondary-grid">
              <article className="dashboard-panel chart-panel">
                <h2>Application Trends</h2>
                <div className="trend-chart" aria-hidden="true">
                  {trendBars.map((bar, index) => (
                    <div className="trend-column" key={bar.label}>
                      <span
                        className={`trend-bar trend-bar-${index + 1}`}
                        style={{ height: bar.height }}
                      />
                      <small>{bar.label}</small>
                    </div>
                  ))}
                </div>
              </article>

              <article className="score-card">
                <div className="score-card-content">
                  <h2>Environmental Compliance Score</h2>
                  <p>
                    Your organization is currently performing better than 84% of
                    similar proponents.
                  </p>
                  <strong>94%</strong>
                  <div className="score-meter" aria-hidden="true">
                    <span />
                  </div>
                  <small>
                    <InfoIcon />
                    Based on your finalized submissions
                  </small>
                </div>
              </article>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function LeafMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 14.5C5 8.75 9.36 4.47 15.8 4c-.52 2.8-2.22 5.58-4.92 7.76C8.67 13.56 6.8 14.2 5 14.5Zm4.2 5.3C5.48 18.2 3 14.63 3 10.54c3.71-.14 6.68-1.28 9.22-3.44 2.53-2.17 4.26-4.68 5.31-7.1C20.93 1.3 23 5.05 23 9.3 23 16.32 17.42 22 10.54 22c-.46 0-.91-.07-1.34-.2Z" />
    </svg>
  );
}

function DashboardIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect height="8" rx="1.5" width="8" x="3" y="3" />
      <rect height="8" rx="1.5" width="8" x="13" y="3" />
      <rect height="8" rx="1.5" width="8" x="3" y="13" />
      <rect height="8" rx="1.5" width="8" x="13" y="13" />
    </svg>
  );
}

function PlusCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.5h7l4 4v13H7Z" />
      <path d="M14 3.5v4h4M9.5 12h5M9.5 15.5h5" />
    </svg>
  );
}

function PaymentsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect height="12" rx="2.2" width="18" x="3" y="6" />
      <path d="M3 10h18M7.5 14.5h3" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.2" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 16.5h11l-1.2-1.6V10a4.8 4.8 0 1 0-9.6 0v4.9Z" />
      <path d="M10 18.5a2 2 0 0 0 4 0" />
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3.5v2.2M12 18.3v2.2M20.5 12h-2.2M5.7 12H3.5M18.2 5.8l-1.6 1.6M7.4 16.6l-1.6 1.6M18.2 18.2l-1.6-1.6M7.4 7.4 5.8 5.8" />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4 7h16M7.5 12h9M10.5 17h3" />
    </svg>
  );
}

function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="6" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="18" cy="12" r="1.6" />
    </svg>
  );
}

function InfoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 10.5v4.5M12 7.8h.01" />
    </svg>
  );
}

export default ProponentDashboard;
