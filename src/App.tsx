import React from 'react';

import { BrowserRouter, Route, Routes } from "react-router-dom";

import './App.css';
import ReportAnAd from './pages/report-ad';
import AboutGreenwashing from './pages/about-greenwashing';
import { HomePage } from './pages/HomePage';

function App() {
    return (
        <div className="App">
            <header>
                <h1 className="text-3xl">Green Alert</h1>
            </header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/report-an-ad">Signaler une pub</a></li>
                    <li><a href="/about-greenwahsing">Comprendre le Greenwhasing</a></li>
                    <li><a href="/our-team">Our team</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomePage/>} />
                        <Route path="*" element={<div>404 not found</div>} />
                        <Route path="/report-an-ad" element={<ReportAnAd />} />
                        <Route path="/about-greenwahsing" element={<AboutGreenwashing />} />
                    </Routes>
                </BrowserRouter>
            </main>
            <footer>
                <p>©Copyright 2050 by nobody. All rights reversed.</p>
            </footer>
        </div>
    );
}

export default App;
