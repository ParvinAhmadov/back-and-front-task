"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SectionHeader from '../SectionHeaders';
import FeaturedProductSection from '../FeaturedProductSection';
import { Card } from '@/types/types';

const FeaturedProductCards: React.FC = () => {
    const [cards, setCards] = useState<Card[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/cards');
                setCards(response.data.cards);
            } catch (err) {
                setError(`Error fetching data: ${err instanceof Error ? err.message : 'Unknown error'}`);
            } finally {
                setLoading(false);
            }
        };

        fetchCards();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <>
            <SectionHeader title="Featured Products" desc="" />
            <div className="flex justify-center items-center gap-4 text-[20px]">
            </div>
            <section className="gap-10 flex items-center max-w-[1400px] w-full mx-auto flex-wrap mt-10 mb-16">
                {cards.map(card => (
                    <FeaturedProductSection
                        key={card._id}
                        Feabrand="Alukas"
                        Featitle={card.title}
                        Feaprice={`$${card.price.toFixed(2)}`} 
                        FeaimageUrl1={`http://localhost:3001${card.image}`} 
                        FeaimageUrl2={`http://localhost:3001${card.image2}`} 
                    />
                ))}
            </section>
        </>
    );
};

export default FeaturedProductCards;
