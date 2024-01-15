import Link from "next/link";

const page = () => {
  return (
    <>
      <h1 className="p-8 text-4xl">Home Page</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
      <Link href="/about">About</Link>
    </>
  );
};

export default page;
