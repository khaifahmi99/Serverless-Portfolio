import { ChevronDoubleRightIcon } from "@heroicons/react/solid";
import React from "react";
import { InformationCard } from "../../components/Card";
import { Duration } from "../../components/Card/InformationCard";
import Title from "../../components/Title";

const Project = (): JSX.Element => {
    // TODO: Get from JSON
    const PROJECTS = [
        {
            id: '1',
            name: 'Project 1',
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.'],
            technologies: ['AWS', 'Python'],
            link: 'https://github.com',
            year: 2019
        },
        {
            id: '2',
            name: 'Project 2',
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.'],
            technologies: ['AWS', 'Python'],
            link: undefined,
            year: 2020
        },
        {
            id: '3',
            name: 'Project 3',
            description: ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.'],
            technologies: ['AWS', 'Python'],
            link: 'https://github.com',
            year: 2020
        }
    ];

    const [activeProject, setActiveProject] = React.useState(PROJECTS[0]);

    return (
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-8'>
            <Title text='Projects' />
            <div className='flex flex-col lg:hidden'>
                {PROJECTS.slice(0, 2).map((project, idx) => (
                    <div id={`md:project-${idx}`} className='h-96 w-full mb-4'>
                        <InformationCard
                            link={project.link}
                            meta={project.technologies}
                            title={project.name}
                            timePeriod={[project.year, null]}
                            highlights={project.description}
                        />
                    </div>
                ))}
            </div>
            <div className='hidden lg:flex flex-row space-x-4 w-full h-96'>
                <div className='hidden lg:block w-1/2 overflow-y-auto border-t-2 border-indigo-100'>
                    {PROJECTS.map((project, idx) => (
                        <div 
                            id={`project-${idx}`} 
                            className='flex flex-row h-16 py-4 border-b-2 border-indigo-100' 
                            onClick={() => setActiveProject(project)}
                        >
                            <p className={`text-center text-gray-600 ${project.id === activeProject.id ? 'font-bold' : ''} w-full`}>{project.name}</p>
                            <ChevronDoubleRightIcon className={`h-6 w-6 mr-4 text-indigo-400`}/>
                        </div>
                    ))}
                </div>
                <div className='w-3/4 hidden lg:flex'>
                    <InformationCard 
                        link={activeProject.link}
                        meta={activeProject.technologies}
                        title={activeProject.name}
                        timePeriod={[activeProject.year, null]}
                        highlights={activeProject.description}
                    />
                </div>
            </div>
        </div>
    )
}

export default Project;