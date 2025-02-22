import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const brands = [
  {
    name: "Shells",
    logo: "https://placehold.co/200x80?text=Shells&font=roboto",
  },
  {
    name: "SmartFinder",
    logo: "https://placehold.co/200x80?text=SmartFinder&font=roboto",
  },
  {
    name: "Zoomerr",
    logo: "https://placehold.co/200x80?text=Zoomerr&font=roboto",
  },
  {
    name: "ArtVenue",
    logo: "https://placehold.co/200x80?text=ArtVenue&font=roboto",
  },
  {
    name: "kontrastr",
    logo: "https://placehold.co/200x80?text=kontrastr&font=roboto",
  },
  {
    name: "WavesMarathon",
    logo: "https://placehold.co/200x80?text=WavesMarathon&font=roboto",
  }
];

const BrandCollaboration = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            <span className="text-red-500">Brand</span> Collaboration
          </h2>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="py-8"
        >
          {brands.map((brand, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-20 px-4 grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default BrandCollaboration;