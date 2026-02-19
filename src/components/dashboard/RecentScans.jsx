import React from 'react';
import { ShieldCheck, ShieldAlert, ExternalLink, Clock } from 'lucide-react';
import { useScanContext } from '../../context/ScanContext';

const StatusBadge = ({ status, threatType }) => {
    if (status === 'safe') {
        return (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-3 h-3" />
                Safe
            </span>
        );
    }
    return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20">
            <ShieldAlert className="w-3 h-3" />
            {threatType || 'Unsafe'}
        </span>
    );
};

const RecentScans = () => {
    const { scans } = useScanContext();

    return (
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg h-full">
            <div className="p-6 border-b border-slate-700 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">Recent Scans</h2>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-xs text-slate-400">Live</span>
                </div>
            </div>
            <div className="overflow-x-auto max-h-[400px]">
                <table className="w-full text-left">
                    <thead className="sticky top-0 bg-slate-800 z-10">
                        <tr className="bg-slate-900/50 border-b border-slate-700">
                            <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">URL</th>
                            <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Status</th>
                            <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Time</th>
                            <th className="p-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Risk Score</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700">
                        {scans.length > 0 ? (
                            scans.map((scan) => (
                                <tr key={scan.id} className="hover:bg-slate-700/30 transition-colors group animate-fadeIn">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className={`w-2 h-2 rounded-full ${scan.status === 'safe' ? 'bg-emerald-500' : 'bg-red-500'}`} />
                                            <span className="text-slate-200 font-medium font-mono text-sm truncate max-w-[200px]" title={scan.url}>{scan.url}</span>
                                            <a href={scan.url.startsWith('http') ? scan.url : `https://${scan.url}`} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 text-slate-500 hover:text-white transition-opacity">
                                                <ExternalLink className="w-3.5 h-3.5" />
                                            </a>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <StatusBadge status={scan.status} threatType={scan.threatType} />
                                    </td>
                                    <td className="p-4 text-slate-400 text-sm flex items-center gap-1.5">
                                        <Clock className="w-3.5 h-3.5" />
                                        {scan.timestamp}
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <div className="w-16 h-1.5 bg-slate-700 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full rounded-full ${scan.riskScore > 50 ? 'bg-red-500' : 'bg-emerald-500'}`}
                                                    style={{ width: `${scan.riskScore}%` }}
                                                />
                                            </div>
                                            <span className={`text-sm font-bold ${scan.riskScore > 50 ? 'text-red-400' : 'text-emerald-400'}`}>
                                                {scan.riskScore}
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="p-8 text-center text-slate-500">
                                    No scans yet. Start scanning urls!
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RecentScans;
