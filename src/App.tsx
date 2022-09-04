import React from 'react';

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import './App.css';
import ReportAnAd from './pages/report-ad';
import AboutGreenwashing from './pages/about-greenwashing';
import { HomePage } from './pages/HomePage';

function App() {
    return (
        <BrowserRouter>
            <div className="App flex flex-col">
                <header className="flex w-full bg-ga-green text-green-50 justify-center items-center">
                    <h1 className="text-3xl">Green Alert</h1>
                </header>
                <nav>
                    <ul className='flex flex-row justify-evenly'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/report-an-ad">Signaler une pub</Link></li>
                        <li><Link to="/about-greenwahsing">Comprendre le Greenwhasing</Link></li>
                        <li><Link to="/our-team">Our team</Link></li>
                        <li><Link to="#">Projects</Link></li>
                        <li><Link to="#">Contact</Link></li>
                    </ul>
                </nav>
                <main className="flex flex-col items-center justify-center">

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="*" element={<div>404 not found</div>} />
                        <Route path="/report-an-ad" element={<ReportAnAd />} />
                        <Route path="/about-greenwahsing" element={<AboutGreenwashing />} />
                    </Routes>
                </main>
                <footer>
                    <p>©Copyright 2050 by nobody. All rights reversed.</p>
                </footer>
            </div>
        </BrowserRouter>
    );
}

export default App;
