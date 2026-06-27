import React, { useState, useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CustomCursor from "../../components/ReactBits/CustomCursor";

export default function ForTheCreator() {
  const [isCodeModalOpen, setIsCodeModalOpen] = useState(false);
  const [privateCode, setPrivateCode] = useState("");
  const [error, setError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    setIsCodeModalOpen(true);
    setError("");
    setUploadSuccess(false);
    setUploadedImage(null);
  };

  const handleCodeSubmit = (e) => {
    e.preventDefault();
    // IMPORTANT: Make sure you have REACT_APP_PICSTOP_PRIVATE_CODE in your .env file
    if (privateCode === process.env.REACT_APP_PICSTOP_PRIVATE_CODE) {
      // In a real app, you would trigger the file upload logic here.
      setIsCodeModalOpen(false);
      setPrivateCode("");
      // Trigger the hidden file input
      fileInputRef.current.click();
    } else {
      setError("Invalid private code. Please try again.");
      setUploadSuccess(false);
      console.error("Incorrect private code.");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you'd send this 'file' object to your backend server.
      // For this simulation, we'll create a temporary URL to show a preview.
      setUploadedImage(URL.createObjectURL(file));
      setUploadSuccess(true);
      console.log("File selected:", file.name);
      console.log(
        "Simulating upload. In a real app, this file would be sent to a server."
      );
    }
  };

  return (
    <div className="font-montserrat relative min-h-screen w-full bg-gray-50">
      <CustomCursor />
      <main className="mx-auto max-w-2xl px-6 py-24">
        <a
          href="/picstop"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-black transition-colors mb-10"
        >
          <ArrowBackIcon fontSize="small" />
          Back to Picstop
        </a>

        <h1 className="text-4xl font-bold text-black">Creator Zone</h1>
        <p className="mt-2 text-gray-600">
          This is a private area for uploading new content.
        </p>

        <div className="mt-12 rounded-xl border border-dashed border-gray-300 bg-white p-8 text-center">
          <div className="mx-auto max-w-md">
            <h2 className="text-xl font-semibold text-black">
              Upload Your Next Masterpiece
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Drag and drop your files here or click the button below to select
              them from your device.
            </p>
            <button
              onClick={handleUploadClick}
              className="mt-6 rounded-full bg-black px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-gray-800"
            >
              {uploadedImage ? "Upload Another Picture" : "Upload Picture"}
            </button>
            {/* Hidden file input */}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
            {uploadSuccess && (
              <div className="mt-6">
                <p className="text-sm text-green-600">
                  Upload successful! (This is a simulation)
                </p>
                {uploadedImage && (
                  <img src={uploadedImage} alt="Upload preview" className="mt-4 mx-auto rounded-lg max-h-60" />
                )}
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Private Code Modal */}
      {isCodeModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-md px-6"
          onClick={() => setIsCodeModalOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-black">Enter Private Code</h3>
            <p className="mt-2 text-sm text-gray-500">
              A valid code is required to upload content.
            </p>
            <form onSubmit={handleCodeSubmit} className="mt-8 flex flex-col gap-3">
              <input
                type="password"
                value={privateCode}
                onChange={(e) => setPrivateCode(e.target.value)}
                placeholder="Your secret code..."
                className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 px-4 py-3.5 text-sm font-semibold text-black transition-all focus:border-black focus:outline-none"
                autoFocus
              />
              {error && (
                <p className="text-xs text-red-500 -mt-1">{error}</p>
              )}
              <button
                type="submit"
                className="flex items-center justify-center rounded-xl border-2 border-black bg-black py-3.5 text-sm font-bold text-white transition-all hover:bg-gray-800"
              >
                Verify & Proceed
              </button>
              <button
                type="button"
                onClick={() => setIsCodeModalOpen(false)}
                className="mt-2 text-sm font-semibold text-gray-400 hover:text-black transition-colors"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}