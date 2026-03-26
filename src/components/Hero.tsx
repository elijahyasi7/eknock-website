export default function Hero() {
  return (
    <section
      id="home"
      className="stained-glass-bg relative min-h-screen flex items-center justify-center text-center px-4"
    >
      {/* Gothic arch SVG overlay */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] z-0">
        <svg
          viewBox="0 0 400 600"
          className="w-[300px] sm:w-[400px] h-auto"
          fill="none"
          stroke="#c9a84c"
          strokeWidth="1"
        >
          <path d="M50 600 L50 200 Q50 50 200 50 Q350 50 350 200 L350 600" />
          <path d="M80 600 L80 210 Q80 80 200 80 Q320 80 320 210 L320 600" />
          <path d="M110 600 L110 220 Q110 110 200 110 Q290 110 290 220 L290 600" />
          <circle cx="200" cy="180" r="50" />
          <circle cx="200" cy="180" r="30" />
          <path d="M200 130 L230 180 L200 230 L170 180 Z" />
          <line x1="150" y1="300" x2="250" y2="300" />
          <line x1="150" y1="350" x2="250" y2="350" />
          <line x1="150" y1="400" x2="250" y2="400" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="font-heading text-6xl sm:text-8xl md:text-9xl font-black tracking-wider mb-4">
          <span className="text-gradient-gold">E-KNOCK</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light tracking-[0.3em] uppercase mb-10">
          Where Faith Meets Flow
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://open.spotify.com/artist/3eUAf1Ft9WUdGf5MIrJLz5?si=UauoqQbSTTGD7khirs6OIg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold hover:bg-gold-light text-dark-bg font-semibold text-sm tracking-wider uppercase rounded transition-colors"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            Stream Now
          </a>
          <a
            href="#booking"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-dark-bg font-semibold text-sm tracking-wider uppercase rounded transition-colors"
          >
            Book E-Knock
          </a>
        </div>
        <div className="mt-16 text-gray-500 text-sm tracking-widest uppercase">
          3.1M+ Streams &bull; 5 Albums &bull; Catholic Hip-Hop
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-gold/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
