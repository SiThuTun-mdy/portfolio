import { Reveal } from './Reveal'

const PROJECTS = [
  {
    title: 'Dr Note — Electronic Health Record System',
    description:
      'A personal project giving small clinics and mid-size healthcare organizations a way to manage patient records, diagnoses, and prescriptions in one place, built end to end from database to UI.',
    tags: ['TypeScript', 'Nextjs', 'vercel', 'supabase', 'Python', 'PostgreSQL'],
    link: 'https://github.com/SiThuTun-mdy/Dr-Note',
    demo: 'https://dr-note-demo.vercel.app/',
  },
  {
    title: 'Bloomberg Integration — Midas Core Banking',
    description:
      'Built a Bloomberg-to-Midas integration from scratch at LBBW: analyzed requirements, designed the integration API, digested the Bloomberg source and Midas sink, and shaped the database and design patterns behind it. Deployed as a cloud-native, Azure-hosted microservice.',
    tags: ['Spring Boot', 'REST API', 'Azure', 'Microservices','Bloomberg API', 'Midas Core Banking'],
  },
  {
    title: 'TradeWeb — Singapore TradeNet Gateway',
    description:
      'A front-end service to TradeNet, Singapore’s government portal for import and export permits, at GETS Asia. Delivered new features and system integrations as part of a full-stack team supporting live customers.',
    tags: ['Full Stack', 'System Integration', 'RESTful'],
  },
  {
    title: 'NUP Reporting Engine — Q-System',
    description:
      'A Vue-based reporting engine built for the National University Polyclinics project at ATT Systems, generating statistical reports for hospitals, clinics, and finance teams, backed by a database tuned for significantly faster response times.',
    tags: ['Vue.js', 'API Design', 'Database Optimization', 'Spring Boot', 'MS SQL Server'],
  },
  {
    title: 'Payment Gateway & Bill Collection Platform',
    description:
      'A nationwide FinTech platform at True Money Myanmar handling payment gateway processing, foreign money transfer, and merchant/utility bill collection, designed with Clean Architecture and Domain-Driven Design.',
    tags: ['Clean Architecture', 'DDD', 'Java', 'Spring Boot', 'PostgreSQL', 'JasperReports'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Projects
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-5">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={i * 90}>
              <article className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
                <h3 className="font-display text-lg font-medium text-card-foreground transition-colors group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                {(project.link || project.demo) && (
                  <div className="mt-4 flex gap-4 text-sm font-medium">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        Source
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="text-primary underline-offset-4 hover:underline"
                      >
                        Live demo
                      </a>
                    )}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
