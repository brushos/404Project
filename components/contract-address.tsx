"use client"

import { forwardRef, useState } from "react"
import { motion } from "framer-motion"
import { Copy, Check } from "lucide-react"

const ContractAddress = forwardRef<HTMLDivElement>(function ContractAddress(_, ref) {
  const [copied, setCopied] = useState(false)
  const contractAddress = "0x4044044044044044044044044044044044044040"

  const handleCopy = async () => {
    await navigator.clipboard.writeText(contractAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section ref={ref} className="relative py-20 px-4 bg-gradient-to-b from-[#0D1117] to-[#1a1f2e]">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black font-mono mb-8 text-[#58A6FF]">Contract Address</h2>

          <motion.div
            className="bg-[#1a1f2e] border-2 border-[#58A6FF] rounded-xl p-6 mb-6"
            whileHover={{ borderColor: "#00A3FF" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between gap-4">
              <code className="text-sm md:text-base text-[#00A3FF] font-mono break-all">{contractAddress}</code>
              <motion.button
                onClick={handleCopy}
                className="flex-shrink-0 p-3 bg-[#58A6FF] hover:bg-[#00A3FF] text-[#0D1117] rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#58A6FF]/50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
              </motion.button>
            </div>
            {copied && (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-sm text-[#00A3FF] mt-3">
                ✓ Copied to clipboard!
              </motion.p>
            )}
          </motion.div>

          <p className="text-gray-400 text-sm">Built on Base Network • Powered by Chaos</p>
        </motion.div>
      </div>
    </section>
  )
})

export default ContractAddress
