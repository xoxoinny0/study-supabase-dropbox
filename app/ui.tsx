"use client";

import Image from "next/image";
import Logo from "./components/logo";
import SearchComponent from "./components/search-component";
import { useState } from "react";
import FileDragDropzone from "./components/file-dragdropzone";

export default function UI() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <main className="w-full p-2 flex flex-col gap-5">
      <Logo />
      <SearchComponent
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <FileDragDropzone />
    </main>
  );
}
