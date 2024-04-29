import { useState, useEffect } from "react";

/**
 * Custom hook for managing theme toggling.
 * @returns {Object} An object containing the current theme and a function to toggle the theme.
 */
export const useThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  /**
   * Toggles the theme between "light" and "dark".
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    // Check if the user's preferred color theme is dark
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(prefersDarkScheme.matches ? "dark" : "light");

    // Add an event listener to toggle the theme when the preferred color scheme changes
    prefersDarkScheme.addEventListener("change", toggleTheme);

    // Clean up the event listener when the component unmounts
    return () => {
      prefersDarkScheme.removeEventListener("change", toggleTheme);
    };
  }, []);

  useEffect(() => {
    // Update the body class to reflect the current theme
    document.body.classList.remove("dark", "light");
    document.body.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
};
