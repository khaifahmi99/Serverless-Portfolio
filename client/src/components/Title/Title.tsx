import { FC } from 'react';
import { useThemeColorContext } from '../../contexts/ThemeContext';

export interface TitleProps {
    text: string;
    variant?: 'light' | 'dark';
}

const Title: FC<TitleProps> = ({
  text,
  variant = 'dark',
}) => {
  const theme = useThemeColorContext();

  const fontColor = variant === 'dark' ? theme.text600 : theme.text100;

  return (
    <div className="pb-14 pt-14 flex flex-row">
      <h1
        className={`${fontColor} text-6xl tracking-tight font-bold pr-4 pb-1`}
      >
        {text}
      </h1>
      <span
        className="w-full h-[2.2em] border-b-4 border-gray-300"
      />
    </div>
  );
};

export default Title;
