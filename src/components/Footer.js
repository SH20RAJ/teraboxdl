"use client";

export default function Footer() {
  return (
    <div className="min-h-screen">
      {/* Desktop View */}
      <div className="hidden lg:flex flex-col min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <main className="flex-grow flex flex-col items-center justify-center p-8 space-y-16">
          {/* Hero Section */}
          <div className="relative w-full max-w-4xl mx-auto text-center space-y-8">
            <div className="absolute inset-0 bg-blue-500/10 blur-3xl rounded-full"></div>
            <h1 className="relative text-5xl font-black text-white">
              TeraBox Player Extension
              <span className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 blur-2xl opacity-20"></span>
            </h1>
            <img
              src="https://github.com/SH20RAJ/terabox-player-chrome-extension/blob/main/logo.png?raw=true"
              alt="TeraBox Player Logo"
              className="w-32 h-32 mx-auto rounded-full ring-2 ring-blue-500/20 shadow-xl shadow-blue-500/10"
            />
            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/SH20RAJ/terabox-player-chrome-extension/archive/refs/heads/main.zip"
                className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl text-white font-medium transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Extension
              </a>
            </div>
          </div>

          {/* Installation Steps */}
          <div className="w-full max-w-2xl mx-auto bg-white/5 backdrop-blur-lg rounded-2xl p-8 space-y-6">
            <h2 className="text-2xl font-bold text-white/90">Installation Guide</h2>
            <div className="space-y-4">
              {[
                "Download the extension using the link above",
                "Extract the downloaded ZIP file",
                "Open Chrome and go to chrome://extensions/",
                "Enable Developer mode",
                "Click Load unpacked and select the extracted folder",
                "Ensure the extension is enabled"
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600/10 text-blue-400 text-sm">
                    {i + 1}
                  </span>
                  <p className="text-slate-300 flex-1">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://t.me/terasop_bot"
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-600 to-sky-500 rounded-xl text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-sky-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm-3.11-8.83l.013-.007.87 2.87c.112.311.266.367.453.341.188-.025.287-.126.41-.244l1.188-1.148 2.55 1.888c.466.257.801.124.917-.432l1.657-7.822c.183-.728-.137-1.02-.702-.788l-9.733 3.76c-.664.266-.66.638-.12.803l2.497.78z"/>
              </svg>
              Telegram Bot
            </a>
            <a  
              href="https://www.youtube.com/watch?v=ynPuiFzotAQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-500 rounded-xl text-white font-medium transition-all duration-200 hover:shadow-lg hover:shadow-red-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Watch Tutorial
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/5">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-slate-400">
              {[
                ['Privacy Policy', '/privacy'],
                ['Terms of Service', '/tos'],
                ['Disclaimer', '/disclaimer'],
                ['About Us', '/about'],
                ['Contact', '/contact'],
                ['DMCA', '/dmca'],
                ['Free Apps', 'https://www.apped.me/'],
                ['DevArt Articles', 'https://devart.terabox.tech/']
              ].map(([title, url]) => (
                <a 
                  key={title}
                  href={url}
                  className="hover:text-white transition-colors duration-200"
                >
                  {title}
                </a>
              ))}
            </nav>
          </div>
        </footer>
      </div>

      {/* Mobile View */} 
      <div className="lg:hidden min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 px-4 py-12">
        {/* Similar mobile content with adjusted styling */}
      </div>
    </div>
  );
}
