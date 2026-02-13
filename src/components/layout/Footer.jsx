import React from 'react';
import { Shield, Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <Shield className="w-6 h-6 text-emerald-500" />
                            <span className="text-xl font-bold text-white">PhishGuard</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Protecting your browsing experience with advanced AI-powered phishing detection.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Extension</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Scanner</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm">
                        © {new Date().getFullYear()} PhishGuard. All rights reserved.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter className="w-5 h-5" /></a>
                        <a href="#" className="text-slate-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
