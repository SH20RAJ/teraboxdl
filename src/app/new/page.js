'use client'

import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useRouter } from 'next/router'
import { Header } from '@/components/video-feeds'

export default function New() {
  return (
    <>
      <VideoSearch/>
    </>
  )
}


export function VideoSearch() {
  const [query, setQuery] = useState('');

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

  return (<>
  <div>
      <Header/>

    <div className="w-full bg-gray-100 dark:bg-gray-800 py-12 md:py-16 lg:py-24">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Discover the best videos</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg md:text-xl">
            Search, explore and download a vast collection of high-quality videos.
          </p>
          <div className="flex items-center max-w-xl mx-auto" >
            <div className="relative flex-1">
              <SearchIcon
                className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                className="w-full rounded-l-md border-0 py-2 pl-12 pr-4 text-gray-900 dark:bg-gray-950 dark:text-gray-50 focus:ring-2 focus:ring-gray-500"
                placeholder="Enter Terabox Link Here..."
                type="search" 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-24">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Trending Videos</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Video Thumbnail"
              className="w-full aspect-video object-cover"
              height={225}
              src="/placeholder.svg"
              width={400} />
          </Link>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              <Link className="hover:underline" href="#">
                Introducing the Frontend Cloud
              </Link>
            </h3>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <UserIcon className="h-4 w-4 mr-2" />
              <span>Vercel</span>
              <span className="mx-2">•</span>
              <CalendarDaysIcon className="h-4 w-4 mr-2" />
              <span>2 months ago</span>
            </div>
          </div>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Video Thumbnail"
              className="w-full aspect-video object-cover"
              height={225}
              src="/placeholder.svg"
              width={400} />
          </Link>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              <Link className="hover:underline" href="#">
                Vercel Ship Keynote: Introducing the frontend cloud
              </Link>
            </h3>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <UserIcon className="h-4 w-4 mr-2" />
              <span>Vercel</span>
              <span className="mx-2">•</span>
              <CalendarDaysIcon className="h-4 w-4 mr-2" />
              <span>5 months ago</span>
            </div>
          </div>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Video Thumbnail"
              className="w-full aspect-video object-cover"
              height={225}
              src="/placeholder.svg"
              width={400} />
          </Link>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              <Link className="hover:underline" href="#">
                Using Vercel KV with Svelte
              </Link>
            </h3>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <UserIcon className="h-4 w-4 mr-2" />
              <span>Lee Robinson</span>
              <span className="mx-2">•</span>
              <CalendarDaysIcon className="h-4 w-4 mr-2" />
              <span>1 week ago</span>
            </div>
          </div>
        </div>
        <div
          className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <Link className="block" href="#">
            <img
              alt="Video Thumbnail"
              className="w-full aspect-video object-cover"
              height={225}
              src="/placeholder.svg"
              width={400} />
          </Link>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              <Link className="hover:underline" href="#">
                Loading UI with Next.js 13
              </Link>
            </h3>
            <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
              <UserIcon className="h-4 w-4 mr-2" />
              <span>Delba</span>
              <span className="mx-2">•</span>
              <CalendarDaysIcon className="h-4 w-4 mr-2" />
              <span>10 days ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  </>);
}

function CalendarDaysIcon(props) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
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


function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>)
  );
}
