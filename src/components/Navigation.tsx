'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ChefHat, Search, User, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

interface NavigationProps {
  isScrolled?: boolean;
}

export default function Navigation({ isScrolled = false }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(isScrolled);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Find Chefs', href: '/chefs', icon: Search },
    { label: 'How It Works', href: '/how-it-works', icon: null },
    { label: 'About', href: '/about', icon: null },
    { label: 'Contact', href: '/contact', icon: null },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-mychef-card'
          : 'bg-transparent'
      }`}
    >
      <div className="container-mychef">
        <div className="flex items-center justify-between py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="bg-forest-green p-2 rounded-mychef-sm group-hover:bg-forest-green-hover transition-colors duration-300">
              <ChefHat className="w-6 h-6 text-creamy-white" />
            </div>
            <span className="text-xl lg:text-2xl font-bold text-charcoal">
              Mychef
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
              >
                <Link
                  href={item.href}
                  className="flex items-center gap-2 text-charcoal hover:text-forest-green font-medium transition-colors duration-300 relative group"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-forest-green transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link href="/login" className="btn-text">
                <User className="w-4 h-4" />
                Sign In
              </Link>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link href="/become-chef" className="btn-primary">
                Become a Chef
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-mychef-sm text-charcoal hover:bg-light-sage transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="container-mychef py-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-charcoal hover:text-forest-green font-medium py-3 border-b border-gray-100 last:border-b-0 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.icon && <item.icon className="w-5 h-5" />}
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="flex flex-col gap-3 pt-4 border-t border-gray-100">
                  <Link
                    href="/login"
                    className="btn-outline text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <User className="w-4 h-4" />
                    Sign In
                  </Link>
                  <Link
                    href="/become-chef"
                    className="btn-primary text-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Become a Chef
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}