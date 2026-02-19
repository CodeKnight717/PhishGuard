import React from 'react';
import { Globe, ShieldCheck, ShieldAlert, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScanContext } from '../../context/ScanContext';

const StatCard = ({ icon: Icon, label, value, subtext, color, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5 }}
            className="bg-slate-800 p-6 rounded-xl border border-slate-700 flex flex-col items-center justify-center text-center hover:border-emerald-500/50 transition-colors shadow-lg group"
        >
            <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
                <div className={`w-full h-full rounded-full bg-${color.split('-')[1]}-500/10 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 text-${color.split('-')[1]}-400`} />
                </div>
            </div>
            <div className="text-3xl font-bold text-white mb-1">{value}</div>
            <h3 className="text-slate-400 text-sm font-medium mb-1">{label}</h3>
            {subtext && <p className="text-xs text-slate-500">{subtext}</p>}
        </motion.div>
    );
};

const DashboardStats = () => {
    const { scans } = useScanContext();

    const totalScanned = scans.length;
    const safeSites = scans.filter(s => s.status === 'safe').length;
    const threatsBlocked = scans.filter(s => s.status === 'unsafe').length;
    const safeRate = totalScanned > 0 ? ((safeSites / totalScanned) * 100).toFixed(1) : 0;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard
                icon={Globe}
                label="Sites Scanned"
                value={totalScanned}
                subtext="This session"
                color="text-blue-500"
                delay={0}
            />
            <StatCard
                icon={ShieldCheck}
                label="Safe Sites"
                value={safeSites}
                subtext={`${safeRate}% safety rate`}
                color="text-emerald-500"
                delay={0.1}
            />
            <StatCard
                icon={ShieldAlert}
                label="Threats Blocked"
                value={threatsBlocked}
                subtext="Phishing & Malware"
                color="text-red-500"
                delay={0.2}
            />
            <StatCard
                icon={Activity}
                label="Avg Scan Time"
                value="0.4s"
                subtext="Real-time protection"
                color="text-purple-500"
                delay={0.3}
            />
        </div>
    );
};

export default DashboardStats;
