import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_5e7wx5g',
        'template_0ccho9k',
        form.current,
        'Dca5GujxtGglTpbPR'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('✅ Message sent successfully!');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          alert('❌ Something went wrong. Please try again.');
        }
      );
  };

  return (
    <section className="min-h-screen bg-cyan-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <div>
          <p className="text-cyan-800 font-semibold text-sm">GET IN TOUCH</p>
          <h2 className="text-3xl font-bold text-cyan-800 mt-2 mb-8">
            We're here to answer your questions!
          </h2>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-1">Name <span className="text-red-500">*</span></label>
              <input
                type="text"
                name="user_name"
                placeholder="Jane Smith"
                className="w-full border px-4 py-2 rounded-md"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-1">Email address <span className="text-red-500">*</span></label>
              <input
                type="email"
                name="user_email"
                placeholder="email@website.com"
                className="w-full border px-4 py-2 rounded-md"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold mb-1">Phone number <span className="text-red-500">*</span></label>
              <input
                type="tel"
                name="user_phone"
                placeholder="55-555-5555"
                className="w-full border px-4 py-2 rounded-md"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-1">Message</label>
              <textarea
                name="message"
                rows="5"
                className="w-full border px-4 py-2 rounded-md"
                placeholder="Write your message..."
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" required />
              <label className="text-sm">
                I allow this website to store my submission so they can respond to my inquiry. <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-cyan-800 hover:bg-cyan-700 text-white w-full py-3 rounded-md font-semibold"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Right: Contact Info */}
        <div className="space-y-6 text-gray-700">
          {/* Map */}
          <div className="w-full h-64 md:h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d45128.41476193966!2d36.80567627965711!3d-1.277889256498067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1751537705453!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div>
            <h3 className="font-bold text-black mb-1">Get in touch</h3>
            <p>
              <a href="mailto:erickmoti3609@gmail.com" className="underline text-cyan-800">
                erickmoti3609@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-1">Location</h3>
            <p>
              <a
                href="https://maps.google.com/?q=Nairobi, 30 KE"
                target="_blank"
                rel="noreferrer"
                className="underline text-cyan-800"
              >
                Nairobi, 30 KE
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-bold text-black mb-1">Hours</h3>
            <ul className="text-sm space-y-1">
              <li>Monday – Friday: 9:00am – 10:00pm</li>
              <li>Saturday: 9:00am – 6:00pm</li>
              <li>Sunday: 9:00am – 10:00pm</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
