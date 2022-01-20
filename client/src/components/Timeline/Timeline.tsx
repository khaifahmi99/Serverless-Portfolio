import { Duration } from "../Card/InformationCard";

export interface TimelineItem {
    period?: Duration;
    title: string;
    subtitle?: string;
    content: string;
}

export interface TimelineProps {
    items: TimelineItem[];
}

const Timeline = ({ items }: TimelineProps): JSX.Element => {
    return (
        <div className="relative wrap overflow-hidden p-10 h-full text-white">
            <div className="border-2-2 absolute border-indigo-500 h-full border" style={{ left: '50%' }}></div>
            
            {items.map((item, idx) => {
                const isAlternate = idx % 2 === 0;
                const position = isAlternate ? 'right-timeline' : 'left-timeline flex-row-reverse';
            return (
                <div className={`mb-8 flex justify-between items-center w-full ${position}`}>
                    <div className="order-1 w-5/12"></div>
                    <div className="z-10 flex items-center order-1 shadow-xl w-8 h-8 rounded-full bg-indigo-300 border-4 border-indigo-500">
                    </div>
                    <div className="order-1 rounded-lg shadow-xl w-5/12 px-6 py-4 bg-indigo-500">
                        {item.period && (
                            <span className='hidden lg:flex'>{item.period[0]} {item.period[1] ? ` - ${item.period[1]}` : ''}</span>
                        )}
                        <h1 className="text-lg">{item.subtitle ?? ''}</h1>
                        <h2 className="my-2 font-bold text-xl">{item.title}</h2>
                        <p className="text-sm leading-snug tracking-wide text-opacity-100">{item.content}</p>
                    </div>
                </div>
            )})}
        </div>
    )
}

export default Timeline;