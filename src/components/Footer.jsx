export default function Footer() {
  return (
    <footer className="bg-white pt-6 pb-6 mt-auto text-neutral-600 w-full border-t border-neutral-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Column: Copyright */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-xs text-neutral-500">
          <p className="mb-1">© 2026 Township Thengisa. All rights reserved.</p>
          <p className="text-[0.75rem] text-neutral-400">
            Powered by <strong className="text-neutral-700">Aether Network</strong>
          </p>
        </div>

        {/* Middle Column: App Downloads */}
        <div className="flex flex-col items-center">
          <span className="text-[0.8rem] font-bold text-neutral-900 uppercase tracking-wider mb-2">
            Get the App
          </span>
          <div className="flex gap-2">
            <a href="#" className="inline-flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-900 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition-colors">
              App Store
            </a>
            <a href="#" className="inline-flex items-center gap-1.5 bg-neutral-800 hover:bg-neutral-900 text-white px-3 py-1.5 rounded-md text-xs font-semibold transition-colors">
              Google Play
            </a>
          </div>
        </div>

        {/* Right Column: Social Links */}
        <div className="flex flex-col items-center md:items-end">
          <span className="text-[0.8rem] font-bold text-neutral-900 uppercase tracking-wider mb-2">
            Follow Us
          </span>
          <div className="flex gap-2">
            <a href="#" className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-neutral-700 text-sm transition-colors">
              f
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-neutral-100 hover:bg-blue-600 hover:text-white flex items-center justify-center text-neutral-700 text-sm transition-colors">
              x
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}