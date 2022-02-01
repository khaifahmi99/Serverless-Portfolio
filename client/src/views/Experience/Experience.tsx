import React from 'react';
import { ChevronDoubleLeftIcon } from '@heroicons/react/solid';

import { InformationCard } from '../../components/Card';
import Title from '../../components/Title';
import { Duration } from '../../components/Card/InformationCard';
import { useProfileContext } from '../../contexts/ProfileContext';
import { useThemeColorContext } from '../../contexts/ThemeContext';

function Experience(): JSX.Element {
  const profile = useProfileContext();
  const theme = useThemeColorContext();

  const EXPERIENCES = profile.experiences.map((experience, idx) => ({
    id: `experience-id-${idx}`,
    ...experience,
  }));

  const defaultExperience = EXPERIENCES.length > 0 ? EXPERIENCES[0] : null;
  const [activeExperience, setActiveExperience] = React.useState(defaultExperience);

  if (!activeExperience) {
    return <></>;
  }

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
      <Title text="Experiences" />
      <div className="flex flex-col lg:hidden">
        {EXPERIENCES.slice(0, 2).map((exp, idx) => (
          <div id={`md:exp-${idx}`} className="h-96 w-full mb-4">
            <InformationCard
              link={exp.link ?? undefined}
              meta={exp.tags ?? undefined}
              title={`${exp.role}@${exp.company}`}
              timePeriod={([exp.yearStart, exp.yearEnd ?? null] as Duration)}
              highlights={exp.highlights}
            />
          </div>
        ))}
      </div>
      <div className="hidden lg:flex flex-row space-x-4 w-full h-96">
        <div className="w-3/4 hidden lg:flex">
          <InformationCard
            link={activeExperience.link ?? undefined}
            meta={activeExperience.tags ?? undefined}
            title={`${activeExperience.role}@${activeExperience.company}`}
            timePeriod={
              ([activeExperience.yearStart, activeExperience.yearEnd ?? null] as Duration)
            }
            highlights={activeExperience.highlights}
          />
        </div>
        <div className={`hidden lg:block w-1/2 overflow-y-auto border-t-2 ${theme.borderLight}`}>
          {EXPERIENCES.map((exp, idx) => (
            <div
              id={`exp-${idx}`}
              className={`flex flex-row h-16 py-4 border-b-2 ${theme.borderLight}`}
              onClick={() => setActiveExperience(exp)}
            >
              <ChevronDoubleLeftIcon className={`h-6 w-6 mr-4 ${theme.text400}`} />
              <p className={`text-center text-gray-600 ${exp.id === activeExperience.id ? 'font-bold' : ''} w-full`}>
                {exp.role}
                @
                {exp.company}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
