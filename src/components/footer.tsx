import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer id="footer" className="bg-gradient-to-br from-stone-900 to-stone-800 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full"></div>
              <span className="text-2xl font-serif tracking-wide">EverythingArt</span>
            </div>
            <p className="text-stone-300 leading-relaxed max-w-md">
              Creating extraordinary textile artworks that transform spaces and inspire souls. Each piece is a testament
              to the beauty of handcrafted luxury.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-stone-700 hover:bg-amber-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-stone-700 hover:bg-amber-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-stone-700 hover:bg-amber-600 rounded-full flex items-center justify-center cursor-pointer transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif text-amber-400">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amber-400" />
                <span className="text-stone-300">08083142655</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amber-400" />
                <span className="text-stone-300">ogaborfaith5@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-amber-400 mt-1" />
                <span className="text-stone-300">
                  Lagos, Nigeria
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="text-xl font-serif text-amber-400">Services</h4>
            <div className="space-y-3">
              <div className="text-stone-300 hover:text-amber-400 cursor-pointer transition-colors duration-300">
                Custom Commissions
              </div>
              <div className="text-stone-300 hover:text-amber-400 cursor-pointer transition-colors duration-300">
                Interior Consultation
              </div>
              <div className="text-stone-300 hover:text-amber-400 cursor-pointer transition-colors duration-300">
                Art Installation
              </div>
              <div className="text-stone-300 hover:text-amber-400 cursor-pointer transition-colors duration-300">
                Restoration Services
              </div>
              <div className="text-stone-300 hover:text-amber-400 cursor-pointer transition-colors duration-300">
                Workshops
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm">&copy; 2025 EverythingArt. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="text-stone-400 hover:text-amber-400 cursor-pointer text-sm transition-colors duration-300">
              Privacy Policy
            </span>
            <span className="text-stone-400 hover:text-amber-400 cursor-pointer text-sm transition-colors duration-300">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
