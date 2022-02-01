import { DesktopComputerIcon, FilmIcon } from '@heroicons/react/solid';
import Card from '../../components/Card';
import Title from '../../components/Title';
import { useProfileContext } from '../../contexts/ProfileContext';
import { useThemeColorContext } from '../../contexts/ThemeContext';

function Skill(): JSX.Element {
  const { skills } = useProfileContext();
  const theme = useThemeColorContext();

  if (skills.length < 1) {
    return <></>;
  }

  return (
    <div className={theme.bg100}>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-8">
        <Title text="Specialties" />

        <div className="flex flex-col md:flex-row justify-around space-x-0 md:space-x-2">
          {/* only show top 3 skills */}
          {skills.slice(0, 3).map((skill, idx) => (
            <div id={`skill-${idx}`} className="w-full h-80 md:w-80 mb-4">
              <Card variant="light">
                <div className="flex flex-col w-full h-full p-8 text-center">
                  <div className="flex justify-center">
                    <div className={`flex justify-center items-center rounded-full ${theme.bg600} w-24 h-24 border-4 ${theme.borderLight} mb-4`}>
                      {skill.icon === 'computer' ? (
                        <DesktopComputerIcon className="text-white h-12 w-12 mb-2" />
                      ) : (
                        <FilmIcon className="text-white h-12 w-12 mb-2" />
                      )}
                    </div>
                  </div>
                  <h1 className="font-bold">{skill.name}</h1>
                  <hr className="my-4" />
                  <p className="text-sm text-gray-900 text-clip overflow-auto">{skill.description}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
