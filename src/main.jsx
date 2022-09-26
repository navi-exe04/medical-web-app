import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicio } from "@templates/Inicio";
import "@styles/_global.scss";
import "@styles/_index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
