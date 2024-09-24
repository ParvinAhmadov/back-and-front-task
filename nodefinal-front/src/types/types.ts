export interface SectionHeaderProps {
  title: string;
  desc: string
}

export interface SubscribeEmailProps {
  heading: string;
  subheading: string;
  buttonText: string;
}


export interface TrendyCollectionSectionProps {
  brand: string;
  title: string;
  price: string;
  imageUrl1: string;
  imageUrl2: string;
}

export interface AutumnCollectionSectionProps {
  Autbrand: string;
  Auttitle: string;
  Autprice: string;
  AutimageUrl1: string;
  AutimageUrl2: string;
}


export interface FeaturedSectionProps {
  Feabrand: string;
  Featitle: string;
  Feaprice: string;
  FeaimageUrl1: string;
  FeaimageUrl2: string;
}

export interface Card {
  _id: string;
  title: string;
  price: number;
  image: string; 
  image2: string; 
  createdAt: string;
  cardType: string;
  __v: number;
}


