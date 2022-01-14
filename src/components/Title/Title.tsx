import { FC } from "react";

export interface TitleProps {
    text: string;
    twOptions?: {
        backgroundColor?: string;
    }
}

const Title: FC<TitleProps> = ({ 
    text, 
    twOptions = { backgroundColor: 'white' }, 
}) => (
    <div className='pb-14 pt-14'>
        <h1 
            className={`text-indigo-600 text-6xl tracking-tight font-bold md:border-b-4 border-gray-300 border-0`}
            style={{ lineHeight: '0.1em' }}
        >
            <span 
                className={`bg-${twOptions.backgroundColor} pr-4`}
            >
                {text}
            </span>
        </h1>
    </div>
)

export default Title;