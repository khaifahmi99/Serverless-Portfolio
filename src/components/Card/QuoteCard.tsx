import { FC } from "react";
import Card from ".";
import { CardProps } from "./Card";

interface QuoteCardProps extends CardProps {
    quote: string;
}

const QuoteCard: FC<QuoteCardProps> = ({
    quote
}) => (
    <Card>
        <p className="text-white text-center text-4xl italic p-12">{quote}</p>
    </Card>
);

export default QuoteCard;