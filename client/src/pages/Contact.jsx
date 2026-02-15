import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent Successfully ✅");
  };

  return (
    <>
      <Navbar />

      <div className="pt-32 pb-20 bg-gradient-to-br from-green-50 to-green-100 min-h-screen">
        <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-lg p-10 rounded-3xl shadow-2xl">

          <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
            Contact Us 📩
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-xl focus:ring-2 focus:ring-green-400 outline-none"
              required
            ></textarea>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition shadow-lg"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Contact;