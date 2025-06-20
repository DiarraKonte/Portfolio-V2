'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const Zoom = ({ images }: { images: { src: string; alt: string }[] }) => {
  const [zoomedImage, setZoomedImage] = useState<{ src: string; alt: string } | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = (imageSrc: string, imageAlt: string) => {
    setZoomedImage({ src: imageSrc, alt: imageAlt });
    setIsZoomed(true);
  };

  const closeZoom = () => {
    setIsZoomed(false);
    setTimeout(() => setZoomedImage(null), 300);
  };

  // Variantes pour le modal de zoom
  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      {/* Vos images cliquables */}
      {images.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut" 
          }}
          whileHover={{ scale: 1.02 }}
          className="cursor-zoom-in"
          onClick={() => handleImageClick(img.src, img.alt)}
        >
          <Image
            src={img.src}
            alt={img.alt}
            width={800}
            height={500}
            className="rounded-xl shadow-lg transition-all duration-300 ease-in-out object-cover hover:shadow-2xl"
          />
        </motion.div>
      ))}

      {/* Modal de zoom */}
      <AnimatePresence>
        {isZoomed && zoomedImage && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeZoom}
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                onClick={closeZoom}
                className="absolute -top-12 right-0 text-white/80 hover:text-white text-2xl bg-black/50 rounded-full w-10 h-10 flex items-center justify-center backdrop-blur-sm transition-colors z-10"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                ×
              </motion.button>
              <Image
                src={zoomedImage.src}
                alt={zoomedImage.alt}
                width={1200}
                height={800}
                className="rounded-xl shadow-2xl max-w-full max-h-[90vh] object-contain"
                priority
              />
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-white/80 text-center mt-4 text-sm"
              >
                {zoomedImage.alt}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Zoom;