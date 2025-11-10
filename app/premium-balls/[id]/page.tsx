import { notFound } from "next/navigation";
import ProductDetailClient from "./AddToCartClient";

interface Props {
  params: { id: string };
}


const balls = [
  {
    id: 1,
    name: "T-20 Red Ball",
    original_Price: 1699,
    discount_Percentage: 70,
    image: "/T20-RedBack.jpg",
    images: [
      "/T20-RedBack.jpg",
      "/front-t20.jpg",
      "/seam-t20.jpg",
      "/t-20 pack.jpg",
    ],
    rating: 5,
    description: "Professional grade red leather ball for test matches",
    features: ["4-piece construction", "Alum tanned leather", "Hand-stitched"],
  },
  {
    id: 2,
    name: "T-20 White Ball",
    original_Price: 1799,
    discount_Percentage: 72,
    image: "/T20-WhiteBack.jpg",
    images: [
      "/T20-WhiteBack.jpg",
      "/T20-WhiteBall.jpg",
      "/T20-WhiteBack.jpg",
      "/T20-WhiteBall.jpg",
    ],
    rating: 5,
    description: "Premium white ball for one-day internationals",
    features: ["Enhanced visibility", "Consistent seam", "Superior grip"],
  },
  {
    id: 3,
    name: "Tournament Red Ball",
    original_Price: 1799,
    discount_Percentage: 68,
    image: "/Tournament-RedFront.png",
    images: [
      "/Tournament-RedFront.png",
      "/Tournament-RedFront.png",
      "/Tournament-RedFront.png",
      "/Tournament-RedFront.png",
    ],
    rating: 4,
    description: "High-performance ball for T20 cricket",
    features: ["Fast delivery", "Durable cover", "Perfect bounce"],
  },
  {
    id: 4,
    name: "Tournament White Ball",
    original_Price: 1899,
    discount_Percentage: 68,
    image: "/Tournament-WhiteBack.jpg",
    images: [
      "/Tournament-WhiteBack.jpg",
      "/Tournament-WhiteBack.jpg",
      "/Tournament-WhiteBack.jpg",
      "/Tournament-WhiteBack.jpg",
    ],
    rating: 4,
    description: "Durable practice ball for training sessions",
    features: ["Cost-effective", "Long-lasting", "Match-like feel"],
  },
  {
    id: 5,
    name: "Practice Red Ball",
    original_Price: 535,
    discount_Percentage: 30,
    image: "/Practice-RedFront.png",
    images: [
      "/Practice-RedFront.png",
      "/Practice-RedFront.png",
      "/Practice-RedFront.png",
      "/Practice-RedFront.png",
    ],
    rating: 4,
    description: "Heavy tennis ball for street cricket",
    features: ["Seam grip", "High bounce", "Weather resistant"],
  },
  {
    id: 6,
    name: "Practice White Ball",
    original_Price: 650,
    discount_Percentage: 30,
    image: "/Practice-WhiteBack.jpg",
    images: [
      "/Practice-WhiteBack.jpg",
      "/Practice-WhiteBack.jpg",
      "/Practice-WhiteBack.jpg",
      "/Practice-WhiteBack.jpg",
    ],
    rating: 4,
    description: "Quality leather ball for regular practice",
    features: ["Genuine leather", "Machine stitched", "Value for money"],
  },
];

export default function ProductPage({ params }: Props) {
  const id = Number(params.id);
  const ball = balls.find((b) => b.id === id);
  if (!ball) return notFound();

  // pass full ball object to a client component for interactivity
  return <ProductDetailClient ball={ball} />;
}
