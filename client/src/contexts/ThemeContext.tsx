import { createContext, FC, useContext } from 'react';
import COLORS, { ThemeColor, THEME_COLORS } from '../constants/colors';
import metaFile from '../meta.json';
import { Basic } from '../types/Basic';

interface Theme {
    text100: string;
    text200: string;
    text300: string;
    text400: string;
    text500: string;
    text600: string;
    text700: string;
    text800: string;
    hoverDark: string;
    hoverLight: string;
    bg100: string;
    bg200: string;
    bg300: string;
    bg400: string;
    bg500: string;
    bg600: string;
    bg700: string;
    bg800: string;
    borderLight: string;
    borderDark: string;
}

const isColorValid = (color: string) => THEME_COLORS.includes(color);

const defaultProfile: Basic = metaFile;
const defaultColor = defaultProfile.themeColor && isColorValid(defaultProfile.themeColor)
  ? defaultProfile.themeColor
  : 'indigo';
const defaultThemeColor = COLORS[defaultColor as ThemeColor];

const ThemeColorContext = createContext<Theme>(defaultThemeColor);

const ThemeColorProvider: FC = ({ children }) => (
  <ThemeColorContext.Provider value={defaultThemeColor}>
    {children}
  </ThemeColorContext.Provider>
);

export default ThemeColorProvider;
export const useThemeColorContext = () => useContext(ThemeColorContext);
