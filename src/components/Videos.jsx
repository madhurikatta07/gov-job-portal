import React from "react";

function Videos() {
  const videos = [
    { title: "How to Crack SSC CGL", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { title: "UPSC Preparation Strategy", url: "https://www.youtube.com/embed/tgbNymZ7vqY" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-green-600 mb-4">Preparation Videos</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {videos.map((video, index) => (
          <div key={index} className="bg-white shadow rounded-lg overflow-hidden">
            <iframe
              src={video.url}
              title={video.title}
              className="w-full h-56"
              allowFullScreen
            ></iframe>
            <p className="p-2 font-medium">{video.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
