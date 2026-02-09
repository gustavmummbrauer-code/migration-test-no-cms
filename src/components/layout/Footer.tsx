import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import wisePelicanLogoWhite from "@/assets/wise-pelican-logo-white.svg";

const quickLinks = [
  { title: "About", href: "/about" },
  { title: "Industries", href: "/industries" },
  { title: "Products", href: "/products" },
  { title: "Case Studies", href: "/case-studies" },
];

const helpLinks = [
  { title: "FAQ", href: "/faq" },
  { title: "Contact Us", href: "/contact" },
  { title: "Terms & Conditions", href: "/terms" },
  { title: "Privacy Policy", href: "/privacy-policy" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
];

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us Column */}
          <div>
            <h4 className="font-semibold text-lg mb-2">About Us</h4>
            <div className="border-b border-dashed border-white/40 w-20 mb-4" />
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              The goal of Wise Pelican is simple: to make Direct Mail Marketing as simple and straightforward as possible for our customers.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
            <div className="border-b border-dashed border-white/40 w-20 mb-4" />
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-white/80 hover:text-primary transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Need Help? Column */}
          <div>
            <h4 className="font-semibold text-lg mb-2">Need Help?</h4>
            <div className="border-b border-dashed border-white/40 w-20 mb-4" />
            <ul className="space-y-2">
              {helpLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-white/80 hover:text-primary transition-colors text-sm">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo & Subscribe Column */}
          <div>
            <Link to="/" className="block mb-4">
              <img 
                src={wisePelicanLogoWhite} 
                alt="Wise Pelican" 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              Rooted in Real Estate, built for all entrepreneurs, small businesses, and marketing professionals.
            </p>
            <form className="flex gap-0">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-white border-0 text-foreground placeholder:text-muted-foreground rounded-l-full rounded-r-none h-10 text-sm"
              />
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-plum font-semibold rounded-l-none rounded-r-full h-10 px-5 text-sm">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-white/60">
            © {new Date().getFullYear()} Wise Pelican. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
