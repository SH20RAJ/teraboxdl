import Link from "next/link";
import { YoutubeIcon } from "lucide-react"; // Import your icons

export let links = [
  { name: "Privacy Policy", slug: "/privacy" },
  { name: "Terms of service", slug: "/tos" },
  { name: "About", slug: "/about" },
  { name: "Contact", slug: "/contact" },
  { name: "DMCA", slug: "/dmca" },
];

export function Header() {
  return (
    <header className="bg-gray-950 text-white py-4 px-6 flex items-center justify-between shadow-lg">
      <div className="flex items-center gap-6">
        <Link className="flex items-center gap-2" href="/">
          <YoutubeIcon className="w-8 h-8 text-red-500" />
          <span className="text-xl font-bold">TeraBox.tech</span>
        </Link>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden lg:flex gap-4">
          {links.map(({ name, slug }, j) => (
            <Link key={j} href={slug} className="hover:text-red-500 transition">
              {name}
            </Link>
          ))}
        </div>
        <div className="lg:hidden flex items-center">
          <button className="p-2 rounded-full hover:bg-gray-700 transition">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
