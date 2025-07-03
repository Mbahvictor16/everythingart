"use client"

import { useEffect, useState } from "react"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import GallerySection from "@/components/gallery-section"
import Footer from "@/components/footer"

export default function Home() {
    const [activeSection, setActiveSection] = useState("home")

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["home", "about", "gallery"]
            const scrollPosition = window.scrollY + 100

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section)
                        break
                    }
                }
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100">
            <Navigation activeSection={activeSection} />

            <main className="relative">
                <section id="home">
                    <HeroSection />
                </section>

                <section id="about">
                    <AboutSection />
                </section>

                <section id="gallery">
                    <GallerySection />
                </section>
            </main>

            <Footer />
        </div>
    )
}
