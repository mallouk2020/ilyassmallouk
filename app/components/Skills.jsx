"use client"

// app/components/Skills.jsx
import { useState } from 'react';

export default function Skills() {
    // State to track which category is active
    const [activeCategory, setActiveCategory] = useState('formation');

    return (
        <section id="skills" className="py-20 ">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">My Skills</h2>

                {/* Left Side: Tabs */}
                <div className="flex justify-center space-x-6 mb-12">
                    <button
                        onClick={() => setActiveCategory('formation')}
                        className={`px-4 py-2 rounded-lg text-sm ${activeCategory === 'formation' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-200'
                            } hover:bg-blue-500 hover:text-white transition duration-300 bg-opacity-50 backdrop-blur-sm`}
                    >
                        Formation
                    </button>
                    <button
                        onClick={() => setActiveCategory('langues')}
                        className={`px-4 py-2 rounded-lg text-sm ${activeCategory === 'langues' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-200'
                            } hover:bg-blue-500 hover:text-white transition duration-300 bg-opacity-50 backdrop-blur-sm`}
                    >
                        Langues
                    </button>
                    <button
                        onClick={() => setActiveCategory('interets')}
                        className={`px-4 py-2 rounded-lg text-sm ${activeCategory === 'interets' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border border-gray-200'
                            } hover:bg-blue-500 hover:text-white transition duration-300 bg-opacity-50 backdrop-blur-sm`}
                    >
                        Intérêts
                    </button>
                </div>

                {/* Right Side: Content */}
                <div className=" mx-8 grid grid-cols-1 md:grid-cols-1 gap-8">


                    <div className="space-y-7">
                        {/* Formation Content */}

                        {activeCategory === 'formation' && (
                            <>
                                <div className="contener-text  shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Formation Details</h3>
                                    <p className="text-gray-600">Details about your education or training.</p>
                                </div>
                            </>
                        )}

                        {/* Langues Content */}
                        {activeCategory === 'langues' && (
                            <>
                                <div className="contener-text p-2  ">
                                    <h3 className="text-xl font-semibold text-gray-200 mb-2">English</h3>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                    </div>
                                    <p className="text-gray-600">Proficiency: 90%</p>
                                </div>
                                <div className="contener-text  shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Arabic</h3>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '100%' }}></div>
                                    </div>
                                    <p className="text-gray-600">Proficiency: 100%</p>
                                </div>
                                <div className="contener-text  shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-200 mb-2">French</h3>
                                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                                        <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                                    </div>
                                    <p className="text-gray-600">Proficiency: 80%</p>
                                </div>
                            </>
                        )}

                        {/* Intérêts Content */}
                        {activeCategory === 'interets' && (
                            <>
                                <div className="contener-text  shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Interest 1</h3>
                                    <p className="text-gray-600">Details about your first interest.</p>
                                </div>
                                <div className="contener-text  shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Interest 2</h3>
                                    <p className="text-gray-600">Details about your second interest.</p>
                                </div>
                                <div className="contener-text  shadow-lg">
                                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Interest 3</h3>
                                    <p className="text-gray-600">Details about your third interest.</p>
                                </div>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </section>
    );
}