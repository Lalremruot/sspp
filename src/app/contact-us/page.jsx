"use client";

import { useState } from 'react';
import { MapPin, Phone, Mail, Building, Award, Users, Book } from 'lucide-react';

const ContactUs = () => {
  const [activeCategory, setActiveCategory] = useState('general');

  const contactInfo = {
    general: {
      title: "General Information",
      items: [
        {
          icon: <MapPin className="w-5 h-5" />,
          title: "Office Address",
          content: "SSPP Complex, Siloam Veng, Bungmual, Lamka - 795 006, Manipur, India"
        },
        {
          icon: <Phone className="w-5 h-5" />,
          title: "Phone",
          content: "+91-9856855196"
        },
        {
          icon: <Mail className="w-5 h-5" />,
          title: "Email",
          content: "info@sspp.org.in"
        }
      ]
    },
    ghq: {
      title: "General Headquarters",
      items: [
        {
          icon: <Users className="w-5 h-5" />,
          title: "GHQ Executive Committee",
          content: "ghq@sspp.org.in",
          details: [
            "President (president@sspp.org.in)",
            "General Secretary (gs@sspp.org.in)"
          ]
        },
        {
          icon: <Building className="w-5 h-5" />,
          title: "GHQ Departments",
          content: "depts@sspp.org.in"
        },
        {
          icon: <Award className="w-5 h-5" />,
          title: "Foundation Trust",
          content: "trust@sspp.org.in"
        },
        {
          icon: <Building className="w-5 h-5" />,
          title: "School Management Committee",
          content: "school@sspp.org.in"
        },
        {
          icon: <Users className="w-5 h-5" />,
          title: "Election Commission",
          content: "election@sspp.org.in"
        },
        {
          icon: <Award className="w-5 h-5" />,
          title: "Siamsin Awards",
          content: "awards@sspp.org.in"
        },
        {
          icon: <Book className="w-5 h-5" />,
          title: "Siamsin Journal",
          content: "journal@sspp.org.in"
        },
        {
          icon: <Book className="w-5 h-5" />,
          title: "Siamsin Magazine",
          content: "magazine@sspp.org.in"
        }
      ]
    },
    headquarters: {
      title: "Headquarters & Joint Headquarters",
      items: [
        {
          icon: <Building className="w-5 h-5" />,
          title: "Headquarters Aizawl Mizoram",
          content: "aizawl.hq@sspp.org.in"
        },
        {
          icon: <Building className="w-5 h-5" />,
          title: "Joint Headquarter Lamka",
          content: "jhq.lamka@sspp.org.in"
        },
        {
          icon: <Building className="w-5 h-5" />,
          title: "Joint Headquarter Imphal",
          content: "jhq.imphal@sspp.org.in"
        },
        {
          icon: <Building className="w-5 h-5" />,
          title: "Joint Headquarter Shillong",
          content: "jhq.shillong@sspp.org.in"
        },
        {
          icon: <Building className="w-5 h-5" />,
          title: "Joint Headquarter Delhi",
          content: "jhq.delhi@sspp.org.in"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-xl lg:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h1>
          <p className="text-sm lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Have questions or want to talk with someone? We would love to hear from you!
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center mb-10 gap-2">
          {Object.keys(contactInfo).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-2 py-1 lg:px-5 lg:py-2 rounded-full text-[13px] lg:text-md lg:font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-100'
              }`}
            >
              {contactInfo[category].title}
            </button>
          ))}
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo[activeCategory].items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                  <a
                    href={`mailto:${item.content}`}
                    className="text-blue-600 hover:underline mt-1 block"
                  >
                    {item.content}
                  </a>
                </div>
              </div>
              
              {item.details && (
                <div className="pl-12 mt-2">
                  {item.details.map((detail, idx) => (
                    <div key={idx} className="text-sm text-gray-600 mt-1">
                      {detail}
                    </div>
                  ))}
                </div>
              )}
              
              {item.title === "Phone" && (
                <a
                  href={`tel:${item.content}`}
                  className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Call Now
                </a>
              )}
              
              {item.title === "Office Address" && (
                <button className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  <MapPin className="w-4 h-4 mr-1" />
                  View on Map
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Office Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a href="#" className="text-blue-400 hover:text-blue-600">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-red-600 hover:text-red-800">
                  <i className="fab fa-youtube text-2xl"></i>
                </a>
                <a href="#" className="text-purple-600 hover:text-purple-800">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;