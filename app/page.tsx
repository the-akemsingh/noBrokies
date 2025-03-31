"use client"
import { AuroraBackground } from "@/components/ui/aurora-background";
import { motion } from "motion/react";
import { Cinzel_Decorative } from 'next/font/google'

const cinzel = Cinzel_Decorative({
  // subsets: ['latin'],
  weight: '900',
  // variable: '--font-cinzel',
})

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 py-12 sm:py-16 md:py-20 min-h-screen"
        >
          <div className={`${cinzel.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold dark:text-white text-center max-w-7xl mx-auto`}>
            NOBROKIES
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
}
