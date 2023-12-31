'use client'

import Footer from "./Footer";
import { useState } from "react";
import InputButton from "./InputButton"
import Navbar from "./Navbar"

export default function Home() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };
    
    return (
        <>
            <Navbar />
            <div className="justify-center">
                <div className="relative w-full mb-10">

                    <div className="relative isolate z-0 bg-white px-6 pt-14 lg:px-8">
                        <div className="relative mx-auto max-w-2xl py-24">
                            <div className="absolute inset-x-0 -top-[4rem] -z-10 transform-gpu overflow-hidden blur-3xl md:-top-[10rem]">
                                <svg
                                    className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
                                    viewBox="0 0 1155 678"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
                                        fillOpacity=".3"
                                        d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
                                    />
                                    <defs>
                                        <linearGradient
                                            id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                                            x1="1155.49"
                                            x2="-78.208"
                                            y1=".177"
                                            y2="474.645"
                                            gradientUnits="userSpaceOnUse"
                                        >
                                            <stop stopColor="#9089FC" />
                                            <stop offset={1} stopColor="#FF80B5" />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </div>
                            <div className="text-center">
                                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                    Discover the health insights with MediScan.
                                </h1>
                                <p className="mt-6 text-lg leading-8 text-gray-600">
                                    Empowering You with Rapid Diagnosis, Precautions, and Personalized Care
                                </p>
                                <div className="mt-10 flex items-center justify-center gap-x-2">
                                    <button
                                        type="button"
                                        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        View Docs
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                                    >
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container bg-gray-100 max-w-7xl items-center rounded-xl flex flex-col gap-3 justify-center   font-white border-spacing-4 h-96 mx-10 my-32 ml-48 ">
                    <h1>Enter the Symptom:</h1>
                    <InputButton />

                    {/* radio buttons */}
                    <div className="flex">
                        <label className="mr-2">
                            <input
                                type="radio"
                                value="male"
                                checked={selectedOption === 'male'}
                                onChange={handleOptionChange}
                                className="mr-1"
                            />
                            Male
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="female"
                                checked={selectedOption === 'female'}
                                onChange={handleOptionChange}
                                className="mr-1"
                            />
                            Female
                        </label>

                    </div>
                    
                    <div className="relative w-full lg:max-w-sm">
                        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>Enter your symptom:1</option>
                            <option>Cough</option>
                            <option>Headache</option>
                            <option>Low Fever</option>
                            <option>High Fever</option>
                        </select>
                    </div>
                    <div className="relative w-full lg:max-w-sm">
                        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>Enter your symptom:2</option>
                            <option>Cough</option>
                            <option>Headache</option>
                            <option>Low Fever</option>
                            <option>High Fever</option>
                        </select>
                    </div>
                    <div className="relative w-full lg:max-w-sm">
                        <select className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
                            <option>Enter your symptom:3</option>
                            <option>Migrane</option>
                            <option>Dry Cough</option>
                            <option>swelling</option>
                            <option>Backpain</option>
                        </select>
                    </div>

                    <button className="flex bg-slate-600 h-10 rounded-xl w-36 items-center justify-center text-white">Submit</button>
                </div>
            </div>
            <Footer />
        </>
    )
}
