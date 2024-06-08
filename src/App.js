/** @format */

import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Results from "./Results.js";
import Footer from "./Footer.js";

function App() {
  const [selectedOption, setSelectedOption] = useState();

  return (
    <div className='App'>
      <Header />

      <Nav setSelectedOption={setSelectedOption} />

      <Results selectedOption={selectedOption} />
      <Footer />
    </div>
  );
}

export default App;
