/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import FeaturedPhotographers from './components/FeaturedPhotographers';
import Categories from './components/Categories';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import Toast from './components/Toast';
import CustomCursor from './components/CustomCursor';

export type AuthType = 'login' | 'signup' | null;

export default function App() {
  const [authModal, setAuthModal] = useState<AuthType>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    setTimeout(() => setToast(null), 3200);
  };

  return (
    <div className="min-h-screen bg-ink selection:bg-gold/30">
      <CustomCursor />
      
      <Navbar onAuth={(type) => setAuthModal(type)} />
      
      <main>
        <Hero showToast={showToast} />
        <Marquee />
        <FeaturedPhotographers showToast={showToast} />
        <Categories />
        <HowItWorks />
        <Testimonials />
        <CTA onAuth={() => setAuthModal('signup')} />
      </main>

      <Footer />

      <AuthModal 
        isOpen={!!authModal} 
        type={authModal} 
        onClose={() => setAuthModal(null)}
        onSuccess={(msg) => {
          setAuthModal(null);
          showToast(msg);
        }}
      />

      <Toast message={toast} />
    </div>
  );
}
