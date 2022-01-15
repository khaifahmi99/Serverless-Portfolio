import React from "react";
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid'

import Card from "../../components/Card";
import Title from "../../components/Title";

const Experience = (): JSX.Element => {
    // TODO: Get from JSON
    const EXPERIENCES = [
        {
            id: '1',
            role: 'Intern',
            company: 'Company A',
            technologies: ['HTML', 'CSS'],
            duration: [2018, 2019],
        },
        {
            id: '2',
            role: 'Junior',
            company: 'Company B',
            technologies: ['Linux', 'Python'],
            duration: [2019, 2021],
        },
        {
            id: '3',
            role: 'Mid',
            company: 'Company C',
            technologies: ['TailwindCSS', 'AWS'],
            duration: [2021, null],
        },
    ];

    // TODO: must check before accessing index 0
    const [activeExperience, setActiveExperience] = React.useState(EXPERIENCES[0]);

    return (
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-8'>
            <Title text='Experiences' />
            <div className='flex flex-row space-x-4 w-full h-96'>
                <div className='w-full hidden lg:flex'>
                    <Card>{activeExperience.role}@{activeExperience.company}</Card>
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