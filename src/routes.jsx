import { Route } from "react-router-dom";
import { createBrowserRouter, createRoutesFromElements } from "react-router-dom";

  import Page from "./pages/Page"

  export default createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<Page/>} />
    </>
  ));