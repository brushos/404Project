"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="relative py-20 px-4 bg-[#0D1117]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black font-mono mb-8 text-[#58A6FF]">About 404</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            404 Project is a meme token that celebrates the error we all know and love. Born from the chaos of the web,
            built for the Base network. It's not just a token—it's a movement. A glitch in the matrix. A 404 error that
            became something real.
          </p>

          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          >
            <div className="text-9xl font-black text-[#00A3FF]">◆</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
