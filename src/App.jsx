import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Scanner from './pages/Scanner';
import Report from './pages/Report';
import { ScanProvider } from './context/ScanContext';

function App() {
    return (
        /* The basename must match your GitHub repository name exactly */
        <ScanProvider>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/scanner" element={<Scanner />} />
                        <Route path="/report" element={<Report />} />
                    </Routes>
                </Layout>
            </Router>
        </ScanProvider>
    );
}

export default App;