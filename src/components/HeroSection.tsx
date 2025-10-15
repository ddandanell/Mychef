'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, CheckCircle, Star, Shield, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 1500, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-creamy-white/80"
    >
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="flex flex-col items-center gap-2"
      >
        <span className="text-sm font-medium">Scroll to explore</span>
        <div className="w-6 h-10 border-2 border-creamy-white/60 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1 h-3 bg-creamy-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

function TrustBadge() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: 'easeOut' }}
      className="absolute top-8 right-8 hidden lg:block"
    >
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="bg-white/95 backdrop-blur-sm p-4 rounded-mychef shadow-mychef-card"
      >
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <span className="font-semibold text-charcoal text-sm">VERIFIED</span>
        </div>
        <p className="text-xs text-charcoal/70">
          All chefs<br />
          background-<br />
          checked
        </p>
      </motion.div>
    </motion.div>
  );
}

function LiveActivityFeed() {
  const [currentActivity, setCurrentActivity] = useState(0);
  
  const activities = [
    { icon: '🟢', text: 'Wayan in Canggu was just booked for meal prep' },
    { icon: '⭐', text: 'Lisa from Seminyak left a 5-star review' },
    { icon: '👨‍🍳', text: '12 chefs available in your area right now' },
    { icon: '🟢', text: 'Made in Ubud completed a cooking session' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentActivity((prev) => (prev + 1) % activities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [activities.length]);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.8, duration: 0.6 }}
      className="absolute bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-sm text-creamy-white py-3 overflow-hidden"
    >
      <motion.div
        key={currentActivity}
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="container-mychef"
      >
        <div className="flex items-center justify-center gap-2 text-sm">
          <span>{activities[currentActivity].icon}</span>
          <span>{activities[currentActivity].text}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-[85vh] lg:min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-forest-green/95 via-forest-green/70 to-transparent lg:to-transparent lg:via-forest-green/70 lg:from-forest-green/95 z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Indonesian chef cooking in villa kitchen"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Trust Badge */}
      <TrustBadge />

      {/* Hero Content */}
      <div className="relative z-20 container-mychef">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-creamy-white">
            {/* Headline */}
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
              className="text-h1-mobile lg:text-h1-desktop font-bold mb-6 text-shadow leading-tight"
            >
              Find Your Perfect Chef in Bali
            </motion.h1>
            
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="text-xl lg:text-2xl font-semibold mb-6 text-shadow"
            >
              Book Trusted Local Chefs for Healthy Home Cooking
            </motion.h2>

            {/* Subheadline */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.6 }}
              className="text-body-large mb-8 text-creamy-white/90 max-w-lg leading-relaxed"
            >
              Connect with 150+ verified Indonesian chefs who cook authentic, 
              healthy meals in your villa. From weekly meal prep to special 
              events—trusted by 2,000+ Bali residents.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Link 
                href="/chefs" 
                className="btn-primary text-center sm:text-left group bg-creamy-white text-forest-green hover:bg-gray-100 lg:text-lg"
              >
                Browse Chefs Near You
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <button className="btn-text text-creamy-white hover:text-golden-yellow border-b border-transparent hover:border-golden-yellow">
                <Play className="w-4 h-4" />
                See How It Works
              </button>
            </motion.div>

            {/* Trust Bar */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={isLoaded ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1.0 }}
              className="bg-white/10 backdrop-blur-sm rounded-mychef p-4"
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    <AnimatedCounter end={150} suffix="+" /> Verified Chefs
                  </span>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <Star className="w-4 h-4 text-golden-yellow flex-shrink-0" />
                  <span className="text-sm font-medium">
                    4.8/5 from <AnimatedCounter end={850} suffix="+" /> Reviews
                  </span>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span className="text-sm font-medium">
                    Secure Payments
                  </span>
                </div>
                
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span className="text-sm font-medium">
                    <AnimatedCounter end={2} />h Avg Response
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Image showcase for larger screens */}
          <div className="hidden lg:block">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={isLoaded ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.4 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isLoaded ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-mychef shadow-mychef-hover"
                >
                  <div className="relative w-full h-32 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Indonesian nasi campur"
                      fill
                      className="object-cover rounded-mychef-sm"
                    />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-1">Nasi Campur</h4>
                  <p className="text-sm text-charcoal/70">Traditional Indonesian</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-3 h-3 text-golden-yellow fill-current" />
                    <span className="text-xs text-charcoal">4.9</span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={isLoaded ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="bg-white/90 backdrop-blur-sm p-4 rounded-mychef shadow-mychef-hover mt-8"
                >
                  <div className="relative w-full h-32 mb-3">
                    <Image
                      src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Gado-gado salad"
                      fill
                      className="object-cover rounded-mychef-sm"
                    />
                  </div>
                  <h4 className="font-semibold text-charcoal mb-1">Gado-Gado</h4>
                  <p className="text-sm text-charcoal/70">Healthy & Fresh</p>
                  <div className="flex items-center gap-1 mt-2">
                    <Star className="w-3 h-3 text-golden-yellow fill-current" />
                    <span className="text-xs text-charcoal">4.8</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollIndicator />

      {/* Live Activity Feed */}
      <LiveActivityFeed />
    </section>
  );
}