import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/projects/')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, []);

  return (<>
              <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/community">Community</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                </ul>
            </nav>
    <div className="projects-container">
      <h1 className="text-3xl font-bold mb-4">My Projects</h1>
      {projects.length === 0 ? (
        <p>No projects yet.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map(project => (
            <li key={project.id} className="p-4 border rounded-lg shadow">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              <small className="text-gray-500">Created: {new Date(project.created_at).toLocaleDateString()}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  </>);
}

export default Projects;