"use client"


// app/components/Experience.jsx
import { useState } from 'react';

export default function Experience() {
  // State to track which set of experiences is visible
  const [activeTab, setActiveTab] = useState(1);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className=" font-bold text-center mb-8 text-gradient ">My Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left Side: Tabs */}
          <div className="md:col-span-1 space-y-4">
            <button
              onClick={() => setActiveTab(1)}
              className={`w-full px-4 py-2 rounded-lg text-left  h-24 mt-2 ${activeTab === 1 ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 bg-opacity-90'
                } hover:bg-blue-500 hover:text-white transition duration-300`}
            >
              First Set
            </button>
            <button
              onClick={() => setActiveTab(2)}
              className={`w-full px-4 py-2 rounded-lg text-left  h-24 ${activeTab === 2 ? 'bg-blue-600 text-white' : 'bg-gray-800 text-gray-400 bg-opacity-90'
                } hover:bg-blue-500 hover:bg-opacity-40 hover:text-white transition duration-300 `}
            >
              Second Set
            </button>
          </div>

          {/* Right Side: Content */}
          <div className="md:col-span-3 space-y-4">
            {/* First Set of Experiences */}
            {activeTab === 1 && (
              <>
                <div className="contener-text">
                  <h3 className="text-xl font-semibold mb-2">Experience 1</h3>
                  <p className="">Details about the first experience.</p>
                </div>
                <div className="contener-text">
                  <h3 className="text-xl font-semibold  mb-2">Experience 2</h3>
                  <p >Details about the second experience.</p>
                </div>
                <div className="contener-text">
                  <h3 className="text-xl font-semibold  mb-2">Experience 3</h3>
                  <p >Details about the third experience.</p>
                </div>
              </>
            )}

            {/* Second Set of Experiences */}
            {activeTab === 2 && (
              <>
                <div className="contener-text">
                  <h3 className="text-xl font-semibold  mb-2">Experience 4</h3>
                  <p className="text-gray-600">Details about the fourth experience.</p>
                </div>
                <div className="contener-text">
                  <h3 className="text-xl font-semibold  mb-2">Experience 5</h3>
                  <p className="text-gray-600">Details about the fifth experience.</p>
                </div>
                <div className="contener-text">
                  <h3 className="text-xl font-semibold  mb-2">Experience 6</h3>
                  <p className="text-gray-600">Details about the sixth experience.</p>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}