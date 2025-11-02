import { useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { ChevronDown } from 'lucide-react';
import { gsap } from 'gsap';

export default function Hero() {
  const rootRef = useRef(null);
  const headlineRef = useRef(null);
  const subRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(
      headlineRef.current,
      { autoAlpha: 0, y: 40 },
      { autoAlpha: 1, y: 0, duration: 1 }
    )
      .fromTo(
        subRef.current,
        { autoAlpha: 0, y: 20 },
        { autoAlpha: 1, y: 0, duration: 0.8 },
        '-=0.5'
      )
      .fromTo(
        ctaRef.current,
        { autoAlpha: 0, y: 10 },
        { autoAlpha: 1, y: 0, duration: 0.6 },
        '-=0.4'
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={rootRef} className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/sbnqZNZdJSLK7U2A/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <h1 ref={headlineRef} className="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Futuristic Drive
          <span className="block bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
            Feel the Neon Velocity
          </span>
        </h1>
        <p ref={subRef} className="mt-4 max-w-2xl text-balance text-base text-white/80 md:mt-6 md:text-lg">
          A stylized, translucent machine engineered for the night. Glide through a tunnel of light with precision and style.
        </p>
        <div ref={ctaRef} className="mt-8 flex items-center gap-3">
          <a
            href="#features"
            className="rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/20"
          >
            Explore Features
          </a>
          <a
            href="#showcase"
            className="rounded-full bg-gradient-to-r from-cyan-500 to-fuchsia-500 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-fuchsia-500/20 transition hover:from-cyan-400 hover:to-fuchsia-400"
          >
            See It Move
          </a>
        </div>

        <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-white/70">
          <ChevronDown />
        </div>
      </div>
    </section>
  );
}
