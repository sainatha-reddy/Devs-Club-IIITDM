import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';
import Image from 'next/image';

// Gallery images from public/assets/gallery/ folder
// Add your images to public/assets/gallery/ and reference them with paths starting with '/assets/gallery/'
const galleryImages = [
  {
    id: 1,
    src: '/assets/gallery/1.jpg',
    alt: ''
  },
  {
    id: 2,
    src: '/assets/gallery/2.jpg',
    alt: ''
  },
  {
    id: 3,
    src: '/assets/gallery/3.jpg',
    alt: ''
  },
  {
    id: 4,
    src: '/assets/gallery/4.jpg',
    alt: ''
  },
  {
    id: 5,
    src: '/assets/gallery/5.jpg',
    alt: ''
  },
  {
    id: 6,
    src: '/assets/gallery/6.JPG',
    alt: ''
  }
];

// When you add images to public/assets/gallery/, update the array like this:
// const galleryImages = [
//   { id: 1, src: '/assets/gallery/1.jpg', alt: 'Hackathon Event 1' },
//   { id: 2, src: '/assets/gallery/2.jpg', alt: 'Hackathon Event 2' },
//   // ... add more images
// ];

export const Gallery = () => {
  return (
    <section className="py-10 md:py-20 relative overflow-hidden" id='Gallery'>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />

      <div className="relative container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 mb-4 md:mb-6 pixel-font">
            Gallery
          </h2>
          <p className="text-cyan-100 text-sm md:text-lg max-w-2xl mx-auto">
            Relive the amazing moments from our previous hackathons
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group overflow-hidden rounded-lg cursor-pointer h-[250px] md:h-[300px]"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
                <div className="flex items-center gap-2 text-white">
                  <ImageIcon className="w-4 h-4" />
                  <span className="text-sm font-medium">{image.alt}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

