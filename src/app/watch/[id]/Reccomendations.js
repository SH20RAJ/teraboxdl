'use client'
import { VideoCard } from '@/app/new/page'
import { useEffect, useState } from 'react';

export default function Reccomendations() {

    const [videos, setVideos] = useState(null);
  
    useEffect(() => {
  
      fetch("/api/feed?random=1")
      .then((data) => data.json())
      .then((data) => setVideos(shuffleArray(data.data)))
      .catch((error) => console.error('Error fetching data: ', error));
      
    }, []);

  return (
    <div className="container px-4 md:px-6 py-12 md:py-16 lg:py-24">
    <h2 className="text-2xl font-bold tracking-tight mb-8">Reccomended Videos</h2>
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {
          videos?.map((video,i)=> <VideoCard key={i} data={video}/>)
        }



    </div>
<a href="https://visitorbadge.io/status?path=teradl" className='flex  justify-center '><img src="https://api.visitorbadge.io/api/combined?path=teradl&countColor=%232ccce4&style=flat-square&labelStyle=upper" /></a>
  </div>
  )
}

export function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }