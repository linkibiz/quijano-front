import Link from "next/link";
import React from "react";
import Email from "./Icons/Email";
import Phone from "./Icons/Phone";
import WebsiteIcon from "./Icons/WebsiteIcon";
import WhatsAppIcon from "./Icons/WhatsAppIcon";

const contactIcons = [
  {
    iconType: "Correo",
    icon: <Email />,
    id: 1,
  },
  {
    iconType: "Llamar",
    icon: <Phone />,
    id: 2,
  },
  {
    iconType: "Whatsapp",
    icon: <WhatsAppIcon />,
    id: 3,
  },
  {
    iconType: "Website",
    icon: <WebsiteIcon />,
    id: 4,
  },
];

const ContactButtons = ({ contactData }) => {
  // const contactButtons = contactData.attributes.botones;
  return (
    <div className="flex gap-10 justify-center items-center w-full">
      {contactIcons.map(({ iconType, icon, id }) => {
        const dataItem = contactData.find((item) => item.titulo_de_boton === iconType);
        const ref =
          dataItem?.titulo_de_boton === "Correo"
            ? `mailto:${dataItem.url}`
            : dataItem?.titulo_de_boton === "Llamar"
            ? `tel:${dataItem.url}`
            : dataItem?.titulo_de_boton === "Whatsapp"
            ? `https://wa.me/${dataItem.url?.split(" ").join("")}`
            : dataItem?.url;
        return dataItem && dataItem.url ? (
          <div className="flex flex-col items-center gap-2">
            <Link href={ref} className="h-14 w-14 bg-[#063B80] p-4 rounded-full" target="blank">
              {icon}
            </Link>
            <p className="font-bold text-sm">{dataItem.titulo_de_boton}</p>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ContactButtons;
