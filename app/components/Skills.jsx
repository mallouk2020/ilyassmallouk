"use client";

// app/components/Skills.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // استيراد Framer Motion

export default function Skills() {
    const [activeCategory, setActiveCategory] = useState("formation");


    const interese =
        [
            { title: "API Development", delay: 0.2 },
            { title: "Web Design", delay: 0.4 },
            { title: "Data Analysis", delay: 0.6 },
            { title: "Machine Learning", delay: 0.8 },
        ]



    return (
        <section id="skills" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 text-gradient">My Skills</h2>



                {/* title Side: Tabs */}
                <div className="flex justify-center space-x-6 mb-12">
                    <button
                        onClick={() => setActiveCategory("formation")}
                        className={`px-4 py-2 rounded-lg text-sm ${activeCategory === "formation"
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-100 bg-opacity-15"
                            } hover:bg-blue-500 hover:text-white transition duration-300 `}
                    >
                        Formation
                    </button>
                    <button
                        onClick={() => setActiveCategory("langues")}
                        className={`px-4 py-2 rounded-lg text-sm ${activeCategory === "langues"
                            ? "bg-blue-600 text-white"
                            : "bg-white text-gray-100 bg-opacity-15"
                            } hover:bg-blue-500 hover:text-white transition duration-300`}
                    >
                        Langues
                    </button>
                    <button
                        onClick={() => setActiveCategory("interets")}
                        className={`px-4 py-2 rounded-lg text-sm ${activeCategory === "interets"
                            ? "bg-blue-600 text-white "
                            : "bg-white text-gray-100 bg-opacity-15"
                            } hover:bg-blue-500 hover:text-white transition duration-300 `}
                    >
                        Intérêts
                    </button>
                </div>

                {/* details: Content with Animation */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="  w-full"
                    >
                        <div className="flex justify-center">
                            {/* Formation Content */}
                            {activeCategory === "formation" && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                                    className="contener-text shadow-lg p-4 rounded-lg langues"
                                >
                                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Formation Details</h3>
                                    <p className="text-gray-600">Details about your education or training.</p>
                                </motion.div>
                            )}

                            {/* Langues Content */}
                            {activeCategory === "langues" && (
                                <>
                                    <motion.div
                                        key={activeCategory}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.9, ease: "easeInOut" }}
                                        className="mx-10 grid grid-cols-1 md:grid-cols-2 gap-8 langues "

                                    >
                                        <motion.div
                                            initial={{ opacity: 0, x: -50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                                            className="contener-text2 "
                                        >
                                            <h3 className="text-xl font-semibold text-gray-200 mb-2">English</h3>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 overflow-hidden">

                                                <motion.div
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "90%" }}
                                                    transition={{ duration: 1, ease: "easeInOut" }}
                                                    className="bg-blue-600 h-2.5 rounded-full"
                                                ></motion.div>
                                            </div>
                                            <p className="text-gray-600">Proficiency: 90%</p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                                            className="contener-text2 shadow-lg p-4 rounded-lg"
                                        >
                                            <h3 className="text-xl font-semibold text-gray-200 mb-2">Arabic</h3>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "100%" }}
                                                    transition={{ duration: 1.2, ease: "easeInOut" }}
                                                    className="bg-blue-600 h-2.5 rounded-full"
                                                ></motion.div>
                                            </div>
                                            <p className="text-gray-600">Proficiency: 100%</p>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 50 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
                                            className="contener-text2 shadow-lg p-4 rounded-lg  mt-4"
                                        >
                                            <h3 className="text-xl font-semibold text-gray-200 mb-2">French</h3>
                                            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2 overflow-hidden">
                                                <motion.div
                                                    initial={{ width: "0%" }}
                                                    animate={{ width: "80%" }}
                                                    transition={{ duration: 1.5, ease: "easeInOut" }}
                                                    className="bg-blue-600 h-2.5 rounded-full"
                                                ></motion.div>
                                            </div>
                                            <p className="text-gray-600">Proficiency: 80%</p>
                                        </motion.div>
                                    </motion.div>
                                </>
                            )}

                            {/* Intérêts Content */}
                            {activeCategory === "interets" && (
                                <>
                                    <motion.div
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                                        className="contener-text interese shadow-lg p-4 rounded-lg grid grid-cols-3"
                                    >
                                        {
                                            interese.map((intres) => (

                                                <motion.div
                                                    key={intres}
                                                    initial={{ opacity: 0, x: 50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ duration: 0.6, delay: intres.delay , ease: "easeInOut" }}
                                                    className="contener-text2  shadow-lg p-2 rounded-lg mx-2 mt-3 "
                                                >

                                                    <h5 className="text-base font-semibold text-gray-200 mb-2 mt-3  m-6">{intres.title}
                                                    </h5>

                                                </motion.div>

                                            ))
                                        }





                                    </motion.div>


                                </>
                            )}
                        </div>
                    </motion.div>
                </AnimatePresence >


            </div >
        </section >
    );
}