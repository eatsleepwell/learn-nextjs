import Link from "next/link";

const Header = () => {
  return (
    <header className="p-4 bg-blue-200">
      <h1 className=" text-slate-800">Header</h1>
      <Link href="/">Home</Link>
    </header>
  );
};

export default Header;
