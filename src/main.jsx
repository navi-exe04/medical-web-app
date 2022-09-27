import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "@pages/Inicio";
import { Citas } from "@pages/Citas";
import { Contacto } from "@pages/Contacto";
import "@styles/_global.scss";
import "@styles/_index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/citas" element={<Citas />} />
        <Route exact path="/contacto" element={<Contacto />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
