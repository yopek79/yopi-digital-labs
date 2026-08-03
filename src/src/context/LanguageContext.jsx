import { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

const translations = {
  en: {
    heroButton: "Get Started",
    services: "Services",
    contact: "Contact",
    about: "About",
    home: "Home",
  },

  de: {
    heroButton: "Loslegen",
    services: "Leistungen",
    contact: "Kontakt",
    about: "Über uns",
    home: "Start",
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}