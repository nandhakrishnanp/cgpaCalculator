import React, { Suspense } from 'react'
import Link from 'next/link'
import { fetchalldepartment } from '../actions/adddepartment'
import Fallback from '@/Components/Fallback'

const page = async () => {
    const DepartmentsList: any = await fetchalldepartment()
    
    return (
        <div className="min-h-screen bg-white">
            <Suspense fallback={<Fallback />}>
                <div className="container mx-auto px-4 py-8 min-h-screen flex flex-col">
                    {/* Header Section */}
                    <div className="text-center mb-8">
                        <h1 className="text-4xl md:text-6xl font-bold text-black mb-4">
                            Select Your Department
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
                            Choose your department to continue. 
                        </p>
                        
                        {/* Add Department Button - Moved to Top */}
                        <Link href="/department/newdepartment">
                            <button className="inline-flex items-center px-8 py-4 bg-black text-white font-semibold rounded-lg border-2 border-black hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                                Add Your Department
                            </button>
                        </Link>
                        <p className="text-sm text-gray-500 mt-3">
                            Don't see your department? Help us expand our database!
                        </p>
                    </div>

                    {/* Departments Grid */}
                    <div className="flex-1 flex flex-col items-center justify-center">
                        <div className="w-full max-w-4xl">
                            {DepartmentsList && DepartmentsList.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {DepartmentsList.map((item: any, index: number) => (
                                      
                                            <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 hover:border-black transition-all duration-300 hover:scale-105 hover:shadow-lg">
                                                <div className="flex items-center justify-between mb-4">
                                                    <span className="inline-flex items-center justify-center w-8 h-8 bg-black text-white rounded-full text-sm font-semibold">
                                                        {index + 1}
                                                    </span>
                                                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                                                        ID: {item.id}
                                                    </span>
                                                </div>
                                                
                                                <h3 className="text-xl font-semibold text-black mb-2 group-hover:text-gray-700 transition-colors">
                                                    {item.name}
                                                </h3>
                                                
                                                {item.createdAt && (
                                                    <p className="text-sm text-gray-500 mb-4">
                                                        Created: {new Date(item.createdAt).toLocaleDateString()}
                                                    </p>
                                                )}
                                              

                                          

                                                  <Link 
                                            key={index} 
                                            href={`/department/${item.id}`}
                                            className="group"
                                        >
                                                <div className="mt-4 flex items-center text-black text-sm font-medium border-t pt-4">
                                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                                    </svg>
                                                    <span>Calculate CGPA</span>
                                                    <svg className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                                </Link>
                                            </div>
                                        
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-500 text-lg">No departments available yet.</p>
                                    <p className="text-sm text-gray-400 mt-2">Be the first to add a department!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    )
}

export default page