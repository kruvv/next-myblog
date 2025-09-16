import React from "react";
import Link from "next/link";
import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  // { label: "API", href: "/api" },
];

const TheHeader = () => {
  return (
    <header className="container">
      <Navigation navLinks={navItems} />
    </header>
  );
};

export { TheHeader };
