import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { styled } from "./ui/stitches.config";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

export const ThemeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const targetTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(targetTheme);
  };

  return (
    <>
    <button onClick={toggleTheme}>
    {resolvedTheme == "light" ?  
      <SunIcon >
      </SunIcon>
      : 
      <MoonIcon >
      </MoonIcon>}
    </button>
    </>
  );
};