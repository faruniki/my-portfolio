import React from "react";

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md px-6"
      onClick={onClose}
    >
      <div
        className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-bold text-black">Download Resume</h3>
        <p className="mt-2 text-sm text-gray-500">
          Choose the version that best suits your requirements.
        </p>
        <div className="mt-8 flex flex-col gap-3">
          <a
            href="/Najib Fahruna Akbar - Resume ATS.pdf"
            download="Najib Fahruna Akbar - Resume ATS.pdf"
            className="flex items-center justify-center rounded-xl border-2 border-black py-3.5 text-sm font-bold text-black transition-all hover:bg-black hover:text-white"
            onClick={onClose}
          >
            ATS Version (Standard)
          </a>
          <a
            href="/Najib Fahruna Akbar - Resume Creative.pdf"
            download="Najib Fahruna Akbar - Resume Creative.pdf"
            className="flex items-center justify-center rounded-xl border-2 border-black py-3.5 text-sm font-bold text-black transition-all hover:bg-black hover:text-white"
            onClick={onClose}
          >
            Creative Version (Visual)
          </a>
          <button onClick={onClose} className="mt-2 text-sm font-semibold text-gray-400 hover:text-black transition-colors">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

