"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import {
  AiOutlineQuestionCircle,
  AiOutlineShareAlt,
  AiOutlineCloudUpload,
  AiOutlineHeart,
  AiOutlineReload,
  AiOutlineCheckCircle,
  AiOutlineClockCircle,
} from "react-icons/ai";
import { RiRulerLine } from "react-icons/ri";
import { CardDetails } from "@/types/types";
import LoadingIndicator from "@/components/Loading";

export default function DetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [cardDetails, setCardDetails] = useState<CardDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string>("");
  const [quantity, setQuantity] = useState<number>(1);
  const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({
    display: "none",
  });

  useEffect(() => {
    const fetchCardDetails = async () => {
      if (!id) return;

      try {
        const response = await fetch(`http://localhost:3001/api/cards/${id}`);
        if (!response.ok) throw new Error("Failed to fetch card details");

        const { card } = await response.json();
        if (!card) throw new Error("Card not found");

        setCardDetails(card);
        setSelectedImage(card.image || card.image2);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, [id]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(prev - 1, 1));
  const handleImageClick = (img: string) => setSelectedImage(img);

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget.getBoundingClientRect();
    const xPercent = ((e.clientX - e.currentTarget.offsetLeft) / width) * 100;
    const yPercent = ((e.clientY - e.currentTarget.offsetTop) / height) * 100;

    setZoomStyle({
      display: "block",
      backgroundPosition: `${xPercent}% ${yPercent}%`,
      top: `${e.clientY - 200}px`,
      left: `${e.clientX - 300}px`,
      backgroundImage: `url(${selectedImage || cardDetails?.image})`,
      backgroundSize: `${width * 4}px ${height * 4}px`,
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({ display: "none" });
  };

  const handleAddToCart = () => {
    const note = (document.querySelector("textarea") as HTMLTextAreaElement)
      ?.value;
    if (!note) {
      alert("Please enter a personalization note.");
      return;
    }
  };

  if (loading)
    return (
      <div className="loader">
        <LoadingIndicator />
      </div>
    );
  if (error)
    return (
      <div>
        <p>Error: {error}</p>
        <button onClick={() => setLoading(true)}>Retry</button>
      </div>
    );
  if (!cardDetails) return null;

  const { title, price, originalPrice, image, image2, description } =
    cardDetails;

  return (
    <div className="container mx-auto px-0 py-8">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex">
        <div className="sticky top-4 self-start h-screen flex items-start w-1/2">
          <div className="flex flex-col space-y-4">
            <picture>
              {" "}
              <img
                src={`http://localhost:3001${image}`}
                alt={title}
                className="cursor-pointer w-[4.375rem] h-[4.375rem] object-cover border"
                onClick={() => handleImageClick(image)}
              />
            </picture>
            <picture>
              {" "}
              <img
                src={`http://localhost:3001${image2}`}
                alt={title}
                className="cursor-pointer w-[4.375rem] h-[4.375rem] object-cover border"
                onClick={() => handleImageClick(image2)}
              />
            </picture>
          </div>
          <div className="relative ml-4 overflow-hidden">
            <picture>
              <img
                src={`http://localhost:3001${selectedImage || image}`}
                alt="Selected large image"
                className="w-[35rem] h-[35rem] transition-opacity duration-500"
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              />
            </picture>
            <div
              className="absolute rounded-full border-2 shadow-2xl overflow-hidden pointer-events-none"
              style={{
                ...zoomStyle,
                width: "9rem",
                height: "9rem",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
              }}
            />
          </div>
        </div>

        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-sans text-gray-900">{title}</h1>
          <div className="flex items-center mt-2">
            <span className="text-2xl font-sans text-gray-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-lg font-sans text-gray-400 line-through ml-3">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
          <p className="text-[0.95rem] text-gray-600 mt-4 leading-normal">
            {description}
          </p>

          <div className="flex items-center mt-5 space-x-6 text-[0.95rem] text-gray-700">
            <button className="flex items-center hover:text-gray-700">
              <RiRulerLine className="w-5 h-5 mr-1" />
              Size Guide
            </button>
            <button className="flex items-center hover:text-gray-700">
              <AiOutlineQuestionCircle className="w-5 h-5 mr-1" />
              Ask a Question
            </button>
            <button className="flex items-center hover:text-gray-700">
              <AiOutlineShareAlt className="w-5 h-5 mr-1" />
              Share
            </button>
          </div>

          <hr className="mt-5" />

          <h3 className="text-[15px] font-medium text-black mt-6">
            Add your personalization
          </h3>
          <p className="text-[15px] text-gray-500 mt-4 mb-2">
            Add your name, note, or upload your customized idea image to
            personalize your item. Custom items cannot be returned or exchanged.
          </p>

          <textarea
            placeholder="Customize note"
            className="w-full border p-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 mb-2"
            style={{ height: "3.5rem", lineHeight: "2rem" }}
          ></textarea>

          <div className="flex items-center mb-4">
            <input
              type="text"
              placeholder="No file chosen"
              className="w-[27rem] border p-2 text-sm focus:outline-none focus:ring-0"
              readOnly
              style={{ height: "3.5rem", lineHeight: "2rem" }}
            />
            <label
              htmlFor="file-upload"
              className="text-sm w-[11rem] bg-gray-200 p-2 hover:bg-gray-300 flex items-center cursor-pointer justify-center border-l-0"
              style={{ height: "3.5rem", lineHeight: "2rem" }}
            >
              <AiOutlineCloudUpload className="w-6 h-6 mr-1" />
              Upload image
            </label>
            <input id="file-upload" type="file" className="hidden" />
          </div>

          <p className="text-sm text-gray-500">
            Hurry Up! Only <strong className="text-red-600">10</strong> left in
            stock!
          </p>

          <div className="flex items-center mt-3 mb-3">
            <div className="h-[5px] w-16 rounded-lg bg-red-500"></div>
            <div className="h-[5px] w-full rounded-lg bg-gray-300"></div>
          </div>

          <div className="flex items-center justify-between mt-7 space-x-4">
            <div className="flex items-center">
              <button
                onClick={handleDecrement}
                className="border px-4 py-2 bg-white hover:bg-gray-300"
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                readOnly
                className="border w-11 text-center px-2 py-2 bg-white hover:bg-gray-300"
              />
              <button
                onClick={handleIncrement}
                className="border px-4 py-2 bg-white hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-black text-white font-semibold py-3 px-8 text-sm hover:bg-gray-900 flex-grow"
            >
              ADD TO CART
            </button>

            <div className="flex space-x-2">
              <button className="border p-2 hover:bg-gray-100">
                <AiOutlineHeart className="w-5 h-5 text-gray-700" />
              </button>
              <button className="border p-2 hover:bg-gray-100">
                <AiOutlineReload className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>

          <div className="mt-5 flex items-center">
            <input type="checkbox" className="mr-2" />
            <label className="text-sm text-gray-600">
              I agree with{" "}
              <span className="text-black cursor-pointer">
                Terms & Conditions
              </span>
            </label>
          </div>

          <div className="mt-5">
            <button className="bg-gray-200 font-semibold text-gray-700 w-full py-3 text-sm">
              BUY IT NOW
            </button>
          </div>

          <div className="mt-5 border-t pt-4 text-[15px] text-gray-700">
            <div className="flex items-start mb-3">
              <AiOutlineCheckCircle className="w-5 h-5 mt-2 mr-2 text-gray-500" />
              <div>
                <p>
                  Pickup available at{" "}
                  <span className="text-black font-medium">Shop location</span>.
                  Usually ready in 24 hours.
                </p>
                <a href="#" className="text-gray-500">
                  View store information
                </a>
              </div>
            </div>

            <div className="flex items-start mb-3">
              <AiOutlineClockCircle className="w-5 h-5 mt-2 mr-2 text-gray-500" />
              <p>
                Estimate delivery times:{" "}
                <span className="font-medium">12-26 days</span> (International),{" "}
                <span className="font-medium">3-6 days</span> (United States).
              </p>
            </div>

            <div className="flex items-start mb-3">
              <AiOutlineReload className="w-5 h-5 mr-2 text-gray-500" />
              <p>
                Return within <span className="font-medium">45 days</span> of
                purchase. Duties & taxes are non-refundable.
              </p>
            </div>

            <hr className="mt-5" />

            <div className="mt-5 text-2sm">
              <p className="mb-3 text-black font-serif">
                SKU: <span className="text-gray-500">Alukas</span>
              </p>
              <p className="mb-3 text-black font-serif">
                Available: <span className="text-gray-500">In stock</span>
              </p>
              <p className="mb-3 text-black font-serif">
                Vendor: <span className="text-gray-500">Bcbgmaxazria</span>
              </p>
              <p className="mb-3 text-black font-serif">
                Collections:
                <span className="text-gray-500">
                  {" "}
                  Accessories, Bracelets, Charms & Dangles, Earrings, Rings,
                  Shop
                </span>
              </p>
            </div>
            <div className="bg-white border border-gray-300 p-4">
              <h3 className="text-[15px] font-semibold mb-4 flex justify-center">
                Guarantee safe checkout
              </h3>
              <div className="flex justify-center">
                <picture>
                  <img
                    src="https://demo-alukas.myshopify.com/cdn/shop/files/trust_badge.png?v=1712024964&width=533"
                    alt="Payment Icons"
                    className="w-[20rem] h-auto"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
