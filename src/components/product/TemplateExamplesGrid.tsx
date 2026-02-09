import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

interface TemplateExample {
  src: string;
  alt: string;
  href?: string;
}

interface TemplateExamplesGridProps {
  title: string;
  examples: TemplateExample[];
  ctaText?: string;
  ctaLink?: string;
}

const TemplateExamplesGrid = ({
  title,
  examples,
  ctaText = "Browse All Templates",
  ctaLink = "/signup",
}: TemplateExamplesGridProps) => {
  const [selectedImage, setSelectedImage] = useState<TemplateExample | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  
  // Duplicate examples for seamless loop
  const duplicatedExamples = [...examples, ...examples];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer || isPaused) return;

    let animationId: number;
    let scrollPosition = 0;
    const speed = 0.5; // pixels per frame - nice and slow

    const animate = () => {
      scrollPosition += speed;
      
      // Reset scroll when we've scrolled through first set of items
      const halfWidth = scrollContainer.scrollWidth / 2;
      if (scrollPosition >= halfWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isPaused, examples]);

  return (
    <>
      <section className="py-12 md:py-16 overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-[40px] md:leading-tight font-bold text-center text-heading-accent mb-8">
            {title}
          </h2>
        </div>

        {/* Auto-scrolling carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-hidden cursor-pointer"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollBehavior: "auto" }}
        >
          {duplicatedExamples.map((example, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(example)}
              className="flex-shrink-0 w-48 md:w-64 lg:w-72 group relative aspect-[4/5] rounded-lg overflow-hidden bg-muted border border-border hover:border-primary transition-all duration-300 hover:shadow-lg"
            >
              <img
                src={example.src}
                alt={example.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-background/90 text-foreground text-sm font-medium px-3 py-1.5 rounded-full">
                  Click to enlarge
                </span>
              </div>
            </div>
          ))}
        </div>

        {ctaText && (
          <div className="container mx-auto px-4">
            <div className="text-center mt-8">
              <Link
                to={ctaLink}
                className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                {ctaText}
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        )}
      </section>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
          <DialogClose className="absolute top-4 right-4 z-10 p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
            <X className="w-6 h-6" />
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TemplateExamplesGrid;
