const pressQuotes = [
  {
    outlet: "ChurchPOP",
    date: "February 2026",
    quote:
      "Meet the traditional Catholic hip-hop artist using his talent to evangelize the Catholic faith.",
  },
  {
    outlet: "EWTN Great Britain",
    date: "February 2026",
    quote: "A Syriac Catholic Rapper with a Powerful Testimony.",
  },
  {
    outlet: "LifeSiteNews",
    date: "",
    quote:
      "Catholic musician releases rap album promoting faith and traditional gender roles.",
    link: "https://assets.lifesitenews.com/news/catholic-musician-releases-rap-album-promoting-faith-and-traditional-gender-roles/",
  },
];

export default function Press() {
  return (
    <section id="press" className="py-20 sm:py-28 px-4 bg-dark-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gradient-gold mb-4">
            Press
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pressQuotes.map((item) => {
            const Wrapper = item.link ? "a" : "div";
            const linkProps = item.link
              ? { href: item.link, target: "_blank" as const, rel: "noopener noreferrer" }
              : {};
            return (
              <Wrapper
                key={item.outlet}
                {...linkProps}
                className="card-hover bg-dark-bg border border-dark-border rounded-lg p-8 relative block"
              >
                {/* Decorative quote mark */}
                <div className="absolute top-4 left-6 text-6xl text-gold/10 font-heading leading-none">
                  &ldquo;
                </div>

                <div className="relative z-10">
                  {/* Outlet badge */}
                  <div className="inline-block px-3 py-1 bg-gold/10 border border-gold/30 rounded text-gold text-xs font-semibold tracking-wider uppercase mb-6">
                    {item.outlet}
                  </div>

                  <blockquote className="text-lg sm:text-xl text-gray-200 leading-relaxed italic mb-6">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>

                  {item.date && (
                    <p className="text-gray-500 text-sm tracking-wider">
                      {item.date}
                    </p>
                  )}
                </div>
              </Wrapper>
            );
          })}
        </div>

        <div className="text-center">
          {/* REPLACE: swap href with real press kit PDF link */}
          <a
            href="#"
            className="inline-flex items-center px-8 py-4 border-2 border-gold text-gold hover:bg-gold hover:text-dark-bg font-semibold text-sm tracking-wider uppercase rounded transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Download Press Kit
          </a>
        </div>
      </div>
    </section>
  );
}
