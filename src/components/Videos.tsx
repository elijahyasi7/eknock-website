export default function Videos() {
  // REPLACE: paste E-Knock YouTube video IDs below
  const videoIds = [
    "VIDEO_ID_1",
    "VIDEO_ID_2",
    "VIDEO_ID_3",
    "VIDEO_ID_4",
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
      </div>
    </section>
  );
}
