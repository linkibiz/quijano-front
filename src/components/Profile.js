import Image from "next/image";
import React, { useEffect } from "react";

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
        <div className="flex items-center bg-white rounded-3xl">
          <Image
            className="rounded-l-3xl inline-block object-cover h-52 w-52"
            loader={myLoader}
            src={src}
            width={500}
            height={500}
            alt={`Foto de ${nombre_apellido}`}
          />
          <div className="text-black w-full px-4 flex flex-col gap-y-3.5">
            <h1 className="font-bold text-4xl">{nombre_apellido}</h1>
            <p className="text-xs tracking-wider">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
