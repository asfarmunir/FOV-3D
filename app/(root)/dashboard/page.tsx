"use client";
import LineChartComponent from "@/components/shared/lineChart";
import BarChart from "@/components/shared/barChart";
import Image from "next/image";
import React from "react";

const Page = () => {
  const [tab, setTab] = React.useState("30 days");
  return (
    <div className=" w-full p-8 z-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8">
        <div className="text-center sm:text-start mb-4 md:mb-0">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-primary-500 font-light">
            Measure your advertising conversions
          </p>
        </div>
        <div className="flex z-20 items-center gap-2">
          <button className="bg-black border border-[#FFFFFF33] hover:bg-gray-900 text-xs 2xl:text-sm inline-flex items-center gap-2 text-white px-5 py-3 rounded-[12px]">
            <Image src="/export.svg" alt="filter" width={20} height={20} />
            Export
          </button>
          <button className="bg-blue-500 text-white text-xs 2xl:text-sm px-5 py-3 rounded-[12px]">
            Insights
          </button>
        </div>
      </div>
      <div className="flex justify-between flex-col-reverse sm:flex-row gap-4 items-center mb-8">
        <div className="flex z-20 items-center  border border-[#FFFFFF33] rounded-[8px] ">
          <button
            onClick={() => setTab("30 days")}
            className={`

          ${
            tab === "30 days"
              ? "bg-[#FFFFFF33] text-white  border border-[#FFFFFF33] "
              : "bg-transparent text-gray-300"
          } px-3 2xl:px-6 py-2.5 font-semibold rounded-[8px]`}
          >
            30 days
          </button>
          <button
            onClick={() => setTab("7 days")}
            className={`
          ${
            tab === "7 days"
              ? "bg-[#FFFFFF33] text-white  border border-[#FFFFFF33] "
              : "bg-transparent text-gray-300"
          } px-6 py-2.5  font-semibold rounded-[8px]`}
          >
            7 days
          </button>
          <button
            onClick={() => setTab("1 day")}
            className={`
          ${
            tab === "1 day"
              ? "bg-[#FFFFFF33] text-white  border border-[#FFFFFF33] "
              : "bg-transparent text-gray-300"
          } px-6 py-2.5  font-semibold rounded-[8px]`}
          >
            1 day
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-black border border-[#FFFFFF33] hover:bg-gray-900 text-xs 2xl:text-sm inline-flex items-center gap-2 text-white px-5 py-3 rounded-[12px]">
            <Image src="/calendar.svg" alt="filter" width={20} height={20} />
            Select Date
          </button>
          <button className="bg-black border border-[#FFFFFF33] hover:bg-gray-900 text-xs 2xl:text-sm inline-flex items-center gap-2 text-white px-5 py-3 rounded-[12px]">
            <Image src="/filter.svg" alt="filter" width={20} height={20} />
            Filters
          </button>
        </div>
      </div>

      {/* Campaign Monthly Impressions */}

      <div className="flex gap-8 flex-col md:flex-row">
        <div className=" w-full">
          <div className="rounded-xl bg-[#040911] border border-[#FFFFFF33]  shadow mb-8">
            <div className="flex justify-between  p-6 border-b border-[#FFFFFF33]  text-white">
              <h2 className="2xl:text-lg  ">Campaign Monthly Impressions</h2>

              <p className="">5.12B</p>
            </div>
            <div className=" w-full h-96 py-6 ">
              <LineChartComponent />
            </div>
          </div>

          {/* Campaign Details */}
          <div className="rounded-xl bg-[#040911] border border-[#FFFFFF33]  shadow mb-8">
            <div className="flex justify-between items-center p-6 border-b border-[#FFFFFF33]  text-white">
              <h2 className="2xl:text-lg  ">Campaign Details:</h2>
              <div className="flex z-20 items-center  border border-[#FFFFFF33] rounded-[8px] ">
                <button
                  onClick={() => setTab("30 days")}
                  className={`

          ${
            tab === "30 days"
              ? "bg-[#FFFFFF33] text-white  border border-[#FFFFFF33] "
              : "bg-transparent text-gray-300"
          } px-6 py-2.5 font-semibold text-xs 2x:text-sm rounded-[8px]`}
                >
                  30 days
                </button>
                <button
                  onClick={() => setTab("7 days")}
                  className={`
          ${
            tab === "7 days"
              ? "bg-[#FFFFFF33] text-white  border border-[#FFFFFF33] "
              : "bg-transparent text-gray-300"
          } px-3 2xl:px-6 py-2.5  font-semibold text-xs 2x:text-sm rounded-[8px]`}
                >
                  7 days
                </button>
                <button
                  onClick={() => setTab("1 day")}
                  className={`
          ${
            tab === "1 day"
              ? "bg-[#FFFFFF33] text-white  border border-[#FFFFFF33] "
              : "bg-transparent text-gray-300"
          } px-3 2xl:px-6 py-2.5  font-semibold text-xs 2x:text-sm rounded-[8px]`}
                >
                  1 day
                </button>
              </div>{" "}
            </div>
            <div className="flex flex-col  items-center gap-6 px-3 ">
              <div className=" w-full h-72 py-6  ">
                <BarChart />
              </div>
              <div className=" w-full h-72 py-6 ">
                <BarChart />
              </div>
            </div>
          </div>
        </div>

        {/* Individual Ad Performance */}
        <div className=" w-full rounded-xl p-6 bg-[#040911] border border-[#FFFFFF33] ">
          <div className="  rounded-lg shadow mb-8">
            <h2 className="text-lg  mb-4">Individual ad performance</h2>
            <Image
              src="/game.png"
              alt="ad"
              width={400}
              height={400}
              className=" w-full"
            />
            <div className=" text-primary-500 py-4 space-y-2">
              <div className="flex items-center gap-2 justify-between">
                <p>Impressions / Play:</p>
                <p className="text-white text-lg">55</p>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <p>Performance Percentile:</p>
                <p className="text-white text-lg">88th</p>
              </div>
              <div className="flex items-center gap-2 justify-between">
                <p>Monthly Impressions:</p>
                <p className="text-white text-lg">2.3B</p>
              </div>
            </div>
          </div>

          {/* AI Summary */}
          <div className=" p-6 rounded-xl border border-[#4BEAA073] bg-[#4BEAA01A]  ">
            <div className="flex items-center justify-between border-b mb-4 border-primary-500 pb-4">
              <h2 className="text-lg font-semibold ">AI Summary</h2>
              <Image src="/logo.svg" alt="ai" width={80} height={80} />
            </div>
            <p className=" 2xl:text-lg py-1">
              Your ad creative looks great! Maybe try & throw a 3D asset in
              there to help against brand fatigue.
            </p>
            <div className="flex items-center gap-2 mt-6 justify-between">
              <p className="text-primary-500">FOV Score:</p>
              <p className="text-[#4BEAA0] font-semibold text-5xl">93%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
