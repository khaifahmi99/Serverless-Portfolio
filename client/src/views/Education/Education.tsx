import { Duration } from '../../components/Card/InformationCard';
import Timeline from '../../components/Timeline';
import Title from '../../components/Title';

function Education(): JSX.Element {
  // TODO: fetch from JSON
  const EDUCATIONS = [
    {
      period: [2022, 2024],
      program: 'Master in Computer Science',
      school: 'Swinburne University of Technology',
      description: 'relative',
    },
    {
      period: [2019, 2022],
      program: 'Bachelor in Computer Science',
      school: 'Swinburne University of Technology',
      description: 'relative wrap overflow-hidden p-10 h-full text-white',
    },
    {
      period: [2018, 2019],
      program: 'Diploma in Arts',
      school: 'Monash University',
      description: 'relative wrap overflow-hidden p-10 h-full text-white',
    },
  ];

  return (
    <div className="bg-indigo-100">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        <Title text="Educations" />

        <Timeline items={EDUCATIONS.slice(0, 3).map((education) => ({
          period: education.period as Duration,
          title: education.program,
          subtitle: education.school,
          content: education.description,
        }))}
        />

      </div>
    </div>
  );
}

export default Education;
