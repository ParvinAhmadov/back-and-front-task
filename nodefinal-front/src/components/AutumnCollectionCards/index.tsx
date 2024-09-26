"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; 
import AutumnCollectionSection from "../AutumnCollection";
import SectionHeader from "../SectionHeaders";
import { Card } from '@/types/types';
import LoadingIndicator from "../Loading";

const AutumnCollectionCards: React.FC = () => {
  const [autumnCards, setAutumnCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAutumnCards = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/cards');
        const filteredCards = response.data.cards.filter((card: Card) => card.cardType === 'Autumn');
        setAutumnCards(filteredCards);
      } catch (err) {
        setError(`Error fetching data: ${err instanceof Error ? err.message : 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchAutumnCards();
  }, []);

  const handleCardClick = (id: string) => {
    router.push(`/detail/${id}`);
  };

  if (loading) return <div><LoadingIndicator/></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <SectionHeader
        title="Autumn Collection"
        desc="Collect your loves with our autumn arrivals."
      />
      <section className="gap-10 flex items-center max-w-[1400px] w-full mx-auto flex-wrap mt-10 mb-16">
        {autumnCards.map(card => (
          <div key={card._id} onClick={() => handleCardClick(card._id)} className="cursor-pointer">
         <AutumnCollectionSection
  Autbrand="Alukas"
  Auttitle={card.title}
  Autprice={`$${card.price.toFixed(2)}`} 
  AutimageUrl1={card.image ? `http://localhost:3001${card.image}` : '/default-image.jpg'}
  AutimageUrl2={card.image2 ? `http://localhost:3001${card.image2}` : '/default-image.jpg'}
/>
          </div>
        ))}
      </section>
    </>
  );
};

export default AutumnCollectionCards;
