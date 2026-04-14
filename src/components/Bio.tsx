export default function Bio() {
  return (
    <section id="bio" className="py-20 sm:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gradient-gold mb-4">
            The Story
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Artist photo */}
          <div className="flex justify-center md:justify-end">
            <div className="w-72 h-72 sm:w-80 sm:h-80 border-2 border-gold/50 overflow-hidden rounded-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://yt3.googleusercontent.com/BOtpJUDjhN3Gu-6cutLqpNakZMk1ijEsRLKERSyXl6hGeWbx1XUarHPQSuoIJkxyV1EMvtQy=s900-c-k-c0x00ffffff-no-rj"
                alt="E-Knock — Fawaz Yasi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio text */}
          <div className="space-y-5 text-gray-300 leading-relaxed">
            <p>
              <span className="text-gold font-heading text-lg">Fawaz Yasi</span>,
              known to the world as{" "}
              <span className="text-gold font-semibold">E-Knock</span>, is a
              Syriac Catholic hip-hop artist whose music bridges ancient faith
              and modern sound. The stage name carries a double meaning:{" "}
              <em className="text-gray-200">Eternity Knocks</em> — a reminder
              that every beat, every bar, is an invitation to something eternal —
              and a reference to the prophet{" "}
              <em className="text-gray-200">Enoch</em>, who walked with God and
              was taken up to heaven.
            </p>
            <p>
              Born in Northern Iraq, Fawaz emigrated to the United States at the
              age of seven, growing up in San Diego, California. Rooted in the
              Syriac Catholic tradition and devoted to the Traditional Latin
              Mass, he carries with him the ancient liturgical heritage of
              Mesopotamian Christianity — a living link to one of the oldest
              Christian communities on earth.
            </p>
            <p>
              Before stepping into the recording booth, E-Knock served as a
              Director of Youth Ministry in California, shaping the faith of
              young Catholics. That pastoral heart still beats at the center of
              his music. Since releasing his debut album{" "}
              <span className="text-gold italic">Traditionis</span> in April
              2022, he has dropped five albums, amassed over{" "}
              <span className="text-gold font-semibold">3.1 million streams</span>,
              and built a following of{" "}
              <span className="text-gold font-semibold">27,000+</span> on
              Instagram. A{" "}
              <span className="text-gold font-semibold">
                top 10 charting artist in the Christian/Gospel genre
              </span>
              , E-Knock is proving that the ancient faith has a voice in modern
              music.
            </p>
            <p>
              His latest album,{" "}
              <span className="text-gold italic">Rapologia</span>, is a
              Catholic apologetics project — defending the faith one verse at a
              time. His pro-life single{" "}
              <span className="text-gold italic">&ldquo;Goodbye&rdquo;</span>{" "}
              (February 2026) continues his mission of proclaiming truth through
              art. Featured on{" "}
              <span className="text-gray-200">ChurchPOP</span> and{" "}
              <span className="text-gray-200">EWTN Great Britain</span>,
              E-Knock is proving that Catholic hip-hop is not a niche — it is a
              movement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
