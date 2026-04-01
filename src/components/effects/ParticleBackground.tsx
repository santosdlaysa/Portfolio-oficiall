import { useState, useEffect } from 'react';
import Particles from '@tsparticles/react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

interface ParticleBackgroundProps {
  className?: string;
}

export function ParticleBackground({ className = '' }: ParticleBackgroundProps) {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const options: ISourceOptions = {
    fullScreen: false,
    fpsLimit: 60,
    particles: {
      number: {
        value: isMobile ? 30 : 60,
        density: {
          enable: true,
        },
      },
      color: {
        value: ['#a855f7', '#b44aff', '#ff00e5'],
      },
      links: {
        enable: true,
        color: '#a855f7',
        distance: 150,
        opacity: 0.15,
        width: 1,
      },
      move: {
        enable: true,
        speed: 0.8,
        direction: 'none' as const,
        random: true,
        straight: false,
        outModes: {
          default: 'bounce' as const,
        },
      },
      opacity: {
        value: { min: 0.2, max: 0.5 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false,
        },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      shape: {
        type: 'circle',
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: !isMobile,
          mode: 'grab',
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.3,
            color: '#a855f7',
          },
        },
      },
    },
    detectRetina: true,
  };

  if (!engineReady) return null;

  return (
    <Particles
      className={`absolute inset-0 ${className}`}
      options={options}
    />
  );
}
