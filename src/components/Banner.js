import Image from "next/image";
import React from "react";
import BannerImage from "../../public/images/buildings.jpg";
import Logo from "../../public/images/linki-logo.png";

const Banner = () => {
  // bg-gradient-to-r from-[#4eb1c7] via-[#384a74] to-[#483e83]
  return (
    <div className="relative w-full">
      {/* <Image src={Logo} className="z-10 max-h-8 object-contain absolute max-w-fit top-6 left-4" />
      <div className=" font-bold z-10 tracking-wider absolute py-2 px-4 top-6 right-4 border-transparent rounded text-white text-sm bg-[#044e7d]">
        <button>Obtén tu Linki</button>
      </div> */}
      <div className="brightness-50">
        <Image className="h-full max-h-60" src={BannerImage} alt="banner" />
      </div>
    </div>
  );
};

export default Banner;
