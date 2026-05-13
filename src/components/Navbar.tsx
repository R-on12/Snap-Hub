import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AuthType } from '../App';

interface NavbarProps {
  onAuth: (type: AuthType) => void;
}

export default function Navbar({ onAuth }: NavbarProps) {
  const [isStuck, setIsStuck] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsStuck(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      id="nav"
      className={`fixed top-0 left-0 right-0 z-[500] flex items-center justify-between px-[6%] h-[76px] transition-all duration-400 border-b ${
        isStuck ? 'bg-ink/93 backdrop-blur-[20px] border-rim' : 'bg-transparent border-transparent'
      }`}
    >
      <a href="#" className="logo font-serif text-[1.75rem] font-bold tracking-tight flex items-center">
        Snap<span className="text-gold mx-px">·</span>Hub
      </a>

      {/* Desktop Links */}
      <ul className="nav-links hidden items-center gap-9 list-none lg:flex">
        {['Browse', 'Categories', 'How It Works', 'Reviews'].map((link) => (
          <li key={link}>
            <a 
              href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
              className="text-[0.82rem] font-medium text-ash tracking-[0.07em] uppercase transition-colors duration-200 relative pb-0.5 hover:text-snow group"
            >
              {link}
              <span className="absolute bottom-0 left-0 right-0 h-px bg-gold scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          </li>
        ))}
      </ul>

      {/* Desktop CTAs */}
      <div className="nav-ctas hidden items-center gap-2.5 lg:flex">
        <button 
          onClick={() => onAuth('login')}
          className="btn-outline text-[0.82rem] px-5 py-2 rounded-full border border-rim-2 text-ash hover:text-snow hover:border-dim transition-all duration-250 cursor-none"
        >
          Log in
        </button>
        <button 
          onClick={() => onAuth('signup')}
          className="btn-gold text-[0.82rem] px-5 py-2 rounded-full bg-gold text-ink font-bold hover:bg-[#ffd55a] transition-all duration-250 cursor-none"
        >
          Join as Photographer
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden text-snow cursor-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-[76px] left-0 right-0 bg-ink border-b border-rim p-6 lg:hidden flex flex-col gap-6 animate-su">
          <ul className="flex flex-col gap-4">
            {['Browse', 'Categories', 'How It Works', 'Reviews'].map((link) => (
              <li key={link}>
                <a 
                  href={`#${link.toLowerCase().replace(/\s+/g, '')}`}
                  className="text-lg font-medium text-ash"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => { onAuth('login'); setIsMenuOpen(false); }}
              className="w-full py-3 rounded-xl border border-rim-2 text-ash font-medium"
            >
              Log in
            </button>
            <button 
              onClick={() => { onAuth('signup'); setIsMenuOpen(false); }}
              className="w-full py-3 rounded-xl bg-gold text-ink font-bold"
            >
              Join as Photographer
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
