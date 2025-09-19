import React from "react";

function Profile() {
  // Example user data (will connect to backend later)
  const user = {
    name: "Devil",
    email: "devil@example.com",
    appliedExams: ["SSC CGL", "UPSC Prelims", "IBPS PO"],
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Profile</h2>

      <div className="space-y-2">
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
      </div>

      <h3 className="text-xl font-semibold text-green-600 mt-6">Exam History</h3>
      <ul className="list-disc ml-6 mt-2 text-gray-700">
        {user.appliedExams.map((exam, index) => (
          <li key={index}>{exam}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;
