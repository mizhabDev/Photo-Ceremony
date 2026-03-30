import { useState } from "react";
import bg from "./assets/1st.jpg";

export default function App() {
  const [activeTab, setActiveTab] = useState("code");

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white relative"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-8 w-[360px] text-center shadow-2xl">

        {/* Logo */}
        <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-sm font-bold">
          PC
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-white">
          Photo Ceremony
        </h1>

        {/* Subtitle */}
        <p className="text-sm text-gray-300 mt-2 mb-6">
          Capture moments. Share memories.
        </p>

        {/* Tabs */}
        <div className="flex border-b border-white/20 mb-6">
          <button
            onClick={() => setActiveTab("code")}
            className={`flex-1 pb-2 text-sm ${
              activeTab === "code"
                ? "border-b-2 border-purple-400 text-white font-medium"
                : "text-gray-400"
            }`}
          >
            Enter Code
          </button>

          <button
            onClick={() => setActiveTab("qr")}
            className={`flex-1 pb-2 text-sm ${
              activeTab === "qr"
                ? "border-b-2 border-purple-400 text-white font-medium"
                : "text-gray-400"
            }`}
          >
            Scan QR
          </button>
        </div>

        {/* CONTENT */}
        {activeTab === "code" ? (
          <div>
            <input
              type="text"
              placeholder="Enter album code"
              className="w-full px-4 py-3 rounded-full bg-black/40 border border-white/20 text-sm outline-none focus:ring-2 focus:ring-purple-400 mb-4 placeholder-gray-400"
            />

            <button className="w-full py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium hover:scale-105 transition duration-300">
              Join Album →
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-6 gap-4">

            {/* QR Placeholder */}
            {/*<div className="w-32 h-32 bg-white/20 rounded-xl flex items-center justify-center text-gray-300 text-sm">
              QR Scanner
            </div>*/}

            <p className="text-gray-400 text-sm">
              Scan QR to join album
            </p>

            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:scale-105 hover:brightness-110 transition duration-300">
              Open Camera
            </button>
          </div>
        )}

        {/* Footer */}
        <div className="text-xs text-gray-400 mt-6">
          Authorized access only
        </div>
      </div>

      {/* Bottom bar */}
      <div className="absolute bottom-0 w-full bg-black/50 border-t border-white/10 p-4 text-gray-400 text-xs flex justify-between">
        <span>© 2026 Photo Ceremony</span>
        <span>Privacy • Terms</span>
      </div>
    </div>
  );
}