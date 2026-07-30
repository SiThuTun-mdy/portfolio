import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 px-6 pb-20 pt-16 sm:pt-24">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="font-display text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Software Engineer
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            Hi, I&apos;m Si Thu Tun.
            <br />I build calm, reliable software.
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm a full-stack engineer with 8+ years building backend
            systems and integrations for banking and fintech platforms
            across Singapore and Myanmar &mdash; from Spring Boot
            microservices and API integrations to the Vue and React
            interfaces people actually use. Working with me, you&apos;ll get
            a pragmatic engineer who can take a problem from concept to
            production, and who will always prioritize reliability,
            maintainability, and clarity.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            Through{' '}
            <a
              href="https://vibecode.tours/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              Vibecode Tours
            </a>
            , I&apos;ve been exploring AI-assisted, &ldquo;vibe coding&rdquo;
            workflows &mdash; using Claude Code and GitHub Copilot with the
            Model Context Protocol (MCP), custom commands, agent workflows,
            and tailored skills to move faster from intent to
            production-ready code.


          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-transform hover:scale-[1.02] hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
            >
              Get in touch
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
