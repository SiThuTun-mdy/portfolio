import { useEffect, useMemo, useState } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const initEngine = async (engine: Engine): Promise<void> => {
  await loadSlim(engine)
}

type Theme = 'light' | 'dark'

function getTheme(): Theme {
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(getTheme)

  useEffect(() => {
    const observer = new MutationObserver(() => setTheme(getTheme()))
    observer.observe(document.documentElement, { attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return theme
}

const PALETTES: Record<
  Theme,
  { particleColors: string[]; linkColor: string; linkOpacity: number; opacity: { min: number; max: number } }
> = {
  dark: {
    particleColors: ['#2c8a9e', '#1a4a6e', '#5cbdb9'],
    linkColor: '#2c8a9e',
    linkOpacity: 0.25,
    opacity: { min: 0.15, max: 0.5 },
  },
  light: {
    particleColors: ['#1a4a6e', '#0f324a', '#2c8a9e'],
    linkColor: '#1a4a6e',
    linkOpacity: 0.35,
    opacity: { min: 0.35, max: 0.7 },
  },
}

export function ParticlesBackground() {
  const theme = useTheme()
  const palette = PALETTES[theme]

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: { value: 'transparent' } },
      particles: {
        number: {
          value: 45,
          density: { enable: true, width: 1440, height: 900 },
        },
        color: { value: palette.particleColors },
        links: {
          enable: true,
          distance: 140,
          color: palette.linkColor,
          opacity: palette.linkOpacity,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'out' },
        },
        opacity: { value: palette.opacity },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: { onHover: { enable: false }, onClick: { enable: false } },
      },
    }),
    [palette],
  )

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden="true">
      <ParticlesProvider init={initEngine}>
        <Particles
          id="tsparticles-background"
          options={options}
          style={{ width: '100%', height: '100%' }}
        />
      </ParticlesProvider>
    </div>
  )
}
