import React, { useState } from "react";

function Notifications() {
  const [notifications] = useState([
    { message: "SSC CGL 2025 Application is live now!", date: "2025-09-10" },
    { message: "UPSC Mains 2025 Admit Card Released", date: "2025-09-15" },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Notifications</h2>

      <ul className="space-y-4">
        {notifications.map((note, index) => (
          <li
            key={index}
            className="bg-white p-4 shadow rounded-lg border-l-4 border-blue-500"
          >
            <p className="text-gray-800">{note.message}</p>
            <span className="text-sm text-gray-500">{note.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
