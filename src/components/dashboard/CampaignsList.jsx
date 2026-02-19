import React from 'react';
import { Mail, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const campaigns = [
    {
        id: 1,
        title: 'Q1 Security Training',
        status: 'active',
        sent: 450,
        opened: 380,
        clicked: 125,
        submitted: 45,
    },
    {
        id: 2,
        title: 'Phishing Awareness',
        status: 'completed',
        sent: 320,
        opened: 290,
        clicked: 98,
        submitted: 32,
    },
    {
        id: 3,
        title: 'Employee Onboarding',
        status: 'active',
        sent: 180,
        opened: 165,
        clicked: 67,
        submitted: 12,
    },
];

const StatusBadge = ({ status }) => {
    const styles = {
        active: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
        completed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
        pending: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    };

    return (
        <span className={`px-2 py-1 rounded-md text-xs font-medium border ${styles[status] || styles.pending} uppercase tracking-wider`}>
            {status}
        </span>
    );
};

const CampaignsList = () => {
    return (
        <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden shadow-lg">
            <div className="p-6 border-b border-slate-700">
                <h2 className="text-xl font-bold text-white">Recent Campaigns</h2>
            </div>
            <div>
                {campaigns.map((campaign) => (
                    <div
                        key={campaign.id}
                        className="p-6 border-b border-slate-700 last:border-0 hover:bg-slate-700/30 transition-colors"
                    >
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <div className="w-10 h-10 rounded-lg bg-slate-700 flex items-center justify-center text-blue-400">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <h3 className="font-semibold text-white">{campaign.title}</h3>
                                        <StatusBadge status={campaign.status} />
                                    </div>
                                    <p className="text-sm text-slate-400">Campaign ID: #{1000 + campaign.id}</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-4 w-full md:w-auto text-center">
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Sent</div>
                                    <div className="text-white font-bold">{campaign.sent}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Opened</div>
                                    <div className="text-emerald-400 font-bold">{campaign.opened}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Clicked</div>
                                    <div className="text-orange-400 font-bold">{campaign.clicked}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 uppercase font-semibold mb-1">Subm.</div>
                                    <div className="text-red-400 font-bold">{campaign.submitted}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CampaignsList;
