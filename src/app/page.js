import Index from "./pages";
import { LanguageProvider } from "../../context/LanguageContext";
import { TranslationProvider } from "../../context/TranslationContext";

export default function Home() {
  return (
    <LanguageProvider>
      <TranslationProvider>
        <Index />
      </TranslationProvider>
    </LanguageProvider>
  );
}
