import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { BRAND_ASSETS } from "./__root";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Coaching & Consulting Services — Intentional Impact Consulting" },
      {
        name: "description",
        content:
          "Start with what you want to feel different. One on One Coaching, The Rebuild Live, and Life & Business Consulting with Barbara Manzo Gilbert.",
      },
      {
        property: "og:title",
        content: "Find the Kind of Support That Helps You Move Again",
      },
      {
        property: "og:description",
        content:
          "Three ways to get support with Barbara Manzo Gilbert. Start with the thing you most want to change.",
      },
      { property: "og:image", content: BRAND_ASSETS.barbaraPortrait },
      { name: "twitter:image", content: BRAND_ASSETS.barbaraPortrait },
    ],
  }),
  component: ServicesPage,
});

const OFFERINGS = [
  {
    id: "coaching-1on1",
    label: "One on One Coaching",
    wantHeadline: "I want a private place to sort this out.",
    body: [
      "Sometimes you need space to say the whole thing out loud without having to simplify it for somebody else.",
      "One on One Coaching gives you a private place to look honestly at what is happening, what keeps pulling you back into the same pattern, and what you actually want to feel different.",
      "Barbara helps you separate the real issue from the noise, challenge what needs challenging, and decide what your next workable step looks like.",
    ],
    fitSubhead: "This may fit when you want to:",
    bullets: [
      "know where you're going again",
      "trust your own decisions more",
      "work through a setback without staying defined by it",
      "stop circling the same problem",
      "build accountability around the next step you already know matters",
    ],
    delivery: [
      "Personalized guidance for your specific season",
      "Honest accountability without judgment",
      "Tools you keep long after our sessions end",
      "Direct email and messaging support between sessions",
    ],
    cta: "Book a Free Consultation",
    ctaTo: "/book" as const,
    image: "/assets/images/service-coaching-1on1.jpg",
  },
  {
    id: "the-rebuild-live",
    label: "The Rebuild Live",
    identifier: "Live Facebook Coaching",
    wantHeadline: "I want support without feeling like I'm doing this alone.",
    body: [
      "Sometimes you do not need another private conversation.",
      "You need to hear that somebody else is wrestling with the same uncertainty, ask the question that has been sitting in your head, or listen while someone else's situation makes something click in your own.",
      "The Rebuild Live brings Barbara's coaching into the Facebook community in real time. Come to ask, listen, learn, and keep moving alongside other people working through their own rebuilds.",
    ],
    fitSubhead: "This may fit when you want to:",
    bullets: [
      "stay connected to coaching between bigger decisions",
      "ask questions in real time",
      "learn from situations that sound familiar",
      "feel less alone in the season you're in",
      "keep moving without needing everything figured out first",
    ],
    delivery: [
      "Live, unscripted coaching sessions",
      "Ask your questions in real time",
      "Community of people on the same journey",
      "Access to replay archives and mini-trainings",
    ],
    cta: "Watch The Rebuild Live",
    ctaHref: BRAND_ASSETS.facebookUrl,
    image: "/assets/images/service-live.jpg",
  },
  {
    id: "life-business-consulting",
    label: "Life & Business Consulting",
    wantHeadline: "I want my life and business pulling in the same direction again.",
    body: [
      "Business problems rarely stay neatly inside the business.",
      "A pricing decision can become a confidence problem. A growth opportunity can collide with the life you actually want to live. A business that looks fine from the outside can still leave you exhausted, scattered, or second-guessing every move.",
      "This work looks at the whole picture. Barbara helps you sort through the strategy and the person carrying it so the next business decision makes sense in the life you're actually trying to build.",
    ],
    fitSubhead: "This may fit when you want to:",
    bullets: [
      "stop second-guessing important business decisions",
      "decide what deserves your attention now",
      "make a pivot without throwing everything away",
      "get clearer about offers, pricing, or client messaging",
      "build something you can realistically sustain",
    ],
    delivery: [
      "Business strategy grounded in real life",
      "Decision frameworks you can use daily",
      "Support through pivots and rebuilds",
      "Offer, pricing, and client messaging clarity",
    ],
    cta: "Book a Free Consultation",
    ctaTo: "/book" as const,
    image: "/assets/images/service-consulting.jpg",
  },
];

const DECISION_CARDS = [
  {
    label: "One on One Coaching",
    headline: "I want somewhere private to finally sort this out.",
    body: "Choose this when the issue feels personal, layered, or hard to sort through on your own and you want Barbara's focused attention.",
  },
  {
    label: "The Rebuild Live",
    headline: "I want support I can stay connected to.",
    body: "Choose this when live coaching, community, other people's questions, and regular contact with Barbara's thinking would help you keep moving.",
  },
  {
    label: "Life & Business Consulting",
    headline: "I want the whole picture to make sense again.",
    body: "Choose this when business decisions and real-life priorities have become too connected to treat separately.",
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Tell the truth about where you are.",
    text: "Bring the part that feels stuck, confusing, frustrating, or harder than you think it should be. You do not need to organize it perfectly before the conversation.",
  },
  {
    number: "02",
    title: "Figure out what actually needs attention.",
    text: "Barbara helps you separate the real issue from everything surrounding it. Sometimes the thing that feels like the problem is not the thing keeping you stuck.",
  },
  {
    number: "03",
    title: "Choose a next step that can survive real life.",
    text: "The goal is not to leave with a giant plan you will never use. Leave knowing what deserves your attention next and what moving forward can realistically look like from here.",
  },
];

