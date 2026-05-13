import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const CAT_DATA = [
  { id: 1, name: 'Wedding', icon: '💍', n: '1,240 photographers', img: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&auto=format&fit=crop', span: 'col-span-1 lg:col-span-1 lg:row-span-2 min-h-[480px]' },
  { id: 2, name: 'Events', icon: '🎉', n: '890 photographers', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop', span: 'min-h-[220px]' },
  { id: 3, name: 'Fashion', icon: '👗', n: '620 photographers', img: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&auto=format&fit=crop', span: 'min-h-[220px]' },
  { id: 4, name: 'Product', icon: '📦', n: '430 photographers', img: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=900&auto=format&fit=crop', span: 'col-span-1 lg:col-span-2 min-h-[220px]' },
];

export default function Categories() {
  return (
    <section id="categories" className="bg-ink px-[7%] py-[108px]">
      <div className="flex justify-between items-end mb-13">
        <div>
          <div className="flex items-center gap-2.5 text-[0.73rem] font-semibold text-gold tracking-[0.14em] uppercase mb-3.5 before:content-[''] before:w-7 before:h-px before:bg-gold">
            Explore
          </div>
          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-tight">
            Browse by <em className="italic text-gold not-italic">Category</em>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CAT_DATA.map((cat, i) => (
          <motion.div
            key={cat.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`relative rounded-xl overflow-hidden cursor-none group ${cat.span}`}
          >
            <img 
              src={cat.img} 
              alt={cat.name} 
              className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/15 to-transparent transition-colors group-hover:bg-gradient-to-t group-hover:from-azure/65 group-hover:via-ink/5" />
            
            <div className="absolute bottom-0 left-0 right-0 p-5.5 lg:p-6">
              <span className="text-[1.6rem] mb-1 block">{cat.icon}</span>
              <div className="font-serif text-[1.5rem] font-bold leading-tight">{cat.name}</div>
              <div className="text-[0.78rem] text-snow/55 mt-1">{cat.n}</div>
            </div>

            <div className="absolute top-4.5 right-4.5 w-9 h-9 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
              <ArrowRight size={16} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
