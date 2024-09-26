"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; 
import SectionHeader from "../SectionHeaders";
import FeaturedProductSection from "../FeaturedProductSection";
import { Card as CardType } from "@/types/types";
import LoadingIndicator from "../Loading";

const FeaturedProductCards: React.FC = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [filteredCards, setFilteredCards] = useState<CardType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("featured");
  const router = useRouter();

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/cards");
        setCards(response.data.cards);
        setFilteredCards(
          response.data.cards.filter(
            (card: CardType) => card.cardType === "featured"
          )
        );
      } catch (err) {
        setError(
          `Error fetching data: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  useEffect(() => {
    const filterCards = () => {
      const filtered = cards.filter(
        (card: CardType) => card.cardType === selectedCategory
      );
      setFilteredCards(filtered);
    };

    filterCards();
  }, [selectedCategory, cards]);

  const handleCardClick = (id: string) => {
    router.push(`/detail/${id}`);
  };

  if (loading) return <div><LoadingIndicator/></div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <SectionHeader title="Featured Collection" desc="" />
      <div className="flex justify-center items-center gap-4 text-[20px] flex-wrap">
        {["New Arrivals", "Featured", "Best Seller"].map((category) => (
          <div
            key={category}
            className="relative overflow-hidden group cursor-pointer"
            onClick={() =>
              setSelectedCategory(category.toLowerCase().replace(" ", "_"))
            }
          >
            <h2 className="z-10 text-[20px]">{category}</h2>
            <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
          </div>
        ))}
      </div>
      <section className="gap-10 flex items-center max-w-[1400px] w-full mx-auto mt-10 mb-16 flex-wrap">
        {filteredCards.map((card: CardType) => (
          <div
            key={card._id}
            onClick={() => handleCardClick(card._id)}
            className="cursor-pointer"
          >
            <FeaturedProductSection
              Feabrand="Alukas"
              Featitle={card.title}
              Feaprice={`$${card.price.toFixed(2)}`}
              FeaimageUrl1={`http://localhost:3001${card.image}`}
              FeaimageUrl2={`http://localhost:3001${card.image2}`}
            />
          </div>
        ))}
      </section>
    </>
  );
};

export default FeaturedProductCards;
