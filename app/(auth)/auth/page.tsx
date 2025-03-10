"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideArrowLeft, LucideArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section>
      <div className="flex flex-col items-center max-w-[720px] mx-auto gap-4 px-4 pt-2 2xl:pt-20 justify-center">
        <h1 className="text-2xl font-semibold text-white">Who are you?</h1>

        <div className="flex items-center w-full justify-between flex-col py-5 sm:flex-row gap-4">
          <div className="bg-[#03060B] w-full border border-[#FFFFFF33] p-6 rounded-[12px] ">
            <Image
              src="/creator.svg"
              alt="player"
              width={70}
              height={70}
              className="mb-4"
            />
            <h1 className="text-xl font-semibold text-white mb-1">Creator</h1>
            <p className="text-[#FFFFFF80]">I want to create advertise.</p>
            <button>
              <Link
                href="/auth/signin"
                className="  text-primary-500 inline-flex items-center gap-3 text-center rounded-[10px] pt-10"
              >
                Continue
                <LucideArrowRight />
              </Link>
            </button>
          </div>
          <div className="bg-[#03060B] w-full border border-[#FFFFFF33] p-6 rounded-[12px] ">
            <Image
              src="/password.svg"
              alt="player"
              width={70}
              height={70}
              className="mb-4"
            />
            <h1 className="text-xl font-semibold text-white mb-1">Admin</h1>
            <p className="text-[#FFFFFF80]">I want to regulate advertise.</p>
            <button>
              <Link
                href="/auth/signin"
                className="  text-primary-500 inline-flex items-center gap-3 text-center rounded-[10px] pt-10"
              >
                Continue
                <LucideArrowRight />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
