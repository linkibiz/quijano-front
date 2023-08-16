import Link from "next/link";
import React from "react";

const Links = ({ linksList }) => {
  console.log(linksList[0].url)
  return (
    <div className="flex flex-col gap-3 w-full items-center">
      {linksList.map((link) => (
        <Link href={link.url} target={link.target} className="p-3 font-bold w-4/5 text-center bg-[#FFF] rounded-3xl text-[#063B80] border border-[#063B80]" key={link.id}>
            {link.titulo}
        </Link>
      ))}
    </div>
  );
};

export default Links;
