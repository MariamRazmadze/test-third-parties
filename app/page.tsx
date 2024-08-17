"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">Next Third Parties</h1>

        <section className="mt-12">
          <h2 className="text-xl font-semibold">Google Tag Manager</h2>
          <button
            className="mt-4 rounded bg-sky-500 px-4 py-2 text-white"
            onClick={() =>
              sendGTMEvent({ event: "buttonClicked", value: "xyz" })
            }
          >
            Send Event
          </button>
        </section>

        <section className="mt-12">
          <h2 className="mb-4 text-xl font-semibold">
            I met you in person, you so different I can&apos;t listen to you for
            a whole minute Took a blood test, ain&apos;t no ho in it Watch your
            motherfin&apos; mouth &apos;fore I go in it
          </h2>
          <YouTubeEmbed height={400} videoid="CanCZktm0TQ" params="" />
        </section>
      </div>
    </section>
  );
}
