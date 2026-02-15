"use client"

import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ContentsSection } from "@/components/contents-section"
import { AuthorSection } from "@/components/author-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { OrderSection } from "@/components/order-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ContentsSection />
        <AuthorSection />
        <TestimonialsSection />
        <FaqSection />
        <OrderSection />
      </main>
      <SiteFooter />
    </>
  )
}
