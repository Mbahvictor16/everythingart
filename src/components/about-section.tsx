"use client"

import { Button } from "@/components/ui/button"
import { Award, Heart, Palette, Users } from "lucide-react"
import Image from "next/image"

import img7 from '../../public/img7.jpg'
import img1 from '../../public/img1.jpg'
import img4 from '../../public/img4.jpg'
import img3 from '../../public/img3.jpg'

export default function AboutSection() {
  const features = [
    {
      icon: Palette,
      title: "Artisan Craftsmanship",
      description:
        "Each piece is meticulously handcrafted using traditional techniques passed down through generations.",
    },
    {
      icon: Heart,
      title: "Passionate Design",
      description:
        "Our designs are born from a deep love for textile art and a commitment to creating timeless beauty.",
    },
    // {
    //   icon: Award,
    //   title: "Award-Winning",
    //   description:
    //     "Recognized internationally for excellence in contemporary textile art and innovative design approaches.",
    // },
    {
      icon: Users,
      title: "Bespoke Service",
      description: "Personalized consultation and custom creations tailored to your unique vision and space.",
    },
  ]

  return (
    <section className="min-h-screen py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-amber-100 px-4 py-2 rounded-full border border-amber-200 mb-6">
            <span className="text-sm font-medium text-amber-800 tracking-wide">Our Story</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-stone-800 mb-6">
            Crafting Beauty Through
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Textile Mastery
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            For over three years, we have been at the forefront of luxury textile art, creating pieces that transcend
            ordinary decoration to become treasured heirlooms.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-stone-800">Where Tradition Meets Innovation</h3>
              <p className="text-lg text-stone-600 leading-relaxed">
                Our atelier combines time-honored weaving techniques with contemporary design sensibilities. Each
                creation tells a story of dedication, skill, and artistic vision that has been refined over decades of
                practice.
              </p>
              <p className="text-lg text-stone-600 leading-relaxed">
                From the selection of the finest natural fibers to the final finishing touches, every step of our
                process is guided by an unwavering commitment to excellence and beauty.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-stone-700 font-medium">Sustainable and ethically sourced materials</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-stone-700 font-medium">Limited edition and one-of-a-kind pieces</span>
              </div>
              {/* <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                <span className="text-stone-700 font-medium">International shipping and installation services</span>
              </div> */}
            </div>

            <Button
              onClick={() => {
                const footer = document.querySelector("footer")
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Schedule Consultation
            </Button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={img7}
                    alt="Artisan at work"
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={img1}
                    alt="Textile detail"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={img4}
                    alt="Studio workspace"
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={img3}
                    alt="Finished artwork"
                    width={300}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-center ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center space-y-4 p-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-stone-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-2xl">
                <feature.icon className="w-8 h-8 text-amber-700" />
              </div>
              <h4 className="text-xl font-serif text-stone-800">{feature.title}</h4>
              <p className="text-stone-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
