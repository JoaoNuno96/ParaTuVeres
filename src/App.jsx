import React from "react";
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./header/header.jsx";
import { Home } from "./main/home/home.jsx";
import {Footer} from "./footer/footer.jsx"

function App() {
  // const [count, setCount] = useState(0)


  return (
    <div>
            <Header/>
            <div id="body-content">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>
  )
}

export default App;
