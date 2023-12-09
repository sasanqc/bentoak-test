"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import useDebounce from "../hooks/useDebounce";

const Searchbar = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const debounedSearchValue = useDebounce(searchValue, 300);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchValue(e.currentTarget.value);
  };
  useEffect(() => {
    const query = debounedSearchValue;
    router.push("/products" + (query ? "?q=" + query : ""));
    return () => {};
  }, [debounedSearchValue, router]);

  return (
    <label htmlFor="serachbar" className="relative  w-fit mx-auto md:mx-0">
      <MagnifyingGlassIcon className="absolute w-6 h-6 top-1 right-2 text-gray-300" />
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
