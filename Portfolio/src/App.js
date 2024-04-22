import React from "react";
import { Routes, Route } from "react-router-dom"; // Import Routes instead of BrowserRouter
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import ResumePage from "./pages/ResumePage";

export default function App() {
  return (
<Routes>
  <Route path="/Portfolio-page" element={<HomePage />} />
  <Route path="/about" element={<UserPage />} />
  {/* <Route path="/resume" element={<ResumePage />} /> */}
</Routes>
  );
}