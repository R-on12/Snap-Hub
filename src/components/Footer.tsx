import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-rim py-[72px] pb-9 px-[7%]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-14">
        <div className="lg:col-span-2">
          <a href="#" className="font-serif text-[1.7rem] font-bold mb-3.5 block">
            Snap<span className="text-gold">·</span>Hub
          </a>
          <p className="text-[0.87rem] text-ash leading-[1.75] mb-5.5 max-w-[260px]">
            The premier marketplace connecting talented photographers with clients who value extraordinary visual storytelling.
          </p>
          <div className="flex gap-2.5">
            {[Twitter, Linkedin, Instagram, Facebook].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-[38px] h-[38px] rounded-full bg-surface border border-rim flex items-center justify-center text-[0.82rem] text-ash transition-all duration-220 hover:bg-gold hover:text-ink hover:border-gold cursor-none"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4.5">
          <h5 className="text-[0.76rem] font-bold text-snow uppercase tracking-widest mb-4.5">Photographers</h5>
          <ul className="flex flex-col gap-3">
            {['Pricing Plans', 'Create Profile', 'Portfolio Tips', 'Success Stories', 'Community'].map(item => (
              <li key={item}><a href="#" className="text-[0.86rem] text-ash hover:text-snow transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4.5">
          <h5 className="text-[0.76rem] font-bold text-snow uppercase tracking-widest mb-4.5">Clients</h5>
          <ul className="flex flex-col gap-3">
            {['Browse Photographers', 'Categories', 'How It Works', 'Post a Brief', 'Gift Cards'].map(item => (
              <li key={item}><a href="#" className="text-[0.86rem] text-ash hover:text-snow transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4.5">
          <h5 className="text-[0.76rem] font-bold text-snow uppercase tracking-widest mb-4.5">Company</h5>
          <ul className="flex flex-col gap-3">
            {['About Us', 'Blog', 'Careers', 'Press Kit', 'Contact'].map(item => (
              <li key={item}><a href="#" className="text-[0.86rem] text-ash hover:text-snow transition-colors">{item}</a></li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-rim pt-7 flex flex-wrap justify-between items-center gap-3">
        <span className="text-[0.78rem] text-dim">© 2025 SnapHub Inc. All rights reserved.</span>
        <span className="text-[0.78rem] text-dim flex gap-4">
          <a href="#" className="hover:text-ash">Privacy Policy</a>
          <a href="#" className="hover:text-ash">Terms of Service</a>
          <a href="#" className="hover:text-ash">Cookie Policy</a>
        </span>
      </div>
    </footer>
  );
}
