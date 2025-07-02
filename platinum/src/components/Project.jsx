// Project.jsx
import React from "react";

const Project = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Example Project Card */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-600 mb-4">
              A brief description of the project showcasing what was achieved.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              View Details
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-600 mb-4">
              Another description of a project and the impact it made.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              View Details
            </a>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2">Project Three</h3>
            <p className="text-gray-600 mb-4">
              Description highlighting key features of this project.
            </p>
            <a
              href="#"
              className="inline-block text-blue-600 hover:text-blue-800 font-medium"
            >
              View Details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
