import { motion } from 'motion/react';
import { MapPin, Target } from 'lucide-react';

interface HeroProps {
  showToast: (msg: string) => void;
}

export default function Hero({ showToast }: HeroProps) {
  return (
    <section id="hero" className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden">
      <div className="hero-left flex flex-col justify-center px-[7%] py-[120px] lg:pt-[120px] lg:pb-[80px] relative z-[2]">
        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="hero-eyebrow inline-flex items-center gap-2.5 text-gold text-[0.76rem] font-semibold tracking-[0.14em] uppercase mb-7"
        >
          <span className="w-8 h-px bg-gold" />
          Premier Photography Marketplace
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-serif text-[clamp(2.9rem,5.2vw,5rem)] font-bold leading-[1.04] tracking-tight mb-6.5"
        >
          Find the <em className="italic text-gold not-italic">Perfect</em><br />
          Photographer<br />
          for <span className="text-azure">Every Moment</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="text-[1.03rem] text-ash leading-[1.78] max-w-[420px] mb-11"
        >
          Discover world-class photographers in your city. Browse stunning portfolios, compare packages, and book directly — zero commission, pure talent.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="bg-surface border border-rim-2 rounded-xl overflow-hidden max-w-[520px] shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
        >
          <div className="flex flex-col sm:flex-row">
            <div className="flex items-center gap-2.5 p-4 flex-1 border-b sm:border-b-0 sm:border-r border-rim">
              <MapPin size={18} className="text-ash" />
              <select className="bg-transparent border-none outline-none font-sans text-[0.9rem] text-snow w-full cursor-none">
                <option value="" className="bg-ink-3">Location</option>
                <option className="bg-ink-3">Accra, Ghana</option>
                <option className="bg-ink-3">Lagos, Nigeria</option>
                <option className="bg-ink-3">Nairobi, Kenya</option>
                <option className="bg-ink-3">Cape Town, SA</option>
                <option className="bg-ink-3">London, UK</option>
                <option className="bg-ink-3">New York, US</option>
              </select>
            </div>
            <div className="flex items-center gap-2.5 p-4 flex-[1.3]">
              <Target size={18} className="text-ash" />
              <input 
                type="text" 
                placeholder="Wedding, Fashion, Events…" 
                className="bg-transparent border-none outline-none font-sans text-[0.9rem] text-snow w-full placeholder:text-ash"
              />
            </div>
            <button 
              onClick={() => showToast('🔍 Searching photographers...')}
              className="m-2 bg-gold text-ink rounded-lg px-5 py-3 font-bold text-[0.86rem] hover:bg-[#ffd55a] transition-all duration-200 active:scale-95 cursor-none"
            >
              Search
            </button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="flex gap-8 mt-10"
        >
          {[
            { num: '12K+', label: 'Photographers' },
            { num: '48K+', label: 'Projects' },
            { num: '4.9★', label: 'Avg. Rating' },
          ].map((stat, i) => (
            <div key={i}>
              <span className="font-serif text-[2.2rem] font-bold leading-none text-gold block">{stat.num}</span>
              <span className="text-[0.78rem] text-ash tracking-[0.04em]">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="hero-right hidden lg:block relative overflow-hidden"
      >
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[3px]">
          <div className="col-span-2 row-span-2 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=900&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            />
          </div>
          <div className="overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            />
          </div>
          <div className="row-span-2 overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            />
          </div>
          <div className="overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            />
          </div>
          <div className="overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=400&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
            />
          </div>
          {/* Overlay Gradients */}
          <div className="absolute inset-0 z-[2] pointer-events-none bg-[linear-gradient(90deg,var(--color-ink)_0%,transparent_18%),linear-gradient(180deg,transparent_50%,rgba(9,9,12,0.45)_100%)]" />
        </div>

        {/* Floating Chips */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-7 z-10 bg-ink-2/88 backdrop-blur-2xl border border-rim-2 rounded-xl p-3.5 flex items-center gap-3 shadow-xl"
        >
          <img src="https://i.pravatar.cc/76?img=12" className="w-9 h-9 rounded-full border-2 border-gold" />
          <div>
            <div className="font-bold text-[0.86rem] leading-tight">Kofi Ansah</div>
            <div className="text-gold text-[0.8rem] tracking-tight">★★★★★</div>
            <div className="text-[0.73rem] text-ash">Wedding · Accra</div>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, delay: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-28 right-7 z-10 bg-ink-2/88 backdrop-blur-2xl border border-rim-2 rounded-xl p-3.5 flex items-center gap-3 shadow-xl"
        >
          <img src="https://i.pravatar.cc/76?img=47" className="w-9 h-9 rounded-full border-2 border-gold" />
          <div>
            <div className="font-bold text-[0.86rem] leading-tight">Ama Boateng</div>
            <div className="text-gold text-[0.8rem] tracking-tight">★★★★★</div>
            <div className="text-[0.73rem] text-ash">Fashion · Lagos</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
