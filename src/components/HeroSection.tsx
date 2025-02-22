import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: "Your Home",
    subtitle: "Away From Home",
    description: "Comfortable, secure, and affordable living for students & working professionals.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  // Add more slides here
];

const HeroSection = () => {
  return (
    <section className="pt-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        className="h-[calc(100vh-4rem)]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-50" />
              </div>
              
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-2xl">
                    <h1 className="text-5xl font-bold text-white mb-2">
                      {slide.title}
                    </h1>
                    <h2 className="text-6xl font-bold text-red-500 mb-6">
                      {slide.subtitle}
                    </h2>
                    <p className="text-xl text-white mb-8">
                      {slide.description}
                    </p>
                    <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all">
                      Book Admission Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;