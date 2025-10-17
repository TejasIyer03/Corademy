import Image from "next/image";
import React from "react";

function WelcomeBannerDasboard({user}) {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl">
      <Image src="/download.png" alt="ninja" width={200} height={300} />
      <div className="">
        <h1 className="font-bold text-[27px]">
          Welcome Back, <span className="text-primary">{user?.fullName}</span>
        </h1>
        <h2 className="text-gray-800">Learn without Limits</h2>
      </div>
    </div>
  );
}

export default WelcomeBannerDasboard;
