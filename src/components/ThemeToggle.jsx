import { useState, useEffect } from "react";

export const useThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");
    setTheme(prefersDarkScheme.matches ? "dark" : "light");
    prefersDarkScheme.addEventListener("change", toggleTheme);
    return () => {
      prefersDarkScheme.removeEventListener("change", toggleTheme);
    };
  }, []);

  useEffect(() => {
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
};
