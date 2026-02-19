import React, { useState } from 'react';
import { useScanContext } from '../context/ScanContext';
import { Search, Loader2 } from 'lucide-react';
import Button from '../components/ui/Button';
import StatusCard from '../components/features/StatusCard';
import { motion } from 'framer-motion';

const Scanner = () => {
    const { addScan } = useScanContext();
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
            // Enhanced Mock Analysis Logic
            let mockResult = {
                url,
                status: 'safe',
                confidence: 0.95,
                details: 'This website appears to be safe. valid SSL certificate and no blacklisting records found.'
            };

            const lowerUrl = url.toLowerCase();
            const suspiciousKeywords = ['login', 'signin', 'verify', 'account', 'update', 'secure', 'bank', 'confirm', 'wallet', 'crypto'];
            const safeDomains = ['google.com', 'facebook.com', 'twitter.com', 'github.com', 'stackoverflow.com', 'amazon.com', 'microsoft.com', 'apple.com', 'linkedin.com', 'youtube.com'];

            // 1. Check for IP address usage (often suspicious if not a local dev environment)
            const isIpAddress = /^http?:\/\/(\d{1,3}\.){3}\d{1,3}/.test(lowerUrl);

            // 2. Check for HTTP (not HTTPS)
            const isHttp = lowerUrl.startsWith('http://');

            // 3. Extract domain to check against safelist
            let domain = '';
            try {
                const urlObj = new URL(url.startsWith('http') ? url : `https://${url}`);
                domain = urlObj.hostname;
            } catch (e) {
                // If invalid URL, might be just a domain string
                domain = lowerUrl.split('/')[0];
            }

            const isSafeDomain = safeDomains.some(safe => domain.endsWith(safe));

            if (isSafeDomain) {
                mockResult = {
                    url,
                    status: 'safe',
                    confidence: 0.99,
                    details: 'Verified safe domain. SSL certificate is valid and issued by a trusted authority.'
                };
            } else if (isIpAddress) {
                mockResult = {
                    url,
                    status: 'suspicious',
                    confidence: 0.85,
                    details: 'This site is hosted on a raw IP address, which is a common characteristic of phishing sites avoiding domain registration.'
                };
            } else if (suspiciousKeywords.some(keyword => lowerUrl.includes(keyword))) {
                mockResult = {
                    url,
                    status: 'malicious',
                    confidence: 0.92,
                    details: 'Detected sensitive keywords (like login/verify) in a non-verified domain. High probability of credential harvesting.'
                };
            } else if (isHttp) {
                mockResult = {
                    url,
                    status: 'suspicious',
                    confidence: 0.70,
                    details: 'Connection is not secure (HTTP). Sensitive information entered here could be intercepted.'
                };
            } else if (domain.endsWith('.xyz') || domain.endsWith('.top') || domain.endsWith('.gq') || domain.endsWith('.tk')) {
                mockResult = {
                    url,
                    status: 'suspicious',
                    confidence: 0.65,
                    details: 'The Top-Level Domain (TLD) is frequently associated with spam and low-reputation sites.'
                };
            }

            setResult(mockResult);
            addScan(mockResult);
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
