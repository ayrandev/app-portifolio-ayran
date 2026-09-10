import { Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import HomeSelect from "../pages/HomeSelect";
import DevPortfolioPage from "../pages/DevPortfolioPage";
import ClientPage from "../pages/ClientPage";

export default createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomeSelect />} />
      <Route path="/dev" element={<DevPortfolioPage />} />
      <Route path="/cliente" element={<ClientPage />} />
    </>
  )
);
