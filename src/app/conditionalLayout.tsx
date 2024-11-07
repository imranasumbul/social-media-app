// src/components/ConditionalLayout.tsx
"use client";

import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";
import Sidebar from "@/components/sidebar/Sidebar";
import FollowBar from "@/components/followbar/FollowBar";
export default function ConditionalLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/signup") {
    return <>
    <Toaster />
    <Providers>
    <div className="min-h-screen bg-dark-bg max-w-screen text-dark-text ">
        {children}
    </div>
    </Providers>
    </>;
  }

  return (
    <>
      <Toaster />
        <Providers >
        <div className="min-h-screen overflow-y-auto bg-dark-bg max-w-screen text-dark-text ">
          <div className="container xl:px-30 h-screen mx-auto max-w-6xl">
              <div className="grid grid-cols-4 h-full pt-4">
                <Sidebar />
                <div className="col-span-3 lg:col-span-2 border-x-[2px] border-neutral-700">
                  {children}
                </div>
                <FollowBar/>
                
              </div>  
          </div>
      
                
              
        </div>
        </Providers>
    </>
  );
}
