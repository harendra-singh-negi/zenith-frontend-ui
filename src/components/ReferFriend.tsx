import React, { useState } from 'react';

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
    <section className="relative min-h-screen bg-white">
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: '0.9'
        }}
      />

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-md">
          {/* Heading Section - Outside the form card */}
          <h2 className="text-4xl font-bold mb-2 text-gray-900">
            Refer A <span className="text-red-500">Friend!</span>
          </h2>
          <p className="text-gray-700 mb-8">Enter Friend's Details</p>

          {/* Form Section */}
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Enter full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Enter email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Enter phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    placeholder="Enter address"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg hover:from-red-600 hover:to-orange-600 transition-all font-medium text-lg"
              >
                Submit Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReferFriend;