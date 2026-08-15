const projects = [
  {
    title: "Waymo LiDAR Semantic Segmentation",
    href: "https://github.com/TommySlavo/Waymo-3D-Semantic-Segmentation",
    date: "2026",
    description:
      "Built a modular training and evaluation system for semantic segmentation across point-cloud and range-image representations. With two teammates, I implemented and benchmarked six model backbones, developed the raw Waymo data pipeline, and created point-cloud visualizations for label and prediction verification.",
    links: [
      {
        label: "Code",
        href: "https://github.com/TommySlavo/Waymo-3D-Semantic-Segmentation",
      },
    ],
    tools: "PyTorch, Lightning, Open3D, Waymo Open Dataset",
  },
  {
    title: "Motion Planning with ARA*",
    date: "2026",
    description:
      "Designed and implemented ARA* from scratch to navigate three-dimensional environments with static and moving targets. The planner produces a fast initial path and improves it as computation time allows.",
    links: [],
    tools: "Python, graph search, 3-D planning",
  },
  {
    title: "Visual-Inertial SLAM",
    date: "2026",
    description:
      "Implemented a complete EKF SLAM pipeline: IMU-based pose prediction, stereo landmark updates, projection geometry derived from calibration matrices, and joint pose-landmark estimation with sparse covariance matrices.",
    links: [],
    tools: "Python, SciPy Sparse, EKF, stereo vision",
  },
  {
    title: "3-D Camera Orientation Tracking & Panorama Recreation",
    date: "2026",
    description:
      "Estimated camera orientation from IMU measurements by optimizing unit-quaternion trajectories with projected gradient descent, then used those estimates to reconstruct panoramic images from synchronized RGB frames.",
    links: [],
    tools: "PyTorch, quaternions, IMU, computer vision",
  },
];

const experience = [
  {
    organization: "INCEPTION Lab",
    role: "Research Intern",
    location: "San Diego, CA",
    period: "Apr 2026 — Present",
    description:
      "Develop Python simulations for control-theory research in nonlinear and hybrid dynamical systems. My current work studies multi-agent systems in Nash equilibrium-seeking deceptive games, with an emphasis on turning novel mathematical results into interpretable simulations and animations.",
  },
  {
    organization: "Build Group",
    role: "Estimator Intern",
    location: "San Francisco, CA",
    period: "Jun 2025 — Sep 2025",
    description:
      "Developed predictive construction-cost models and automated ETL pipelines using regression, Excel VBA, Power Query, and third-party APIs. I also built custom interfaces and data transformations that supported company-wide adoption of new estimating software.",
  },
  {
    organization: "UCLA",
    role: "Data Structures & Algorithms Learning Assistant",
    location: "Los Angeles, CA",
    period: "Dec 2023 — Jun 2024",
    description:
      "Led weekly discussion sections, office hours, project support, and exam-review workshops for UCLA’s Data Structures and Algorithms course.",
  },
];

export default function Home() {
  return (
    <>
      <main className="page-shell">
        <header className="profile-header">
          <img
            className="profile-photo"
            src="/tom-slavonia.jpg"
            alt="Tom Slavonia standing near the California coast"
            width="460"
            height="460"
          />
          <div>
            <h1>Tom Slavonia</h1>
            <p className="subtitle">M.S. Electrical Engineering, UC San Diego</p>
            <nav className="profile-links" aria-label="Contact and profile links">
              <a href="mailto:slavoniatom@gmail.com">Email</a>
              <span>/</span>
              <a
                href="https://github.com/TommySlavo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              <span>/</span>
              <a
                href="https://www.linkedin.com/in/thomas-slavonia-bb472a195"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
              <span>/</span>
              <a
                href="/thomas-slavonia-resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Résumé
              </a>
            </nav>
          </div>
        </header>

        <section className="intro" aria-labelledby="about-heading">
          <h2 className="visually-hidden" id="about-heading">
            About
          </h2>
          <p>
            I am an electrical engineering graduate student at{" "}
            <a href="https://ucsd.edu/" target="_blank" rel="noreferrer">
              UC San Diego
            </a>{" "}
            working at the intersection of robotics, machine learning, and
            control. I am particularly interested in motion planning, state
            estimation, learned perception, and dynamical systems.
          </p>
          <p>
            At the{" "}
            <a
              href="https://inception.ucsd.edu/"
              target="_blank"
              rel="noreferrer"
            >
              INCEPTION Lab
            </a>
            , I translate recent control-theory research into Python simulations
            for nonlinear, hybrid, and multi-agent systems. Before UCSD, I
            earned a B.S. in Mathematics from UCLA, where I studied analysis,
            probability, numerical methods, graph theory, and machine learning.
          </p>
          <p>
            I enjoy work where mathematical ideas have to become clear,
            reliable software. I am currently interested in robotics, autonomy,
            machine learning, and research engineering opportunities. Feel free
            to reach out by email.
          </p>
        </section>

        <section className="content-section" aria-labelledby="projects-heading">
          <h2 id="projects-heading">Selected projects</h2>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project-year">{project.date}</div>
                <div>
                  <h3>
                    {project.href ? (
                      <a href={project.href} target="_blank" rel="noreferrer">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <p>{project.description}</p>
                  <p className="project-tools">{project.tools}</p>
                  {project.links.length > 0 && (
                    <div className="item-links">
                      {project.links.map((link) => (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          key={link.label}
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
          <p className="section-note">
            Additional code and coursework are available on{" "}
            <a
              href="https://github.com/TommySlavo"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </section>

        <section className="content-section" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Experience</h2>
          <div className="experience-list">
            {experience.map((item) => (
              <article className="experience-item" key={`${item.organization}-${item.role}`}>
                <div className="experience-meta">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
                <div>
                  <h3>{item.role}</h3>
                  <p className="organization">{item.organization}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section" aria-labelledby="education-heading">
          <h2 id="education-heading">Education and technical interests</h2>
          <div className="education-grid">
            <div>
              <h3>University of California, San Diego</h3>
              <p>M.S. Electrical Engineering, expected June 2027</p>
              <p className="quiet">
                Planning and Learning in Robotics, Linear Systems, Statistical
                Learning Theory, Sensing and Estimation in Robotics
              </p>
            </div>
            <div>
              <h3>University of California, Los Angeles</h3>
              <p>B.S. Mathematics, June 2024</p>
              <p className="quiet">
                Probability, Graph Theory, Machine Learning, Algorithms,
                Numerical Methods, Real and Complex Analysis
              </p>
            </div>
          </div>
          <div className="skills">
            <p>
              <strong>Languages:</strong> Python, C++, Lua, Bash
            </p>
            <p>
              <strong>Libraries:</strong> PyTorch, NumPy, SciPy, Pandas,
              Scikit-learn, Matplotlib, CasADi
            </p>
            <p>
              <strong>Tools:</strong> Git, Neovim, LaTeX, Excel VBA, Power
              Query, API integration
            </p>
          </div>
        </section>

        <section className="contact-section" aria-labelledby="contact-heading">
          <h2 id="contact-heading">Contact</h2>
          <p>
            You are welcome to contact me about research or engineering
            opportunities. My email is{" "}
            <a href="mailto:slavoniatom@gmail.com">slavoniatom@gmail.com</a>.
          </p>
        </section>

        <footer>
          <p>© 2026 Tom Slavonia</p>
          <p>
            <a href="https://github.com/TommySlavo">GitHub</a> ·{" "}
            <a href="https://www.linkedin.com/in/thomas-slavonia-bb472a195">
              LinkedIn
            </a>
          </p>
        </footer>
      </main>
    </>
  );
}
