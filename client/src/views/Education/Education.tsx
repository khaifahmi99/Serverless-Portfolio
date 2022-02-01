import Timeline from '../../components/Timeline';
import Title from '../../components/Title';
import { useProfileContext } from '../../contexts/ProfileContext';
import { useThemeColorContext } from '../../contexts/ThemeContext';

function Education(): JSX.Element {
  const { educations } = useProfileContext();
  const theme = useThemeColorContext();

  return (
    <div className={theme.bg100}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        <Title text="Educations" />

        <Timeline items={educations.slice(0, 3).map((education) => ({
          period: [education.yearStart, education.yearEnd ?? null],
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
