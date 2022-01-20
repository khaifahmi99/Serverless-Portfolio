import Button from "../../components/Button";
import { QuoteCard } from "../../components/Card";
import { GithubIcon, TwitterIcon, LinkedinIcon } from "../../components/Icons";

const Home = (): JSX.Element => {
  const github: string | undefined = 'https://github.com';
  const linkedin: string | undefined = 'https://linkedin.com';
  const twitter: string | undefined = 'https://twitter.com';

  return (
    <div className="bg-indigo-100">
      <div className="max-w-7xl mx-auto z-20">
        <div className="flex flex-row">
          <div className="lg:w-3/5 md:w-full pb-8 sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <div className="mt-10 mx-autopx-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <div className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <h2 className="text-5xl">[Job Title]</h2>{" "}
                  <h2 className="text-indigo-600 text-6xl">
                    [First] [Last Name]
                  </h2>
                </div>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  [Brief Description Anim aute id magna aliqua ad ad non
                  deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                  sunt amet fugiat veniam occaecat fugiat aliqua.]
                </p>
                <div className="flex flex-row pt-4 text-gray-500">
                  {github && (
                    <a
                      href={github}
                      className={`h-8 w-8 mr-6 hover:text-indigo-600`}
                    >
                      <GithubIcon />
                    </a>
                  )}
                  {twitter && (
                    <a
                      href={twitter}
                      className={`h-8 w-8 mr-6 hover:text-indigo-600`}
                    >
                      <TwitterIcon />
                    </a>
                  )}
                  {linkedin && (
                    <a
                      href={linkedin}
                      className={`h-8 w-8 mr-6 hover:text-indigo-600`}
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
              <QuoteCard quote='"Lorem ipsum dolor sit amet, consectetur adip!"' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
