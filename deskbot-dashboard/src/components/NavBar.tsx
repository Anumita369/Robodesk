import React from "react";
import heroImg from "../assets/robodesk-dashboard-img.png";
interface Props {
  onLogout?: () => void;
    onServicesClick?: () => void;

}

const NavBar: React.FC<Props> = ({ onLogout, onServicesClick }) => {
  return (
    <div className="min-h-screen ">
      {/* Navbar */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="text-xl font-semibold text-gray-900">DeskBot</div>

          <button 
            onClick={onServicesClick}
          className="text-base font-medium text-gray-800">Services</button>

          <button
            onClick={onLogout}
            className="rounded bg-teal-700 px-5 py-2 text-sm font-medium text-white hover:bg-teal-800"
          >
            Log Out
          </button>
        </nav>
      </header>

      {/* Hero */}
      <main className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-12 md:flex-row md:py-20">
        {/* Left text */}
        <section className="flex-1">
          <h1 className="text-3xl font-semibold leading-tight text-gray-900 md:text-5xl">
            Boost Conversations
            <br />
            with Our Intelligent
            <br />
            <span className="text-teal-700">Chatbot</span> Platform
          </h1>
        </section>

        {/* Right image */}
        <section className="flex-1 flex items-center justify-center">
          <img
            src={heroImg}
            alt="DeskBot dashboard illustration"
            className="w-full max-w-md object-contain"
          />
        </section>
      </main>
    </div>
  );
};

export default NavBar;
