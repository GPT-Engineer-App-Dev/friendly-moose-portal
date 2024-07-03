import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const images = [
  "/images/moose1.jpg",
  "/images/moose2.jpg",
  "/images/moose3.jpg",
  // Add more image paths as needed
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <Dialog key={index} onOpenChange={(open) => !open && setSelectedImage(null)}>
            <DialogTrigger asChild>
              <img
                src={src}
                alt={`Moose ${index + 1}`}
                className="cursor-pointer w-full h-48 object-cover"
                onClick={() => setSelectedImage(src)}
              />
            </DialogTrigger>
            <DialogContent>
              <img src={selectedImage} alt="Selected Moose" className="w-full h-auto" />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default Gallery;