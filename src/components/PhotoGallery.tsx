import React, { useState } from 'react';
import clsx from 'clsx';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type TabType = 'common' | 'rooms' | 'dining' | 'study';

const tabs = [
  { id: 'common', label: 'Common Areas' },
  { id: 'rooms', label: 'Rooms & Beds' },
  { id: 'dining', label: 'Dining & Kitchen' },
  { id: 'study', label: 'Study Lounges & Gym' },
] as const;

const galleryImages = {
  common: [
    {
      src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Common Area 1"
    },
    {
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Common Area 2"
    },
    {
      src: "https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Common Area 3"
    }
  ],
  rooms: [
    {
      src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Room 1"
    },
    {
      src: "https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Room 2"
    },
    {
      src: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Room 3"
    }
  ],
  dining: [
    {
      src: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Dining Area 1"
    },
    {
      src: "https://images.unsplash.com/photo-1505275350441-83dcda8eeef5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Dining Area 2"
    },
    {
      src: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Kitchen"
    }
  ],
  study: [
    {
      src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Study Area 1"
    },
    {
      src: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Study Area 2"
    },
    {
      src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Gym"
    }
  ]
};

const PhotoGallery = () => {
  const [activeTab, setActiveTab] = useState<TabType>('common');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Photo Gallery</h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                'px-6 py-2 rounded-full transition-all duration-300',
                activeTab === tab.id
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages[activeTab].map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Image
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all">
            Explore Gallery
          </button>
        </div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={galleryImages[activeTab].map(img => ({ src: img.src }))}
        />
      </div>
    </section>
  );
};

export default PhotoGallery;