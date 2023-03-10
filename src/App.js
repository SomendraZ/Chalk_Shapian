import "./App.css";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Discover from "./Components/Discover";
import PostChalk from "./Components/PostChalk";
// import Forum from "./Components/Forum";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Discover />}/>
        <Route path="/Discover" element={<Discover />} />
        {/* <Route path="/Forum" element={<Forum />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Discover/PostChalk/Image" element={<PostChalk />} />
        <Route path="/Discover/PostChalk/Videos" element={<PostChalk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
