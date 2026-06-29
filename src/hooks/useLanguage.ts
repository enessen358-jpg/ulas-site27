import { useState, useEffect } from "react";

export type Language = "en" | "tr" | "de" | "ar" | "fa" | "fr" | "es";

export interface Translation {
  name: string;
  role: string;
  languages: {
    en: string;
    tr: string;
    de: string;
    ar: string;
    fa: string;
    fr: string;
    es: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    name: "ULAS",
    role: "Social Media Specialist",
    languages: {
      en: "English",
      tr: "Turkish",
      de: "German",
      ar: "Arabic",
      fa: "Persian",
      fr: "French",
      es: "Spanish"
    }
  },
  tr: {
    name: "ULAS",
    role: "Sosyal Medya Uzmanı",
    languages: {
      en: "İngilizce",
      tr: "Türkçe",
      de: "Almanca",
      ar: "Arapça",
      fa: "Farsça",
      fr: "Fransızca",
      es: "İspanyolca"
    }
  },
  de: {
    name: "ULAS",
    role: "Social Media Spezialist",
    languages: {
      en: "Englisch",
      tr: "Türkisch",
      de: "Deutsch",
      ar: "Arabisch",
      fa: "Persisch",
      fr: "Französisch",
      es: "Spanisch"
    }
  },
  ar: {
    name: "أولاش",
    role: "أخصائي وسائل التواصل الاجتماعي",
    languages: {
      en: "الإنجليزية",
      tr: "التركية",
      de: "الألمانية",
      ar: "العربية",
      fa: "الفارسية",
      fr: "الفرنسية",
      es: "الإسبانية"
    }
  },
  fa: {
    name: "اولاش",
    role: "متخصص رسانه‌های اجتماعی",
    languages: {
      en: "انگلیسی",
      tr: "ترکی",
      de: "آلمانی",
      ar: "عربی",
      fa: "فارسی",
      fr: "فرانسوی",
      es: "اسپانیایی"
    }
  },
  fr: {
    name: "ULAS",
    role: "Spécialiste des Médias Sociaux",
    languages: {
      en: "Anglais",
      tr: "Turc",
      de: "Allemand",
      ar: "Arabe",
      fa: "Persan",
      fr: "Français",
      es: "Espagnol"
    }
  },
  es: {
    name: "ULAS",
    role: "Especialista en Redes Sociales",
    languages: {
      en: "Inglés",
      tr: "Turco",
      de: "Alemán",
      ar: "Árabe",
      fa: "Persa",
      fr: "Francés",
      es: "Español"
    }
  }
};

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const rtlLanguages: Language[] = ["ar", "fa"];
    setIsRTL(rtlLanguages.includes(language));
    
    document.documentElement.setAttribute("dir", rtlLanguages.includes(language) ? "rtl" : "ltr");
    document.documentElement.setAttribute("lang", language);
  }, [language]);

  return {
    language,
    setLanguage,
    isRTL,
    t: translations[language]
  };
}
