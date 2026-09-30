import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Quote } from "lucide-react";
import { BRAND_ASSETS } from "./__root";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Stories & Testimonials — Intentional Impact Consulting" },
      {
        name: "description",
        content:
          "Real words from real people. Hear what changed for clients who came to Barbara Manzo Gilbert wanting more confidence, clarity, direction, and a plan they could actually follow.",
      },
      {
        property: "og:title",
        content: "Client Stories & Testimonials — Intentional Impact Consulting",
      },
      {
        property: "og:description",
        content:
          "Authentic testimonials from people Barbara has helped rebuild confidence, clarity, and direction.",
      },
      { property: "og:image", content: BRAND_ASSETS.barbaraPortrait },
      { name: "twitter:image", content: BRAND_ASSETS.barbaraPortrait },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TestimonialsPage,
});

interface Testimonial {
  id: string;
  wantLabel: string;
  quote: string;
  name: string;
  descriptor: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "janelle",
    wantLabel: "I wanted to trust myself again.",
    quote:
      "She helped me rebuild my confidence when I felt completely lost. I show up for my life differently now.",
    name: "Janelle M.",
    descriptor: "Small business owner",
  },
  {
    id: "marcus",
    wantLabel: "I wanted to stop second-guessing every decision.",
    quote:
      "Her guidance gave me clarity when I needed it most. I finally stopped second-guessing every decision.",
    name: "Marcus T.",
    descriptor: "Entrepreneur",
  },
  {
    id: "aaliyah",
    wantLabel: "I wanted to know where I was going again.",
    quote:
      "I feel like I finally have direction again. She didn't push me, she listened until I could hear myself.",
    name: "Aaliyah R.",
    descriptor: "Mother of three",
  },
  {
    id: "denise-p",
    wantLabel: "I wanted to see myself differently.",
    quote: "Working with her changed how I see myself and my future. That is not an exaggeration.",
    name: "Denise P.",
    descriptor: "Coach & creative",
  },
  {
    id: "brandon",
    wantLabel: "I wanted support without feeling judged.",
    quote:
      "She truly listens and understands. I have never felt judged, just supported and challenged.",
    name: "Brandon S.",
    descriptor: "Founder",
  },
  {
    id: "tasha",
    wantLabel: "I wanted to leave with a plan I could believe in.",
    quote:
      "I came in stuck and ashamed. I left with a plan and the belief that I could actually do this.",
    name: "Tasha L.",
    descriptor: "Career changer",
  },
  {
    id: "crystal",
    wantLabel: "I wanted somewhere I could keep coming back to.",
    quote: "Her live sessions feel like medicine. I plan my week around them.",
    name: "Crystal H.",
    descriptor: "Community member",
  },
  {
    id: "renee",
    wantLabel: "I wanted to feel seen without feeling small.",
    quote:
      "Barbara has a rare ability to make you feel completely seen without ever making you feel small. I left every session lighter.",
    name: "Renee K.",
    descriptor: "Wellness practitioner",
  },
];

const THEMES = [
  {
    label: "Confidence",
    want: "I want to trust myself again.",
  },
  {
    label: "Clarity",
    want: "I want the noise to stop so I can make a decision.",
  },
  {
    label: "Direction",
    want: "I want to know where I'm going again.",
  },
  {
    label: "Support",
    want: "I want someone beside me who can listen without making me feel small.",
  },
  {
    label: "Movement",
    want: "I want to leave knowing what I can do next.",
  },
];

