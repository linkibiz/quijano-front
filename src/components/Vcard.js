import React, { useEffect, useState } from "react";

const Vcard = ({ vcardData }) => {
  console.log(vcardData.vcard);
  const { nombre, ocupacion, website, email, celular, apellido, telefono_casa, telefono_trabajo, email_trabajo } =
    vcardData.attributes.vcard;
  console.log(nombre);

  const downloadTxtFile = (vcfText) => {
    const element = document.createElement("a");
    const file = new Blob([vcfText], { type: "text/plain;charset=utf-8" });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.vcf";
    document.body.appendChild(element);
    element.click();
  };

  const CreateVCard = () => {
    var vCardsJS = require("vcards-js");
    //create a new vCard
    var vCard = vCardsJS();
    //set properties
    vCard.firstName = nombre;
    vCard.lastName = apellido;
    // vCard.organization = "ACME Corporation";
    vCard.workPhone = telefono_trabajo;
    vCard.cellPhone = celular;
    // vCard.birthday = new Date(1985, 0, 1);
    vCard.title = ocupacion;
    vCard.url = `https://${website}`;
    vCard.email = email;
    vCard.homePhone = telefono_casa;
    vCard.workEmail = email_trabajo;

    return vCard.getFormattedString();
  };

  return (
    <button className="rounded-md border bg-[#044e7d] text-white p-3 w-full" onClick={() => downloadTxtFile(CreateVCard())}>
      + Guardar contacto
    </button>
  );
};

export default Vcard;
