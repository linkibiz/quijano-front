import Image from "next/image";
import React, { useEffect } from "react";
import Logo from '../../public/images/bnp_logo.png'
const Profile = ({ profileData }) => {

  const {
    nombre_apellido,
    description,
    images: { foto_perfil },
  } = profileData.attributes;

  const src = foto_perfil.data.attributes.url
  const myLoader = ({ src }) => {
    return src
  }
  
  return (
    <>
      <div className="-space-x-1 mt-[-45%] relative z-10 shadow-lg rounded-3xl">
        <div className="flex items-center bg-[#FFF] rounded-3xl">
          <Image
            className="rounded-l-3xl inline-block object-cover h-52 w-52"
            loader={myLoader}
            src={src}
            width={500}
            height={500}
            alt={`Foto de ${nombre_apellido}`}
          />
          <div className="text-black w-full px-4 flex flex-col gap-y-3.5 items-center">
            <Image src={Logo} height={100} width={200} />
            <h1 className="text-[#063B80] font-bold text-4xl text-center">{nombre_apellido}</h1>
            <p className="text-[#063B80] text-xs tracking-[3px] font-bold">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
