export default function Footer() {
  return (
    <footer className="w-full bg-black py-10 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center md:flex-row md:text-left">
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Neon Drive. All rights reserved.</p>
        <div className="flex items-center gap-4 text-sm text-white/70">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#showcase">Showcase</a>
          <a className="hover:text-white" href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
