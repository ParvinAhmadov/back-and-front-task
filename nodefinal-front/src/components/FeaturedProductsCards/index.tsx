import FeaturedProductSection from "../FeaturedProductSection";
import SectionHeader from "../SectionHeaders";

const FeaturedProductCards = () => {
  return (
    <>
      {" "}
      <SectionHeader title=" Featured Products" desc="" />
      <div className="flex justify-center items-center gap-4 text-[20px]">
        {" "}
        <div className=" relative  overflow-hidden group">
          <h2 className="z-10 text-[20px] cursor-pointer">New Arrivals</h2>
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </div>
        <div className=" relative  overflow-hidden group">
          <h2 className="z-10 text-[20px] cursor-pointer">Featured</h2>
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </div>
        <div className=" relative  overflow-hidden group">
          <h2 className="z-10 text-[20px] cursor-pointer">Best Seller</h2>
          <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-black group-hover:w-full transition-all duration-500 ease-in-out"></span>
        </div>
      </div>
      <section className=" gap-10 flex items-center max-w-[1400px] w-full mx-auto flex-wrap mt-10 mb-16">
        <FeaturedProductSection
          Feabrand="Alukas"
          Featitle="Circle of Light Heart Earrings"
          Feaprice="$759.00"
          FeaimageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_963e4e7a-56e4-41b9-8689-3986eab18154.jpg?v=1709715652&width=533"
          FeaimageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/2_647d10da-007c-4d06-b375-56bf062e478e.jpg?v=1709715652&width=533"
        />
        <FeaturedProductSection
          Feabrand="Alukas"
          Featitle="Circle of Light Heart Earrings"
          Feaprice="$259.00"
          FeaimageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_995b0988-1953-451f-8acf-0d828143f7fe.jpg?v=1709716223&width=533"
          FeaimageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/2_819542f3-a8d2-4f5f-a291-a7844c34d769.jpg?v=1709716224&width"
        />
        <FeaturedProductSection
          Feabrand="Alukas"
          Featitle="Circle of Light Heart Earrings"
          Feaprice="$129.00"
          FeaimageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1.jpg?v=1709714257&width=533"
          FeaimageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/2.jpg?v=1709714257&width=533"
        />
        <FeaturedProductSection
          Feabrand="Alukas"
          Featitle="Circle of Light Heart Earrings"
          Feaprice="$129.00"
          FeaimageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1.jpg?v=1709714257&width=533"
          FeaimageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/2.jpg?v=1709714257&width=533"
        />
      </section>
    </>
  );
};

export default FeaturedProductCards;
