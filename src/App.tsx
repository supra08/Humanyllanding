import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RequestAccess from "./pages/RequestAccess";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/request-access" element={<RequestAccess />} />
    </Routes>
  );
}
