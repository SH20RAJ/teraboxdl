import Link from "next/link";
import { YoutubeIcon, Menu } from "lucide-react"; 

export const links = [
  { name: "Privacy Policy", slug: "/privacy" },
  { name: "Terms of service", slug: "/tos" },
  { name: "About", slug: "/about" },
  { name: "Contact", slug: "/contact" },
  { name: "DMCA", slug: "/dmca" },
];

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black to-transparent backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <Link 
            href="/"
            className="flex items-center gap-3 transition duration-200 hover:opacity-80"
          >
            <YoutubeIcon className="w-8 h-8 text-red-500" />
            <span className="text-lg font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              TeraBox.tech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map(({ name, slug }, i) => (
              <Link
                key={i}
                href={slug}
                className="relative text-sm text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                {name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <Menu className="w-5 h-5 text-gray-300" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - Add state management for toggle */}
      <div className="lg:hidden">
        <nav className="absolute top-full left-0 right-0 bg-gray-950/95 backdrop-blur-lg border-b border-white/5 px-4 py-3 flex flex-col gap-2 hidden">
          {links.map(({ name, slug }, i) => (
            <Link
              key={i}
              href={slug}
              className="py-2 px-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
