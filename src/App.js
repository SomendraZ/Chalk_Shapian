import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Discover from "./Components/Discover";
import PostChalk from "./Components/PostChalk";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Discover />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/PostChalk/Image" element={<PostChalk />} />
        <Route path="/PostChalk/Videos" element={<PostChalk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  