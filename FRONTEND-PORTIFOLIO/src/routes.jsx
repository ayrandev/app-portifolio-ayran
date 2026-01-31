import { Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import HomeSelect from "./pages/HomeSelect";
import Page from "./pages/Page"; // DEV (empregabilidade)
import ClientPage from "./pages/ClientPage"; // CLIENTE

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeSelect />} />
      <Route path="/dev" element={<Page />} />
      <Route path="/cliente" element={<ClientPage />} />
    </>
  )
);
