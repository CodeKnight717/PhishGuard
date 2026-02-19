import React from 'react';
import { motion } from 'framer-motion';
import DashboardStats from '../components/dashboard/DashboardStats';
import DashboardChart from '../components/dashboard/DashboardChart';
import RecentScans from '../components/dashboard/RecentScans';

const Dashboard = () => {
    return (
        <div className="container mx-auto px-4 py-8 space-y-8">
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-8"
            >
                <h1 className="text-3xl font-bold text-white mb-2">Dashboard</h1>
                <p className="text-slate-400">Overview of your PhishGuard security campaigns and statistics.</p>
            </motion.div>

            {/* Stats Grid */}
            <DashboardStats />

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Chart Section - Takes up 2 columns on large screens */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-3"
                >
                    <DashboardChart />
                </motion.div>

                {/* Campaigns List - Takes up full width for now, or could be side-by-side with another component */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-3"
                >
                    <RecentScans />
                </motion.div>
            </div>
        </div>
    );
};

export default Dashboard;
