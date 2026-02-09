import { useState } from "react";
import { ZoomIn } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

interface ProductGalleryProps {
  images: {
    src: string;
    alt: string;
  }[];
}

const ProductGallery = ({ images }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
        <span className="text-muted-foreground">No image available</span>
      </div>
    );
  }

  const mainImage = images[selectedImage];

  return (
    <div className="space-y-4">
      {/* Main Image with Zoom */}
      <Dialog>
        <DialogTrigger asChild>
          <div className="relative cursor-zoom-in group">
            <AspectRatio ratio={4 / 3} className="bg-muted rounded-lg overflow-hidden">
              <img
                src={mainImage.src}
                alt={mainImage.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </AspectRatio>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn className="w-5 h-5 text-foreground" />
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-4xl p-0 overflow-hidden">
          <img
            src={mainImage.src}
            alt={mainImage.alt}
            className="w-full h-auto"
          />
        </DialogContent>
      </Dialog>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? "border-primary ring-2 ring-primary/20"
                  : "border-transparent hover:border-muted-foreground/30"
              }`}
            >
              <AspectRatio ratio={1} className="bg-muted">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
