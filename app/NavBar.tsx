"use client";
import { Button } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Logo } from "./components";
import { logout } from "./services/user";
const links = [
  { path: "/products", label: "Products" },
  { path: "/charts", label: "Charts" },
];
const NavBar = () => {
  const router = useRouter();
  const handleLogout = async () => {
    try {
      logout();
      toast.success("Logged out successfully");
      setTimeout(() => router.push("/login"), 700);
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const currentPath = usePathname();
  const linkClassName = (path: string) =>
    classNames({
      "transition-colors duration-300 font-semibold": true,
      "text-gray-800": currentPath === path,
      "text-zinc-500": currentPath !== path,
    });

  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-b-gray-300 sticky top-0 bg-white  z-40">
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

      <Button onClick={handleLogout} className="btn">
        {"Logout"}
      </Button>
    </nav>
  );
};

export default NavBar;
