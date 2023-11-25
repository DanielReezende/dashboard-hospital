import { Routes, Route } from "react-router-dom";

// Pages
import { Home } from "../pages/private/Home";
import { Test } from "../pages/private/Test";

export function Routers() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
}
