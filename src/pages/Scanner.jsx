import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import Button from '../components/ui/Button';
import StatusCard from '../components/features/StatusCard';
import { motion } from 'framer-motion';

const Scanner = () => {
    const [url, setUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);

    const handleScan = async (e) => {
        e.preventDefault();
        if (!url) return;

        setLoading(true);
        setResult(null);

        // Simulate API delay
        setTimeout(() => {
            setLoading(false);

            // Mock Logic for Demo
            let mockResult = {
                url,
                status: 'safe',
                confidence: 0.98,
                details: 'No threats detected in our database or heuristic analysis.'
            };

            if (url.includes('suspicious') || url.includes('ip')) {
                mockResult = {
                    url,
                    status: 'suspicious',
                    confidence: 0.75,
                    details: 'This site uses an IP address instead of a domain name, which is often a sign of phishing.'
                };
            } else if (url.includes('phish') || url.includes('malware') || url.includes('google-login')) {
                mockResult = {
                    url,
                    status: 'malicious',
                    confidence: 0.99,
                    details: 'This site appears to be impersonating "google.com" and has been flagged by 3 security engines.'
                };
            }

            setResult(mockResult);
        }, 1500);
    };

    return (
        <div className="container mx-auto px-4 py-12 max-w-3xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12"
            >
                <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                    URL Scanner
                </h1>
                <p className="text-slate-400 text-lg">
                    Enter a URL to check if it's safe, suspicious, or malicious.
                </p>
            </motion.div>

            <form onSubmit={handleScan} className="mb-12">
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="relative flex-grow">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-slate-500" />
                        </div>
                        <input
                            type="text"
                            className="w-full pl-12 pr-4 py-4 bg-slate-800 border border-slate-700 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-slate-500 outline-none transition-all"
                            placeholder="https://example.com"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                    </div>
                    <Button
                        variant="primary"
                        className="h-[58px] px-8 text-lg w-full md:w-auto"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <Loader2 className="w-5 h-5 animate-spin" />
                                Scanning...
                            </>
                        ) : (
                            'Scan Now'
                        )}
                    </Button>
                </div>
            </form>

            {result && (
                <StatusCard
                    status={result.status}
                    url={result.url}
                    details={result.details}
                    confidence={result.confidence}
                />
            )}

            {!result && !loading && (
                <div className="text-center mt-20">
                    <p className="text-slate-500 text-sm">
                        Try searching for
                        <button onClick={() => setUrl('https://google.com')} className="text-emerald-500 hover:underline mx-1">safe</button>,
                        <button onClick={() => setUrl('http://192.168.1.1/login')} className="text-amber-500 hover:underline mx-1">suspicious</button>, or
                        <button onClick={() => setUrl('http://google-login-secure.com')} className="text-red-500 hover:underline mx-1">phishing</button>
                        sites.
                    </p>
                </div>
            )}
        </div>
    );
};

export default Scanner;
