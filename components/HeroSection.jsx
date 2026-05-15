export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="relative z-10 text-center max-w-5xl px-6">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-orange-500/20 bg-orange-500/10 mb-8">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
          AI Powered Cyber Intelligence
        </div>

        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
          FAKE NEWS
          <span className="block text-orange-400">DETECTION</span>
        </h1>

        <p className="mt-8 text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          Advanced misinformation intelligence platform powered by AI.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="px-8 py-4 rounded-full bg-orange-500 hover:scale-105 transition-all font-bold text-black">
            Start Analysis
          </button>

          <button className="px-8 py-4 rounded-full border border-white/10 hover:bg-white/10 transition-all">
            View Dashboard
          </button>
        </div>
      </div>
    </section>
  );
}
