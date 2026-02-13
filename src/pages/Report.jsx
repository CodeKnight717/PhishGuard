import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import { AlertCircle, CheckCircle } from 'lucide-react';

const Report = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-slate-800 rounded-2xl p-8 border border-slate-700"
                >
                    <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-2">Report Submitted</h2>
                    <p className="text-slate-400 mb-8">
                        Thank you for helping keep the internet safe. Our team will review your report shortly.
                    </p>
                    <Button variant="primary" onClick={() => setSubmitted(false)}>
                        Submit Another Report
                    </Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4 text-white">Report a Threat</h1>
                    <p className="text-slate-400">
                        Found a phishing site we missed? Or a safe site marked as dangerous? Let us know.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="bg-slate-800 p-8 rounded-2xl border border-slate-700 space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            URL Address
                        </label>
                        <input
                            type="text"
                            required
                            placeholder="https://example.com"
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white outline-none"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Report Type
                        </label>
                        <div className="grid grid-cols-2 gap-4">
                            <label className="cursor-pointer">
                                <input type="radio" name="type" className="peer sr-only" defaultChecked />
                                <div className="p-4 rounded-lg border border-slate-700 peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 transition-all text-center">
                                    <span className="block font-medium text-white mb-1">Phishing Site</span>
                                    <span className="text-xs text-slate-500">Missed threat</span>
                                </div>
                            </label>
                            <label className="cursor-pointer">
                                <input type="radio" name="type" className="peer sr-only" />
                                <div className="p-4 rounded-lg border border-slate-700 peer-checked:border-emerald-500 peer-checked:bg-emerald-500/10 transition-all text-center">
                                    <span className="block font-medium text-white mb-1">False Positive</span>
                                    <span className="text-xs text-slate-500">Safe site blocked</span>
                                </div>
                            </label>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-300 mb-2">
                            Description (Optional)
                        </label>
                        <textarea
                            rows={4}
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white outline-none resize-none"
                            placeholder="Tell us more about what you found..."
                        />
                    </div>

                    <Button variant="primary" className="w-full py-4 text-lg">
                        Submit Report
                    </Button>
                </form>
            </motion.div>
        </div>
    );
};

export default Report;
