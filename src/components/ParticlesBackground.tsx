import { useMemo } from 'react'
import Particles, { ParticlesProvider } from '@tsparticles/react'
import type { Engine, ISourceOptions } from '@tsparticles/engine'
import { loadSlim } from '@tsparticles/slim'

const initEngine = async (engine: Engine): Promise<void> => {
  await loadSlim(engine)
}

export function ParticlesBackground() {
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
        color: { value: ['#2c8a9e', '#1a4a6e', '#5cbdb9'] },
        links: {
          enable: true,
          distance: 140,
          color: '#2c8a9e',
          opacity: 0.25,
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
        opacity: { value: { min: 0.15, max: 0.5 } },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: { onHover: { enable: false }, onClick: { enable: false } },
      },
    }),
    [],
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
