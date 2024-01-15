import { Metadata } from "next";

type ProductType = {
  params: {
    productId: string;
  };
};

export const generateMetadata = async ({
  params,
}: ProductType): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`);
    }, 1000);
  });

  return {
    title: `${title}`,
  };
};

const Product = ({ params }: ProductType) => {
  return <h1>Product {params.productId} </h1>;
};

export default Product;
