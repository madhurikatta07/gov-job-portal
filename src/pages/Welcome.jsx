import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-green-100 p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Welcome to Gov Exams Portal</h1>
      <p className="text-lg text-gray-700 mb-8 text-center max-w-xl">
        Explore government exams across all sectors, track your applications, and get AI-powered recommendations for exams that suit your profile.
      </p>
      <div className="space-x-4">
        <Link
          to="/login"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="px-6 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Welcome;
