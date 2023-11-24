import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Faq from './Faq'
import PressKit from './PressKit'
import Home from "./Home"

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/faq' element={<Faq />} />
          <Route path='/presskit' element={<PressKit />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
