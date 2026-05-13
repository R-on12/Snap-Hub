export default function CTA({ onAuth }: { onAuth: () => void }) {
  return (
    <section id="cta" className="relative overflow-hidden bg-ink-2 py-[120px] px-[7%] text-center">
      {/* Background with low opacity */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&auto=format&fit=crop')] bg-cover bg-center opacity-[0.07]" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(242,192,65,0.08)_0%,transparent_70%)]" />

      <div className="relative z-[1] max-w-[680px] mx-auto">
        <div className="flex items-center justify-center gap-2.5 text-[0.73rem] font-semibold text-gold tracking-[0.14em] uppercase mb-5 before:content-[''] before:w-7 before:h-px before:bg-gold after:content-[''] after:w-7 after:h-px after:bg-gold">
          Join Today
        </div>
        <h2 className="font-serif text-[clamp(2.2rem,4.5vw,3.8rem)] font-bold leading-[1.1] tracking-tight mb-4.5">
          Start Showcasing Your<br />
          <em className="italic text-gold not-italic">Work to the World</em>
        </h2>
        <p className="text-ash text-lg leading-[1.75] mb-11">
          Join thousands of photographers growing their business on SnapHub. Plans from just $9/month — your next great client is already searching for you.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <button 
            onClick={onAuth}
            className="bg-gold text-ink px-11 py-4.5 rounded-full text-lg font-bold hover:bg-[#ffd55a] shadow-[0_0_0_6px_rgba(242,192,65,0.15),0_12px_36px_rgba(242,192,65,0.3)] transition-all duration-250 translate-y-0 hover:-translate-y-0.5 cursor-none"
          >
            Join as a Photographer
          </button>
          <button 
            onClick={() => document.querySelector('#browse')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-11 py-4.5 rounded-full border border-rim-2 text-ash font-bold hover:text-snow hover:border-dim transition-all duration-250 cursor-none"
          >
            Browse Photographers
          </button>
        </div>
        
        <p className="mt-5 text-[0.78rem] text-dim flex items-center justify-center gap-1.5">
          ✓ 14-day free trial &nbsp;·&nbsp; ✓ No credit card required &nbsp;·&nbsp; ✓ Cancel anytime
        </p>
      </div>
    </section>
  );
}
