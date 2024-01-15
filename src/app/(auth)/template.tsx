"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Register", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot Password", href: "/forgot-password" },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      <ul className="flex p-5 flex-col gap-5">
        {navLinks.map((link) => {
          const isActive = pathname.startsWith(link.href);
          return (
            <motion.li
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href={link.href}
                key={link.name}
                className={`${
                  isActive ? "font-bold mr-4" : "mr-4"
                } p-5 text-xl`}
              >
                {link.name}
              </Link>
            </motion.li>
          );
        })}
      </ul>
      {children}
    </div>
  );
};

export default AuthLayout;
