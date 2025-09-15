import React, { useState } from 'react'

import { APP_FEATURES } from "../utils/data"
import { useNavigate } from 'react-router-dom'
import Login from './Auth/Login'
import SignUp from './Auth/SignUp'
import Modal from '../components/Modal'
const LandingPage = () => {
    const navigate=useNavigate()

    const [openAuthModal,setOpenAuthModal]=useState(false)
    const [currentPage,setCurrentPage]=useState("login")

    const handleCTA=()=>{}
  return (
    <>

    {/* // this is about the main top section name and cta button */}
   <div className="w-full min-h-screen bg-[#FFFCEF] relative overflow-hidden">
  {/* Background Blur Blob */}
  <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[100px] absolute top-0 left-0"></div>

  <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
    {/* Header */}
    <header className="flex items-center justify-between">
      <div className="text-2xl font-bold text-gray-800">Interview Prep AI</div>

      <button
        className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition"
        onClick={() => setOpenAuthModal(true)}
      >
        Login / Sign Up
      </button>
    </header>

    {/* Hero Section */}
    <div className="mt-20 max-w-3xl">
      <div className="mb-3">
        <div className="text-sm uppercase tracking-widest text-amber-500 font-semibold">
          AI Powered
        </div>
      </div>

      <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
        Ace Interviews With <br />
        <span className="text-amber-500">AI-Powered</span> Learning
      </h1>
    </div>

    {/* Description & CTA */}
    <div className="mt-6 max-w-2xl">
      <p className="text-lg text-gray-700 mb-6">
        Get role-specific guidance and practice. Prepare with real questions and
        personalized feedback to land your dream job.
      </p>

      <button
        className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-3 rounded-md transition"
        onClick={handleCTA}
      >
        Get Started
      </button>
    </div>
  </div>
    </div>

    <div className='w-full min-h-full relative z-10 mb-36'>
        <div>
            <section className=''>
                <img src="" alt="here we will place our own generated image" className=''/>

            </section>
        </div>


      <div className="w-full bg-white py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* First 3 feature cards */}
      <div className="space-y-6 col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {APP_FEATURES.slice(0, 3).map((feature) => (
          <div
            key={feature.id}
            className="bg-[#FFFCEF] border border-amber-200 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Remaining 3 feature cards */}
      <div className="space-y-6 col-span-1 md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {APP_FEATURES.slice(3).map((feature) => (
          <div
            key={feature.id}
            className="bg-[#FFFCEF] border border-amber-200 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>

  <div className="mt-12 text-center text-sm text-gray-500">
    Made with <span className="text-red-400">♥</span> + AI — Happy Coding!
  </div>
    </div>


    </div>

    <Modal
        isOpen={openAuthModal}
        onClose={()=>{
            setOpenAuthModal(false)
            setCurrentPage("login")
        }}
        hideHeader
    >
        <div>
            {currentPage==="login" && (
                <Login setCurrentPage={setCurrentPage}/>
            )}

            {currentPage==="signup" && (
                <SignUp setCurrentPage={setCurrentPage}/>

            )}
        </div>
        </Modal>


    </>




  )
}

export default LandingPage
