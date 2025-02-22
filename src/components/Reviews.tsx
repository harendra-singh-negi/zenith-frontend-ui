import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Star } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const reviews = [
  {
    text: "Affordable pricing and great food options!",
    author: "Neha",
    role: "Working Professional",
    rating: 5,
  },
  {
    text: "One of the best hostels! Safe, clean, and well-maintained.",
    author: "Amit",
    role: "2nd year student",
    rating: 5,
  },
  {
    text: "Great community and amazing study spaces. Perfect for focused learning!",
    author: "Priya",
    role: "Final year student",
    rating: 5,
  },
  {
    text: "The facilities are top-notch and staff is very helpful.",
    author: "Rahul",
    role: "Working Professional",
    rating: 5,
  },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-lg mx-4 my-8 transform hover:-translate-y-1 transition-transform duration-300">
      <div className="flex justify-center mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <Star
            key={i}
            className="w-6 h-6 text-yellow-400 fill-current"
          />
        ))}
      </div>
      
      <p className="text-gray-600 text-center italic mb-6">
        "{review.text}"
      </p>
      
      <div className="text-center">
        <h4 className="font-semibold text-lg text-gray-900">{review.author}</h4>
        <p className="text-gray-500 text-sm">{review.role}</p>
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Reviews</h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-16"
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;