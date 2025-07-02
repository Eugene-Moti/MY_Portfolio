// Services.jsx
import React from "react";

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Service Card */}
          <div className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-600 mb-4">
              Building responsive and engaging websites tailored to your needs.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More
            </a>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-600 mb-4">
              Crafting user-friendly interfaces and experiences.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More
            </a>
          </div>
          <div className="border rounded-lg p-6 hover:shadow-md transition">
            <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
            <p className="text-gray-600 mb-4">
              Helping you reach more customers online effectively.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
