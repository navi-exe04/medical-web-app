import React from "react";
import { HeaderMenuBtn } from "@atoms/HeaderMenuBtn";
import { GeneralLink } from "@atoms/GeneralLink";

export const HeaderMenu = () => {
  return (
    <>
      <HeaderMenuBtn additionalClass="hide" />
      <GeneralLink toUrl="/" additionalClass="link-menu" textContent="Inicio" />
      <GeneralLink
        toUrl="/citas"
        additionalClass="link-menu"
        textContent="Citas"
      />
      <GeneralLink
        toUrl="/contacto"
        additionalClass="link-menu"
        textContent="Contacto"
      />
    </>
  );
};
