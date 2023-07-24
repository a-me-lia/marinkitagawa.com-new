"use client";
import React, { useState } from "react";

import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
  const [expand, setExpand] = useState(false);
  const [expand2, setExpand2] = useState(false);

  return (
    <div>
      <div
        className={`transition-all duration-500 ease-in-out absolute inset-x-0 bottom-0 h-28 bg-white hover:h-48 ${
          expand ? "h-48" : "h-28"
        }`}
        onMouseEnter={() => setExpand(true)}
        onMouseLeave={() => setExpand(false)}
      >
        <div className="w-full py-2 bg-white border-t-[1px]">
          <p className="ml-12 text-[24px]">Content</p>
        </div>
        {expand && (
          <div className="flex flex-col ">
            <div className="flex flex-row justify-center space-x-24">
              <Link href="https://www.instagram.com/rintohsakaa/">
                <div className="hover:scale-105 transition-all duration-200 relative mt-4 h-12 w-36">
                  <Image src="/instagram.png" alt="instagram" fill></Image>
                </div>
              </Link>
              <Link href="https://www.tiktok.com/@shizukukuroe">
                <div className="hover:scale-105 transition-all duration-200 relative mt-3 h-12 w-36">
                  <Image src="/tiktok.png" alt="tiktok" fill></Image>
                </div>
              </Link>
              <Link href="https://discord.gg/mPE5EuBxN3">
                <div className="hover:scale-105 transition-all duration-200 relative  h-20 w-36">
                  <Image src="/discord.png" alt="discord" fill></Image>
                </div>
              </Link>
              <Link href="https://www.twitch.tv/tsuntohsaka">
                <div className="hover:scale-105 transition-all duration-200 relative  h-16 w-36">
                  <Image src="/twitch.png" alt="twitch" fill></Image>
                </div>
              </Link>
              <Link href="https://www.youtube.com/channel/UCIA6jcVsPPyKcs-IJLBwPcQ">
                <div className="hover:scale-105 transition-all duration-200 relative h-20 w-36">
                  <Image src="/youtube.jpg" alt="youtube" fill></Image>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
      <div
        className={`transition-all duration-1000 ease-in-out absolute inset-x-0 bottom-0 h-14 bg-white hover:h-48 ${
          expand2 ? "h-48" : "h-12"
        }`}
        onMouseEnter={() => setExpand2(true)}
        onMouseLeave={() => setExpand2(false)}
      >
        <div className="w-full py-2 flex flex-col bg-white border-t-[1px]">
          <h1 className="ml-12 text-[24px]">Support</h1>
        </div>
        {expand2 && (
          <div className="flex flex-col ">
            <p className="ml-12 mt-2">
              24/7 toll-free simp hotline: +1 (919) - 909 - 8638
            </p>
            <div className="flex flex-row justify-center space-x-24">
              <Link href="http://patreon.com/marinkitagawa">
                <div className="hover:scale-105 transition-all duration-200 relative h-20 w-36">
                  <Image src="/patreon.png" alt="patreon" fill></Image>
                </div>
              </Link>
              <Link href="https://ko-fi.com/marinkitagawaa">
                <div className="hover:scale-105 transition-all duration-200 relative mt-3 h-12 w-36">
                  <Image src="/kofi.webp" alt="ko-fi" fill></Image>
                </div>
              </Link>
              <Link href="https://www.amazon.com/hz/wishlist/ls/3TNRBC0YK9UU5?ref_=wl_share">
                <div className="hover:scale-105 transition-all duration-200 relative -mt-3 h-20 w-56">
                  <Image src="/amazon.png" alt="amazon wishlist" fill></Image>
                </div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Footer;
