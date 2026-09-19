import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-neutral-200 py-8">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright & Powered By */}
        <div className="text-center md:text-left text-xs text-neutral-500 space-y-1">
          <p>© 2026 Township Thengisa. All rights reserved.</p>
          <p className="text-neutral-400">
            Powered by <span className="font-bold text-neutral-800">PK Transact</span>
          </p>
        </div>

        {/* Center: Get The App */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-900">
            Get The App
          </span>
          <div className="flex items-center gap-2">
            {/* App Store Button */}
            <a
              href="#app-store"
              className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.85c.65-.79 1.1-1.89.98-2.99-.95.04-2.1.64-2.78 1.43-.61.71-1.15 1.84-1.01 2.93 1.07.08 2.16-.58 2.81-1.37z"/>
              </svg>
              <span className="text-xs font-semibold">App Store</span>
            </a>

            {/* Google Play Button */}
            <a
              href="#google-play"
              className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg flex items-center gap-2 transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M3 20.5v-17c0-.55.45-1 1-1 .2 0 .38.06.53.16l14.2 8.5c.34.2.55.57.55.97s-.21.77-.55.97l-14.2 8.5c-.15.1-.33.16-.53.16-.55 0-1-.45-1-1zm2-14.45v11.9l9.95-5.95L5 6.05z" />
              </svg>
              <span className="text-xs font-semibold">Google Play</span>
            </a>
          </div>
        </div>

        {/* Right: Follow Us */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-900">
            Follow Us
          </span>
          <div className="flex items-center gap-2">
            {/* Facebook */}
            <a
              href="#facebook"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.6 13.78 5.6c1.1 0 2.25.2 2.25.2v2.47h-1.27c-1.24 0-1.62.77-1.62 1.56V12h2.77l-.44 3h-2.33v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            {/* X (Twitter) */}
            <a
              href="#x"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* WhatsApp Logo */}
            <a
              href="#whatsapp"
              aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-green-100 hover:text-green-600 text-neutral-800 flex items-center justify-center transition-colors cursor-pointer"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}