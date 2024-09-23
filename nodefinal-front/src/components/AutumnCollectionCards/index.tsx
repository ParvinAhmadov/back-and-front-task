import AutumnCollectionSection from "../AutumnCollection";
import SectionHeader from "../SectionHeaders";

const AutumnCollectionCards = () => {
  return (
    <>
      {" "}
      <SectionHeader
        title="Autumn Collection"
        desc="Collect your loves with our autumn arrivals."
      />
      <section className=" gap-10 flex items-center max-w-[1400px] w-full mx-auto flex-wrap mt-10 mb-16">
        <AutumnCollectionSection
          Autbrand="Alukas"
          Auttitle="Circle of Light Heart Earrings"
          Autprice="$129.00"
          AutimageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1.jpg?v=1709714257&width=533"
          AutimageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/2.jpg?v=1709714257&width=533"
        />
        <AutumnCollectionSection
          Autbrand="Alukas"
          Auttitle="Gold Necklace"
          Autprice="$199.00"
          AutimageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=533"
          AutimageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/3.jpg?v=1715584485&width=533"
        />
        <AutumnCollectionSection
          Autbrand="Alukas"
          Auttitle="Gold Necklace"
          Autprice="$199.00"
          AutimageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=533"
          AutimageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/3.jpg?v=1715584485&width=533"
        />
        <AutumnCollectionSection
          Autbrand="Alukas"
          Auttitle="Gold Necklace"
          Autprice="$199.00"
          AutimageUrl2="https://demo-alukas.myshopify.com/cdn/shop/files/1_82b29341-c859-42e8-a6df-fd1ea2298aa8.jpg?v=1709714541&width=533"
          AutimageUrl1="https://demo-alukas.myshopify.com/cdn/shop/files/3.jpg?v=1715584485&width=533"
        />
      </section>
    </>
  );
};

export default AutumnCollectionCards;
