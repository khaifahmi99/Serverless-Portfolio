import React from "react";
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';

import { InformationCard } from "../../components/Card";
import Title from "../../components/Title";
import { Duration } from "../../components/Card/InformationCard";

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
            <div className='flex flex-col lg:hidden'>
                {EXPERIENCES.slice(0, 2).map((exp, idx) => (
                    <div id={`md:exp-${idx}`} className='h-96 w-full mb-4'>
                        <InformationCard
                            link={exp.link}
                            meta={exp.technologies}
                            title={`${exp.role}@${exp.company}`}
                            timePeriod={(exp.duration as Duration)}
                            highlights={exp.hightlights}
                        />
                    </div>
                ))}
            </div>
            <div className='hidden lg:flex flex-row space-x-4 w-full h-96'>
                <div className='w-3/4 hidden lg:flex'>
                    <InformationCard 
                        link={activeExperience.link}
                        meta={activeExperience.technologies}
                        title={`${activeExperience.role}@${activeExperience.company}`}
                        timePeriod={(activeExperience.duration as Duration)}
                        highlights={activeExperience.hightlights}
                    />
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