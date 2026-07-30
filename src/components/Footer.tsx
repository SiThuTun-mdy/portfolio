const LINKS = [
  { label: 'Email', href: 'mailto:sithutun293@gmail.com' },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/si-thu-tun-87b5b2b9',
  },
  { label: 'GitHub', href: 'https://github.com/sithutun-mdy' },
]

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border px-6 py-12">
      <div className="mx-auto flex max-w-3xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-sm font-medium text-foreground">
            Let&apos;s work together.
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Open to new opportunities and interesting problems.
          </p>
        </div>
        <div className="flex items-center gap-5">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="text-sm text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-3xl text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Si Thu Tun. All rights reserved.
      </p>
    </footer>
  )
}
