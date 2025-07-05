"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

import img9 from '../../public/img9.jpeg'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-stone-50 to-amber-50"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23D4AF37' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-amber-100 px-4 py-2 rounded-full border border-amber-200">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-800 tracking-wide">Luxury Textile Artistry</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-serif text-stone-800 leading-tight">
                Exquisite
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
                  Textile Art
                </span>
              </h1>

              <p className="text-xl text-stone-600 leading-relaxed max-w-lg">
                Discover our collection of handcrafted textile masterpieces, where traditional techniques meet
                contemporary luxury design.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  const element = document.getElementById("gallery")
                  if (element) {
                    const offsetTop = element.offsetTop - 80
                    window.scrollTo({ top: offsetTop, behavior: "smooth" })
                  }
                }}
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                Explore Collection
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onClick={() => {
                  const element = document.getElementById("about")
                  if (element) {
                    const offsetTop = element.offsetTop - 80
                    window.scrollTo({ top: offsetTop, behavior: "smooth" })
                  }
                }}
                variant="outline"
                className="border-2 border-stone-300 text-stone-700 hover:bg-stone-50 px-8 py-4 rounded-full text-lg font-medium tracking-wide transition-all duration-300 bg-transparent"
              >
                Our Story
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-stone-200">
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-700 mb-1">2+</div>
                <div className="text-sm text-stone-600 tracking-wide">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-700 mb-1">30+</div>
                <div className="text-sm text-stone-600 tracking-wide">Unique Pieces</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif text-amber-700 mb-1">15+</div>
                <div className="text-sm text-stone-600 tracking-wide">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={img9}
                alt="Luxury textile art piece"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-stone-400 to-stone-600 rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
