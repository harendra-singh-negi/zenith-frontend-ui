import React, { useState } from 'react';
import { Check } from 'lucide-react';

type Step = {
  title: string;
  fields: {
    name: string;
    label: string;
    type: string;
    placeholder: string;
  }[];
};

const steps: Step[] = [
  {
    title: "Contact details",
    fields: [
      {
        name: "name",
        label: "Name",
        type: "text",
        placeholder: "John Carter"
      },
      {
        name: "email",
        label: "Email",
        type: "email",
        placeholder: "Email address"
      },
      {
        name: "phone",
        label: "Phone",
        type: "tel",
        placeholder: "(123) 456 - 7890"
      },
      {
        name: "company",
        label: "Company",
        type: "text",
        placeholder: "Company name"
      }
    ]
  },
  {
    title: "Room Preferences",
    fields: [
      {
        name: "roomType",
        label: "Room Type",
        type: "select",
        placeholder: "Select room type"
      },
      {
        name: "duration",
        label: "Stay Duration",
        type: "text",
        placeholder: "How long do you plan to stay?"
      }
    ]
  },
  {
    title: "Additional Details",
    fields: [
      {
        name: "moveInDate",
        label: "Move-in Date",
        type: "date",
        placeholder: "Select date"
      },
      {
        name: "requirements",
        label: "Special Requirements",
        type: "textarea",
        placeholder: "Any special requirements?"
      }
    ]
  },
  {
    title: "Confirmation",
    fields: [
      {
        name: "terms",
        label: "I agree to the terms and conditions",
        type: "checkbox",
        placeholder: ""
      }
    ]
  }
];

const EnquiryForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center mb-5">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Form Card */}
      <div className="relative w-full max-w-2xl mx-3 bg-white shadow-2xl rounded-2xl overflow-hidden mt-[400px]">
        {/* Header */}
        <div className="px-8 pt-8 pb-4 text-center">
          <h2 className="text-4xl font-bold">
            Make An <span className="text-red-500">Enquiry</span>
          </h2>
        </div>

        {/* Stepper */}
        <div className="flex justify-between items-center px-10 pb-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center w-full">
              <div
                className={`w-8 h-8 flex items-center justify-center rounded-full text-white ${index <= currentStep ? 'bg-red-500' : 'bg-gray-300'
                  }`}
              >
                {index < currentStep ? <Check size={20} /> : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div className={`w-full h-1 ${index < currentStep ? 'bg-red-500' : 'bg-gray-300'}`} />
              )}
            </div>
          ))}
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <div className="px-10 pb-10">
            <h3 className="text-xl font-semibold mb-4">{steps[currentStep].title}</h3>
            <p className="text-gray-500 mb-6">Please fill in the required information below.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps[currentStep].fields.map((field) => (
                <div key={field.name} className={field.type === 'textarea' ? 'md:col-span-2' : ''}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    {field.label}
                  </label>
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      id={field.name}
                      name={field.name}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                    >
                      <option value="">{field.placeholder}</option>
                      <option value="single">Single Room</option>
                      <option value="double">Double Room</option>
                      <option value="triple">Triple Room</option>
                    </select>
                  ) : field.type === 'checkbox' ? (
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id={field.name}
                        name={field.name}
                        className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"
                        onChange={handleInputChange}
                      />
                      <label
                        htmlFor={field.name}
                        className="ml-2 block text-sm text-gray-700"
                      >
                        {field.label}
                      </label>
                    </div>
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      value={formData[field.name] || ''}
                      onChange={handleInputChange}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-8 flex justify-between">
              {currentStep > 0 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                type="button"
                onClick={currentStep === steps.length - 1 ? handleSubmit : handleNext}
                className={`px-6 py-2 rounded-lg text-white bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 transition-colors ${currentStep === 0 ? 'ml-auto' : ''
                  }`}
              >
                {currentStep === steps.length - 1 ? 'Submit' : 'Next'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EnquiryForm;
