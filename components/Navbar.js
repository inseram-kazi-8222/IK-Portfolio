'use client';
import { motion, useScroll, useSpring } from 'framer-motion';
import { useState } from 'react';

export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [menuOpen, setMenuOpen] = useState(false);
    const navLinks = ['Selected Works', 'About', 'Skills', 'Expertise', 'Contact'];

    return (
        <>
            {/* Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-sage origin-left z-[60]"
                style={{ scaleX }}
            />

            {/* Main Navbar */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-5 flex justify-between items-center"
                style={{ background: menuOpen ? 'rgba(23,30,25,0.98)' : 'transparent' }}
            >
                {/* Logo */}
                <div className="flex flex-col">
                    <span className="font-anton text-2xl leading-none uppercase tracking-tighter text-white">IK.</span>
                    <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] text-sage">Portfolio</span>
                </div>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-12 font-jakarta text-[11px] uppercase tracking-widest text-white/70">
                    {navLinks.map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            className="hover:text-sage transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8 z-50"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation menu"
                >
                    <span
                        className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7.5px] w-6' : 'w-6'
                            }`}
                    />
                    <span
                        className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-0' : 'w-4'
                            }`}
                    />
                    <span
                        className={`block h-[1.5px] bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7.5px] w-6' : 'w-6'
                            }`}
                    />
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-40 bg-[#171e19]/98 flex flex-col items-center justify-center gap-10 md:hidden"
                >
                    {navLinks.map((item, i) => (
                        <motion.a
                            key={item}
                            href={`#${item.toLowerCase().replace(' ', '-')}`}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.4 }}
                            onClick={() => setMenuOpen(false)}
                            className="font-anton text-4xl uppercase tracking-tight text-white hover:text-sage transition-colors"
                        >
                            {item}
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 flex gap-6"
                    >
                        <a href="https://www.linkedin.com/in/inseram-kazi-145261370/" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[10px] uppercase tracking-widest text-white/40 hover:text-sage transition-colors">
                            LinkedIn
                        </a>
                        <a href="https://github.com/inseram-kazi-8222" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[10px] uppercase tracking-widest text-white/40 hover:text-sage transition-colors">
                            Github
                        </a>
                        <a href="https://www.instagram.com/ik_kazi_8222" target="_blank" rel="noopener noreferrer" className="font-jakarta text-[10px] uppercase tracking-widest text-white/40 hover:text-sage transition-colors">
                            Instagram
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
