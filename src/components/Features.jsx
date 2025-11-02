import { useEffect, useRef } from 'react';
import { Bolt, Gauge, Shield, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Bolt,
    title: 'Instant Torque',
    desc: 'Immediate response with electric precision tuned for city sprints and highway pulls.'
  },
  {
    icon: Gauge,
    title: 'Adaptive Dynamics',
    desc: 'Intelligent suspension and aero systems keep you planted through every curve.'
  },
  {
    icon: Shield,
    title: 'Advanced Safety',
    desc: '360° awareness, active avoidance, and next-gen driver assistance keep you protected.'
  },
  {
    icon: Sparkles,
    title: 'Neon Aesthetics',
    desc: 'Translucent bodywork with programmable neon accents for a bold, futuristic presence.'
  }
];

export default function Features() {
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardsRef.current, {
        y: 50,
        autoAlpha: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '#features',
          start: 'top 75%'
        }
      });
    });
    return () => ctx.revert();
  }, []);

  const setCardRef = (el) => {
    if (el && !cardsRef.current.includes(el)) cardsRef.current.push(el);
  };

  return (
    <section id="features" className="relative w-full bg-gradient-to-b from-black via-[#0b0b12] to-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">Engineered for the Night</h2>
          <p className="mt-3 text-white/70 md:text-lg">Performance, control, and presence — all tuned for a seamless flow.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              ref={setCardRef}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 blur-2xl transition group-hover:from-cyan-500/30 group-hover:to-fuchsia-500/30" />
              <f.icon className="mb-4 h-7 w-7 text-cyan-400" />
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
