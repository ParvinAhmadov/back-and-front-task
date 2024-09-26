import {  CardItemProps } from "@/types/types";
import React from "react";



const CardItem: React.FC<CardItemProps> = ({ card }) => {
    return (
        <div className="m-4 p-4 border rounded w-1/4">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover mb-2" />
            <h4 className="font-bold">{card.title}</h4>
            <p>Price: ${card.price}</p>
            <p>Color: {card.features.color}</p>
            <p>Material: {card.features.material}</p>
            <p>Size: {card.features.size}</p>
        </div>
    );
};

export default CardItem;
