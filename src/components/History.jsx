import React from "react";

function History() {
  const appliedExams = [
    { exam: "SSC CGL", status: "Applied", date: "2025-07-12" },
    { exam: "UPSC Prelims", status: "Pending", date: "2025-08-01" },
    { exam: "IBPS PO", status: "Completed", date: "2025-06-20" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Application History</h2>

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-100 text-left">
            <th className="p-2 border border-gray-300">Exam</th>
            <th className="p-2 border border-gray-300">Status</th>
            <th className="p-2 border border-gray-300">Date</th>
          </tr>
        </thead>
        <tbody>
          {appliedExams.map((exam, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-2 border border-gray-300">{exam.exam}</td>
              <td className="p-2 border border-gray-300">{exam.status}</td>
              <td className="p-2 border border-gray-300">{exam.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default History;
