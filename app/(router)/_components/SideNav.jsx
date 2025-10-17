"use client"
import { useUser } from "@clerk/nextjs";
import { BadgeIcon, BookOpen, GraduationCap, LayoutDashboard } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, {useEffect } from "react";

function SideNav() {
  const {user} = useUser()
  const menu = [
    {
      id: 8,
      name: "Dashboard",
      icon: LayoutDashboard,
      path: '/dashboard',
      auth:user
    },
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen,
      path: '/courses',
      auth:true
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon,
      path: 'membership',
      auth:true
    },
    {
      id: 3,
      name: "Teach",
      icon: GraduationCap,
      path: '/teach',
      auth:true
    },
  ]
  const path = usePathname();
  useEffect(()=>{
    console.log("path",path)
  },[])
  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <Image src="/cora.jpg" alt="logo" width={100} height={80} />
      <hr className="mt-7"></hr>
      {/* Menu list */}
      <div className="mt-8">
        {menu.map((item, index) => item.auth&&(
          <Link href={item.path}>
          <div className={`group flex gap-3 mt-2 p-3 text-[18px] items-center text-gray-600 cursor-pointer hover:bg-cyan-600 hover:text-white rounded-md transition-all ease-in-out duration-200 ${path.includes(item.path)&&'bg-cyan-600 text-white'}`}>
            <item.icon className="group-hover:animate-bounce" />
            <h2>{item.name}</h2>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
