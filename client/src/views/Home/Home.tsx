import { QuoteCard } from '../../components/Card';
import { GithubIcon, TwitterIcon, LinkedinIcon } from '../../components/Icons';
import { useProfileContext } from '../../ProfileContext';

function Home(): JSX.Element {
  const profile = useProfileContext();

  return (
    <div className="bg-indigo-100">
      <div className="max-w-7xl mx-auto z-20">
        <div className="flex flex-row">
          <div className="lg:w-3/5 md:w-full pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="mt-10 mx-autopx-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <h2 className="text-5xl">{profile.jobTitle}</h2>
                  {' '}
                  <h2 className="text-indigo-600 text-6xl">
                    {profile.firstName}
                    {' '}
                    {profile.lastName}
                  </h2>
                </div>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  {profile.briefDescription}
                </p>
                <div className="flex flex-row pt-4 text-gray-500">
                  {profile.links?.github && (
                    <a
                      href={profile.links.github}
                      className="h-8 w-8 mr-6 hover:text-indigo-600"
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {profile.links?.twitter && (
                    <a
                      href={profile.links.twitter}
                      className="h-8 w-8 mr-6 hover:text-indigo-600"
                    >
                      <TwitterIcon />
                    </a>
                  )}
                  {profile.links?.linkedin && (
                    <a
                      href={profile.links.linkedin}
                      className="h-8 w-8 mr-6 hover:text-indigo-600"
                    >
                      <LinkedinIcon />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="items-center justify-center hidden lg:flex border-4">
            <div className="h-80 w-80">
              <QuoteCard quote={`"${profile.personalQuote}"`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
