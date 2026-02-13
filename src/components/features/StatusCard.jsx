import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, AlertTriangle, Skull } from 'lucide-react';

const StatusCard = ({ status, url, details, confidence }) => {
    const statusConfig = {
        safe: {
            color: 'bg-emerald-500',
            icon: ShieldCheck,
            text: 'This site is safe.',
            borderColor: 'border-emerald-500/50',
            shadow: 'shadow-emerald-500/20',
            bg: 'bg-emerald-950/30'
        },
        suspicious: {
            color: 'bg-amber-500',
            icon: AlertTriangle,
            text: 'Suspicious activity detected.',
            borderColor: 'border-amber-500/50',
            shadow: 'shadow-amber-500/20',
            bg: 'bg-amber-950/30'
        },
        malicious: {
            color: 'bg-red-500',
            icon: Skull,
            text: 'PHISHING DETECTED!',
            borderColor: 'border-red-500/50',
            shadow: 'shadow-red-500/20',
            bg: 'bg-red-950/30'
        }
    };

    const config = statusConfig[status] || statusConfig.safe;
    const Icon = config.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-2xl border ${config.borderColor} ${config.bg} p-6 backdrop-blur-sm shadow-xl ${config.shadow}`}
        >
            <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${config.color} text-white`}>
                    <Icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-1 ${status === 'malicious' ? 'text-red-400' : 'text-white'}`}>
                        {config.text}
                    </h3>
                    <p className="text-slate-300 font-mono text-sm mb-4 break-all">
                        {url}
                    </p>

                    {details && (
                        <div className="bg-slate-900/50 rounded-lg p-4 mb-4 border border-slate-700">
                            <p className="text-slate-300 text-sm">
                                {details}
                            </p>
                        </div>
                    )}

                    <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                            Confidence Score
                        </span>
                        <div className="h-2 w-24 bg-slate-800 rounded-full overflow-hidden">
                            <div
                                className={`h-full ${config.color.replace('bg-', 'bg-')}`}
                                style={{ width: `${(confidence || 0) * 100}%` }}
                            />
                        </div>
                        <span className="text-xs text-slate-400">
                            {Math.round((confidence || 0) * 100)}%
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StatusCard;
