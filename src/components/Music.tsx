const albums = [
  {
    title: "Traditionis",
    year: "2022",
    description: "The debut. Where it all began.",
    cover: "https://i.scdn.co/image/ab67616d0000b27302988b37535e8f5783591b09",
  },
  {
    title: "Deus Vult",
    year: "2022",
    description: "God wills it. A battle cry in bars.",
    cover: "https://i.scdn.co/image/ab67616d0000b2739e7238c5e8aec8dafb90234c",
  },
  {
    title: "Kanisa",
    year: "2023",
    description: "The Church — in Syriac and in sound.",
    cover: "https://i.scdn.co/image/ab67616d0000b273e3b4531531932a19b061337a",
  },
  {
    title: "Book of E-Knock",
    year: "2025",
    description: "The testament of a Catholic rapper.",
    cover: "https://i.scdn.co/image/ab67616d00001e027e9ff50586ac37b1f7255d67",
  },
  {
    title: "Rapologia",
    year: "2025",
    description: "Catholic apologetics, verse by verse.",
    cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/48/28/2a/48282a35-01c4-2d97-8903-5a0e9d467c7d/artwork.jpg/300x300bb.webp",
  },
];

export default function Music() {
  return (
    <section id="music" className="py-20 sm:py-28 px-4 bg-dark-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gradient-gold mb-4">
            Music
          </h2>
          <div className="section-divider" />
        </div>

        {/* Album grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
          {albums.map((album) => (
            <div
              key={album.title}
              className="card-hover bg-dark-bg border border-dark-border rounded-lg overflow-hidden group"
            >
              {/* Album art */}
              <div className="aspect-square bg-gradient-to-br from-burgundy/30 via-dark-bg to-cobalt/30 flex items-center justify-center relative overflow-hidden">
                {album.cover ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={album.cover}
                    alt={`${album.title} album cover`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-center">
                    <svg
                      className="w-12 h-12 mx-auto mb-2 text-gold/40 group-hover:text-gold/70 transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                      />
                    </svg>
                    <p className="text-xs text-gray-500 tracking-wider uppercase">
                      Album Art
                    </p>
                  </div>
                )}
                <div className="absolute top-3 right-3 text-xs text-gold/60 font-heading">
                  {album.year}
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-heading text-lg text-gold font-semibold mb-1">
                  {album.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {album.description}
                </p>
                {/* REPLACE: swap href with real streaming link */}
                <a
                  href="#"
                  className="inline-flex items-center text-sm text-gold hover:text-gold-light transition-colors tracking-wider uppercase"
                >
                  Stream
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Streaming badges */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://open.spotify.com/artist/3eUAf1Ft9WUdGf5MIrJLz5?si=UauoqQbSTTGD7khirs6OIg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#1DB954]/10 border border-[#1DB954]/30 rounded-full hover:bg-[#1DB954]/20 transition-colors"
          >
            <svg className="w-6 h-6 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
            </svg>
            <span className="text-[#1DB954] font-medium text-sm tracking-wider">
              Listen on Spotify
            </span>
          </a>

          {/* REPLACE: swap href with real Apple Music artist URL */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 bg-[#fc3c44]/10 border border-[#fc3c44]/30 rounded-full hover:bg-[#fc3c44]/20 transition-colors"
          >
            <svg className="w-6 h-6 text-[#fc3c44]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.452-2.865 2.78-.192.448-.292.925-.363 1.408-.056.392-.088.785-.1 1.18 0 .032-.007.062-.01.093v12.223c.01.14.017.283.027.424.05.815.154 1.624.497 2.373.65 1.42 1.738 2.353 3.234 2.801.42.127.856.187 1.293.228.555.053 1.11.06 1.667.06h11.03c.525 0 1.048-.034 1.57-.1.823-.104 1.594-.35 2.26-.84a5.032 5.032 0 001.39-1.628c.263-.478.437-.991.54-1.528.104-.54.157-1.085.174-1.633.003-.09.01-.18.01-.27V6.124zm-6.71 9.046c-.174.52-.542.855-1.05 1.055-.408.16-.837.21-1.27.21-.497 0-.99-.06-1.478-.168-.913-.2-1.78-.546-2.587-1.04a.196.196 0 01-.09-.26c.063-.14.127-.28.185-.42.07-.17.18-.19.336-.1a8.03 8.03 0 002.084.87c.466.114.937.17 1.415.12.28-.03.55-.1.757-.31.16-.16.21-.356.16-.57-.05-.22-.194-.353-.39-.44-.296-.128-.608-.205-.916-.295-.478-.14-.96-.27-1.42-.46-.665-.27-1.19-.684-1.395-1.41-.2-.7-.114-1.368.328-1.974.307-.42.732-.68 1.222-.82.657-.19 1.328-.196 2.002-.1.67.097 1.313.29 1.92.598.128.065.18.15.122.296-.07.173-.13.35-.2.523-.07.19-.16.22-.345.128a6.092 6.092 0 00-1.57-.535c-.413-.078-.83-.103-1.243-.02-.26.05-.5.15-.665.375-.104.14-.133.307-.084.478.05.17.168.28.323.356.247.12.513.186.78.263.546.157 1.1.296 1.62.525.69.306 1.19.767 1.345 1.53.14.68.077 1.34-.225 1.96z" />
            </svg>
            <span className="text-[#fc3c44] font-medium text-sm tracking-wider">
              Listen on Apple Music
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
