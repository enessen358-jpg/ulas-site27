import { useEffect, useState } from "react";
import { Instagram, Mail } from "lucide-react";
import { useLanguage } from "./hooks/useLanguage";
import { LanguageSwitcher } from "./components/LanguageSwitcher";
import { SocialLink } from "./components/SocialLink";
import { MatrixRain } from "./components/MatrixRain";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
    </svg>
  );
}

function SnapchatIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12.206 2.024c.887 0 2.14.306 3.506 1.926.431.51.772 1.456.772 3.142 0 .212-.012.424-.036.636.764.306 1.33.582 1.713.848.424.3.636.636.636 1.008 0 .424-.318.742-.954.954-.318.106-.742.212-1.272.318-.106.53-.212 1.078-.318 1.626-.106.53.106 1.008.636 1.437.53.424 1.272.742 2.226 1.008.212.053.424.159.636.318.212.159.318.424.318.742 0 .424-.212.742-.636.954-1.008.53-2.226.848-3.506 1.008-.212.318-.53.636-.954.954-.954.742-2.014 1.113-3.142 1.113-1.128 0-2.188-.371-3.142-1.113-.424-.318-.742-.636-.954-.954-1.28-.16-2.498-.478-3.506-1.008-.424-.212-.636-.53-.636-.954 0-.318.106-.583.318-.742.212-.159.424-.265.636-.318.954-.266 1.696-.584 2.226-1.008.53-.429.742-.907.636-1.437-.106-.548-.212-1.096-.318-1.626-.53-.106-.954-.212-1.272-.318-.636-.212-.954-.53-.954-.954 0-.372.212-.708.636-1.008.383-.266.949-.542 1.713-.848-.024-.212-.036-.424-.036-.636 0-1.686.341-2.632.772-3.142 1.366-1.62 2.619-1.926 3.506-1.926z"/>
    </svg>
  );
}

function App() {
  const { language, setLanguage, isRTL, t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const socialLinks: Array<{
    icon: any;
    label: string;
    href: string;
  }> = [
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/ulasx27?utm_source=qr"
    },
    {
      icon: TikTokIcon,
      label: "TikTok",
      href: "https://www.tiktok.com/@ulas27x?_r=1&_t=ZN-97cQLd7YNvP"
    },
    {
      icon: SnapchatIcon,
      label: "Snapchat",
      href: "https://snapchat.com/t/CCtoQVzT"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:ulasxx31@gmail.com"
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <MatrixRain />
      <div className="absolute inset-0 bg-gradient-to-br from-red-950/20 via-black to-black pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1),transparent_50%)] pointer-events-none" />
      
      <div className={`relative z-10 min-h-screen flex flex-col transition-opacity duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className={`container mx-auto px-4 py-6 flex ${isRTL ? "flex-row-reverse" : "flex-row"} justify-between items-center`}>
          <div className="flex-1" />
          <LanguageSwitcher
            currentLanguage={language}
            onLanguageChange={setLanguage}
            languageLabels={t.languages}
            isRTL={isRTL}
          />
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-12 animate-fade-in">
              <h1 className="text-7xl md:text-8xl font-black text-white mb-4 tracking-tight drop-shadow-[0_0_30px_rgba(255,0,0,0.3)]">
                {t.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/80 font-light tracking-wide">
                {t.role}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-red-600 to-transparent mx-auto mt-6" />
            </div>

            <div className="flex flex-col items-center gap-4 animate-slide-up">
              {socialLinks.map((link, index) => (
                <div
                  key={link.label}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                  className="w-full flex justify-center opacity-0 animate-fade-in-delay"
                >
                  <SocialLink
                    icon={link.icon}
                    label={link.label}
                    href={link.href}
                    isRTL={isRTL}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="py-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.4)]">
            <span className="text-2xl font-black text-white">U</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-fade-in-delay {
          animation: fade-in-delay 0.6s ease-out forwards;
        }

        .animate-slide-up {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default App;
