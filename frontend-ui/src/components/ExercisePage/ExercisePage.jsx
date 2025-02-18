import { Routes, Route } from "react-router-dom";
import "./ExercisePage.css";

export default function ExercisePage() {
  return (
    <div className="ExercisePage">
      <Banner title="Exercise" />

      <div className="content">
        <Routes>
          <Route path="/" element={<ExerciseOverview />} />
          <Route path="/create" element={<ExerciseNew />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}
