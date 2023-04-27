import Link from "next/link";
import React from "react";
import Email from "./Icons/Email";
import Phone from "./Icons/Phone";
import Location from "./Icons/Location";

const contactIcons = [
  {
    iconType: "Correo",
    icon: <Email />,
    id: 1,
  },
  {
    iconType: "Ubicacion",
    icon: <Location />,
    id: 2,
  },
  {
    iconType: "Llamar",
    icon: <Phone />,
    id: 3,
  },
];

const ContactButtons = ({ contactData }) => {
  const contactButtons = contactData.attributes.botones;

  return (
    <div className="flex gap-10 justify-center items-center w-full">
      {contactIcons.map(({ iconType, icon, id }) => {
        const dataItem = contactButtons.find((item) => item.titulo_de_boton === iconType);
        const ref = dataItem?.titulo_de_boton === "Correo" ? `mailto:${dataItem.url}` : dataItem?.titulo_de_boton === "Llamar" ? `tel:${dataItem.url}` : dataItem?.url
        return dataItem ? (
          <div className="flex flex-col items-center gap-2">
            <a target="_blank" className=" h-16 w-16 bg-[#044e7d] p-4 rounded-full" href={ref}>
              {icon}
            </a>
            <p>{dataItem.titulo_de_boton}</p>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default ContactButtons;
