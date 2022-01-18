import { ExternalLinkIcon } from "@heroicons/react/outline";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { FC } from "react";
import Card from ".";
import { CardProps } from "./Card";

export type Duration = [number, number | null];

export interface InformationCardProps extends CardProps {
    title: string;
    timePeriod?: Duration;
    link?: string;
    highlights?: string[];
    meta?: string[];
}

const InformationCard: FC<InformationCardProps> = ({
    title,
    timePeriod,
    link,
    highlights,
    meta
}) => {

    const duration = timePeriod ? `${timePeriod[0]}${timePeriod[1] ? ` - ${timePeriod[1]}` : ''}` : ''

    return (
        <Card>
            <div className='flex flex-col text-left w-full h-full p-12 text-white'>
                <p>{duration}</p>
                <div className='flex flex-row justify-between'>
                    <h1 className='font-bold text-lg'>{title}</h1>
                    {link && (
                        <ExternalLinkIcon 
                            className={`h-8 w-8 ml-2 text-white hover:text-gray-200`} 
                            onClick={() => window.open(link, '_blank')}
                        />
                    )}
                </div>
                <hr className='my-4' />
                <div className='flex flex-col justify-between h-3/4'>
                    <div className='overflow-auto'>
                        {highlights?.map((highlight, idx) => (
                            <div 
                                id={`highlight-${idx}`} 
                                className='flex flex-row'
                            >
                                <div className='flex my-auto'>
                                    <CheckCircleIcon className={`h-6 w-6 mr-2 text-white`}/>
                                </div>
                                <p>{highlight}</p>
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-nowrap justify-end mt-4'>
                        {meta?.slice(0, 5).map((item, idx) => (
                            <span
                                id={`item-${idx}`} 
                                className='px-2 py-1 bg-white text-indigo-600 ml-2 rounded-lg truncate'
                            >
                                {item}
                            </span>
                        ))}                             
                    </div>
                </div>
            </div>
        </Card>
    )
};

export default InformationCard;