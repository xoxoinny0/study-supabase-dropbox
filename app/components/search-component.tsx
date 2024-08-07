"use client";

import { Button, Input } from "@material-tailwind/react";

export default function SearchComponent({
  searchInput,
  setSearchInput,
}: {
  searchInput: string;
  setSearchInput: (searchInput: string) => void;
}) {
  return (
    <Input
      value={searchInput}
      onChange={(e) => setSearchInput(e.target.value)}
      icon={<i className="fa-solid fa-magnifying-glass" />}
      label="Search Images"
    />
  );
}
