import { Route, Routes } from "react-router-dom";
import { Home } from "./Page/Home";


export function Router() {
  return (

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashbord" element={<Home/>} />

      </Routes>

  );
}