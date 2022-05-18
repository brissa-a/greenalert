import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header>
                <h1>Header</h1>
            </header>

            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/our-team">Our team</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <main>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<div>Home Page</div>}/>
                        <Route path="*" element={<div>404 not found</div>}/>
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
