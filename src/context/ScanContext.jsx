import React, { createContext, useContext, useState } from 'react';

const ScanContext = createContext();

export const useScanContext = () => useContext(ScanContext);

export const ScanProvider = ({ children }) => {
    // Initialize with some dummy data so the dashboard isn't empty initially, 
    // or start empty if preferred. Let's start with the sample data we had 
    // but make it part of the state so new scans add to it.
    const [scans, setScans] = useState([
        {
            id: 1,
            url: 'google.com',
            status: 'safe',
            timestamp: new Date(Date.now() - 1000 * 60 * 2).toLocaleTimeString(), // 2 mins ago approx
            riskScore: 0,
            threatType: 'None',
        },
        {
            id: 2,
            url: 'steam-gift-cards-free.net',
            status: 'unsafe',
            timestamp: new Date(Date.now() - 1000 * 60 * 15).toLocaleTimeString(),
            riskScore: 95,
            threatType: 'Phishing',
        },
        {
            id: 3,
            url: 'github.com',
            status: 'safe',
            timestamp: new Date(Date.now() - 1000 * 60 * 60).toLocaleTimeString(),
            riskScore: 0,
            threatType: 'None',
        },
    ]);

    const addScan = (scanResult) => {
        const newScan = {
            id: Date.now(),
            url: scanResult.url,
            status: scanResult.status === 'malicious' || scanResult.status === 'suspicious' ? 'unsafe' : 'safe',
            timestamp: new Date().toLocaleTimeString(),
            riskScore: scanResult.confidence ? Math.round(scanResult.confidence * 100) : 0,
            threatType: scanResult.status === 'malicious' ? 'Malware' : scanResult.status === 'suspicious' ? 'Phishing' : 'None',
        };

        setScans((prevScans) => [newScan, ...prevScans]);
    };

    return (
        <ScanContext.Provider value={{ scans, addScan }}>
            {children}
        </ScanContext.Provider>
    );
};
