import { FC } from 'react';

export interface ButtonProps {
    text: string;
    variant?: 'link' | 'button';
    onClick?: () => void;
    link?: string; // href link
}

const Button: FC<ButtonProps> = ({
  text,
  variant = 'button',
  onClick,
  link,
}) => (
  <div className="rounded-md shadow">
    {variant === 'button' && (
    <span
      onClick={onClick}
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-white font-medium rounded-md bg-indigo-500 hover:bg-indigo-600 md:text-lg md:px-10"
    >
      {text}
    </span>
    )}
    {variant === 'link' && (
    <a
      href={link}
      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-white font-medium rounded-md bg-indigo-500 hover:bg-indigo-600 md:text-lg md:px-10"
    >
      {text}
    </a>
    )}
  </div>
);

export default Button;
