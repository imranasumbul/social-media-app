
import FollowBar from "@/components/followbar/FollowBar";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import "@radix-ui/themes/styles.css";


export default async function Home() {

  
  return (
    <>
    <div className="container xl:px-30 h-full mx-auto max-w-6xl">
            <div className="grid grid-cols-4 h-full pt-4">
              <Sidebar />
              <div className="col-span-3 lg:col-span-2 border-x-[2px] border-neutral-700">
                  <Header label="Home"/>
              </div>
              <FollowBar/>
            </div>
          </div>
    
    
    </>
  )
}