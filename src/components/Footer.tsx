
import { MapPin, Phone, Mail, Globe, Facebook, Instagram, Linkedin } from "lucide-react";
import { Separator } from "./ui/separator";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#ea384c] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
            <p className="text-white/80 text-sm">
              Techware is a leading provider of enterprise technology solutions, dedicated to helping businesses transform and thrive in the digital age.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Locations</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  <span className="font-semibold">Abuja:</span> 1, Anthony Enahoro Street, Utako, Abuja
                </p>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                <p className="text-white/80">
                  <span className="font-semibold">Lagos:</span> 16 kafayat abdulrazaq Street, Lekki phase 1 Lagos state
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>+234 905 220 3335</p>
                  <p>+234 803 246 4859</p>
                  <p>+234 811 110 1484</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>info@techware.ng</p>
                  <p>marketing@techware.ng</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Globe className="w-4 h-4 text-white/80 mt-1 flex-shrink-0" />
                <a href="https://www.techware.ng" className="text-white/80 hover:text-white">
                  www.techware.ng
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/Officialtechware.ng/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/officialtechware.ng/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://ng.linkedin.com/company/techware-professional-services-ltd" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/80 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <Separator className="my-8 bg-white/10" />
        <div className="text-center text-sm text-white/80">
          <p>&copy; {currentYear} Techware. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
