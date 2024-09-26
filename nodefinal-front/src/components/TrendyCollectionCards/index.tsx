import SectionHeader from "../SectionHeaders";
import TrendyCollectionSection from "../TrendyCollection";

const TrendyCollectionCards = () => {
  return (
    <>
      {" "}
      <SectionHeader
        title="Trendy Collection"
        desc="Collect your loves with our newest arrivals."
      />
      <section className=" gap-10 flex items-center max-w-[1400px] w-full mx-auto flex-wrap mt-10 mb-16">
        <TrendyCollectionSection
          brand="Alukas"
          title="Circle of Light Heart Earrings"
          price="$129.00"
          imageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1.jpg?v=1709714257&width=533"
          imageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/2.jpg?v=1709714257&width=533"
        />
        <TrendyCollectionSection
          brand="Alukas"
          title="
        Blue Stripes & Stone Earrings
      "
          price="$599.00"
          imageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=533"
          imageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/3.jpg?v=1715584485&width=533"
        />
        <TrendyCollectionSection
          brand="Alukas"
          title="
        Blue Diamond Swing Ring
      "
          price="$399.00"
          imageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_aa77cbf3-5780-442f-941e-cdbaa0c79566.jpg?v=1709716552&width=533"
          imageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/3_32f1125a-be25-4db3-965d-29e07f6882ea.jpg?v=1709716552&width=533"
        />
        <TrendyCollectionSection
          brand="Alukas"
          title=" 
        Luxury Rose Pendragon Ring
      "
          price="$199.00"
          imageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_8c609d9c-9745-4ef5-a8fe-9eb9eb9f9f49.jpg?v=1709714785&width=533"
          imageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/2_26dd218e-820b-4ef9-8004-c0814492e324.jpg?v=1709714784&width=533"
        />
      </section>
    </>
  );
};

export default TrendyCollectionCards;
