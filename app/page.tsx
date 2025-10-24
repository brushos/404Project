"use client"

import { useRef } from "react"
import Hero from "@/components/hero"
import About from "@/components/about"
import ContractAddress from "@/components/contract-address"
import Footer from "@/components/footer"

export default function Home() {
  const contractRef = useRef<HTMLDivElement>(null)

  const scrollToContract = () => {
    contractRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Hero onJoinClick={scrollToContract} />
      <About />
      <ContractAddress ref={contractRef} />
      <Footer />
    </main>
  )
}
