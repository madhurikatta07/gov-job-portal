import React, { useState } from "react";

function Notes() {
  const [notes, setNotes] = useState([
    { title: "SSC CGL Syllabus", content: "Quant, Reasoning, GK, English..." },
    { title: "UPSC Current Affairs", content: "Daily The Hindu + PIB" },
  ]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">My Notes</h2>

      <div className="space-y-4">
        {notes.map((note, index) => (
          <div
            key={index}
            className="bg-white p-4 shadow rounded-lg border-l-4 border-green-500"
          >
            <h3 className="font-semibold text-lg">{note.title}</h3>
            <p className="text-gray-700">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notes;
