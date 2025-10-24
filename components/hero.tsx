"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface HeroProps {
  onJoinClick: () => void
}

export default function Hero({ onJoinClick }: HeroProps) {
  const glitchVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1117] via-[#1a1f2e] to-[#0D1117]" />

      {/* Glitch effect elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-[#58A6FF] rounded-full blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-[#00A3FF] rounded-full blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div variants={glitchVariants} initial="initial" animate="animate" className="mb-8">
          <motion.div
            className="text-7xl md:text-8xl font-black font-mono mb-4 text-balance"
            animate={{
              textShadow: [
                "0 0 10px rgba(88, 166, 255, 0.5)",
                "0 0 20px rgba(0, 163, 255, 0.8)",
                "0 0 10px rgba(88, 166, 255, 0.5)",
              ],
            }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            404 Project
          </motion.div>
          <p className="text-xl md:text-2xl text-[#58A6FF] font-light mb-2">Not Found, Yet Everywhere</p>
        </motion.div>

        <motion.p
          variants={glitchVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          A meme that breaks the internet, one error at a time.
        </motion.p>

        <motion.div variants={glitchVariants} initial="initial" animate="animate" transition={{ delay: 0.4 }}>
          <Button
            onClick={onJoinClick}
            className="bg-[#58A6FF] hover:bg-[#00A3FF] text-[#0D1117] font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/50"
          >
            Join the Chaos
          </Button>
        </motion.div>

        {/* Floating 404 text */}
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="mt-20 text-9xl font-black text-[#00A3FF] opacity-10 font-mono"
        >
          404
        </motion.div>
      </div>
    </section>
  )
}
