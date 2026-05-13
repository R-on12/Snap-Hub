import { motion } from 'motion/react';

const STEPS = [
  { id: 1, icon: '✍️', title: 'Sign Up', desc: 'Create your free account in minutes. Clients browse for free; photographers choose a subscription plan to unlock full visibility and reach thousands of clients.' },
  { id: 2, icon: '🖼️', title: 'Showcase', desc: 'Build a stunning portfolio page. Upload your best work, set your packages and pricing, and get discovered by clients worldwide who are ready to book.' },
  { id: 3, icon: '🤝', title: 'Get Hired', desc: 'Receive direct inquiries via WhatsApp or email. No middleman, no commission — pure direct connection between talent and the clients who value it.' },
];

export default function HowItWorks() {
  return (
    <section id="howitworks" className="bg-ink-2 px-[7%] py-[108px] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-radial-gradient(circle,rgba(242,192,65,0.06)_0%,transparent_65%) pointer-events-none" />

      <div className="max-w-[900px] mx-auto text-center">
        <div className="flex items-center justify-center gap-2.5 text-[0.73rem] font-semibold text-gold tracking-[0.14em] uppercase mb-3.5 before:content-[''] before:w-7 before:h-px before:bg-gold after:content-[''] after:w-7 after:h-px after:bg-gold">
          Simple Process
        </div>
        <h2 className="font-serif text-[clamp(1.9rem,3.6vw,3rem)] font-bold leading-[1.1] tracking-tight mb-3">
          How <em className="italic text-gold not-italic">SnapHub</em> Works
        </h2>
        <p className="text-ash max-w-[480px] mx-auto leading-[1.75] text-[0.92rem] mb-[72px]">
          Three effortless steps to find, connect with, and book your perfect photographer.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-[52px] left-[calc(16.7%+12px)] right-[calc(16.7%+12px)] h-px bg-gradient-to-r from-gold to-azure" />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="px-7 relative z-[1]"
            >
              <div className={`w-[104px] h-[104px] rounded-full mx-auto mb-7 flex items-center justify-center relative ${
                i % 2 === 0 
                  ? 'bg-[linear-gradient(135deg,var(--color-gold),var(--color-gold-2))] shadow-[0_16px_48px_rgba(242,192,65,0.3)]' 
                  : 'bg-[linear-gradient(135deg,var(--color-azure),#1d4ed8)] shadow-[0_16px_48px_rgba(74,143,255,0.3)]'
              }`}>
                <span className="text-[2rem]">{step.icon}</span>
                <div className="absolute -top-1 -right-1 w-6.5 h-6.5 rounded-full bg-ink-2 border-2 border-rim-2 text-[0.7rem] font-extrabold flex items-center justify-center text-ash">
                  {step.id}
                </div>
              </div>
              <h3 className="font-serif text-[1.35rem] font-bold mb-2.5">{step.title}</h3>
              <p className="text-[0.87rem] text-ash leading-[1.72]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
