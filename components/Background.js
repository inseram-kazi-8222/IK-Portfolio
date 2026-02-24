'use client';
import { motion } from 'framer-motion';

export default function Background() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-[#171e19]">
            {/* Sage Orb */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, 50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="ambient-orb bg-sage w-[500px] h-[500px] -top-24 -left-24"
            />

            {/* Soft Blue Orb */}
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 120, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="ambient-orb bg-soft-blue w-[600px] h-[600px] bottom-0 -right-24"
            />

            {/* Cyan Glow */}
            <div className="ambient-orb bg-cyan-glow w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

            {/* Grid Pattern Overlay (Subtle Tech Texture) */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
    );
}
