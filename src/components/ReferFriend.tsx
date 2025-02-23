import React, { useState } from 'react';
import { Share2, Gift } from 'lucide-react';

const ReferFriend = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Referral submitted:', formData);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left side - Form */}
            <div className="w-full lg:w-1/2">
              <div className="max-w-md">
                <h2 className="text-4xl font-bold mb-2">
                  Refer A <span className="text-red-500">Friend!</span>
                </h2>
                <p className="text-gray-600 mb-8">
                  Enter Friend's Details
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-0"
                      placeholder="Full Name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-0"
                      placeholder="Email"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-0"
                      placeholder="Phone"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-100 border-transparent focus:border-red-500 focus:bg-white focus:ring-0"
                      placeholder="Address"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all"
                  >
                    Submit Now
                  </button>
                </form>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                alt="Friends enjoying together"
                className="w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferFriend;