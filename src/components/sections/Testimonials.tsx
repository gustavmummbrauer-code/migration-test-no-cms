import { useState, useEffect } from "react";
import { Star } from "lucide-react";

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  image?: string;
  content: string;
  rating: number;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    name: "Gaye Watkins",
    company: "RE/MAX Integrity",
    content: "We have used them quite a bit recently. Their support is great, their turnaround is really amazing. I put my order in on Thursday and received a copy of the postcard on Tuesday. I will continue using them. GREAT VALUE and ROI",
    rating: 5,
  },
  {
    id: "2",
    name: "Kim Spencer",
    company: "Leading Edge Real Estate Group",
    content: "Love the quality of the postcards I've been using (which are generating results!) and the customer service from the Wise Pelican team. I've been a Realtor for 26 years and I believe they are the best of all I've utilized!! I get results in the market and they are the best at quick turnaround of customization!",
    rating: 5,
  },
  {
    id: "3",
    name: "Jen Beasley",
    company: "eXp Realty",
    content: "LOVE LOVE LOVE the quality of the postcards! We have used Wise Pelican for about 9 months to generate listing opportunities in our Real Estate market. We have been on so many listing appointments where the postcard we sent was sitting on the counter! When we have a question, we are able to chat or even talk by phone with a real person that knows how to solve our problem!",
    rating: 5,
  },
];

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  testimonials?: Testimonial[];
}

const Testimonials = ({
  title = "Testimonials",
  subtitle = "Here are a few of our favorite reviews:",
  description = "Wise Pelican direct mail customers rave about our beautiful real estate direct mail templates, our customer service, and – most importantly – the type of ROI they achieve with our postcards.",
  testimonials = defaultTestimonials,
}: TestimonialsProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Total slides equals total testimonials (infinite loop showing 2 at a time)
  const totalSlides = testimonials.length;

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  // Get testimonials for current slide - wraps around for infinite effect
  const getSlideTestimonials = (slideIndex: number) => {
    const first = testimonials[slideIndex];
    const second = testimonials[(slideIndex + 1) % testimonials.length];
    return [first, second];
  };

  const currentTestimonials = getSlideTestimonials(currentSlide);

  return (
    <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-[#F8F8FF] overflow-hidden relative">
      {/* Decorative curved lines */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary/30">
          <path
            d="M 0 100 Q 50 50 100 100 T 200 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M 0 120 Q 50 70 100 120 T 200 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-20">
        <svg viewBox="0 0 200 200" className="w-full h-full text-primary/30">
          <path
            d="M 0 100 Q 50 50 100 100 T 200 100"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          <path
            d="M 0 120 Q 50 70 100 120 T 200 120"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-[40px] md:leading-tight font-bold text-heading-accent mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-3xl mb-4">
            {description}
          </p>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        {/* Testimonial Cards Grid - Fixed height to prevent layout shift between slides */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-8 items-stretch">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-footer"
                  : "bg-footer/30 hover:bg-footer/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Separate card component for cleaner code
const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-footer text-white rounded-xl p-6 md:p-8 relative md:h-[340px] h-full flex flex-col">
      {/* Header with avatar, name, and quote icon */}
      <div className="flex items-start gap-4 mb-4">
        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-full bg-white/20 overflow-hidden border-2 border-white/30">
            {testimonial.image ? (
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-xl font-bold bg-primary/30">
                {testimonial.name.charAt(0)}
              </div>
            )}
          </div>
        </div>

        {/* Name and Company */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-sm tracking-wider uppercase truncate">
            {testimonial.name}
          </h3>
          <p className="text-white/70 text-sm truncate">{testimonial.company || testimonial.role}</p>
        </div>

        {/* Quote Icon - using primary/teal color */}
        <div className="flex-shrink-0">
          <svg
            viewBox="0 0 40 32"
            className="w-12 h-10 text-quote-accent"
            fill="currentColor"
          >
            <path d="M0 20.8C0 27.2 4.8 32 11.2 32C17.6 32 22.4 27.2 22.4 20.8C22.4 8 11.2 0 0 0V6.4C6.4 6.4 11.2 11.2 11.2 16C11.2 16 11.2 16 11.2 16C4.8 16 0 14.4 0 20.8ZM17.6 20.8C17.6 27.2 22.4 32 28.8 32C35.2 32 40 27.2 40 20.8C40 8 28.8 0 17.6 0V6.4C24 6.4 28.8 11.2 28.8 16C28.8 16 28.8 16 28.8 16C22.4 16 17.6 14.4 17.6 20.8Z" />
          </svg>
        </div>
      </div>

      {/* Stars - using design token for rating stars */}
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 text-rating fill-rating" />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-white/90 leading-relaxed text-sm md:text-base">
        "{testimonial.content}"
      </blockquote>
    </div>
  );
};

export default Testimonials;
