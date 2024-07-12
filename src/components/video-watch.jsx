/**
 * @see https://v0.dev/t/rxV5er3z6EO
**/
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import Link from "next/link";

export function VideoWatch({ data, id }) {
  return (
        <div className="flex justify-center">
          <div className="bg-white dark:bg-gray-950 rounded-lg overflow-hidden shadow-sm w-full">
            <div className="relative aspect-video w-full max-h-[600px] min-h-[600px]">
              <video
                className=" h-full"
                src={ process.env.CFW && process.env.CFW +"?url=" + (data.resolutions['Fast Download']) || "/api/videos?url=" + (data.resolutions['Fast Download'])}
                controls
                poster={data.thumbnail}
                width={"100%"}
                height={"100%"}
              ></video>
              {/* <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" /> */}
            </div>
            <div className="p-6">
              <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                <UserIcon className="h-4 w-4 mr-2" />
                <span>Anonymous</span>
                <span className="mx-2">•</span>
                <CalendarDaysIcon className="h-4 w-4 mr-2" />
                <span>X months ago</span>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6  gap-4 flex  flex-wrap">
                {/* <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                {data.file_name}
              </div> */}
                <title>{data.title}</title>
                <span>Desc :- {data.title}</span>
                <span className=" inline-block mx-6">
<a href={"https://visitorbadge.io/status?path="+id}><img src={"https://api.visitorbadge.io/api/combined?path="+id+"&labelColor=%23f47373&countColor=%23d9e3f0&style=flat-square"} /></a>
                </span>
                <a download="hi.mp4" target="_blank" href={"https://teradl.shraj.workers.dev/?url="+(data.resolutions['HD Video'])}  >
                  <Button variant="outline">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                      />
                    </svg>
                  </Button>
                </a>
                <a download="hi.mp4" rel="noopener noreferrer" target="_blank" href={data.resolutions['HD Video']}  >
                  Slow Download
                </a>
                <a download="hi.mp4" target="" href={replaceUrl(data.resolutions['HD Video'])}  >
                  HD Video
                </a>
                <a href={"https://t.me/terasop_bot?start=https://teraboxapp.com/s/"+ id }>TeraSop Telegram Bot</a>
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Avatar className="w-8 h-8 border">
                    <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                    <AvatarFallback>AC</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <div className="font-semibold">Anonymous</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      1M subscribers
                    </div>
                  </div>
                </div>
                <Button variant="outline">Subscribe</Button>
              </div>
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

export function replaceUrl(originalUrl , replacementDomain = "https://d8.freeterabox.com") {
  // Define the original and replacement domain
  const originalDomain = "https://d.terabox.app";

  // Replace the domain in the URL
  const replacedUrl = originalUrl.replace(originalDomain, replacementDomain);

  return replacedUrl;
}


export function Comment() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1.5">
              <div className="flex items-center gap-2">
                <div className="font-semibold">@iamwillpursell</div>
                <div className="text-gray-500 text-xs dark:text-gray-400">
                  5 months ago
                </div>
              </div>
              <div>
                I really love the ecosystem Vercel is creating. The way each
                component can be added and modified with ease really makes these
                tools attractive.
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1.5">
              <div className="flex items-center gap-2">
                <div className="font-semibold">@HackSoft</div>
                <div className="text-gray-500 text-xs dark:text-gray-400">
                  2 months ago
                </div>
              </div>
              <div>
                We are more than excited to leverage all the new stuff, building
                better products for our clients ✨
              </div>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Avatar className="w-10 h-10 border">
              <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
              <AvatarFallback>AC</AvatarFallback>
            </Avatar>
            <div className="grid gap-1.5">
              <div className="flex items-center gap-2">
                <div className="font-semibold">@greed7513</div>
                <div className="text-gray-500 text-xs dark:text-gray-400">
                  6 days ago
                </div>
              </div>
              <div>
                does anyone know which monospace are they using when showing
                code?
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
export function SideReccomendations(){
  return  <div className="space-y-6">
  <Card>
    <CardHeader>
      <CardTitle>Up Next</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid gap-4">
        <div className="flex items-start gap-4 relative">
          <Link className="absolute inset-0" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Thumbnail"
            className="aspect-video rounded-lg object-cover"
            height={94}
            src="/placeholder.svg"
            width={168}
          />
          <div className="text-sm">
            <div className="font-medium line-clamp-2">
              Introducing v0: Generative UI
            </div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              Vercel
            </div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              300K views • 5 days ago
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 relative">
          <Link className="absolute inset-0" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Thumbnail"
            className="aspect-video rounded-lg object-cover"
            height={94}
            src="/placeholder.svg"
            width={168}
          />
          <div className="text-sm">
            <div className="font-medium line-clamp-2">
              Introducing the frontend cloud
            </div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              Vercel
            </div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              1.2M views • 2 months ago
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 relative">
          <Link className="absolute inset-0" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Thumbnail"
            className="aspect-video rounded-lg object-cover"
            height={94}
            src="/placeholder.svg"
            width={168}
          />
          <div className="text-sm">
            <div className="font-medium line-clamp-2">
              Using Vercel KV with Svelte
            </div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              Lee Robinson
            </div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              21K views • 1 week ago
            </div>
          </div>
        </div>
        <div className="flex items-start gap-4 relative">
          <Link className="absolute inset-0" href="#">
            <span className="sr-only">View</span>
          </Link>
          <img
            alt="Thumbnail"
            className="aspect-video rounded-lg object-cover"
            height={94}
            src="/placeholder.svg"
            width={168}
          />
          <div className="text-sm">
            <div className="font-medium line-clamp-2">
              Loading UI with Next.js 13
            </div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              Delba
            </div>
            <div className="text-xs text-gray-500 line-clamp-1 dark:text-gray-400">
              12K views • 10 days ago
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
</div>
}