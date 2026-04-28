'use client';

import TopBar from '../../src/components/layout/TopBar';
import Navbar from '../../src/components/layout/Navbar';
import Footer from '../../src/components/layout/Footer';
import { motion, AnimatePresence } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen flex flex-col font-sans select-none">
      <TopBar />
      <Navbar />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
