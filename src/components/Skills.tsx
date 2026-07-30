import { Reveal } from './Reveal'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    items: ['Java', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frameworks & Libraries',
    items: [
      'Spring Boot',
      'Spring MVC',
      'Hibernate',
      'JPA',
      'MyBatis',
      'Node.js',
      'Express.js',
      'Vue.js',
      'React',
    ],
  },
  {
    label: 'Data & Cloud',
    items: ['MySQL', 'PostgreSQL', 'Oracle SQL Server', 'Azure', 'Heroku', 'Kafka'],
  },
  {
    label: 'Practices & Tools',
    items: [
      'Microservices',
      'OOP',
      'Design Patterns',
      'SOLID',
      'TDD',
      'REST / JWT',
      'Docker',
      'Git',
      'Jenkins',
    ],
  },
  {
    label: 'AI & Agentic Engineering',
    items: [
      'Claude Code',
      'GitHub Copilot',
      'Model Context Protocol (MCP)',
      'AI Agents',
      'Custom Skills & Commands',
      'Vibe Coding',
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Skills
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.label} delay={i * 80}>
              <div>
                <h3 className="font-display text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {group.label}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
