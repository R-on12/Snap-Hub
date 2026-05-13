import { X } from 'lucide-react';
import { AuthType } from '../App';
import { motion, AnimatePresence } from 'motion/react';

interface AuthModalProps {
  isOpen: boolean;
  type: AuthType;
  onClose: () => void;
  onSuccess: (msg: string) => void;
}

export default function AuthModal({ isOpen, type, onClose, onSuccess }: AuthModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[800] bg-ink/88 backdrop-blur-xl flex items-center justify-center p-4 overflow-y-auto"
        onClick={(e) => { if(e.target === e.currentTarget) onClose(); }}
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className="bg-surface border border-rim-2 rounded-[24px] p-11 w-full max-w-[460px] relative"
        >
          <button 
            className="absolute top-4.5 right-4.5 bg-ink-3 border border-rim text-ash w-8.5 h-8.5 rounded-full flex items-center justify-center font-sans hover:text-snow transition-colors cursor-none"
            onClick={onClose}
          >
            <X size={15} />
          </button>

          <h3 className="font-serif text-[2rem] font-bold mb-1.5">{type === 'login' ? 'Welcome back' : 'Create account'}</h3>
          <p className="text-[0.87rem] text-ash mb-7">{type === 'login' ? 'Sign in to your SnapHub account' : 'Join thousands of photographers on SnapHub'}</p>

          <form onSubmit={(e) => { e.preventDefault(); onSuccess(`🎉 Welcome to SnapHub!`); }} className="flex flex-col gap-4">
            {type === 'signup' && (
              <div className="grid grid-cols-2 gap-3.5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.74rem] font-bold text-ash tracking-widest uppercase">First Name</label>
                  <input type="text" placeholder="Kofi" className="w-full bg-ink-2 border border-rim-2 rounded-xl p-3 text-snow outline-none focus:border-azure" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.74rem] font-bold text-ash tracking-widest uppercase">Last Name</label>
                  <input type="text" placeholder="Ansah" className="w-full bg-ink-2 border border-rim-2 rounded-xl p-3 text-snow outline-none focus:border-azure" required />
                </div>
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.74rem] font-bold text-ash tracking-widest uppercase">Email Address</label>
              <input type="email" placeholder="you@example.com" className="w-full bg-ink-2 border border-rim-2 rounded-xl p-3 text-snow outline-none focus:border-azure" required />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[0.74rem] font-bold text-ash tracking-widest uppercase">Password</label>
              <input type="password" placeholder="••••••••" className="w-full bg-ink-2 border border-rim-2 rounded-xl p-3 text-snow outline-none focus:border-azure" required />
            </div>

            {type === 'signup' && (
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.74rem] font-bold text-ash tracking-widest uppercase">I'm joining as</label>
                <select className="w-full bg-ink-2 border border-rim-2 rounded-xl p-3 text-snow outline-none focus:border-azure cursor-none">
                  <option>Photographer</option>
                  <option>Client</option>
                </select>
              </div>
            )}

            <button 
              type="submit"
              className="mt-2 bg-gold text-ink w-full py-3.5 rounded-full font-bold hover:bg-[#ffd55a] transition-all duration-200 cursor-none"
            >
              {type === 'login' ? 'Log In' : 'Create Account — Free'}
            </button>
          </form>

          <div className="flex items-center gap-3 text-dim text-[0.78rem] my-4.5">
            <span className="flex-1 h-px bg-rim" />
            or
            <span className="flex-1 h-px bg-rim" />
          </div>

          <button className="w-full py-3 rounded-full border border-rim-2 text-ash hover:text-snow hover:border-dim transition-all duration-250 cursor-none flex items-center justify-center gap-2">
            <span className="text-xl">🔵</span> Continue with Google
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
