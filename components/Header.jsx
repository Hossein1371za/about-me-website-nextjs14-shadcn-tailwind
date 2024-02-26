"use client";
import React, { useState, useEffect } from "react";

// کامپوننت ها
import Logo from "./Logo";
import Nav from "./Nav";
import ThemeToggler from "./ThemeToggler";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHedear] = useState(false);
  const pathName = usePathname();
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHedear(true) : setHedear(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);
  return (
    <header
      className={`sticky top-0 z-30 transition-all ${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } ${
        pathName === "/" && "bg-[#fef9f5]"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex flex-row-reverse justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            <ThemeToggler />
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
