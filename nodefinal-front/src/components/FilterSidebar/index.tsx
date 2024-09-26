import { FilterSidebarProps } from "@/types/types";
import React, { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { PlusIcon, MinusIcon } from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  setFilters,
  fetchCards: externalFetchCards,
}) => {
  const [displayedPrice, setDisplayedPrice] = useState<string>(
    filters.price || "0"
  );

  useEffect(() => {
    setDisplayedPrice(filters.price || "0");
  }, [filters.price]);

  const fetchFilteredCards = async (filters: {
    price?: string;
    size?: string;
    color: string[];
    material?: string;
  }) => {
    const params = new URLSearchParams();

    if (filters.price) params.append("price", filters.price);
    if (filters.size) params.append("size", filters.size);
    if (filters.color.length > 0)
      params.append("color", filters.color.join(","));
    if (filters.material) params.append("material", filters.material);

    try {
      const response = await fetch(
        `http://localhost:3001/api/shopcards?${params.toString()}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch cards:", error);
      return [];
    }
  };

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };

    setFilters(updatedFilters);

    if (name === "price") {
      setDisplayedPrice(value);
    }

    const fetchedCards = await fetchFilteredCards(updatedFilters);
    externalFetchCards(fetchedCards);
  };

  const handleColorChange = async (color: string, checked: boolean) => {
    const newColors = checked
      ? [...filters.color, color]
      : filters.color.filter((c) => c !== color);

    const updatedFilters = { ...filters, color: newColors };

    setFilters(updatedFilters);
    const fetchedCards = await fetchFilteredCards(updatedFilters);
    externalFetchCards(fetchedCards);
  };

  return (
    <div className="w-1/4 p-4 h-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full py-2 text-left text-gray-500">
              <span>Color</span>
              <span
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                {open ? (
                  <MinusIcon className="h-5 w-5" />
                ) : (
                  <PlusIcon className="h-5 w-5" />
                )}
              </span>
            </Disclosure.Button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden "
                >
                  <div className="flex flex-wrap space-x-2">
                    {["White", "Black", "Blue", "Red", "Green", "Purple"].map(
                      (color) => (
                        <label key={color} className="flex items-center">
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={filters.color.includes(color)}
                            onChange={(e) =>
                              handleColorChange(color, e.target.checked)
                            }
                          />
                          <span
                            className={`block w-6 h-6 rounded-full cursor-pointer ${
                              color === "White" ? "border" : ""
                            }`}
                            style={{ backgroundColor: color }}
                          ></span>
                        </label>
                      )
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full py-2 text-left text-gray-500">
              <span>Size</span>
              <span
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                {open ? (
                  <MinusIcon className="h-5 w-5" />
                ) : (
                  <PlusIcon className="h-5 w-5" />
                )}
              </span>
            </Disclosure.Button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <select
                    name="size"
                    value={filters.size || ""}
                    onChange={handleChange}
                    className="w-full mt-2 border rounded"
                  >
                    <option value="">Select Size</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="16">16</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full py-2 text-left text-gray-500">
              <span>Material</span>
              <span
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                {open ? (
                  <MinusIcon className="h-5 w-5" />
                ) : (
                  <PlusIcon className="h-5 w-5" />
                )}
              </span>
            </Disclosure.Button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden "
                >
                  <select
                    name="material"
                    value={filters.material || ""}
                    onChange={handleChange}
                    className="w-full mt-2 border rounded"
                  >
                    <option value="">Select Material</option>
                    <option value="Bronze">Bronze</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Silk">Silk</option>
                    <option value="Polyester">Polyester</option>
                  </select>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>

      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex justify-between w-full py-2 text-left text-gray-500">
              <span>Price Range</span>
              <span
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              >
                {open ? (
                  <MinusIcon className="h-5 w-5" />
                ) : (
                  <PlusIcon className="h-5 w-5" />
                )}
              </span>
            </Disclosure.Button>
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col border-b pb-4">
                    <input
                      type="range"
                      min="0"
                      max="1150"
                      step="10"
                      value={displayedPrice}
                      onChange={handleChange}
                      name="price"
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2">
                      <span>${displayedPrice}</span>
                      <span>$1150</span>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </Disclosure>
      <div className="mt-10">
        <picture>
          {" "}
          <img
            src="https://demo-alukas.myshopify.com/cdn/shop/files/banner-shop.jpg?v=1711798181"
            alt=""
          />
        </picture>
      </div>
    </div>
  );
};

export default FilterSidebar;
