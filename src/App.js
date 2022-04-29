import './App.css';
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/Header";
import React from "react";
import {Footer} from "./components/Footer";
import { Routes, Route, Link} from 'react-router-dom'
import {NotFoundPage} from "./pages/NotFoundPage";
import {CurrBreedPage} from "./pages/CurrBreedPage";

export default function App() {

    return (
            <div className="App">
                <div className="container">
                    <Header/>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="*" element={<NotFoundPage/>} />
                        <Route path="/breeds/search/:name" element={<CurrBreedPage/>} />
                    </Routes>
                    <Footer />
                </div>
            </div>
    );
}
