export default function Videos() {
  // To add more videos: go to https://www.youtube.com/@e-knock6826/videos
  // Click a video, copy the ?v= parameter from the URL (11-char code)
  const videoIds = [
    "bhaLpDVlgDM",
    "REPLACE_ID_2", // REPLACE: paste second video ID here
    "REPLACE_ID_3", // REPLACE: paste third video ID here
    "REPLACE_ID_4", // REPLACE: paste fourth video ID here
  ];

  return (
    <section id="videos" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gradient-gold mb-4">
            Watch
          </h2>
          <p className="text-gray-400 text-lg">
            Music videos, live performances, and interviews.
          </p>
          <div className="section-divider mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videoIds.map((id, index) => (
            <div
              key={index}
              className="aspect-video bg-dark-card border border-dark-border rounded-lg overflow-hidden"
            >
              {/* REPLACE: paste E-Knock YouTube video ID here */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${id}`}
                title={`E-Knock Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://www.youtube.com/@e-knock6826"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-dark-border rounded-full text-gray-400 hover:text-gold hover:border-gold/30 transition-colors text-sm tracking-wider"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            View All on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
