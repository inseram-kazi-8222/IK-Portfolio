'use client';
import { motion } from 'framer-motion';
import Background from '@/components/Background';
import Navbar from '@/components/Navbar';
import { ArrowRight, MoveRight } from 'lucide-react';
import WorkCard from '@/components/WorkCard';
import Image from 'next/image';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      }
    }
  };

  const item = {
    hidden: { y: 100, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <main className="relative min-h-screen selection:bg-sage selection:text-primary">
      <Background />
      <Navbar />

      <section className="container mx-auto px-8 pt-48 pb-20 min-h-screen flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full"
        >
          {/* Tagline */}
          <motion.div variants={item} className="mb-8 overflow-hidden">
            <span className="font-jakarta text-xs uppercase tracking-[0.5em] text-sage block">
              Digital Architect & Developer
            </span>
          </motion.div>

          {/* Main Title Area */}
          <div className="flex flex-col lg:flex-row items-baseline gap-x-12 relative">
            <motion.h1
              variants={item}
              className="font-anton text-[12vw] leading-[0.85] uppercase tracking-tighter text-white"
            >
              Inseramuddin <br />
              <span className="text-transparent border-text">Kazi</span>
            </motion.h1>


          </div>

          {/* Visual Element / Focal Point - Floating Glass Panels with User Image */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 -z-10 w-[35vw] h-[80vh] hidden lg:block"
          >
            <div className="w-full h-full glass-panel relative rounded-sm overflow-hidden border-white/5">
              {/* The Image */}
              <div className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-1000">
                <Image
                  src="/ik kazi img.png"
                  alt="Inseramuddin Kazi"
                  fill
                  priority
                  className="object-cover object-top opacity-90"
                  style={{ objectPosition: 'center top' }}
                />
              </div>

              {/* Premium Overlays — subtle so image stays visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />


            </div>
            {/* Decorative Offset Panel */}
            <div className="absolute -top-12 -right-12 w-full h-full border border-white/5 -z-10 rounded-sm" />
          </motion.div>

          {/* CTA & Safe Space */}
          <motion.div variants={item} className="mt-20 flex flex-col md:flex-row items-start md:items-center gap-12">
            <a href="#selected-works" className="group relative glass-panel px-10 py-5 rounded-full flex items-center gap-4 hover:bg-white transition-all duration-500 overflow-hidden" style={{ scrollBehavior: 'smooth' }}>
              <span className="relative z-10 font-jakarta text-sm uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                View Project Archive
              </span>
              <MoveRight className="relative z-10 w-5 h-5 text-sage group-hover:text-primary transition-colors group-hover:translate-x-2 duration-300" />
            </a>

            <div className="flex flex-col gap-2">
              <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] text-white/40">Available for</span>
              <span className="font-jakarta text-sm text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Bespoke Digital Contracts 2024
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Selected Works Section */}
      <section id="selected-works" className="px-8 py-32 bg-primary relative overflow-hidden">
        {/* Decorative Text background */}
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none">
          <span className="font-anton text-[30vw] leading-none uppercase -mr-20">ARCHIVE</span>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-jakarta text-[10px] uppercase tracking-[0.5em] text-sage mb-4 block"
              >
                Curation 01
              </motion.span>
              <h2 className="font-anton text-[7vw] md:text-[5vw] leading-none uppercase text-white">
                Selected <br /> <span className="italic text-sage">Works.</span>
              </h2>
            </div>
            <p className="font-jakarta text-taupe text-sm max-w-xs leading-relaxed md:text-right">
              A collection of high-fidelity designs where geometry meets intuition. Every pixel serves a purpose.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-32">
            <div className="lg:mt-24">
              <WorkCard
                title="IMS"
                category="Inventory Management System"
                year="2025"
                imageSrc="/IMS.png"
                href="imsportal.3ftech.in"
              />
            </div>
            <div>
              <WorkCard
                title="Agile Engineering Consultants"
                category="Web Design / Consultancy"
                year="2025"
                imageSrc="/agile portrait.jpeg"
                href="www.agileeng.net"
              />
            </div>
            <div className="lg:mt-48">
              <WorkCard
                title="Swaraj Car Point"
                category="Software / Automotive"
                year="2025–26"
                imageSrc="/swaraj portrait.jpeg"
                href="swaraj-car.azhka.in"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="bg-charcoal px-8 py-40 border-t border-white/5 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 items-start">
            <div className="space-y-6">
              <h2 className="font-anton text-6xl uppercase leading-none text-sage italic">Core <br />Expertise.</h2>
              <p className="font-jakarta text-sm text-taupe leading-relaxed max-w-xs">
                Leveraging the latest in web technologies to build interfaces that feel fluid and architectures that remain robust.
              </p>
            </div>

            <div className="space-y-12">
              {['Frontend Performance', 'Design Systems', 'Next.js Ecosystem'].map((item) => (
                <div key={item} className="border-b border-white/10 pb-8 group cursor-default">
                  <span className="font-jakarta text-[10px] uppercase tracking-widest text-sage mb-2 block group-hover:translate-x-2 transition-transform duration-300">Technology</span>
                  <h4 className="font-anton text-2xl text-white uppercase">{item}</h4>
                </div>
              ))}
            </div>

            <div className="glass-panel p-12 rounded-sm space-y-8 lg:mt-20">
              <h3 className="font-anton text-3xl text-white uppercase">Start a <br />project?</h3>
              <p className="font-jakarta text-xs text-taupe leading-[2]">Currently accepting elite digital contracts for Q3 & Q4 2024.</p>
              <a href="mailto:hello@ikazi.dev" className="inline-flex items-center gap-4 font-anton text-sage text-xl group">
                GET IN TOUCH <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="px-8 py-12 bg-primary border-t border-white/5">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="font-jakarta text-[10px] uppercase tracking-[0.5em] text-white/30">
            © 2024 Inseramuddin Kazi. All rights reserved.
          </span>
          <div className="flex gap-8 font-jakarta text-[10px] uppercase tracking-widest text-white/60">
            {['Twitter', 'LinkedIn', 'Github', 'Instagram'].map(link => (
              <a key={link} href="#" className="hover:text-sage transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </footer>

      <style jsx global>{`
        .border-text {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke: 1px rgba(255,255,255,0.3);
        }
      `}</style>
    </main>
  );
}