function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white flex items-center min-h-[500px] lg:min-h-0 lg:h-[470px] lg:max-h-[470px]">
        <img
          src="/assets/images/services-hero.png"
          alt="Barbara Manzo Gilbert in a coaching consultation"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-[82%_center]"
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
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Start with what you want to feel different
            </p>
            <h1 className="font-display text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-[45px] text-white">
              Find the kind of support{" "}
              <span className="text-gold italic font-serif">that helps you move again.</span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-white/90 leading-relaxed">
              If you want to trust yourself again, quiet the noise, or get life and business pulling
              in the same direction, Barbara helps you get clear on what comes next.
            </p>
          </div>
        </div>
      </section>

      {/* Services Introduction */}
      <section className="bg-white py-20 lg:py-24 border-b border-navy-deep/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            Three ways to get support
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
            You don't have to know which kind of support fits yet.
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-navy-deep/80">
            <p>Start with the thing you most want to change.</p>
            <p>
              The right format depends on whether you need a private place to work something
              through, ongoing live support, or deeper help where life and business are tangled
              together.
            </p>
          </div>
        </div>
      </section>

      {/* Offerings */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-6xl space-y-16 px-6 lg:px-8">
          {OFFERINGS.map((offering, index) => {
            const isEven = index % 2 === 0;
            return (
              <article
                key={offering.id}
                className={`grid gap-12 overflow-hidden rounded-3xl border border-navy-deep/10 p-8 sm:p-12 md:grid-cols-5 ${
                  isEven ? "bg-white" : "bg-cream"
                }`}
              >
                <div className="md:col-span-2 space-y-4">
                  <div className="aspect-[4/3] overflow-hidden rounded-2xl shadow-md border border-navy-deep/10">
                    <img
                      src={offering.image}
                      alt={offering.label}
                      loading="lazy"
                      className="h-full w-full object-cover ii-img-zoom"
                    />
                  </div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-navy-deep/45">
                    {offering.label}
                    {offering.identifier && (
                      <span className="block text-gold-deep/70 mt-1">{offering.identifier}</span>
                    )}
                  </p>
                </div>

                <div className="md:col-span-3 flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-deep leading-snug">
                      {offering.wantHeadline}
                    </h2>

                    <div className="space-y-4 text-base sm:text-lg leading-relaxed text-navy-deep/80">
                      {offering.body.map((para, pIdx) => (
                        <p key={pIdx}>{para}</p>
                      ))}
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gold-deep uppercase tracking-wider">
                        {offering.fitSubhead}
                      </p>
                      <ul className="mt-3 space-y-2">
                        {offering.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-3 text-sm sm:text-base text-navy-deep/85"
                          >
                            <Check className="mt-1 h-5 w-5 flex-none text-gold-deep" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 border-t border-navy-deep/10">
                      <p className="pt-4 text-xs font-bold uppercase tracking-[0.18em] text-navy-deep/50">
                        What's included
                      </p>
                      <ul className="mt-3 space-y-2">
                        {offering.delivery.map((feat, fIdx) => (
                          <li
                            key={fIdx}
                            className="flex items-start gap-3 text-sm text-navy-deep/75"
                          >
                            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-gold/60" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-2">
                    {offering.ctaTo ? (
                      <Link
                        to={offering.ctaTo}
                        className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy-deep shadow-md hover:bg-gold-deep transition-all"
                      >
                        <span>{offering.cta}</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : (
                      <a
                        href={offering.ctaHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-navy-deep/20 px-7 py-3.5 text-sm font-bold text-navy-deep hover:border-gold hover:bg-gold/10 transition-all"
                      >
                        <span>{offering.cta}</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Decision-Support Section */}
      <section className="bg-white py-24 lg:py-32 border-b border-navy-deep/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              Which one sounds most like where you are?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
              Start with what you want help carrying.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {DECISION_CARDS.map((card) => (
              <div
                key={card.label}
                className="ii-hover-lift flex flex-col rounded-2xl border border-navy-deep/10 bg-cream p-8 shadow-sm"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                  {card.label}
                </p>
                <h3 className="mt-3 font-display text-xl font-bold text-navy-deep leading-snug">
                  {card.headline}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-navy-deep/75 flex-1">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-cream py-24 border-t border-navy-deep/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              What the first steps should feel like
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
              You should leave the conversation clearer than you entered it.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="ii-hover-lift rounded-2xl bg-white p-8 border border-navy-deep/10 shadow-xs flex flex-col"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/20 font-display text-xl font-bold text-gold-deep">
                  {step.number}
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-navy-deep leading-snug">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-deep/75 flex-1">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebuilder Philosophy Bridge */}
      <section className="bg-white py-24 lg:py-28 border-b border-navy-deep/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            The Rebuilder Approach
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
            You are allowed to need a different kind of support in different seasons.
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-navy-deep/80">
            <p>A Rebuilder is not somebody who has one perfect plan and follows it forever.</p>
            <p>Sometimes the work is confidence. Sometimes it is business.</p>
            <p>
              Sometimes it is getting through a difficult season without losing yourself inside it.
            </p>
            <p className="pt-2 text-navy-deep font-medium">
              The question is not whether you chose the "right" category.
            </p>
            <p className="font-display text-xl sm:text-2xl text-navy-deep font-bold">
              What do you most want to feel different now?
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-deep text-white py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            You do not have to choose the service before we talk.
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Start with the thing you most want to feel different.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-white/80 leading-relaxed">
            Tell Barbara where you are, what keeps pulling at your attention, and what you wish felt
            clearer, steadier, or more manageable. The first conversation can help determine which
            kind of support makes the most sense from there.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-xl hover:bg-gold-deep transition-all hover:scale-105"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
