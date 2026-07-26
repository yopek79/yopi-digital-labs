import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    heroButton: "Get Started",
  },
  de: {
    home: "Start",
    services: "Leistungen",
    about: "Über uns",
    contact: "Kontakt",
    heroButton: "Loslegen",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}