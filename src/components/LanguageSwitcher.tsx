import { Languages } from "lucide-react";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Language } from "../hooks/useLanguage";

interface LanguageSwitcherProps {
  currentLanguage: Language;
  onLanguageChange: (lang: Language) => void;
  languageLabels: Record<Language, string>;
  isRTL: boolean;
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange, languageLabels, isRTL }: LanguageSwitcherProps) {
  const languages: Language[] = ["en", "tr", "de", "ar", "fa", "fr", "es"];

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 bg-black/50 border-white/20 text-white hover:bg-red-600/20 hover:border-red-500 transition-all duration-300"
        >
          <Languages className="w-4 h-4" />
          <span className="hidden sm:inline">{languageLabels[currentLanguage]}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 bg-black/95 border-white/20 backdrop-blur-xl" align={isRTL ? "start" : "end"}>
        <div className="grid gap-2">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => onLanguageChange(lang)}
              className={`px-3 py-2 text-sm rounded-md text-left transition-all duration-200 ${
                currentLanguage === lang
                  ? "bg-red-600 text-white"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {languageLabels[lang]}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
