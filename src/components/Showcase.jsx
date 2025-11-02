import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const sectionRef = useRef(null);
  const headlineRef = useRef(null);
  const panelsRef = useRef([]);
  panelsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headlineRef.current, {
        y: 30,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%'
        }
      });

      panelsRef.current.forEach((panel, i) => {
        gsap.fromTo(
          panel,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: panel,
              start: 'top 80%'
            }
          }
        );
      });

      // Subtle parallax background grid
      gsap.to('#grid-bg', {
        backgroundPositionY: '200px',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const setPanelRef = (el) => {
    if (el && !panelsRef.current.includes(el)) panelsRef.current.push(el);
  };

  return (
    <section
      id="showcase"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-black py-24 text-white"
    >
      <div
        id="grid-bg"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(56,189,248,0.12)_1px,transparent_0)] [background-size:24px_24px]"
      />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-14 text-center">
          <h2 ref={headlineRef} className="text-3xl font-semibold md:text-5xl">
            Scroll To Ignite
          </h2>
          <p className="mt-3 text-white/70 md:text-lg">A cinematic showcase that moves with you.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div
            ref={setPanelRef}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-2xl" />
            <h3 className="text-lg font-semibold">Pinned Traction</h3>
            <p className="mt-2 text-sm text-white/70">
              Enhanced grip algorithms that adapt in milliseconds, pinning you to the line.
            </p>
          </div>

          <div
            ref={setPanelRef}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-2xl" />
            <h3 className="text-lg font-semibold">Tunnel Vision</h3>
            <p className="mt-2 text-sm text-white/70">
              Aero-optimized channels carve the air, keeping your path razor sharp.
            </p>
          </div>

          <div
            ref={setPanelRef}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          >
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
            <h3 className="text-lg font-semibold">Neon Flow</h3>
            <p className="mt-2 text-sm text-white/70">
              Programmable light signatures that pulse with your speed — a statement in motion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
