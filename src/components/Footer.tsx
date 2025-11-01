import logo from "@/assets/rasoi-track-logo.png";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground/5 border-t border-border">
      <div className="container px-4 sm:px-6 py-10 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8">
          {/* Brand Column */}
          <div className="space-y-3 sm:space-y-4">
            <img src={logo} alt="Rasoi Track" className="h-14 sm:h-16 w-auto" />
            <p className="text-xs sm:text-sm text-muted-foreground">
              The modern POS system designed to help restaurants thrive in the
              digital age.
            </p>
            <div className="flex space-x-2 sm:space-x-3">
              <a
                href="#"
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors touch-manipulation"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-4 sm:w-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors touch-manipulation"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 sm:h-4 sm:w-4 text-primary" />
              </a>
              <a
                href="https://www.instagram.com/rasoitrack.in"
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-4 sm:w-4 text-primary" />
              </a>
              <a
                href="#"
                className="w-10 h-10 sm:w-9 sm:h-9 rounded-lg bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-4 sm:w-4 text-primary" />
              </a>
            </div>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-base text-foreground">About Us</h3>
            <ul className="space-y-2 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1 touch-manipulation"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1 touch-manipulation"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1 touch-manipulation"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1 touch-manipulation"
                >
                  Press Kit
                </a>
              </li>
            </ul>
          </div>

          {/* Features Column */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-base text-foreground">Features</h3>
            <ul className="space-y-2 sm:space-y-2">
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1 touch-manipulation"
                >
                  Billing & Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1 touch-manipulation"
                >
                  Menu Management
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1 touch-manipulation"
                >
                  Inventory Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block py-1 touch-manipulation"
                >
                  Sales Reports
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="font-semibold mb-3 sm:mb-4 text-base sm:text-base text-foreground">Contact Us</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mt-0.5 sm:mt-0.5 text-primary flex-shrink-0" />
                <span className="break-all">connect@rasoitrack.in</span>
              </li>
              <li className="flex items-start space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mt-0.5 sm:mt-0.5 text-primary flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start space-x-2 text-xs sm:text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 sm:mt-0.5 text-primary flex-shrink-0" />
                <span>Indore, Madhya Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0 gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Rasoi Track. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors touch-manipulation"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
