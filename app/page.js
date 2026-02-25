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
    hidden: { y: 60, opacity: 0 },
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

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="container mx-auto px-6 md:px-8 pt-32 sm:pt-40 md:pt-48 pb-16 md:pb-20 min-h-screen flex flex-col justify-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10 w-full"
        >
          {/* Tagline */}
          <motion.div variants={item} className="mb-6 md:mb-8 overflow-hidden">
            <span className="font-jakarta text-[10px] sm:text-xs uppercase tracking-[0.4em] sm:tracking-[0.5em] text-sage block">
              Digital Architect & Developer
            </span>
          </motion.div>

          {/* Main Title */}
          <div className="flex flex-col lg:flex-row items-baseline gap-x-12 relative">
            <motion.h1
              variants={item}
              className="font-anton text-[18vw] sm:text-[15vw] md:text-[13vw] lg:text-[12vw] leading-[0.85] uppercase tracking-tighter text-white"
            >
              Inseramuddin <br />
              <span className="text-transparent border-text">Kazi</span>
            </motion.h1>
          </div>

          {/* Floating Photo — desktop only */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-0 right-0 -z-10 w-[35vw] h-[80vh] hidden lg:block"
          >
            <div className="w-full h-full glass-panel relative rounded-sm overflow-hidden border-white/5">
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/30" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-12 -right-12 w-full h-full border border-white/5 -z-10 rounded-sm" />
          </motion.div>

          {/* Mobile Photo — shown only on small screens */}
          <motion.div
            variants={item}
            className="block lg:hidden mt-6 w-full max-w-[280px] mx-auto sm:mx-0"
          >
            <div className="relative w-full h-[370px] glass-panel rounded-sm overflow-hidden border-white/5">
              <Image
                src="/ik kazi img.png"
                alt="Inseramuddin Kazi"
                fill
                sizes="(max-width: 1024px) 280px, 0px"
                priority
                className="object-cover object-top opacity-90"
                style={{ objectPosition: 'center top' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* CTA Row */}
          <motion.div
            variants={item}
            className="mt-10 md:mt-20 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12"
          >
            <a
              href="#selected-works"
              className="group relative glass-panel px-7 sm:px-10 py-4 sm:py-5 rounded-full flex items-center gap-3 sm:gap-4 hover:bg-white transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 font-jakarta text-xs sm:text-sm uppercase tracking-widest text-white group-hover:text-primary transition-colors">
                View Project Archive
              </span>
              <MoveRight className="relative z-10 w-4 sm:w-5 h-4 sm:h-5 text-sage group-hover:text-primary transition-colors group-hover:translate-x-2 duration-300" />
            </a>

            <div className="flex flex-col gap-1 sm:gap-2">
              <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] text-white/40">Available for</span>
              <span className="font-jakarta text-xs sm:text-sm text-white flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0" />
                Bespoke Digital Contracts 2025
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ── SELECTED WORKS ───────────────────────────────────────── */}
      <section id="selected-works" className="px-6 md:px-8 py-20 md:py-32 bg-primary relative overflow-hidden">
        {/* Background decorative text */}
        <div className="absolute top-0 right-0 opacity-[0.02] pointer-events-none select-none overflow-hidden">
          <span className="font-anton text-[30vw] leading-none uppercase">ARCHIVE</span>
        </div>

        <div className="container mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-24 gap-6 md:gap-8">
            <div className="max-w-xl">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-jakarta text-[10px] uppercase tracking-[0.5em] text-sage mb-3 sm:mb-4 block"
              >
                Curation 01
              </motion.span>
              <h2 className="font-anton text-[13vw] sm:text-[10vw] md:text-[7vw] lg:text-[5vw] leading-none uppercase text-white">
                Selected <br />
                <span className="italic text-sage">Works.</span>
              </h2>
            </div>
            <p className="font-jakarta text-taupe text-xs sm:text-sm max-w-xs leading-relaxed md:text-right">
              A collection of high-fidelity designs where geometry meets intuition. Every pixel serves a purpose.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-x-10 sm:gap-y-16 md:gap-x-12 md:gap-y-24 lg:gap-y-32">
            <div className="sm:mt-0 lg:mt-24">
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
                title="Agile Engineering"
                category="Web Design / Consultancy"
                year="2025"
                imageSrc="/agile portrait.jpeg"
                href="www.agileeng.net"
              />
            </div>
            <div className="sm:col-span-2 lg:col-span-1 lg:mt-48">
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

      {/* ── ABOUT ────────────────────────────────────────────────── */}
      <section id="about" className="px-6 md:px-8 py-20 md:py-32 bg-primary relative overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="font-jakarta text-[10px] uppercase tracking-[0.5em] text-sage mb-3 sm:mb-4 block"
              >
                About Me
              </motion.span>
              <h2 className="font-anton text-[10vw] sm:text-[8vw] md:text-[6vw] lg:text-[4vw] leading-none uppercase text-white mb-6">
                Crafting Digital <br />
                <span className="italic text-sage">Experiences.</span>
              </h2>
              <p className="font-jakarta text-taupe text-sm sm:text-base leading-relaxed mb-6">
                I'm Inseramuddin Kazi, a passionate full-stack developer specializing in building exceptional digital experiences. With expertise in modern web technologies, I create scalable, performant, and user-centric applications.
              </p>
              <p className="font-jakarta text-taupe text-sm sm:text-base leading-relaxed">
                My approach combines clean code architecture with intuitive design, ensuring every project delivers both technical excellence and visual appeal.
              </p>
            </div>
            <div className="glass-panel p-8 sm:p-12 rounded-sm space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <span className="font-anton text-4xl text-sage">1+</span>
                  <p className="font-jakarta text-xs text-taupe uppercase tracking-widest mt-2">Years Experience</p>
                </div>
                <div>
                  <span className="font-anton text-4xl text-sage">4+</span>
                  <p className="font-jakarta text-xs text-taupe uppercase tracking-widest mt-2">Projects Completed</p>
                </div>
                <div>
                  <span className="font-anton text-4xl text-sage">4+</span>
                  <p className="font-jakarta text-xs text-taupe uppercase tracking-widest mt-2">Happy Clients</p>
                </div>
                <div>
                  <span className="font-anton text-4xl text-sage">100%</span>
                  <p className="font-jakarta text-xs text-taupe uppercase tracking-widest mt-2">Dedication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS & TOOLS ───────────────────────────────────────── */}
      <section id="skills" className="px-6 md:px-8 py-20 md:py-32 bg-primary relative overflow-hidden border-t border-white/5">
        <div className="container mx-auto">
          {/* Section Header */}
          <div className="mb-12 md:mb-16">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-jakarta text-[10px] uppercase tracking-[0.5em] text-sage mb-3 sm:mb-4 flex items-center gap-2"
            >
              <span className="w-3 h-[1px] bg-sage" />
              What I Work With
            </motion.span>
            <h2 className="font-anton text-[10vw] sm:text-[8vw] md:text-[5vw] lg:text-[3.5vw] leading-none text-white">
              Skills <span className="italic text-sage">&</span> tools
            </h2>
          </div>

          {/* Skills Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Frontend Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-6 sm:p-8 rounded-sm"
            >
              <h3 className="font-anton text-lg uppercase text-white mb-4 pb-3 border-b border-white/10">Frontend</h3>
              <ul className="space-y-3">
                {['React / Next.js', 'Tailwind CSS', 'Framer Motion', 'JavaScript'].map((skill) => (
                  <li key={skill} className="flex items-center gap-3 font-jakarta text-sm text-sage">
                    <span className="w-2 h-2 rounded-full bg-sage" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-panel p-6 sm:p-8 rounded-sm"
            >
              <h3 className="font-anton text-lg uppercase text-white mb-4 pb-3 border-b border-white/10">Backend</h3>
              <ul className="space-y-3">
                {['Node.js', 'Express', 'REST APIs', 'MongoDB'].map((skill) => (
                  <li key={skill} className="flex items-center gap-3 font-jakarta text-sm text-sage">
                    <span className="w-2 h-2 rounded-full bg-sage" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Tools Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-panel p-6 sm:p-8 rounded-sm sm:col-span-2 lg:col-span-1"
            >
              <h3 className="font-anton text-lg uppercase text-white mb-4 pb-3 border-b border-white/10">Tools</h3>
              <ul className="space-y-3">
                {['Git / GitHub', 'Figma', 'VS Code', 'Vercel'].map((skill) => (
                  <li key={skill} className="flex items-center gap-3 font-jakarta text-sm text-sage">
                    <span className="w-2 h-2 rounded-full bg-sage" />
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── EXPERTISE ────────────────────────────────────────────── */}
      <section id="expertise" className="bg-charcoal px-6 md:px-8 py-20 md:py-40 border-t border-white/5 relative z-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-24 items-start">

            {/* Left: Heading */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-anton text-5xl sm:text-6xl uppercase leading-none text-sage italic">
                Core <br />Expertise.
              </h2>
              <p className="font-jakarta text-sm text-taupe leading-relaxed max-w-xs">
                Leveraging the latest in web technologies to build interfaces that feel fluid and architectures that remain robust.
              </p>
            </div>

            {/* Middle: Skill List */}
            <div className="space-y-8 md:space-y-12">
              {['Frontend Performance', 'Design Systems', 'Next.js Ecosystem'].map((skillItem) => (
                <div key={skillItem} className="border-b border-white/10 pb-6 md:pb-8 group cursor-default">
                  <span className="font-jakarta text-[10px] uppercase tracking-widest text-sage mb-2 block group-hover:translate-x-2 transition-transform duration-300">
                    Technology
                  </span>
                  <h4 className="font-anton text-xl sm:text-2xl text-white uppercase">{skillItem}</h4>
                </div>
              ))}
            </div>

            {/* Right: Contact CTA */}
            <div id="contact" className="glass-panel p-8 sm:p-12 rounded-sm space-y-6 sm:space-y-8 md:mt-0 lg:mt-20">
              <h3 className="font-anton text-2xl sm:text-3xl text-white uppercase">
                Start a <br />project?
              </h3>
              <p className="font-jakarta text-xs text-taupe leading-[2]">
                Currently accepting elite digital contracts for Q3 & Q4 2025.
              </p>
              <a
                href="mailto:hello@ikazi.dev"
                className="inline-flex items-center gap-3 sm:gap-4 font-anton text-sage text-lg sm:text-xl group"
              >
                GET IN TOUCH
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────────── */}
      <footer className="px-6 md:px-8 py-10 md:py-12 bg-primary border-t border-white/5">
        <div className="container mx-auto flex flex-col items-center gap-6 md:flex-row md:justify-between">
          <span className="font-jakarta text-[10px] uppercase tracking-[0.5em] text-white/30 text-center md:text-left">
            © 2025 Inseramuddin Kazi. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 font-jakarta text-[10px] uppercase tracking-widest text-white/60">
            <a href="https://www.linkedin.com/in/inseram-kazi-145261370/" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">
              LinkedIn
            </a>
            <a href="https://github.com/inseram-kazi-8222" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">
              Github
            </a>
            <a href="https://www.instagram.com/ik_kazi_8222" target="_blank" rel="noopener noreferrer" className="hover:text-sage transition-colors">
              Instagram
            </a>
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