export function TestimonialsPage() {
  return (
    <div className="flex flex-col bg-white text-navy-deep font-sans">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white flex items-center min-h-[500px] lg:min-h-0 lg:h-[470px] lg:max-h-[470px]">
        <img
          src="/assets/images/testimonials-hero.png"
          alt="Barbara Manzo Gilbert in a warm coaching conversation with a client"
          className="absolute inset-0 h-full w-full object-cover object-[75%_center] lg:object-[80%_center]"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.92) 28%, rgba(11,19,43,0.82) 42%, rgba(11,19,43,0.55) 55%, rgba(11,19,43,0.20) 65%, rgba(11,19,43,0.04) 75%, rgba(11,19,43,0) 85%)",
          }}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-16 lg:px-8 lg:py-0">
          <div className="max-w-xl lg:max-w-[50%] space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              Real Words from Real People
            </span>
            <h1 className="font-display text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[45px] text-white">
              Sometimes the clearest proof is hearing what changed for someone else.
            </h1>
            <div className="space-y-3 text-sm sm:text-base text-white/90 leading-relaxed">
              <p>People come to Barbara wanting different things.</p>
              <p className="text-white/75">
                More confidence. A clearer decision. Direction again. A plan they can actually
                follow. A place to feel heard without being judged.
              </p>
              <p>Their words tell that story better than another promise from us could.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Credibility Strip */}
      <section className="bg-white border-b border-navy-deep/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-navy-deep/10">
            <div className="px-2 py-7 sm:px-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
                Lived Experience
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-deep/70">
                Coaching shaped by real rebuilding, not theory alone.
              </p>
            </div>

            <div className="px-2 py-7 sm:px-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
                Real Client Words
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-deep/70">
                Testimonials presented in the clients' own words.
              </p>
            </div>

            <div className="px-2 py-7 sm:px-6">
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
                Three Ways to Work Together
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-deep/70">
                One on One Coaching · The Rebuild Live · Life &amp; Business Consulting
              </p>
            </div>

            <Link
              to="/book"
              className="group px-2 py-7 sm:px-6 transition-colors hover:bg-cream/60"
            >
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
                Start With a Conversation
              </h3>
              <p className="mt-2 flex items-center gap-1.5 text-sm font-semibold leading-relaxed text-navy-deep transition-colors group-hover:text-gold-deep">
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Proof Intro Bridge */}
      <section className="bg-cream py-20 lg:py-24 border-b border-navy-deep/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            What people wanted to feel different
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl">
            Different situations. Familiar wants.
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-navy-deep/80">
            <p>
              One person wanted to trust herself again. Another wanted to stop second-guessing every
              decision. Someone else wanted direction. Someone wanted a plan. Someone simply wanted
              to feel seen without feeling judged.
            </p>
            <p>The details are different. The thing they have in common is movement.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-7 md:grid-cols-2">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.id}
                className="ii-hover-lift flex flex-col rounded-2xl border border-navy-deep/10 bg-cream p-8 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                    {t.wantLabel}
                  </p>
                  <Quote className="h-8 w-8 shrink-0 text-gold/30" />
                </div>

                <blockquote className="mt-5 flex-1 text-base sm:text-lg leading-relaxed text-navy-deep/90 italic font-serif">
                  "{t.quote}"
                </blockquote>

                <figcaption className="mt-6 border-t border-navy-deep/10 pt-4">
                  <div className="font-bold text-navy-deep">{t.name}</div>
                  <div className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-navy-deep/60">
                    {t.descriptor}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Thematic Proof Section */}
      <section className="bg-cream py-20 lg:py-24 border-y border-navy-deep/5">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              The pattern in their words
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl leading-snug">
              The rebuild looks different. The wants underneath it are often familiar.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {THEMES.map((theme) => (
              <div
                key={theme.label}
                className="rounded-2xl border border-navy-deep/10 bg-white p-7 shadow-sm"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold-deep">
                  {theme.label}
                </p>
                <p className="mt-2.5 font-display text-lg font-bold text-navy-deep leading-snug">
                  {theme.want}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-base sm:text-lg leading-relaxed text-navy-deep/75">
              Barbara's work may look different depending on the person and the season. The goal is
              not to manufacture the same outcome for everybody. It is to help the person in front
              of her get clearer about what needs rebuilding and find a next step that fits real
              life.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-deep text-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            What do you want to feel different?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Your story does not have to sound like anyone else's.
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-3 text-base sm:text-lg text-white/80 leading-relaxed">
            <p>
              Maybe you want clarity. Maybe you want your confidence back. Maybe you need somewhere
              honest to say what is not working.
            </p>
            <p>
              Start with the thing you most want to feel different and talk with Barbara about what
              comes next.
            </p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-5">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-xl hover:bg-gold-deep transition-all hover:scale-105"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-white/70 hover:text-gold transition-colors"
            >
              <span>Explore Coaching Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
