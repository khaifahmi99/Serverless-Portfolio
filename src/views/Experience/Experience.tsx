import React from "react";
import { ChevronDoubleLeftIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { ExternalLinkIcon } from '@heroicons/react/outline';

import Card from "../../components/Card";
import Title from "../../components/Title";

const Experience = (): JSX.Element => {
    // TODO: Get from JSON
    const EXPERIENCES = [
        {
            id: '1',
            role: 'Intern',
            company: 'Company A',
            technologies: ['HTML', 'CSS', 'Lorem', 'Ipsum', 'Dorem sit', 'Nunc', 'Tempor', 'Dictum', 'Cras tincidunt', 'idio id', 'Risus', 'Tempus', 'Tempor', 'Dictum', 'Cras tincidunt', 'idio id', 'Risus', 'Tempus'],
            duration: [2018, 2019],
            link: undefined,
            hightlights: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.',
            ]
        },
        {
            id: '2',
            role: 'Junior',
            company: 'Company B',
            technologies: ['Linux', 'Python'],
            duration: [2019, 2021],
            link: 'https://github.com',
            hightlights: [
                'Successfully configured a large scale infrastructure rebuild',
                'Awarded best young talent 2020'
            ]
        },
        {
            id: '3',
            role: 'Mid',
            company: 'Company C',
            technologies: ['TailwindCSS', 'AWS'],
            duration: [2021, null],
            link: 'https://github.com',
            hightlights: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tempor dictum finibus. Cras tincidunt odio id risus tempus ullamcorper vel vitae odio.',
            ]
        },
    ];

    // TODO: must check before accessing index 0
    const [activeExperience, setActiveExperience] = React.useState(EXPERIENCES[0]);

    return (
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-8'>
            <Title text='Experiences' />
            <div className='flex flex-row space-x-4 w-full h-96'>
                <div className='w-3/4 hidden lg:flex'>
                    <Card>
                        <div className='flex flex-col text-left w-full h-full p-12 text-white'>
                            <p>{activeExperience.duration[0]}{activeExperience.duration[1] ? ` - ${activeExperience.duration[1]}` : ''}</p>
                            <div className='flex flex-row justify-between'>
                                <h1 className='font-bold text-lg'>{activeExperience.role}@{activeExperience.company}</h1>
                                {activeExperience.link && (
                                    <ExternalLinkIcon 
                                        className={`h-8 w-8 ml-2 text-white hover:text-gray-200`} 
                                        onClick={() => window.open(activeExperience.link, '_blank')}
                                    />
                                )}
                            </div>
                            <hr className='my-4' />
                            <div className='flex flex-col justify-between h-3/4'>
                                <div className='overflow-auto'>
                                    {activeExperience.hightlights.map((hightlight, idx) => (
                                        <div 
                                            id={`hightlight-${idx}`} 
                                            className='flex flex-row'
                                        >
                                            <div className='flex my-auto'>
                                                <CheckCircleIcon className={`h-6 w-6 mr-2 text-white`}/>
                                            </div>
                                            <p>{hightlight}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className='flex flex-nowrap justify-end mt-4'>
                                    {activeExperience.technologies.slice(0, 5).map((tech, idx) => (
                                        <span
                                            id={`tech-${idx}`} 
                                            className='px-2 py-1 bg-white text-indigo-600 ml-2 rounded-lg truncate'
                                        >
                                            {tech}
                                        </span>
                                    ))}                                
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className='hidden lg:block w-1/2 overflow-y-auto border-t-2 border-indigo-100'>
                    {EXPERIENCES.map((exp, idx) => (
                        <div 
                            id={`exp-${idx}`} 
                            className='flex flex-row h-16 py-4 border-b-2 border-indigo-100' 
                            onClick={() => setActiveExperience(exp)}
                        >
                            <ChevronDoubleLeftIcon className={`h-6 w-6 mr-4 text-indigo-400`}/>
                            <p className={`text-center text-gray-600 ${exp.id === activeExperience.id ? 'font-bold' : ''} w-full`}>{exp.role}@{exp.company}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;