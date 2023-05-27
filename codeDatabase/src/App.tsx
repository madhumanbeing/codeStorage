import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CssTricks from "./pages/CssTricks";
import Github from "./pages/Github";
import Jsmethods from "./pages/JsMethods";
import Resources from "./pages/Resources";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/csstricks" element={<CssTricks />}></Route>
          <Route path="/github" element={<Github />}></Route>
          <Route path="/jsmethods" element={<Jsmethods />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
