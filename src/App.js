/** @format */

import React, { useState } from "react";
import "./App.css";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Results from "./Results.js";
import Footer from "./Footer.js";
import request from "./Request.js";

function App() {
  const [selectedOption, setSelectedOption] = useState(request.fetchTrending);

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
