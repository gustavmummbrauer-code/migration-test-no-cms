import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import ctaBackground from "@/assets/cta-background.png";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  primaryCta?: {
    text: string;
    link: string;
  };
  secondaryCta?: {
    text: string;
    link: string;
  };
}

const CTASection = ({
  title = "Ready to Get Started?",
}: CTASectionProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - redirect to signup or process form
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      className="py-16 md:py-24 relative bg-cover bg-center"
      style={{
        backgroundImage: `url(${ctaBackground})`,
      }}
    >
      {/* Purple overlay */}
      <div className="absolute inset-0 bg-plum/80" />

      {/* Decorative curved dotted line */}
      <div className="absolute top-0 left-1/4 w-96 h-48 opacity-40 z-10">
        <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
          <path
            d="M50 180 Q 150 20, 300 100 T 380 30"
            stroke="#5AC8C8"
            strokeWidth="3"
            strokeDasharray="10 8"
            fill="none"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-white">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="italic font-normal">Ready to</span>{" "}
              <span className="text-primary">Get Started?</span>
            </h2>

            <p className="text-lg mb-4 leading-relaxed">
              Take the first step in generating leads with postcards by creating a Free
              Account. Simply fill out the form and you will be able to browse all of
              our templates!
            </p>

            <p className="text-lg mb-8">
              Still have a question? Feel free to reach out to us by chat, email, or
              phone.
            </p>

            <div className="space-y-4">
              <a
                href="tel:4807021600"
                className="flex items-center gap-3 text-white hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(480) 702-1600</span>
              </a>
              <a
                href="mailto:service@wisepelican.com"
                className="flex items-center gap-3 text-white hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>service@wisepelican.com</span>
              </a>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-primary rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName" className="text-plum font-semibold text-sm mb-2 block">
                    FIRST NAME *
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-0 h-12 rounded-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-plum font-semibold text-sm mb-2 block">
                    LAST NAME *
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-0 h-12 rounded-lg"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone" className="text-plum font-semibold text-sm mb-2 block">
                    PHONE *
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-0 h-12 rounded-lg"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-plum font-semibold text-sm mb-2 block">
                    EMAIL *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/90 border-0 h-12 rounded-lg"
                  />
                </div>
              </div>

              <p className="text-xs text-plum/80 leading-relaxed">
                By creating an account, I acknowledge and give my explicit consent to be contacted via SMS and
                receive emails for various purposes, which may include marketing and promotional content.
                Message and data rates may apply. Message frequency may vary. Reply STOP to opt-out or reply
                HELP for more information. Refer to our{" "}
                <Link to="/privacy-policy" className="underline hover:text-plum">
                  Privacy Policy
                </Link>{" "}
                for more information.
              </p>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-plum text-white hover:bg-plum-dark font-semibold px-8 py-3 rounded-full"
                >
                  Create Free Account
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
