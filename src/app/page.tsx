"use client";

import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <main
      className="min-h-screen flex-col"
      style={{
        backgroundImage: `url("/background.png")`,
        height: "100vh",
        backgroundRepeat: "repeat",
        backgroundSize: "55%",
      }}
    >
      <div className="block lg:hidden">
        im also too lazy to make the mobile layout too
      </div>
      <div className="hidden lg:block">
        <Navbar></Navbar>
        <div
          className={`transition-transform duration-500 ease-in-out transform ml-12 xl:ml-24 mt-36 bg-[#00000020]   border-l-4 border-[#A041FF] w-fit ${
            show ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="font-sans flex flex-col px-8 py-2">
            <h1 className="text-[32px] font-semibold">
              Industry ranked #1 girl FY 2023
            </h1>
            <p>Source: Marin Kurokawa said so.</p>
          </div>
        </div>
        <div className="absolute right-[-72px] bottom-28">
          <div className="relative w-[760px] h-[500px]">
            <Image src="/marin.png" alt="marin" fill></Image>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </main>
  );
}
