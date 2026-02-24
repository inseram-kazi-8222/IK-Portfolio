'use client';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Navbar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-end mix-blend-difference"
            >
                <div className="flex flex-col">
                    <span className="font-anton text-2xl leading-none uppercase tracking-tighter text-white">IK.</span>
                    <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] text-sage">Portfolio</span>
                </div>

                <div className="hidden md:flex gap-12 font-jakarta text-[11px] uppercase tracking-widest text-white/70">
                    {['Selected Works', 'About', 'Expertise', 'Contact'].map((item) => (
                        <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-sage transition-colors duration-300">
                            {item}
                        </a>
                    ))}
                </div>

                <div className="md:hidden w-8 h-[2px] bg-white relative after:content-[''] after:absolute after:top-2 after:left-0 after:w-full after:h-full after:bg-white" />
            </motion.nav>

            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-sage origin-left z-[60]"
                style={{ scaleX }}
            />
        </>
    );
}
