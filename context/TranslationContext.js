"use client";

import React, { createContext, useContext } from "react";
import { dataBase } from "../src/app/data/dataBase";
import { useLanguage } from "./LanguageContext";

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const { language } = useLanguage();

  const translate = (id, key) => {
    const project = dataBase.find((p) => p.id === id);
    if (project) {
      const translation = project[key];
      if (translation && typeof translation === "object") {
        return translation[language] || translation.pt;
      }
    }
    return "";
  };

  return (
    <TranslationContext.Provider value={{ translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => useContext(TranslationContext);
