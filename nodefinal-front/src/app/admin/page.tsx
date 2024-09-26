"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import LoadingIndicator from "@/components/Loading";

interface Card {
  _id: string;
  title: string;
  price: number;
  cardType: string;
  image?: string;
  image2?: string;
}

interface FormData {
  title: string;
  price: string;
  cardType: string;
  image: File | null;
  image2: File | null;
}

const AdminPage = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [editingCard, setEditingCard] = useState<Card | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    title: "",
    price: "",
    cardType: "Autumn",
    image: null,
    image2: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/cards");
        setCards(response.data.cards);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCards();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("cardType", formData.cardType);
    if (formData.image) form.append("image", formData.image);
    if (formData.image2) form.append("image2", formData.image2);

    try {
      if (editingCard) {
        const response = await axios.put(
          `http://localhost:3001/api/cards/${editingCard._id}`,
          form,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setCards((prev) =>
          prev.map((card) =>
            card._id === editingCard._id ? response.data.card : card
          )
        );
      } else {
        const response = await axios.post(
          "http://localhost:3001/api/cards",
          form,
          { headers: { "Content-Type": "multipart/form-data" } }
        );
        setCards((prev) => [...prev, response.data.card]);
      }
      resetForm();
      toggleModal();
    } catch (err: unknown) {
      console.error("Error while saving the card:", err);
      if (axios.isAxiosError(err) && err.response) {
        setError(
          err.response.data.message ||
            "An error occurred while saving the card."
        );
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  const handleEdit = (card: Card) => {
    setEditingCard(card);
    setFormData({
      title: card.title,
      price: card.price.toString(),
      cardType: card.cardType,
      image: null,
      image2: null,
    });
    setModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`http://localhost:3001/api/cards/${id}`);
      setCards((prev) => prev.filter((card) => card._id !== id));
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    }
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      title: "",
      price: "",
      cardType: "Autumn",
      image: null,
      image2: null,
    });
    setEditingCard(null);
  };

  if (loading) return <LoadingIndicator />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4">
      <button
        onClick={toggleModal}
        className="mb-4 px-4 py-2 flex items-center gap-4 bg-[#222222] text-white rounded shadow-md hover:bg-white hover:text-[#222222] transition"
      >
        Add New Card <FiPlus />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-lg font-semibold mb-4">
              {editingCard ? "Edit Card" : "Add Card"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Card Type
                </label>
                <select
                  name="cardType"
                  value={formData.cardType}
                  onChange={handleInputChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                >
                  <option value="Autumn">Autumn</option>
                  <option value="featured">featured</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image 1
                </label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Image 2
                </label>
                <input
                  type="file"
                  name="image2"
                  onChange={handleFileChange}
                  accept="image/*"
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="mr-2 px-4 py-2 bg-white text-[#222222] rounded shadow hover:bg-[#222222] hover:text-white transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#222222] text-white rounded shadow hover:bg-white hover:text-[#222222] transition"
                >
                  {editingCard ? "Update" : "Add"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="min-w-full mt-4 border border-gray-200">
        <thead className="bg-[#222222] text-white">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase border-b border-gray-200">
              Title
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase border-b border-gray-200">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase border-b border-gray-200">
              Card Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase border-b border-gray-200">
              Image 1
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase border-b border-gray-200">
              Image 2
            </th>
            <th className="px-6 py-3 border-b border-gray-200"></th>
          </tr>
        </thead>
        <tbody>
          {cards.map((card) => (
            <tr
              key={card._id}
              className="border-b border-gray-200 hover:bg-gray-50"
            >
              <td className="px-6 py-4">{card.title}</td>
              <td className="px-6 py-4">${card.price.toFixed(2)}</td>
              <td className="px-6 py-4">{card.cardType}</td>
              <td className="px-6 py-4">
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                )}
              </td>
              <td className="px-6 py-4">
                {card.image2 && (
                  <img
                    src={card.image2}
                    alt={card.title}
                    className="h-16 w-16 object-cover rounded"
                  />
                )}
              </td>
              <td className="px-6 py-10 flex items-center gap-4 text-lg justify-center ">
                <button
                  onClick={() => handleEdit(card)}
                  className="text-indigo-600 hover:text-indigo-900"
                >
                  <FaEdit />
                </button>
                <button
                  onClick={() => handleDelete(card._id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <FaDeleteLeft />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminPage;
