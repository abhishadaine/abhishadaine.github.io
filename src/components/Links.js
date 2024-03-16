import React from 'react';
import SectionTitle from './SectionTitle';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Links() {
  const userLinks = {
    linkedin: 'https://www.linkedin.com/in/your-linkedin-profile',
    github: 'https://github.com/your-github-username',
    resume: '/path/to/your/resume.pdf', // Update with the actual path
  };

  return (
    <div>
      <SectionTitle title="Links" />
      <ul className="flex list-none p-0">
        <li className="mr-4">
          <a
            href={userLinks.linkedin}
            className="text-blue-500 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6 mr-2" />
            LinkedIn
          </a>
        </li>
        <li className="mr-4">
          <a
            href={userLinks.github}
            className="text-blue-500 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6 mr-2" />
            GitHub
          </a>
        </li>
        <li>
          <a
            href={userLinks.resume}
            className="text-blue-500 hover:underline flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Links;
