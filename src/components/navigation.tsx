"use client"

import { Button } from "@/components/ui/button"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "gallery", label: "Gallery" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80 // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <div className="w-8 h-8 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full"></div>
            <span className="text-2xl font-serif text-stone-800 tracking-wide">EverythingArt</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`text-base font-medium tracking-wide transition-all duration-300 ${activeSection === item.id
                  ? "text-amber-700 border-b-2 border-amber-700 rounded-none"
                  : "text-stone-600 hover:text-amber-700"
                  }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <Button
            onClick={() => scrollToSection("footer")}
            className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-2 rounded-full font-medium tracking-wide shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Contact
          </Button>
        </div>
      </div>
    </nav>
  )
}
