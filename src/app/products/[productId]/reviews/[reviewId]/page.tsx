"use client";

import { notFound } from "next/navigation";

type Review = {
  reviewId: string;
  productId: string;
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

const Review = ({ params }: { params: Review }) => {
  // const random = getRandomInt(2);

  // if (random === 1) {
  //   throw new Error("Error loading reviews");
  // }

  parseInt(params.reviewId) > 1000 && notFound();

  return (
    <h1>
      Review {params.reviewId} for Product {params.productId}
    </h1>
  );
};

export default Review;
