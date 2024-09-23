import AutumnCollectionCards from "@/components/AutumnCollectionCards";
import BigCardSection from "@/components/BigCardSection";
import CustumerReviewSection from "@/components/CustomerReview";
import FashionCards from "@/components/FashionCards";
import FeaturedProductCards from "@/components/FeaturedProductsCards";
import FindShopsSection from "@/components/FindShops";
import FollowUsSection from "@/components/FollowUsonInstagram";
import ImagesSwiper from "@/components/ImageSwiper";
import InformationSection from "@/components/InformationSection";
import PopularCatagories from "@/components/PopularCategories";
import ReadJournalSection from "@/components/ReadJournal";
import StayEmailLayout from "@/components/SubscribeEmail";
import TrendyCollectionCards from "@/components/TrendyCollectionCards";

export default function Home() {
  return (
    <>
      <div>
        <ImagesSwiper />
        <FashionCards />
        <PopularCatagories />
        <TrendyCollectionCards />
        <FindShopsSection />
        <AutumnCollectionCards />
        <BigCardSection />
        <FeaturedProductCards/>
        <CustumerReviewSection />
        <ReadJournalSection />
        <FollowUsSection/>
        <StayEmailLayout
          heading="Subscribe Newsletter"
          subheading="Sign up to our Newsletter and get the discount code."
          buttonText="SUBCRIBE"
        />
        <InformationSection />
      </div>
    </>
  );
}
