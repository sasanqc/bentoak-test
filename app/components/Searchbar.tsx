"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = () => {
  const router = useRouter();
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value;
    router.push("/products" + (query ? "?q=" + query : ""));
  };
  return (
    <label htmlFor="serachbar" className="relative  w-fit mx-auto md:mx-0">
      <CiSearch className="absolute w-6 h-6 top-1 right-2 text-gray-300" />
      <input
        type="text"
        placeholder="Search..."
        className="border border-gray-300 px-3 py-1 rounded-md"
        id="serachbar"
        onChange={handleChange}
      />
    </label>
  );
};

export default Searchbar;
