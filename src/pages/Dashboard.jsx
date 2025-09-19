import React from "react";
// import { Link } from "react-router-dom";

function Dashboard() {
  const exams = [
    { id: 1, title: "SSC CGL 2025", sector: "Government", link: "https://ssc.nic.in" },
    { id: 2, title: "UPSC Prelims 2025", sector: "Government", link: "https://upsc.gov.in" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Dashboard</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {exams.map((exam) => (
          <div key={exam.id} className="bg-white shadow rounded-lg p-4 border-l-4 border-green-500">
            <h3 className="text-xl font-semibold">{exam.title}</h3>
            <p className="text-gray-700">Sector: {exam.sector}</p>
            <a
              href={exam.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline mt-2 inline-block"
            >
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );  
}

export default Dashboard;
