import React from "react";
import { FaRocket, FaChartLine, FaBriefcase } from "react-icons/fa";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 to-indigo-100 dark:from-black dark:to-indigo-950 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-violet-600 dark:text-violet-400 mb-4 animate-fade-in-down">
            Welcome to Your Dashboard
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 animate-fade-in-up">
            Explore your portfolio, track your progress, and showcase your
            achievements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <DashboardCard
              icon={
                <FaRocket className="text-violet-500 dark:text-violet-400" />
              }
              title="Quick Start"
              description="Get started with your portfolio in minutes"
            />
            <DashboardCard
              icon={
                <FaChartLine className="text-violet-500 dark:text-violet-400" />
              }
              title="Analytics"
              description="Track your portfolio's performance"
            />
            <DashboardCard
              icon={
                <FaBriefcase className="text-violet-500 dark:text-violet-400" />
              }
              title="Projects"
              description="Showcase your best work to the world"
            />
          </div>
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-opacity-50">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardCard = ({ icon, title, description }) => {
  return (
    <div className="bg-violet-50 dark:bg-gray-700 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-violet-700 dark:text-violet-300 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

export default WelcomePage;
