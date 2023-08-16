import React from "react";
import FacebookIcon from "./Icons/FacebookIcon";
import InstagramIcon from "./Icons/InstagramIcon";
import WebsiteIcon from "./Icons/WebsiteIcon";
import LinkedinIcon from "./Icons/LinkedinIcon";
import Link from "next/link";

const SocialLinks = ({ socialLinks }) => {
  const { facebook, instagram, linkedin, website  } = socialLinks;
  console.log(socialLinks);
  const socialMediaPlatforms = [
    {
      platform: "facebook",
      url: facebook,
      icon: <FacebookIcon />,
    },
    {
      platform: "instagram",
      url: instagram,
      icon: <InstagramIcon />,
    },
    {
      platform: "website",
      url: website,
      icon: <WebsiteIcon />,
    },
    {
      platform: "linkedin",
      url: linkedin,
      icon: <LinkedinIcon />,
    },
  ];
  return (
    <>
      <h2 className="font-bold">Síguenos en nuestras redes</h2>
      <ul className="flex gap-5 flex-wrap">
        {socialMediaPlatforms.map(({ platform, url, icon }) =>
          url ? (
            <li className="bg-[#063B80] rounded-xl p-2 flex justify-center items-center" key={platform}>
              <Link href={url}>{icon}</Link>
            </li>
          ) : null
        )}
      </ul>
    </>
  );
};

export default SocialLinks;
