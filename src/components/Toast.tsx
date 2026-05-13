import { motion, AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';

interface ToastProps {
  message: string | null;
}

export default function Toast({ message }: ToastProps) {
  return (
    <AnimatePresence>
      {message && (
        <motion.div 
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 80, scale: 0.95 }}
          transition={{ duration: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
          className="fixed bottom-7 right-7 z-[900] bg-surface border border-gold rounded-xl px-5.5 py-3.5 flex items-center gap-2.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] pointer-events-none"
        >
          <Sparkles size={16} className="text-gold" />
          <span className="text-[0.89rem] font-medium text-snow">{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
