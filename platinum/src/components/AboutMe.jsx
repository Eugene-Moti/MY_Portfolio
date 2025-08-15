import React from 'react'
import { FaGoogle, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";



export default function AboutMe() {
  const certifications = [
    {
      name: 'Front-End Web Development',
      issuer: 'ALX',
      link: 'https://savanna.alxafrica.com/certificates/CE8B5fFhN7',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
    },
    {
      name: 'Professional Foundations',
      issuer: 'ALX',
      link: 'https://savanna.alxafrica.com/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBNUVsSnc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6c77ae9cf05bc719245765b24dce10a9c99cf920/89-professional-foundations-certificate-erick-moti.png',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s',
      image: '/PRO.png'
    },
    {
      name: 'UI / UX for Beginners',
      issuer: 'GREAT LEARNING',
      link: 'https://www.mygreatlearning.com/certificate/GCRUXZOP',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s',
      image: '/GREAT.png',
    },
    {
      name: 'ALX AI Starter Kit',
      issuer: 'ALX',
      link: 'https://savanna.alxafrica.com/certificates/cny5pJFxzr',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
    },
    {
      name: 'Digital Marketing',
      issuer: 'Udemy',
      link: 'https://coursera.org/verify/meta-frontend-certification',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAGllHM_06tkceB-8rg2x8PV1yK52frVK0CQ&s'
    },
    {
      name: 'UI/UX Design',
      issuer: 'ALX',
      link: 'https://www.linkedin.com/learning/certificates/your-certificate-id',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuu4n2VgSLyv70udhzHGObeyK8CrxZi9YBNQ&s'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Building Digital Products, <br />
              Optimizing Brands & Creating User-Centered <br />
              <span className="inline-flex items-center gap-2">
                <span className="text-cyan-300">🛠</span>
                <span className="text-cyan-700">Experiences.</span>
              </span>
            </h1>
            <p className="text-gray-700 text-lg">
              I am a passionate and detail-oriented <strong>Frontend Web Developer</strong> with a strong foundation in <strong>UI/UX design, software development, and digital marketing.</strong> <br />
              My work focuses on creating intuitive, responsive, and visually appealing web applications while delivering seamless user experiences. I thrive on solving complex problems, collaborating with teams, and continually learning emerging technologies.<br />
              
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 w-full sm:w-auto border border-gray-300 rounded-md shadow-sm focus:outline-none"
              />
              <button className="bg-cyan-800 hover:bg-cyan-600 text-white px-6 py-3 rounded-md">
                Connect With Me
              </button>
            </div>
          </div>
          <div className="flex-1 relative">
            <img
              src="/Me.png"
              alt="designer"
              className="rounded-xl w-full max-w-sm lg:max-w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16 text-black">
          <div className="text-center">
            <h2 className="text-4xl font-extrabold text-cyan-800 mb-4">✨ About Me</h2>
            <p className="text-lg max-w-3xl mx-auto">
              I am a passionate and detail-oriented Frontend Web Developer with a strong foundation in UI/UX design, software development, and digital marketing.
My work focuses on creating intuitive, responsive, and visually appealing web applications while delivering seamless user experiences. I thrive on solving complex problems, collaborating with teams, and continually learning emerging technologies.
            </p>
          </div>


{/* Education */}
<div className="space-y-4 animate-fade-in-up">
  <h3 className="text-2xl font-semibold flex items-center gap-2">
    🎓 Education Background
  </h3>
  
  <div className="space-y-3 text-lg">
    <p>
      <strong className="text-primary">Bachelor of Science in Information Technology</strong>  
      <span className="text-gray-600"> — The Co-operative University of Kenya</span>
    </p>
    <p>
      <strong className="text-primary">Pro-Dev Frontend Web Developer</strong>  
      <span className="text-gray-600"> — ALX</span>
    </p>
    <p>
      <strong className="text-primary">UI/UX Design</strong>  
      <span className="text-gray-600"> — Great Learning</span>
    </p>
    <p>
      <strong className="text-primary">Kenya Certificate of Secondary Education (B-Plain)</strong>  
      <span className="text-gray-600"> — Kitonyini High School</span>
    </p>
  </div>
</div>



          {/* Certifications */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">📜 Certifications</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <a
                  key={index}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex flex-col items-center border rounded-lg shadow-md p-6 hover:scale-105 hover:z-10 hover:shadow-2xl transform transition duration-300 hover:glitter"
                >
                  <img src={cert.image || cert.logo} alt={cert.issuer} className="h-50 w-75 mb-4 object-contain" />
                  <h4 className="text-lg font-bold text-purple-600">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.issuer}</p>
                </a>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
  <h3 className="text-2xl font-semibold text-purple-800 flex items-center gap-2">
    💼 Work Background
  </h3>
  
  <div className="space-y-4">

    {/* Google Internship */}
          <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-blue-500">
            <div className="flex items-center mb-2 text-blue-600 font-semibold text-lg">
              <FaGoogle className="mr-2" /> Google – UX Engineer Intern
            </div>
            <p className="text-sm text-gray-600 italic mb-1">Summer 2024</p>
            <p className="text-gray-700">Redesigned internal tools, increasing productivity by <span className="font-semibold text-green-600">25%</span>.</p>
          </div>

          {/* Freelance Work */}
          <div className="p-4 bg-white rounded-lg shadow-md border-l-4 border-green-500">
            <div className="flex items-center mb-2 text-green-600 font-semibold text-lg">
              <FaLaptopCode className="mr-2" /> Freelance – Frontend Developer
            </div>
            <p className="text-sm text-gray-600 italic mb-1">2022 - 2025</p>
            <p className="text-gray-700">Delivered <span className="font-semibold">scalable</span> React apps with <span className="font-semibold text-purple-600">pixel-perfect</span> UI.</p>
          </div>

        </div>
      </div>

          {/* Skills & Tools */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">🛠 Skills & Tools</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
              <div>
                <h4 className="text-purple-700 font-bold mb-2">Languages</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>JavaScript</li>
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>Python</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-700 font-bold mb-2">Frameworks & Libraries</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>React</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js</li>
                  <li>Express.js</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-700 font-bold mb-2">Tools & Platforms</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Git & GitHub</li>
                  <li>Figma</li>
                  <li>Firebase</li>
                  <li>VS Code</li>
                </ul>
              </div>
              <div>
                <h4 className="text-purple-700 font-bold mb-2">Soft Skills</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Creative Problem Solving</li>
                  <li>Communication</li>
                  <li>Teamwork</li>
                  <li>Leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

