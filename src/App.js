import "./App.css";

import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Discover from "./Components/Discover";
import Footer from "./Components/Footer";
import PostChalk from "./Components/PostChalk";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Navbar />
              <Discover />
              <Footer />
            </div>
          }
        />
        <Route
          path="/Login"
          element={
            <div>
              <Login />
            </div>
          }
        />
        <Route
          path="/SignUp"
          element={
            <div>
              <SignUp />
            </div>
          }
        />
        <Route
          path="/PostChalk"
          element={
            <div>
              <Navbar />
              <PostChalk />
              <Footer />
            </div>
          }
        />
        {/* <Route
          path="/PostChalk/VideoPost"
          element={
            <div>
              <Navbar />
              <PostChalk />
              <VideoPost />
              <Footer />
            </div>
          }
        /> */}
        {/* <Route path=""></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
