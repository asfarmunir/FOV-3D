"use client";
import { useState } from "react";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";

const steps = [
  {
    title: "Select a Game",
    description: "Choose from our library of popular Fortnite creative games.",
  },
  {
    title: "Choose Ad Location",
    description:
      "Pick premium spots with the highest visibilty and engagement.",
  },
  {
    title: "Upload & Launch ",
    description:
      "Upload your creative, Set your budget, and launch your campaign.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="">
        <section className="wrapper">
          <div className="xl:h-[80svh] py-12 xl:py-0  flex flex-col md:flex-row items-center gap-6  md:gap-16 justify-between">
            <div className=" w-full space-y-6 2xl:space-y-8">
              <h1 className="text-5xl 2xl:text-7xl font-bold text-white">
                Advertise in the Metaverse{" "}
              </h1>
              <p className="text-gray-400 text-lg 2xl:text-2xl">
                Place your branc in ront of millions of engageded Fortnite
                players with our in-game advertising platform.
              </p>
              <div className="inline-flex gap-3 items-center">
                <button className="bg-primary hidden md:block px-4 2xl:px-6 font-semibold text-sm 2xl:text-base text-white py-2.5 2xl:py-4 rounded-md">
                  Start Your Campaign
                </button>
                <button className="bg-white hidden md:block px-4 2xl:px-6 font-semibold text-sm 2xl:text-base  py-2.5 2xl:py-4 rounded-md">
                  View Demo
                </button>
              </div>
            </div>
            <div className=" w-full">
              <Image
                src="/game2.png"
                alt="hero"
                width={720}
                height={780}
                className="object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-[#2C2C2C]/30 wrapper flex flex-col items-center gap-4 py-12 md:py-20 xl:py-28">
          <h1 className="text-3xl 2xl:text-5xl font-bold text-white">
            How It Works{" "}
          </h1>
          <p className="text-gray-400 2xl:text-lg">
            Three simple step to get your brand in the game
          </p>
          <div className="grid pt-6 xl:pt-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 2xl:gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className=" p-6 md:p-8 bg-[#2C2C2C]/10 md:py-8 space-y-3 border border-stone-800 rounded-xl"
              >
                <h1 className="text-primary font-bold text-3xl md:text-5xl 2xl:text-5xl pb-2">
                  0{index + 1}
                </h1>
                <h1 className="text-xl 2xl:text-2xl font-bold text-white">
                  {step.title}
                </h1>
                <p className="text-gray-400 text-sm 2xl:text-lg">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className=" wrapper flex flex-col items-center gap-4 py-12 md:py-20 xl:py-28">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl 2xl:text-3xl font-bold text-white">
              Select a Game to See More
            </h1>
            <button className="bg-white hidden md:block px-4 2xl:px-10 font-semibold text-sm 2xl:text-base  py-3 2xl:py-4 rounded-md">
              Don't know what to choose?
            </button>
          </div>
          <div className=" w-full py-8 flex items-center flex-nowrap overflow-x-auto max-w-full ">
            {Array.from({ length: 10 }).map((_, index) => (
              <Image
                key={index}
                src="/game.png"
                alt="fortnite"
                width={420}
                height={420}
                className="mx-2 cursor-pointer"
              />
            ))}
          </div>
        </section>
        <section className=" wrapper flex flex-col items-center gap-4 py-12 md:py-20 xl:py-28">
          <h1 className="text-3xl 2xl:text-5xl text-center font-bold text-white">
            Powered by <br className="sm:hidden" /> FOV-tracking SDK
          </h1>
          <p className="text-gray-400 2xl:text-lg text-center">
            Advanced technology for precise ad performance measurement
          </p>
          <div className="grid pt-6 xl:pt-10 grid-cols-1 sm:grid-cols-2 justify-items-center  ms:px-8 md:px-12 xl:px-20 2xl:px-24 gap-3 sm:gap-4 md:gap-6 2xl:gap-8">
            <div className=" p-6 md:p-8 bg-[#2C2C2C]/20 md:py-8 space-y-4 border border-stone-800 rounded-xl">
              <div className="text-primary flex items-center justify-center font-bold text-2xl w-14 h-14 p-3 rounded-xl bg-primary/20  ">
                <IoEyeOutline />
              </div>
              <h1 className="text-xl 2xl:text-2xl pt-3 font-bold text-white">
                Track Distance & Duration
              </h1>
              <p className="text-gray-400 text-sm 2xl:text-lg">
                Precisely measure ad impressions with our advanced FOV-tracking
                technology, capturing both viewing distance and duration for
                accurate engagement metrics.{" "}
              </p>
            </div>
            <div className=" p-6 md:p-8 bg-[#2C2C2C]/20 md:py-8 space-y-4 border border-stone-800 rounded-xl">
              <div className="text-primary flex items-center justify-center font-bold text-2xl w-14 h-14 p-3 rounded-xl bg-primary/20  ">
                <FaRegStar />
              </div>
              <h1 className="text-xl pt-3 2xl:text-2xl font-bold text-white">
                Premium Placements
              </h1>
              <p className="text-gray-400 text-sm 2xl:text-lg">
                Get guaranteed premium ad spots in high-traffic areas, ensuring
                maximum visibility and engagement with your target audience.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#2C2C2C]/30 wrapper flex flex-col items-center gap-4 py-12 md:py-20 xl:py-28">
          <div className="flex flex-col lg:flex-row items-center w-full bg-gradient-to-r from-purple-950/30 via-slate-950 to-blue-950/50 justify-between py-12 gap-10 px-4 sm:p-16 xl:p-12 xl:py-20 rounded-xl border border-gray-900">
            <div className="max-w-md space-y-5 text-center lg:text-start">
              <h2 className="text-3xl 2xl:text-4xl font-bold text-white">
                Ready to reach millions of Fortnite players?
              </h2>
              <p className="text-gray-400 2xl:text-lg">
                Join hundreds of brands already advertising in the metaverse.
                Get started today and see the results tomorrow.
              </p>
            </div>
            <div>
              <button className="bg-primary  px-8 2xl:px-10  text-sm 2xl:text-base  text-white py-3 2xl:py-4 rounded-md">
                Start Your Campaign
              </button>
              <p className="text-gray-400 text-end mt-3">
                Learn more about our pricing
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
