import React from 'react';
import { Bed, Bath, SquareCode } from 'lucide-react';

const rooms = [
  {
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Deluxe Twin Sharing Room",
    description: "Modern comfort with twin beds, perfect for students",
    beds: 3,
    baths: 2,
    area: 1980,
  },
  {
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Premium Single Room",
    description: "Private space with all amenities",
    beds: 3,
    baths: 2,
    area: 1980,
  },
  {
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Standard Triple Sharing",
    description: "Economical option with shared facilities",
    beds: 3,
    baths: 2,
    area: 1980,
  },
  {
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Executive Single Room",
    description: "Premium living for working professionals",
    beds: 3,
    baths: 2,
    area: 1980,
  },
  {
    image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Deluxe Double Room",
    description: "Spacious room with modern amenities",
    beds: 3,
    baths: 2,
    area: 1980,
  },
  {
    image: "https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    title: "Premium Triple Room",
    description: "Luxury sharing accommodation",
    beds: 3,
    baths: 2,
    area: 1980,
  },
];

const RoomCard = ({ room }: { room: typeof rooms[0] }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={room.image}
          alt={room.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
        <p className="text-gray-600 mb-4">{room.description}</p>
        
        <div className="flex items-center gap-4 text-gray-600 mb-6">
          <div className="flex items-center gap-1">
            <Bed className="w-5 h-5" />
            <span>{room.beds} Bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-5 h-5" />
            <span>{room.baths} Bath</span>
          </div>
          <div className="flex items-center gap-1">
            <SquareCode className="w-5 h-5" />
            <span>{room.area} Sq Ft</span>
          </div>
        </div>
        
        <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition-colors">
          More Info
        </button>
      </div>
    </div>
  );
};

const BookStay = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Book Your <span className="text-red-500">Stay With Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={index} room={room} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-red-600 hover:to-orange-600 transition-all">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default BookStay;