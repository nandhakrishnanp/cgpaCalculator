"use client";

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const LandingPage = () => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    return (
        <div className='min-h-screen bg-white'>
            {/* Loading Overlay */}
            {isLoading && (
                <div className='fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm'>
                    <div className='flex items-center space-x-2 mb-4'>
                        <div className='w-3 h-3 bg-black rounded-full animate-bounce'></div>
                        <div className='w-3 h-3 bg-black rounded-full animate-bounce' style={{animationDelay: '0.1s'}}></div>
                        <div className='w-3 h-3 bg-black rounded-full animate-bounce' style={{animationDelay: '0.2s'}}></div>
                    </div>
                    <p className='text-xl text-black font-semibold'>
                        Loading...
                    </p>
                </div>
            )}

            <div className='container mx-auto px-6 py-8'>
                {/* Hero Section */}
                <section className='flex flex-col min-h-screen items-center justify-center text-center'>
                    <div className='mb-12'>
                        <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 leading-tight'>
                            Welcome to the
                            <span className='block mt-2'>CGPA Calculator</span>
                        </h1>
                        <p className='text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto'>
                            Calculate your Grade Points with just a few clicks ⚡
                        </p>
                        
                        <button 
                            onClick={() => {
                                setIsLoading(true)
                                router.push('/department')
                            }} 
                            className='inline-flex items-center px-8 py-4 bg-black text-white text-xl font-semibold rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 shadow-lg'
                        >
                            Get Started
                            <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M13 7l5 5m0 0l-5 5m5-5H6' />
                            </svg>
                        </button>
                    </div>

                    {/* How It Works Section */}
                    <div className='w-full max-w-6xl mx-auto'>
                        <h2 className='text-2xl md:text-3xl font-bold text-black mb-8'>
                            How It Works
                        </h2>
                        
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8'>
                            {/* Step 1 */}
                            <div className='group'>
                                <div className='bg-white border-2 border-gray-200 rounded-lg p-6 h-full hover:border-black transition-all duration-300 hover:shadow-lg'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div className='w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg'>
                                            1
                                        </div>
                                        <svg className='w-8 h-8 text-gray-400 group-hover:text-black transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-4m-5 0H9m0 0H5m0 0h4M9 7h6m-6 4h6m-6 4h6' />
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-bold text-black mb-3'>
                                        Select Your Department
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Choose your department from our comprehensive list of available programs.
                                    </p>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className='group'>
                                <div className='bg-white border-2 border-gray-200 rounded-lg p-6 h-full hover:border-black transition-all duration-300 hover:shadow-lg'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div className='w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg'>
                                            2
                                        </div>
                                        <svg className='w-8 h-8 text-gray-400 group-hover:text-black transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' />
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-bold text-black mb-3'>
                                        Fill Out Your Scores
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Enter the grades you received in each course with their respective credits.
                                    </p>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className='group'>
                                <div className='bg-white border-2 border-gray-200 rounded-lg p-6 h-full hover:border-black transition-all duration-300 hover:shadow-lg'>
                                    <div className='flex items-center justify-between mb-4'>
                                        <div className='w-10 h-10 bg-black text-white rounded-full flex items-center justify-center font-bold text-lg'>
                                            3
                                        </div>
                                        <svg className='w-8 h-8 text-gray-400 group-hover:text-black transition-colors' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z' />
                                        </svg>
                                    </div>
                                    <h3 className='text-xl font-bold text-black mb-3'>
                                        Get Your CGPA
                                    </h3>
                                    <p className='text-gray-600 leading-relaxed'>
                                        Hit the calculate button to instantly get your accurate CGPA result.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Additional Info Section */}
                    <div className='mt-16 text-center'>
                        <div className='bg-gray-50 border border-gray-200 rounded-lg p-8 max-w-2xl mx-auto'>
                            <h3 className='text-xl font-bold text-black mb-4'>
                                Quick & Accurate
                            </h3>
                            <p className='text-gray-600 leading-relaxed'>
                                Our calculator uses the standard CGPA calculation method to ensure 
                                accurate results. Perfect for students who want to track their academic progress.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default LandingPage