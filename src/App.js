import './App.css';
import {HomePage} from "./pages/HomePage";
import {Header} from "./components/Header";
import React from "react";
import {Footer} from "./components/Footer";
import {Route, Routes} from 'react-router-dom'
import {NotFoundPage} from "./pages/NotFoundPage";
import {CurrBreedPage} from "./pages/CurrBreedPage";
import {TopTenBreedsPage} from "./pages/TopTenBreedsPage";

export default function App() {

    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="*" element={<NotFoundPage/>}/>
                    <Route path="/breeds/search/:name" element={<CurrBreedPage/>}/>
                    <Route path="/breeds/top-10" element={<TopTenBreedsPage/>}/>
                </Routes>
                <Footer/>
            </div>
        </div>
    );
}
