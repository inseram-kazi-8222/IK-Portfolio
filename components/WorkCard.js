'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function WorkCard({ title, category, year, imageColor, imageSrc, href }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="group relative flex flex-col gap-6"
        >
            {/* Clickable overlay if href provided */}
            {href && (
                <a
                    href={href.startsWith('http') ? href : `https://${href}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-20"
                    aria-label={`Visit ${title}`}
                />
            )}
            <div className={`aspect-[4/5] w-full overflow-hidden rounded-sm relative glass-panel border-white/10`}>

                {/* Real Image if provided */}
                {imageSrc ? (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                ) : (
                    /* Fallback gradient placeholder */
                    <div className={`absolute inset-0 opacity-40 mix-blend-overlay bg-gradient-to-br ${imageColor}`} />
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#302b2f]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Arrow icon on hover */}
                <div className="absolute top-8 right-8 z-10">
                    <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center text-black
                        transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                        transition-all duration-300`}>
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <div className="flex justify-between items-baseline">
                    <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] text-sage">{category}</span>
                    <span className="font-jakarta text-[10px] uppercase tracking-[0.3em] text-white/30">{year}</span>
                </div>
                <h3 className="font-anton text-4xl uppercase text-white group-hover:text-sage transition-colors duration-300">
                    {title}
                </h3>
            </div>
        </motion.div>
    );
}
