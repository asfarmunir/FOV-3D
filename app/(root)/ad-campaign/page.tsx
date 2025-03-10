import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Page = () => {
  return (
    <div className="mt-24 py-10 z-50 wrapper w-full">
      <div className="flex flex-col  lg:flex-row items-center justify-between gap-3 xl:gap-6 w-full">
        <div className="bg-[#040911] h-[312px]  w-full p-6 border border-[#FFFFFF33] rounded-[12px] flex items-center justify-center">
          <p className="text-sm text-primary-500">
            player looking at a billboard and a +1
          </p>
        </div>
        <div className="bg-[#040911] h-[312px]  w-full p-6 border border-[#FFFFFF33] rounded-[12px] flex items-center justify-center">
          <p className="text-sm text-primary-500"> heat map</p>
        </div>
        <div className="bg-[#040911] h-[312px]  w-full p-6 border border-[#FFFFFF33] rounded-[12px] flex items-start gap-4 justify-evenly  flex-col ">
          <p className="2xl:text-xl text-lg font-semibold text-white">
            With our proprietary <br /> FOV-tracking SDK, we:
          </p>
          <div className=" w-full bg-[#101927] rounded-[11px] flex items-center p-4 gap-4">
            <Image
              src="/scale.svg"
              width={25}
              height={25}
              alt="hehe"
              className="2xl:w-8 2xl:h-8"
            />

            <p className="text-xs xl:text-sm 2xl:text-base text-white">
              Track distance and duration of ad impressions
            </p>
          </div>
          <div className=" w-full bg-[#101927] rounded-[11px] flex items-center p-4 gap-4">
            <Image
              src="/star.svg"
              width={25}
              height={25}
              alt="hehe"
              className="2xl:w-8 2xl:h-8"
            />

            <p className="text-xs xl:text-sm 2xl:text-base text-white">
              Deliver the most premium guaranteed ad placements{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="  flex flex-col items-center gap-4 py-12 md:py-20 ">
        <div className="flex items-center justify-between w-full">
          <h1 className="text-2xl 2xl:text-3xl font-semibold text-white">
            Select a game to continue:
          </h1>
        </div>
        <div className=" w-full py-5 flex items-center gap-3 flex-nowrap overflow-x-auto max-w-full ">
          {Array.from({ length: 10 }).map((_, index) => (
            <div className=" min-w-[420px] ">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    {" "}
                    <Image
                      key={index}
                      src="/game.png"
                      alt="fortnite"
                      width={420}
                      height={420}
                      className="mx-2 cursor-pointer"
                    />
                  </TooltipTrigger>
                  <TooltipContent className="bg-[#141C2A] w-96 p-4 text-white border-none rounded-[12px]">
                    <p className="text-lg font-semibold mb-3">
                      Crazy Red Vs Blue
                    </p>
                    <p className="text-primary-500">Genre: Combat</p>
                    <p className="text-primary-500 border-b border-[#FFFFFF]/20 pb-4 mb-4">
                      Top 5 Highest-Traffic Game{" "}
                    </p>
                    <div className="flex items-center py-1.5 justify-between">
                      <p className="text-sm capitalize  text-primary-500">
                        plays
                      </p>
                      <p className=" font-semibold text-white">
                        40M - 55M / month
                      </p>
                    </div>
                    <div className="flex items-center py-1.5 justify-between">
                      <p className="text-sm capitalize  text-primary-500">
                        Impressions / placement:
                      </p>
                      <p className=" font-semibold text-white">1.5B - 2.5B/m</p>
                    </div>
                    <div className="flex items-center py-1.5 justify-between">
                      <p className="text-sm capitalize  text-primary-500">
                        Assumed Demographic:
                      </p>
                      <p className=" font-semibold text-white">12-18 y/o</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>{" "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
