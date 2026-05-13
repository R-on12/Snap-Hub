import { motion } from 'motion/react';

const TESTIMONIALS = [
  { id: 1, feat: true, body: "I found our wedding photographer on SnapHub in under two hours. Scrolling through the portfolio was like visiting a gallery — the quality was extraordinary. Our day was captured better than I could have ever imagined. Every photo tells a story.", name: "Amara & Kwame Osei", role: "Married couple · Accra, Ghana", ava: "https://i.pravatar.cc/92?img=47" },
  { id: 2, feat: false, body: "As a fashion photographer, SnapHub has completely transformed my business. I get 5–8 quality inquiries each week now. The subscription pays for itself within the first booking.", name: "James Kwarteng", role: "Fashion Photographer · Lagos", ava: "https://i.pravatar.cc/92?img=12" },
  { id: 3, feat: false, body: "Booked a product photographer for our brand launch through SnapHub. Seamless from contact to final delivery. Will absolutely use again for all future campaigns.", name: "Nadia Mensah", role: "Brand Manager · Nairobi", ava: "https://i.pravatar.cc/92?img=33" },
  { id: 4, feat: false, body: "Within my first month on SnapHub I had three event bookings. The platform presents my work beautifully and connects me with serious clients who value quality.", name: "Emmanuel Darko", role: "Event Photographer · Cape Town", ava: "https://i.pravatar.cc/92?img=57" },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-ink px-[7%] py-[108px]">
      <div className="flex flex-wrap justify-between items-end gap-5 mb-13">
        <div>
          <div className="flex items-center gap-2.5 text-[0.73rem] font-semibold text-gold tracking-[0.14em] uppercase mb-3.5 before:content-[''] before:w-7 before:h-px before:bg-gold">
            Social Proof
          </div>
          <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-tight mb-3">
            Loved by <em className="italic text-gold not-italic">Clients</em>
          </h2>
          <p className="text-ash max-w-[440px] leading-[1.75] text-[0.92rem]">
            Real stories from photographers and clients who've used SnapHub to create magic.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-start">
        {TESTIMONIALS.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`rounded-xl p-7 border transition-all duration-300 hover:-translate-y-1 ${
              t.feat 
                ? 'bg-gold border-gold lg:col-span-1 lg:row-span-1 md:col-span-2' 
                : 'bg-surface border-rim hover:border-rim-2'
            }`}
          >
            <span className={`font-serif text-[4rem] leading-[0.8] mb-2 block ${t.feat ? 'text-ink/18' : 'text-rim-2'}`}>"</span>
            <span className={`text-[0.85rem] tracking-tighter mb-4 block ${t.feat ? 'text-ink-2' : 'text-gold'}`}>★★★★★</span>
            <p className={`text-[0.93rem] leading-[1.75] mb-6 italic ${t.feat ? 'text-ink text-[1.06rem]' : 'text-snow'}`}>
              {t.body}
            </p>
            <div className="flex items-center gap-3">
              <img src={t.ava} className={`w-11 h-11 rounded-full border-2 flex-shrink-0 ${t.feat ? 'border-ink/22' : 'border-rim-2'}`} />
              <div>
                <div className={`font-bold text-[0.9rem] ${t.feat ? 'text-ink' : 'text-snow'}`}>{t.name}</div>
                <div className={`text-[0.76rem] mt-0.5 ${t.feat ? 'text-ink/50' : 'text-ash'}`}>{t.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
