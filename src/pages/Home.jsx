import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const FeatureCard = ({ icon: Icon, title, description }) => (
    <motion.div
        whileHover={{ y: -5 }}
        className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-emerald-500/50 transition-colors"
    >
        <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 text-emerald-500">
            <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-slate-400">{description}</p>
    </motion.div>
);

const Home = () => {
    return (
        <div className="space-y-20 pb-20">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />
                <div className="container mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Now available for Chrome & Firefox</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Secure Your Browsing <br /> with AI Precision
                        </h1>
                        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
                            PhishGuard analyzes websites in real-time to protect you from phishing attempts, malware, and suspicious domains.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link to="/scanner">
                                <Button variant="primary" className="h-12 px-8 text-lg">
                                    Try Scanner
                                </Button>
                            </Link>
                            <Button variant="outline" className="h-12 px-8 text-lg">
                                View Source
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <FeatureCard
                        icon={Zap}
                        title="Real-time Analysis"
                        description="Our AI engine scans URLs instantly as you browse, identifying threats before they can harm you."
                    />
                    <FeatureCard
                        icon={Globe}
                        title="Global Intelligence"
                        description="Powered by Google Safe Browsing and our proprietary heuristic models for maximum coverage."
                    />
                    <FeatureCard
                        icon={Users}
                        title="Community Driven"
                        description="Join thousands of users reporting new threats to make the internet safer for everyone."
                    />
                </div>
            </section>


        </div>
    );
};

export default Home;
