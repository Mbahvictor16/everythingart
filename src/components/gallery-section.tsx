"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

import img1 from "../../public/img1.jpg"
import img2 from "../../public/img2.jpg"
import img3 from "../../public/img3.jpg"
import img4 from "../../public/img4.jpg"
import img5 from "../../public/img5.jpeg"
import img6 from "../../public/img6.jpg"
import img7 from "../../public/img7.jpg"
import img8 from "../../public/img8.jpg"
import img9 from "../../public/img9.jpeg"
import img10 from "../../public/img10.jpg"
import img11 from "../../public/img11.jpg"
import img12 from "../../public/img12.jpg"
import img13 from "../../public/img13.jpg"
import img14 from "../../public/img14.jpg"
import img15 from "../../public/img15.jpg"
import img16 from "../../public/img16.jpg"
import img17 from "../../public/img17.jpg"
import img18 from "../../public/img18.jpg"
import img19 from "../../public/img19.jpg"
import img20 from "../../public/img20.jpeg"


export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    { id: 1, title: img20, category: "Wall Hangings", size: "Large" },
    { id: 2, title: img2, category: "Tapestries", size: "Medium" },
    { id: 3, title: img3, category: "Wall Hangings", size: "Large" },
    { id: 4, title: img4, category: "Sculptures", size: "Small" },
    { id: 5, title: img5, category: "Tapestries", size: "Large" },
    { id: 6, title: img6, category: "Wall Hangings", size: "Medium" },
    { id: 7, title: img7, category: "Tapestries", size: "Large" },
    { id: 8, title: img8, category: "Sculptures", size: "Small" },
    { id: 9, title: img9, category: "Wall Hangings", size: "Large" },
    { id: 10, title: img10, category: "Tapestries", size: "Medium" },
    { id: 11, title: img11, category: "Wall Hangings", size: "Large" },
    { id: 12, title: img12, category: "Sculptures", size: "Small" },
    { id: 13, title: img13, category: "Wall Hangings", size: "Medium" },
    { id: 14, title: img14, category: "Tapestries", size: "Large" },
    { id: 15, title: img15, category: "Sculptures", size: "Small" },
    { id: 16, title: img16, category: "Tapestries", size: "Meduim" },
    { id: 17, title: img17, category: "Sculptures", size: "Large" },
    { id: 18, title: img18, category: "Wall Hangings", size: "Small" },
    { id: 19, title: img19, category: "Sculptures", size: "Medium" },
    { id: 20, title: img1, category: "Sculptures", size: "Large" }
  ]

  return (
    <section className="min-h-screen py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-50 to-amber-100 px-4 py-2 rounded-full border border-amber-200 mb-6">
            <span className="text-sm font-medium text-amber-800 tracking-wide">Our Collection</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-serif text-stone-800 mb-6">
            Gallery of
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-800">
              Masterpieces
            </span>
          </h2>
          <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of luxury textile artworks, each piece representing the pinnacle of
            craftsmanship and artistic vision.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className={`group cursor-pointer ${index % 7 === 0 ? "md:col-span-2 md:row-span-2" : index % 5 === 0 ? "lg:col-span-2" : ""
                }`}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]">
                <Image
                  src={image.title}
                  alt="Designs"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  {/* <h3 className="text-lg font-serif mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">
                    {image.category} • {image.size}
                  </p> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button
            onClick={() => {
              const footer = document.querySelector("footer")
              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-full text-lg font-medium tracking-wide shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Commission Custom Piece
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute -top-12 right-0 text-white hover:bg-white/20 z-10"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </Button>
            <div className="relative aspect-square rounded-2xl overflow-hidden">
              <Image
                src={galleryImages[selectedImage].title}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
              {/* <h3 className="text-2xl font-serif mb-2">{galleryImages[selectedImage].title}</h3>
              <p className="text-lg opacity-90">
                {galleryImages[selectedImage].category} • {galleryImages[selectedImage].size}
              </p> */}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
