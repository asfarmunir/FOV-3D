import Sidebar from "@/components/shared/Sidebar";
import Image from "next/image";
import React from "react";

const Page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className={`h-screen flex bg-[#03060B] `}>
      <Sidebar />

      <main className=" w-full  overflow-auto flex flex-col items-start relative text-white justify-start pb-3">
        <Image
          src="/glow1.svg"
          alt="404"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          className="z-0"
        />
        <Image
          src="/glow2.svg"
          alt="404"
          layout="fill"
          objectFit="contain"
          objectPosition="right"
          className="z-0"
        />
        {children}
      </main>
    </div>
  );
};

export default Page;
