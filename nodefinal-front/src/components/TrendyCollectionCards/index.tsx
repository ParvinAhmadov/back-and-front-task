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
          title="Gold Necklace"
          price="$199.00"
          imageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=533"
          imageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/3.jpg?v=1715584485&width=533"
        />
        <TrendyCollectionSection
          brand="Alukas"
          title="Gold Necklace"
          price="$199.00"
          imageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=533"
          imageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/3.jpg?v=1715584485&width=533"
        />
        <TrendyCollectionSection
          brand="Alukas"
          title="Gold Necklace"
          price="$199.00"
          imageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=533"
          imageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/3.jpg?v=1715584485&width=533"
        />
      </section>
    </>
  );
};

export default TrendyCollectionCards;
