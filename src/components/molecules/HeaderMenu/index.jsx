import React from "react";
import { Link } from "react-router-dom";
import { HeaderMenuBtn } from "@atoms/HeaderMenuBtn";

export const HeaderMenu = () => {
  return (
    <>
      <HeaderMenuBtn additionalClass="hide" />
      <Link to="/" className="link-menu active">
        Inicio
      </Link>
      <Link to="/citas" className="link-menu">
        Citas
      </Link>
      <Link to="/contacto" className="link-menu">
        Contacto
      </Link>
    </>
  );
};
