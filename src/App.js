import React from "react";
import Info from "./components2/Info";
import About from "./components2/About";
import Interests from "./components2/Interests";
import Footer from "./components2/Footer";

function App() {
  return (
    <div className="container">
      <div className="card">
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
    </div>
  );
}

export default App;
