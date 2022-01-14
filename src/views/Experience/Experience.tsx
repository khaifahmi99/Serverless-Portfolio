import React from "react";
import Card from "../../components/Card";
import Title from "../../components/Title";

const Experience = (): JSX.Element => {
    // TODO: Get from JSON
    const EXPERIENCES = [
        {
            role: 'Intern',
            company: 'Company A',
            technologies: ['HTML', 'CSS'],
            duration: [2018, 2019],
        },
        {
            role: 'Junior',
            company: 'Company B',
            technologies: ['Linux', 'Python'],
            duration: [2019, 2021],
        },
        {
            role: 'Mid',
            company: 'Company C',
            technologies: ['TailwindCSS', 'AWS'],
            duration: [2021, null],
        },
    ];

    // TODO: must check before accessing index 0
    const [activeExperience, setActiveExperience] = React.useState(EXPERIENCES[0]);

    const latestExperience = EXPERIENCES.length > 4 ? EXPERIENCES.slice(0, 3) : EXPERIENCES;

    return (
        <div className='max-w-7xl mx-auto sm:px-6 lg:px-8 py-8'>
            <Title text='Experiences' />
            <div className='flex flex-row space-x-4 w-full h-96'>
                <div className='w-full'>
                    <Card>{activeExperience.role}@{activeExperience.company}</Card>
                </div>
                <div className='flex flex-col space-y-4 w-1/2 overflow:auto'>
                    {latestExperience.map((exp, idx) => (
                        <div id={`exp-${idx}`} className='h-16' onClick={() => setActiveExperience(exp)}>
                            <Card>{exp.role}@{exp.company}</Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Experience;