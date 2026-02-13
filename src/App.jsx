import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Scanner from './pages/Scanner';
import Report from './pages/Report';

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/scanner" element={<Scanner />} />
                    <Route path="/report" element={<Report />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
