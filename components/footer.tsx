"use client"

import { motion } from "framer-motion"
import { Twitter, MessageCircle, Share2 } from "lucide-react"

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: MessageCircle, label: "Telegram", href: "#" },
    { icon: Share2, label: "Farcaster", href: "#" },
  ]

  return (
    <footer className="relative bg-[#0D1117] border-t border-[#58A6FF]/20 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black font-mono text-[#58A6FF] mb-2">404 Project</h3>
            <p className="text-gray-400 text-sm">A meme token that breaks the internet</p>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <p className="text-[#58A6FF] font-mono text-sm font-bold">LINKS</p>
            <a href="#" className="text-gray-400 hover:text-[#00A3FF] transition-colors text-sm">
              About
            </a>
            <a href="#" className="text-gray-400 hover:text-[#00A3FF] transition-colors text-sm">
              Docs
            </a>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 bg-[#1a1f2e] border border-[#58A6FF]/30 rounded-lg hover:bg-[#58A6FF] hover:text-[#0D1117] transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-[#58A6FF]/20 pt-8 text-center text-gray-400 text-sm"
        >
          <p>© 2025 404 Project. Powered by Base.</p>
        </motion.div>
      </div>
    </footer>
  )
}
