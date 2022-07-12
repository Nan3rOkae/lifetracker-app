import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./App.css";
import LandingPage from "../LandingPage/LandingPage";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/activity" element={<ActivityPage />} />
          <Route path="/exercise/*" element={<ExercisePage />} />
          <Route path="/nutrition/*" element={<NutritionPage />} />
          <Route path="/sleep/*" element={<SleepPage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
