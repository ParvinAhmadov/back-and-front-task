"use client";
import React, { useEffect, useState } from "react";
import FilterSidebar from "../../components/FilterSidebar/index";
import CardList from "../../components/ShopCardList/index";
import { Card, Filters } from "@/types/types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ShopPage: React.FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [filters, setFilters] = useState<Filters>({
    color: [],
    material: "",
    size: "",
    price: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const fetchCards = async () => {
    const response = await fetch("http://localhost:3001/api/shopcards");
    const data = await response.json();
    setCards(data.cards);
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const applyFilters = (cards: Card[]) =>
    cards.filter(
      (card) =>
        (filters.color.length === 0 ||
          filters.color.includes(card.features.color)) &&
        (!filters.material || card.features.material === filters.material) &&
        (!filters.size || card.features.size === filters.size) &&
        (!filters.price || card.price <= parseFloat(filters.price))
    );

  const filteredCards = applyFilters(cards);
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const currentCards = filteredCards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="flex justify-between max-w-[1400px] w-full mx-auto  mt-10 mb-16">
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <div className="flex flex-col w-full flex-wrap">
        <CardList cards={currentCards} />
        {currentCards.length > 0 && totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            onNextPage={handleNextPage}
            onPrevPage={handlePrevPage}
          />
        )}
      </div>
    </div>
  );
};

const Pagination: React.FC<{
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onNextPage: () => void;
  onPrevPage: () => void;
}> = ({ totalPages, currentPage, onPageChange, onNextPage, onPrevPage }) => (
  <div className="flex justify-center items-center gap-4 mt-4">
    <button
      onClick={onPrevPage}
      disabled={currentPage === 1}
      className="px-3 py-2 bg-white text-black border-black disabled:opacity-0 disabled:border-none"
    >
      <FaChevronLeft />
    </button>
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index + 1}
        onClick={() => onPageChange(index + 1)}
        className={`px-3 py-1 ${
          currentPage === index + 1
            ? "text-black border-2 border-black"
            : "bg-white text-black hover:border-2 border-black"
        }`}
      >
        {index + 1}
      </button>
    ))}
    <button
      onClick={onNextPage}
      disabled={currentPage === totalPages}
      className="px-3 py-2 bg-white text-black disabled:opacity-0 disabled:border-none"
    >
      <FaChevronRight />
    </button>
  </div>
);

export default ShopPage;
