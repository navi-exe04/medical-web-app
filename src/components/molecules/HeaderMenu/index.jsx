import React from "react";
import { HeaderOptionMenu } from "@atoms/HeaderOptionMenu";
import { HeaderMenuBtn } from "@atoms/HeaderMenuBtn";

export const HeaderMenu = () => {
  return (
    <>
      <HeaderMenuBtn additionalClass="hide" />
      <div className="div-menu">
        <ul className="div-menu__ul">
          <HeaderOptionMenu
            url="/"
            additionalClass="active"
            textContent="Inicio"
          />
          <HeaderOptionMenu url="/citas" textContent="Citas" />
          <HeaderOptionMenu url="/contacto" textContent="Contacto" />
        </ul>
      </div>
    </>
  );
};
