import { useState, useEffect } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  // Fetch projects.json data
  useEffect(() => {
    fetch("/projects/projects.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects data");
        }
        return response.json();
      })
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching projects data:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
      {projects.length === 0 ? (
        <p className="text-lg text-center">No projects available.</p>
      ) : (
        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded shadow">
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-2">{project.description}</p>
              <p className="mb-2 text-sm font-semibold">
                Technologies: {project.technologies.join(", ")}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Completed on: {new Date(project.date).toLocaleDateString()}
              </p>

              {project.files.length > 0 && (
                <div className="mb-4">
                  <h3 className="text-lg font-bold">Files:</h3>
                  <ul className="list-disc list-inside">
                    {project.files.map((file, fileIndex) => (
                      <li key={fileIndex}>
                        <a
                          href={file.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {file.type}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.gallery.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold mb-2">Gallery:</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {project.gallery.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        {item.endsWith(".mp4") ? (
                          <video
                            controls
                            className="w-full rounded"
                            src={item}
                          ></video>
                        ) : (
                          <img
                            className="w-full rounded"
                            src={item}
                            alt={`Project gallery item ${itemIndex + 1}`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
