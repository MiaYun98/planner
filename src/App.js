import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/nav";
import Home from './pages/Home';
import Month from "./pages/Month";
import "./style.css";

function App() {
    return (
        <div className="App">
      <Router basename="/">
        {/* NavBar will go over here */}
        <Navbar/>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />}></Route>
          {/* About route */}
          <Route path="month" element={<Month/>}></Route>
          {/* Contact route */}
          {/* <Route path="year" element={<Contact/>}></Route> */}
        </Routes>
      </Router>
    </div>
    );
}



export default App;

