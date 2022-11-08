import logo from "./logo.svg";
import "./App.css";
// import { Counter } from "./Components/Counter";
// import { Component1 } from "./Components/Componant1";
import { Courses } from "./Components/Courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CourseDetail } from "./Components/CourseDetail";

function App() {
  return (
    <div className="App">
      {/* <h1> Hello</h1> */}
      {/* <Counter /> */}
      {/* <Courses /  > */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/details" element={<CourseDetail />} />
        </Routes>
      </BrowserRouter>

      {/* <Courses /> */}
      {/* <Component1 /> */}
    </div>
  );
}

export default App;
