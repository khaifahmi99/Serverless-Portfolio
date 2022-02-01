import { ChevronDoubleRightIcon } from '@heroicons/react/solid';
import React from 'react';
import { InformationCard } from '../../components/Card';
import Title from '../../components/Title';
import { useProfileContext } from '../../contexts/ProfileContext';

function Project(): JSX.Element {
  const { projects: rawProjects } = useProfileContext();
  const projects = rawProjects.map((project, idx) => ({
    id: `project-id-${idx}`,
    ...project,
  }));
  const defaultProject = projects.length > 0 ? projects[0] : null;

  const [activeProject, setActiveProject] = React.useState(defaultProject);

  if (!activeProject) {
    return <></>;
  }

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <Title text="Projects" />
      <div className="flex flex-col lg:hidden">
        {projects.slice(0, 2).map((project, idx) => (
          <div id={`md:project-${idx}`} className="h-96 w-full mb-4">
            <InformationCard
              link={project.link ?? undefined}
              meta={project.tags ?? undefined}
              title={project.name}
              timePeriod={[project.year, null]}
              highlights={project.highlights}
            />
          </div>
        ))}
      </div>
      <div className="hidden lg:flex flex-row space-x-4 w-full h-96">
        <div className="hidden lg:block w-1/2 overflow-y-auto border-t-2 border-indigo-100">
          {projects.map((project, idx) => (
            <div
              id={`project-${idx}`}
              className="flex flex-row h-16 py-4 border-b-2 border-indigo-100"
              onClick={() => setActiveProject(project)}
            >
              <p className={`text-center text-gray-600 ${project.id === activeProject.id ? 'font-bold' : ''} w-full`}>{project.name}</p>
              <ChevronDoubleRightIcon className="h-6 w-6 mr-4 text-indigo-400" />
            </div>
          ))}
        </div>
        <div className="w-3/4 hidden lg:flex">
          <InformationCard
            link={activeProject.link ?? undefined}
            meta={activeProject.tags ?? undefined}
            title={activeProject.name}
            timePeriod={[activeProject.year, null]}
            highlights={activeProject.highlights}
          />
        </div>
      </div>
    </div>
  );
}

export default Project;
