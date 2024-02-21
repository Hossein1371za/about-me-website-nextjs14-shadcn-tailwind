"use client";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div>
      <Button
        variant="outline"
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <SunIcon
          className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 translate-all
            dark:rotate-90 dark:scale-0 text-primary"
        />
        <MoonIcon
          className="absolute h-[1.2rem]  w-[1.2rem] rotate-90 scale-0 translate-all
            dark:rotate-0 dark:scale-100 text-lime-50"
        />
      </Button>
    </div>
  );
};

export default ThemeToggler;
