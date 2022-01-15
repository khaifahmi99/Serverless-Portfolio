import { FC } from "react";

export interface TitleProps {
    text: string;
}

const Title: FC<TitleProps> = ({ 
    text, 
}) => (
    <div className='pb-14 pt-14 flex flex-row'>
        <h1 
            className={`text-indigo-600 text-6xl tracking-tight font-bold pr-4 pb-1`}
        >
            {text}
        </h1>
        <span
            className='w-full h-[2.2em] border-b-4 border-gray-300'
        ></span>
    </div>
)

export default Title;