"use client";

import { useState } from "react";

const eventTypes = [
  "Parish Event",
  "Catholic Conference",
  "School",
  "Concert",
  "Other",
];

export default function Booking() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/holy40project@gmail.com", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      }
    } catch {
      // Handle silently for now
    }
  };

  return (
    <section id="booking" className="py-20 sm:py-28 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gradient-gold mb-4">
            Book E-Knock
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-gray-400">
            E-Knock is available for Catholic conferences, parish events, school
            visits, and concerts nationwide.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-16 bg-dark-card border border-gold/30 rounded-lg">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-gold"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h3 className="font-heading text-2xl text-gold mb-2">
              Inquiry Sent
            </h3>
            <p className="text-gray-400">
              Thank you! We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-dark-card border border-dark-border rounded-lg p-6 sm:p-10 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-gray-400 tracking-wider uppercase mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-3 text-gray-200 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="organization"
                  className="block text-sm text-gray-400 tracking-wider uppercase mb-2"
                >
                  Organization / Parish / Event
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-3 text-gray-200 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-gray-400 tracking-wider uppercase mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-3 text-gray-200 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm text-gray-400 tracking-wider uppercase mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-3 text-gray-200 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="eventDate"
                  className="block text-sm text-gray-400 tracking-wider uppercase mb-2"
                >
                  Event Date
                </label>
                <input
                  type="date"
                  id="eventDate"
                  name="eventDate"
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-3 text-gray-200 focus:border-gold focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="eventType"
                  className="block text-sm text-gray-400 tracking-wider uppercase mb-2"
                >
                  Event Type
                </label>
                <select
                  id="eventType"
                  name="eventType"
                  className="w-full bg-dark-bg border border-dark-border rounded px-4 py-3 text-gray-200 focus:border-gold focus:outline-none transition-colors"
                >
                  <option value="">Select type...</option>
                  {eventTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm text-gray-400 tracking-wider uppercase mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full bg-dark-bg border border-dark-border rounded px-4 py-3 text-gray-200 focus:border-gold focus:outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full px-8 py-4 bg-gold hover:bg-gold-light text-dark-bg font-semibold text-sm tracking-wider uppercase rounded transition-colors"
            >
              Send Inquiry
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
