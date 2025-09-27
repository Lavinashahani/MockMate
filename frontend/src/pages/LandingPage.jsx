import React, { useState } from "react";
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data.js";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Login from "./Auth/Login.jsx";
import SignUp from "./Auth/SignUp.jsx";
import Modal from "../components/Modal.jsx";
import { useContext } from "react";
import { UserContext } from "../context/userContext.js";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard.jsx";
import { LuTwitter, LuLinkedin, LuGithub } from "react-icons/lu";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="w-full min-h-screen bg-[#FFFCEF]">
        <div className="w-[500px] h-[500px] bg-amber-200/20 blur-[100px] absolute top-0 left-0" />

        <div className="container mx-auto px-4 pt-6 pb-[200px] relative z-10">
          {/* Header */}
          <header className="flex items-center justify-between mb-16">
            <div className="text-2xl font-bold text-gray-800">MockMate</div>
            {user ? (
              <ProfileInfoCard />
            ) : (
              <button
                className="bg-[#ff9324] text-sm font-semibold text-white px-7 py-3 rounded-full hover:bg-gray-900 border-[2px] border-[#ff8409] hover:border-white transition-colors cursor-pointer"
                onClick={() => setOpenAuthModal(true)}
              >
                Login / Sign Up
              </button>
            )}
          </header>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row items-center ">
            <div className="w-full md:w-1/2 pr-4 mb-8 md:mb-0">
              <div className="flex items-center justify-self-start mb-2">
                <div className="flex items-center gap-2 mb-2 text-[13px] text-amber-500 font-semibold bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  <LuSparkles /> AI Powered
                </div>
              </div>

              <h1 className="text-6xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Ace Interviews With <br />
                <span className="text-transparent bg-clip-text bg-[radial-gradient(circle,_#FF9324_0%,_#FCD760_100%)] bg-[length:200%_200%] animate-text-shine font-extrabold ">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
            </div>

            {/* Description & CTA */}
            <div className="w-full md:w-1/2">
              <p className="text-[18px] font-medium text-gray-900 mr-0 md:mr-20 my-4">
                Get role-specific guidance and practice. Prepare with real
                questions and personalized feedback to land your dream job. From
                preparation to matery - your ultimate interview toolkit is here.
              </p>

              <button
                className="bg-black text-[16px] text-white font-semibold px-7 py-3 rounded-full hover: hover:bg-yellow-100 hover:text-black border border-yellow-50 hover:border-yellow-300 transition-colors cursor-pointer"
                onClick={handleCTA}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
        {/*  Hero Image */}
        <div className="w-full min-h-full relative z-10 mt-10 mb-36">
          <div>
            <section className="flex items-center justify-center -mt-36">
              <img
                src={HERO_IMG}
                alt="Hero Image"
                className="w-[80vw] rounded-lg border-[0.5px] border-slate-200 shadow-lg"
              />
            </section>
          </div>
        </div>
      </div>

      <div id="features" className=" relative z-10">
        <div className="w-full min-h-full bg-[#FFFCEF] ">
          <div className="container mx-auto px-4 pt-10 pb-20">
            <section className="mt-5">
              <h2 className="text-4xl font-bold text-center mb-12">
                Features That Make You Shine
              </h2>
              <div className="flex flex-col items-center gap-8">
                {/* First 3 Cards*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 cursor-pointer"
                    >
                      <h3 className="text-[18px] font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Remaining 2 cards*/}
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
                  {APP_FEATURES.slice(3).map((feature) => (
                    <div
                      key={feature.id}
                      className="bg-[#fffef8] p-6 rounded-xl shadow-xs hover:shadow-lg shadow-amber-100 transition border border-amber-100 cursor-pointer"
                    >
                      <h3 className="text-[18px] font-semibold mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <footer className="bg-gray-900 text-gray-300 py-6">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Brand / Logo */}
              <div>
                <h2 className="text-2xl font-bold text-white">MockMate</h2>
                <p className="mt-3 text-sm">
                  AI-powered learning platform to help you crack your dream job
                  with role-specific interview practice and personalized
                  feedback.
                </p>
              </div>

              {/* Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Quick Links
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/" className="hover:text-[#fc9d3d]">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#features" className="hover:text-[#fc9d3d]">
                      Features
                    </a>
                  </li>
                  <li>
                    <a href="/" className="hover:text-[#fc9d3d]">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  Connect
                </h3>
                <div className="flex space-x-4">
                  <a
                    href={import.meta.env.VITE_LINKEDIN_URL}
                    target="_blank"
                    className="text-white  rounded-full border-[0.5px] border-[#fc9d3d] p-2 hover:text-[#fc9d3d]"
                  >
                    <LuTwitter />
                  </a>
                  <a
                    href={import.meta.env.VITE_LINKEDIN_URL}
                    target="_blank"
                    className="text-white rounded-full border-[0.5px] border-[#fc9d3d] p-2 hover:text-[#fc9d3d]"
                  >
                    <LuLinkedin />
                  </a>
                  <a
                    href={import.meta.env.VITE_GITHUB_URL}
                    target="_blank"
                    className="text-white rounded-full border-[0.5px] border-[#fc9d3d] p-2 hover:text-[#fc9d3d]"
                  >
                    <LuGithub />
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
              © {new Date().getFullYear()} MockMate. All rights reserved.
            </div>
            <div className="text-sm text-secondary text-center ">
              Made with 💌... Happy Coding
            </div>
          </footer>
        </div>
      </div>

      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </>
  );
};

export default LandingPage;
