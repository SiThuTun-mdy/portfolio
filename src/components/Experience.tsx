import { Reveal } from './Reveal'

const EXPERIENCE = [
  {
    role: 'Software Engineer',
    company: 'LBBW',
    period: '11/2023 — Present',
    description:
      'Developing microservices and third-party integrations for the Midas core banking system, hosted as cloud-native services on Azure. Built a Bloomberg integration from scratch (requirements, API design, DB and design patterns), revamped the Corona third-party integration with Spring Boot and TDD, and delivered a Jasper Reports advice-generation service for ECC advices and confirmations.',
  },
  {
    role: 'Full Stack Developer',
    company: 'GETS Asia Pte Ltd',
    period: '09/2021 — 09/2023',
    description:
      'Worked across multiple parallel projects, including TradeWeb, a front-end service to TradeNet (Singapore’s government trade portal) for import and export permit processing. Performed system integration, introduced new features, and supported customers directly.',
  },
  {
    role: 'Software Engineer',
    company: 'ATT Systems Group',
    period: '09/2018 — 09/2021',
    description:
      'Built the Q-System serving hospitals across Singapore plus CPF and HDB, with a focus on the National University Polyclinics (NUP) project end to end — requirements, UI, API, and database design. Designed a Vue reporting engine for hospital and clinic statistics, and optimized the database to significantly reduce application response time.',
  },
  {
    role: 'Software Engineer',
    company: 'True Money Myanmar',
    period: '05/2016 — 02/2018',
    description:
      'Designed and implemented projects for a nationwide payment gateway, foreign money transfer, and bill collection platform (merchant, water, and electric bills) using Clean Architecture and Domain-Driven Design. Owned system integration for new collection channels and provided direct customer support.',
  },
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 px-6 py-16">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Experience
          </h2>
        </Reveal>
        <div className="mt-10 space-y-10 border-l border-border pl-8">
          {EXPERIENCE.map((item, i) => (
            <Reveal key={item.company} delay={i * 90}>
              <div className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {item.role} &middot;{' '}
                    <span className="text-primary">{item.company}</span>
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
