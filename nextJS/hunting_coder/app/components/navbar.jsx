"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
export default function Navbar() {
  const pathname = usePathname();
  let bgColorHome = "text-green-500";
  let bgColorAbout = "text-green-500";
  let bgColorContact = "text-green-500";
  let bgColorBlog = "text-green-500";

  if (pathname === "/") {
    bgColorHome = "text-green-300";
  } else if (pathname === "/About") {
    bgColorAbout = "text-green-300";
  } else if (pathname === "/Contact") {
    bgColorContact = "text-green-300";
  }
  else if (pathname === "/Blogs") {
    bgColorBlog = "text-green-300";
  }

  return (
    <nav className="w-full h-16 bg-gray-900 flex justify-center font-bold px-6">
        <ul className="flex items-center gap-10 justify-center ">
          <li className={`${bgColorHome}`}><Link href="/">Home</Link></li>
          <li className={`${bgColorBlog}`}><Link href="/Blogs">Blog</Link></li>
          <li className={`${bgColorAbout}`}><Link href="/About">About</Link></li>
          <li className={`${bgColorContact}`}><Link href="/Contact">Contact</Link></li>
        </ul> 
      </nav>
  );
}