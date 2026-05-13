import { useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const PHOTOGRAPHERS = [
  { id: 1, n: 'Kofi Ansah', loc: 'Accra, Ghana', cats: ['wedding', 'fashion'], tags: ['Wedding', 'Fashion', 'Portrait'], price: '$350', rating: '4.9', rev: 128, badge: 'bg', bl: 'Featured', cover: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=700&auto=format&fit=crop', ava: 'https://i.pravatar.cc/88?img=12' },
  { id: 2, n: 'Ama Boateng', loc: 'Kumasi, Ghana', cats: ['events', 'portrait'], tags: ['Events', 'Portrait', 'Editorial'], price: '$200', rating: '4.8', rev: 94, badge: 'br', bl: 'Verified', cover: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=700&auto=format&fit=crop', ava: 'https://i.pravatar.cc/88?img=47' },
  { id: 3, n: 'Kwame Ofosu', loc: 'Lagos, Nigeria', cats: ['fashion', 'product'], tags: ['Fashion', 'Commercial', 'Product'], price: '$280', rating: '4.7', rev: 76, badge: 'bb', bl: 'Pro', cover: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&auto=format&fit=crop', ava: 'https://i.pravatar.cc/88?img=15' },
  { id: 4, n: 'Nadia Owusu', loc: 'Nairobi, Kenya', cats: ['portrait', 'fashion'], tags: ['Portrait', 'Lifestyle', 'Fashion'], price: '$180', rating: '5.0', rev: 52, badge: 'bg', bl: 'Rising Star', cover: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&auto=format&fit=crop', ava: 'https://i.pravatar.cc/88?img=33' },
  { id: 5, n: 'James Mensah', loc: 'Cape Town, SA', cats: ['wedding', 'events'], tags: ['Wedding', 'Events', 'Drone'], price: '$450', rating: '4.9', rev: 210, badge: 'bg', bl: 'Top Rated', cover: 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=700&auto=format&fit=crop', ava: 'https://i.pravatar.cc/88?img=57' },
  { id: 6, n: 'Efua Darko', loc: 'Accra, Ghana', cats: ['product', 'events'], tags: ['Product', 'Brand', 'Lifestyle'], price: '$160', rating: '4.6', rev: 38, badge: 'br', bl: 'New', cover: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=700&auto=format&fit=crop', ava: 'https://i.pravatar.cc/88?img=23' },
];

const CATS = [
  { id: 'all', label: 'All', emoji: '' },
  { id: 'wedding', label: 'Wedding', emoji: '💍' },
  { id: 'fashion', label: 'Fashion', emoji: '👗' },
  { id: 'events', label: 'Events', emoji: '🎉' },
  { id: 'product', label: 'Product', emoji: '📦' },
  { id: 'portrait', label: 'Portrait', emoji: '🧍' },
];

interface FeaturedPhotographersProps {
  showToast: (msg: string) => void;
}

export default function FeaturedPhotographers({ showToast }: FeaturedPhotographersProps) {
  const [activeCat, setActiveCat] = useState('all');

  const filtered = activeCat === 'all' 
    ? PHOTOGRAPHERS 
    : PHOTOGRAPHERS.filter(p => p.cats.includes(activeCat));

  return (
    <section id="browse" className="bg-ink-2 px-[7%] py-[108px]">
      <div className="flex flex-wrap justify-between items-end gap-5 mb-13">
        <div>
          <div className="flex items-center gap-2.5 text-[0.73rem] font-semibold text-gold tracking-[0.14em] uppercase mb-3.5 before:content-[''] before:w-7 before:h-px before:bg-gold">
            Top Talent
          </div>
          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-tight mb-3">
            Featured <em className="italic text-gold not-italic">Photographers</em>
          </h2>
          <p className="text-ash max-w-[440px] leading-[1.75] text-[0.92rem]">
            Handpicked professionals with verified portfolios and outstanding client reviews.
          </p>
        </div>
        <a href="#" className="flex items-center gap-1.5 px-5.5 py-2.5 rounded-full border border-rim-2 text-ash hover:text-snow hover:border-dim transition-all duration-250 uppercase text-[0.78rem] font-semibold tracking-wider group cursor-none">
          View all <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="flex flex-wrap gap-2 mb-11">
        {CATS.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveCat(cat.id)}
            className={`px-5.5 py-2 rounded-full text-[0.82rem] font-semibold border transition-all duration-220 cursor-none ${
              activeCat === cat.id 
                ? 'bg-gold text-ink border-gold' 
                : 'bg-transparent text-ash border-rim-2 hover:bg-gold hover:text-ink hover:border-gold'
            }`}
          >
            {cat.emoji} {cat.label}
          </button>
        ))}
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map(p => (
            <motion.div
              layout
              key={p.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35 }}
              className="bg-surface border border-rim rounded-xl overflow-hidden transition-all duration-350 hover:-translate-y-2 hover:border-rim-2 hover:shadow-[0_28px_70px_rgba(0,0,0,0.55)] group cursor-none"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={p.cover} 
                  alt={p.n} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className={`absolute top-3.5 left-3.5 z-[3] text-[0.68rem] font-extrabold tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-full ${
                  p.badge === 'bg' ? 'bg-gold text-ink' : p.badge === 'bb' ? 'bg-azure text-white' : 'bg-surface text-ash border border-rim-2'
                }`}>
                  {p.bl}
                </span>
                
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute bottom-4 left-0 right-0 z-[3] flex justify-center gap-2.5 opacity-0 translate-y-2.5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  <button 
                    onClick={() => showToast(`📬 Contacting ${p.n}...`)}
                    className="px-5 py-2 rounded-full bg-gold text-ink text-[0.77rem] font-bold hover:scale-105 transition-transform cursor-none"
                  >
                    Contact
                  </button>
                  <button className="px-5 py-2 rounded-full bg-white/12 backdrop-blur-md border border-white/20 text-white text-[0.77rem] font-bold hover:scale-105 transition-transform cursor-none">
                    Portfolio
                  </button>
                </div>
              </div>

              <div className="p-5.5">
                <div className="flex items-center gap-3 mb-3.5">
                  <img src={p.ava} className="w-11 h-11 rounded-full border-2 border-gold flex-shrink-0" />
                  <div>
                    <div className="font-bold text-[0.98rem] leading-tight">{p.n}</div>
                    <div className="text-[0.78rem] text-ash mt-0.5">📍 {p.loc}</div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 mb-3.5">
                  {p.tags.map(t => (
                    <span key={t} className="bg-ink-3 border border-rim text-ash text-[0.7rem] font-medium px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-3.5 border-top border-rim">
                  <div className="font-bold text-[0.93rem]">From {p.price} <small className="text-[0.74rem] text-ash font-normal">/ session</small></div>
                  <div className="flex items-center gap-1">
                    <Star size={13} className="text-gold fill-gold" />
                    <span className="text-[0.82rem] font-medium text-snow">{p.rating}</span>
                    <span className="text-[0.76rem] text-ash">({p.rev})</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
