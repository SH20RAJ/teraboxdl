"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/router";
import { Header } from "@/components/video-feeds";
import { Skeleton } from "@/components/ui/skeleton";
import useSWR from "swr";
import { relativeDate } from "@/lib/use";

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[125px] w-[250px] rounded-xl" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

export default function New() {
  return (
    <>
      <VideoSearch />
    </>
  );
}

const fetcher = (url) => fetch(url).then((res) => res.json());

export function VideoSearch() {
  const [query, setQuery] = useState("");
  const { data, error } = useSWR("/api/feed", fetcher);
  const [videocount, setVideoCount] = useState("");

  useEffect(() => {
    let id = null;

    // Check if the URL is from teraboxapp.com
    if (query.includes("teraboxapp.com/s/")) {
      id = query.split("teraboxapp.com/s/")[1];
    }
    // Check if the URL is from 1024tera.com
    else if (query.includes("1024tera.com/sharing/link?surl=")) {
      id = query.split("1024tera.com/sharing/link?surl=")[1];
    }

    // If an ID was found, redirect to the /watch/{id} page
    if (id) {
      window.location.href = `/watch/${id}`;
    }
  }, [query]);

  useEffect(() => {
    let videocount = async () => {
      let data = await fetch("/api/totalvideos", {
        cache: "no-store",
      });
      data = await data.json();
      return data.count;
    };
    videocount = videocount();
    setVideoCount(videocount);
  }, []);

  // if (error) return <div>Failed to load videos</div>
  // if (!data) return <SkeletonCard />

  return (
    <>
      <div>
        <Header videocount={videocount} query={query} />

        
        <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-24">
          <h2 className="text-2xl font-bold tracking-tight mb-8">
            Trending Videos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {data?.data?.map((video, i) => (
              <VideoCard key={i} data={video} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export function VideoCard({ data }) {
  const [videoData, setVideoData] = useState(null);

  useEffect(() => {
    // async function fetchVideoData() {
    //   const response = await fetch(`/api/tera?data=https://terabox.app/s/${data.tera_id}`);
    //   const jsonData = await response.json();
    //   setVideoData(jsonData);
    // }

    async function fetchVideoData() {
      const response = await fetch(`/api/yttera?id=${data.tera_id}`);
      const jsonData = await response.json();
      setVideoData(jsonData.response[0]);
    }

    fetchVideoData();
  }, [data.tera_id]);

  // direct_link
  // file_name
  // link
  // size
  // sizebytes
  // thumb

  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link className="block" href={"/watch/" + data.tera_id}>
        <img
          alt="Video Thumbnail"
          className="w-full aspect-video object-contain"
          height={225}
          src={
            videoData?.thumbnail ||
            "https://images.squarespace-cdn.com/content/v1/5bd072e1840b1694ec1f947a/1553158282843-TVK60M7IIFYQWICUDWUG/Ballet+Dancer+Gif"
          }
          width={400}
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">
          <Link
            className="hover:underline"
            href={"/watch/" + data.tera_id}
            prefetch={true}
          >
            {videoData?.title}
          </Link>
        </h3>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          <UserIcon className="h-4 w-4 mr-2" />
          <span>{relativeDate(data.created_at)}</span>
          <span className="mx-2">•</span>
          <CalendarDaysIcon className="h-4 w-4 mr-2" />
          {/* <span>{videoData?.size}</span> */}
        </div>
      </div>
    </div>
  );
}

function CalendarDaysIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
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
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function convertToRelativeDate(timestamp) {
  const parsedDate = new Date(timestamp);
  const now = new Date();
  const diffInSeconds = Math.floor((now - parsedDate) / 1000);

  const intervals = [
    { name: "year", seconds: 60 * 60 * 24 * 365 },
    { name: "month", seconds: 60 * 60 * 24 * 30 },
    { name: "week", seconds: 60 * 60 * 24 * 7 },
    { name: "day", seconds: 60 * 60 * 24 },
    { name: "hour", seconds: 60 * 60 },
    { name: "minute", seconds: 60 },
  ];

  for (const { name, seconds } of intervals) {
    const count = Math.floor(diffInSeconds / seconds);
    if (count >= 1) {
      return `${count} ${name}${count > 1 ? "s" : ""} ago`;
    }
  }

  return "Just now";
}
