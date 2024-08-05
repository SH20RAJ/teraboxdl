"use client";

export default function Footer() {
  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 p-8">
        <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-16 px-6 lg:px-16">
          <div className="max-w-4xl mx-auto text-center bg-gray-900 rounded-lg shadow-lg p-8">
            <h1 className="text-4xl font-bold mb-6">
              Download TeraBox Player Chrome Extension
            </h1>
            <img
              src="https://github.com/SH20RAJ/terabox-player-chrome-extension/blob/main/logo.png?raw=true"
              alt="TeraBox Player Logo"
              className="mb-6 w-40 h-40 rounded-full border-4 border-red-500 object-cover shadow-xl mx-auto"
            />
            <a
              href="https://github.com/SH20RAJ/terabox-player-chrome-extension/archive/refs/heads/main.zip"
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            >
              Download Latest
            </a>
          </div>
        </div>

        <div className="bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
          <h2 className="text-3xl font-semibold text-white mb-6 text-center">
            How to Install
          </h2>
          <ol className="list-decimal list-inside text-white text-lg space-y-4">
            <li>Download the extension using the link above.</li>
            <li>
              Extract the downloaded ZIP file to a location on your computer.
            </li>
            <li>
              Open Chrome and navigate to{" "}
              <code className="bg-gray-700 text-gray-300 px-1 rounded">
                chrome://extensions/
              </code>
              .
            </li>
            <li>
              Enable "Developer mode" by clicking the toggle switch in the top
              right corner.
            </li>
            <li>
              Click the "Load unpacked" button and select the folder where you
              extracted the ZIP file.
            </li>
            <li>
              Ensure the extension is enabled by checking the toggle switch.
            </li>
          </ol>
        </div>
        <div className="flex flex-col items-center gap-4">
          <a
            href="https://t.me/terasop_bot"
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 flex items-center gap-2"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 2a9.97 9.97 0 00-7.071 2.929A9.97 9.97 0 002 12a9.97 9.97 0 002.929 7.071A9.97 9.97 0 0012 22a9.97 9.97 0 007.071-2.929A9.97 9.97 0 0022 12a9.97 9.97 0 00-2.929-7.071A9.97 9.97 0 0012 2z"
              />
            </svg>
            Open Telegram Bot
          </a>
          <a
            href="https://www.youtube.com/watch?v=ynPuiFzotAQ"
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform transition-transform duration-300 ease-in-out hover:scale-105 flex items-center gap-2"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            Demo Video (How to Install)
          </a>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 p-6">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-white mb-4">
            Install TeraBox Player App
          </h1>
          <img
            src="https://github.com/SH20RAJ/terabox-player-chrome-extension/blob/main/logo.png?raw=true"
            alt="TeraBox Player Logo"
            className="mb-4 w-32 h-32 rounded-full border-4 border-red-500 object-cover shadow-lg"
          />
          <button
            onClick={() => {
              if (
                window.navigator.standalone ||
                window.matchMedia("(display-mode: standalone)").matches
              ) {
                alert("App is already installed.");
              } else {
                // Trigger PWA install prompt
                const event = new Event("beforeinstallprompt");
                window.dispatchEvent(event);
              }
            }}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
          >
            Install App
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="text-lg font-semibold mb-4">Useful Links</p>
          <div className="flex flex-col items-center gap-4">
            <a
              href="/privacy"
              className="hover:text-gray-400 transition-colors"
            >
              Privacy Policy
            </a>
            <a href="/tos" className="hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
            <a
              href="/disclaimer"
              className="hover:text-gray-400 transition-colors"
            >
              Disclaimer
            </a>
            <a href="/about" className="hover:text-gray-400 transition-colors">
              About Us
            </a>
            <a
              href="/contact"
              className="hover:text-gray-400 transition-colors"
            >
              Contact
            </a>
            <a href="/dmca" className="hover:text-gray-400 transition-colors">
              DMCA
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
