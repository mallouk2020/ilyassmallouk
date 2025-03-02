// app/components/Contact.jsx
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="place-items-center py-20">
      <div className="" style={{ width: "270px " }}>
        <h2 className=" font-bold text-center  mb-8  text-gradient text-4xl">Contact Me</h2></div>
      <div className=" container mx-auto px-6 ">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* left Side: Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-500 mb-11">Contact Information</h3>
            <div className="space-y-4">
              {/* Map Placeholder */}
              <div className="bg-gray-200 h-48 rounded-lg flex items-center justify-center mb-11">
                <p className="text-gray-500">Map will be added here</p>
              </div>

              {/* Phone Number */}
              <div className="flex items-center space-x-2">
                <FaPhone className="text-blue-600" />
                <p>+2120666609923</p>
              </div>

              {/* Email Address */}
              <div className="flex items-center space-x-2 ">
                <FaEnvelope className="text-blue-600 " />
                <p>elyassmallouk@gmail.com</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-4 ">
                <a href="#" className="text-gray-600 hover:text-blue-600 container-wrapper">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 container-wrapper">
                  <FaGithub size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 container-wrapper">
                  <FaTwitter size={24} />
                </a>
              </div>
            </div>
          </div>


          {/* right Side: Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-500 mb-4">Send a Message</h3>
            <form className="max-w-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className=" container-wrapper  shadow-gray-900 shadow-inner container-wrapper w-full px-4 py-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500  "
                  placeholder="Your Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" container-wrapper shadow-gray-900  shadow-inner container-wrapper w-full px-4 py-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  placeholder="Your Email"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className=" container-wrapper shadow-inner shadow-gray-900  w-full px-4 py-2 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="    w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}