interface SocialLinkProps {
  icon: any;
  label: string;
  href: string;
  isRTL: boolean;
}

export function SocialLink({ icon: Icon, label, href, isRTL }: SocialLinkProps) {
  const isEmail = href.startsWith("mailto:");
  
  return (
    <a
      href={href}
      target={isEmail ? "_self" : "_blank"}
      rel={isEmail ? undefined : "noopener noreferrer"}
      className="group relative w-full max-w-md overflow-hidden"
    >
      <div className="relative flex items-center gap-4 px-6 py-4 bg-black/50 border border-white/20 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:bg-black/70 hover:border-red-500 hover:shadow-[0_0_30px_rgba(255,0,0,0.3)] hover:scale-[1.02]">
        <div className={`flex-shrink-0 ${isRTL ? "order-2" : "order-1"}`}>
          <div className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl group-hover:bg-red-600/20 transition-all duration-300">
            <Icon className="w-6 h-6 text-white group-hover:text-red-500 transition-colors duration-300" />
          </div>
        </div>
        <div className={`flex-1 ${isRTL ? "order-1 text-right" : "order-2 text-left"}`}>
          <span className="text-white font-medium text-lg group-hover:text-red-500 transition-colors duration-300">
            {label}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/0 via-red-600/5 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </a>
  );
}
