import { createContext, FC, useContext } from 'react';

import metaFile from './meta.json';

import { Basic } from './types/Basic';
import { Experience } from './types/Experience';
import { Education } from './types/Education';
import { Review } from './types/Review';
import { Skill } from './types/Skill';
import { Project } from './types/Project';

interface Profile extends Basic {
    experiences: Experience[];
    educations: Education[];
    projects: Project[];
    skills: Skill[];
    reviews: Review[];
}

const defaultProfile: Profile = metaFile;
const ProfileContext = createContext<Profile>(defaultProfile);

const ProfileProvider: FC = ({ children }) => (
  <ProfileContext.Provider value={defaultProfile}>
    {children}
  </ProfileContext.Provider>
);

export default ProfileProvider;
export const useProfileContext = () => useContext(ProfileContext);
