import React from "react";
import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./header/header.jsx";
import { Home } from "./main/home/home.jsx";
import { News } from "./main/news/news.jsx";
import { Contacts } from "./main/contacts/contacts.jsx";
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
                        <Route path="/news1" element={console.log("<News id='1' />")}/>
                        <Route path="/news2" element={<News id="2" />}/>
                        <Route path="/news3" element={<News id="3" />}/>
                        <Route path="/news4" element={<News id="4" />}/>
                        <Route path="/news5" element={<News id="5" />}/>
                        <Route path="/news6" element={<News id="6" />}/>
                        <Route path="/news7" element={<News id="7" />}/>
                        <Route path="/news8" element={<News id="8" />}/>
                        <Route path="/news9" element={<News id="9" />}/>
                        <Route path="/contacts" element={<Contacts />}/>
                    </Routes>
                </BrowserRouter>
            </div>
            <Footer/>
        </div>
  )
}

export default App;
