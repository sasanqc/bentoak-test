"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import Logo from "./components/Logo";
import { Button } from "@radix-ui/themes";
const links = [
  { path: "/products", label: "Products" },
  { path: "/charts", label: "Charts" },
];
const NavBar = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = () => {
    if (isAuthenticated) {
      localStorage.removeItem("currentUser");
    }
    router.push("/login");
  };
  const currentPath = usePathname();
  const linkClassName = (path: string) =>
    classNames({
      "transition-colors duration-300 font-semibold": true,
      "text-gray-800": currentPath === path,
      "text-zinc-500": currentPath !== path,
    });
  useEffect(() => {
    if (localStorage.getItem("currentUser")) setIsAuthenticated(true);
    return () => {};
  }, []);

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-b-gray-300">
      <div className="flex gap-4 md:gap-10 items-center">
        <Logo />
        <ul className="flex gap-4">
          {links.map((el) => (
            <li className="" key={el.path}>
              <Link href={el.path} className={linkClassName(el.path)}>
                {el.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <button className="btn" onClick={handleLogin}>
        {isAuthenticated ? "Logout" : "Login"}
      </button>
    </nav>
  );
};

export default NavBar;
