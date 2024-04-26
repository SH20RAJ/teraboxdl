'use client'
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { ContextMenuTrigger, ContextMenuItem, ContextMenuContent, ContextMenu } from "@/components/ui/context-menu"
import { useEffect, useState } from "react"
import useSWR from "swr"


const fetcher = (url) => fetch(url).then((res) => res.json())

export function Header(){
    const [query, setQuery] = useState('');
    const { data, error } = useSWR('/api/feed', fetcher, { refreshInterval: 100 })
  
    useEffect(() => {
      let id = null;
  
      // Check if the URL is from teraboxapp.com
      if (query.includes('teraboxapp.com/s/')) {
        id = query.split('teraboxapp.com/s/')[1];
      }
      // Check if the URL is from 1024tera.com
      else if (query.includes('1024tera.com/sharing/link?surl=')) {
        id = query.split('1024tera.com/sharing/link?surl=')[1];
      }
  
      // If an ID was found, redirect to the /watch/{id} page
      if (id) {
        window.location.href = `/watch/${id}`;
      }
    }, [query]);
  
    // if (error) return <div>Failed to load videos</div>
    // if (!data) return <SkeletonCard />
  
    return <header
    className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
    <div className="flex items-center gap-4">
      <Link className="flex items-center gap-2" href="/">
        <YoutubeIcon className="w-8 h-8 text-red-500" />
        <span className="text-xl font-bold">TeraDl</span>
      </Link>
      <form className="flex-1 max-w-md">
        <div className="relative">
          <Input
            className="bg-gray-800 text-white rounded-full pl-10 pr-4 py-2 w-full"
            placeholder="Search"
            onChange={(e) => setQuery(e.target.value)}
            type="text"
             />
          <SearchIcon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
      </form>
    </div>
    <div className="flex items-center gap-4">
      <Link href={"/new"}>
      <Button size="icon" variant="ghost">
        <UploadIcon className="w-6 h-6" />
        <span className="sr-only">Upload</span>
      </Button>
      </Link>
      <Link href={"https://teraboxdl-3xv9.onrender.com/"}>
      <Button size="icon" variant="ghost">
        <SignalIcon className="w-6 h-6" />
        <span className="sr-only">Notifications</span>
      </Button>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon" variant="ghost">
            <Avatar className="w-8 h-8 rounded-full">
              <AvatarImage alt="User Avatar" src="/placeholder-user.jpg" />
              <AvatarFallback>Try</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>If this site is not working try below listed sites</DropdownMenuItem>
          <DropdownMenuItem>
          <Link href={"https://teraboxdl-mu.vercel.app/"}>
            Teradl - 1 (vercel)
          </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
          <Link href={"https://teraboxdl-3xv9.onrender.com/"}>
            Teradl - 2 (render)
          </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Your channel</DropdownMenuItem>
          <DropdownMenuItem>YouTube Studio</DropdownMenuItem>
          <DropdownMenuItem>Switch account</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>Help</DropdownMenuItem>
          <DropdownMenuItem>Sign out</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  </header>
  
  }


  function ClockIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>)
    );
  }
  
  
  function FlagIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
        <line x1="4" x2="4" y1="22" y2="15" />
      </svg>)
    );
  }
  
  
  function HomeIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>)
    );
  }
  
  
  function LibraryIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m16 6 4 14" />
        <path d="M12 6v14" />
        <path d="M8 8v12" />
        <path d="M4 4v16" />
      </svg>)
    );
  }
  
  
  function PlusIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M5 12h14" />
        <path d="M12 5v14" />
      </svg>)
    );
  }
  
  
  function SearchIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>)
    );
  }
  
  
  function ShareIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
        <polyline points="16 6 12 2 8 6" />
        <line x1="12" x2="12" y1="2" y2="15" />
      </svg>)
    );
  }
  
  
  export function SignalIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M2 20h.01" />
        <path d="M7 20v-4" />
        <path d="M12 20v-8" />
        <path d="M17 20V8" />
        <path d="M22 4v16" />
      </svg>)
    );
  }
  
  
  export function SubscriptIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="m4 5 8 8" />
        <path d="m12 5-8 8" />
        <path
          d="M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07" />
      </svg>)
    );
  }
  
  
  export function TrendingUpIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>)
    );
  }
  
  
  export function UploadIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>)
    );
  }
  
  
  export function YoutubeIcon(props) {
    return (
      (<svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <path
          d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
        <path d="m10 15 5-3-5-3z" />
      </svg>)
    );
  }
  
  
  
  