import React from "react";
import { useParams } from "react-router-dom";

function ExamDetails() {
  const { id } = useParams();

  // Example exam data, replace with backend fetch
  const exam = {
    title: "SSC CGL 2025",
    sector: "Government",
    lastDate: "2025-10-01",
    syllabus: ["Quantitative Aptitude", "Reasoning", "English", "General Knowledge"],
    link: "https://ssc.nic.in",
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">{exam.title}</h2>
      <p className="text-gray-700 mb-2"><strong>Sector:</strong> {exam.sector}</p>
      <p className="text-gray-700 mb-4"><strong>Last Date:</strong> {exam.lastDate}</p>

      <h3 className="text-xl font-semibold text-green-600 mb-2">Syllabus</h3>
      <ul className="list-disc ml-6 text-gray-700">
        {exam.syllabus.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <a
        href={exam.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
      >
        Apply Now
      </a>
    </div>
  );
}

export default ExamDetails;
