import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Users } from "lucide-react";
import { BRAND_ASSETS } from "./__root";
import { HomeHeroDesktop } from "../components/heroes/home/home-hero-desktop";
import { HomeHeroMobile } from "../components/heroes/home/home-hero-mobile";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intentional Impact Consulting — Get Clear on What Comes Next" },
      {
        name: "description",
        content:
          "When life, confidence, or business no longer feels like it fits, Barbara Manzo Gilbert helps you cut through the noise, see what needs rebuilding, and find a next step that works in real life.",
      },
      {
        property: "og:title",
        content: "Intentional Impact Consulting — Get Clear on What Comes Next",
      },
      {
        property: "og:description",
        content:
          "Real coaching for real life. Get clear on what comes next and trust yourself enough to move.",
      },
      { property: "og:image", content: BRAND_ASSETS.barbaraPortrait },
      { name: "twitter:image", content: BRAND_ASSETS.barbaraPortrait },
    ],
  }),
  component: IndexPage,
});

const PILLARS = [
  {
    label: "Life Direction",
    headline: "I want to know where I'm going again.",
    description:
      "When the next chapter feels blurry, Barbara helps you sort through what's changed, what still matters, and what direction feels honest now.",
    image: "/assets/images/pillar-direction.jpg",
  },
  {
    label: "Business Growth",
    headline: "I want to stop second-guessing every business decision.",
    description:
      "More ideas usually won't fix a business that feels scattered. Get clearer about what is working, what is draining your attention, and where your next move actually belongs.",
    image: "/assets/images/pillar-growth.jpg",
  },
  {
    label: "Confidence Rebuilding",
    headline: "I want to trust myself again.",
    description:
      "Confidence can disappear after enough setbacks, wrong turns, or promises you stopped believing you could keep. Rebuilding it starts with decisions you can stand behind and evidence that you can rely on yourself again.",
    image: "/assets/images/pillar-confidence.jpg",
  },
  {
    label: "Overcoming Setbacks",
    headline: "I want to feel like this isn't the end of my story.",
    description:
      "A loss, injury, failure, or hard season can change what you thought life would look like. You still have experience, judgment, and choices. The next version starts from there.",
    image: "/assets/images/pillar-setbacks.jpg",
  },
  {
    label: "Clarity & Decisions",
    headline: "I want the noise to stop so I can finally move.",
    description:
      "When every thought feels urgent, even simple decisions get heavy. Barbara helps you separate the real issue from the surrounding noise so the next step becomes easier to see.",
    image: "/assets/images/pillar-clarity.jpg",
  },
];

const SERVICES = [
  {
    title: "One on One Coaching",
    wantLine: "I want a private place to sort this out.",
    description:
      "Focused conversations with Barbara for the part of life, confidence, work, or direction that feels hardest to untangle on your own. Get clearer about what is happening, what needs to change, and what you can do next.",
    image: "/assets/images/service-coaching-1on1.jpg",
  },
  {
    title: "The Rebuild Live",
    identifier: "Live Facebook Coaching",
    wantLine: "I want support without feeling like I'm doing this alone.",
    description:
      "Join Barbara live on Facebook to ask questions, listen to real coaching conversations, and hear other people work through their own next steps. Sometimes someone else's question helps you hear your own situation differently.",
    image: "/assets/images/service-live.jpg",
  },
  {
    title: "Business & Life Consulting",
    wantLine: "I want my life and business pulling in the same direction.",
    description:
      "Business decisions do not happen in a vacuum. When work, confidence, priorities, and real life are colliding, Barbara helps you look at the whole picture and decide what deserves your attention now.",
    image: "/assets/images/service-consulting.jpg",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "She helped me rebuild my confidence when I felt completely lost. I show up for my life differently now.",
    author: "Janelle M.",
    role: "Small business owner",
  },
  {
    quote:
      "Her guidance gave me clarity when I needed it most. I finally stopped second-guessing every decision.",
    author: "Marcus T.",
    role: "Entrepreneur",
  },
  {
    quote:
      "I feel like I finally have direction again. She didn't push me, she listened until I could hear myself.",
    author: "Aaliyah R.",
    role: "Mother of three",
  },
  {
    quote: "Working with her changed how I see myself and my future. That is not an exaggeration.",
    author: "Denise P.",
    role: "Coach & creative",
  },
  {
    quote:
      "She truly listens and understands. I have never felt judged, just supported and challenged.",
    author: "Brandon S.",
    role: "Founder",
  },
  {
    quote:
      "I came in stuck and ashamed. I left with a plan and the belief that I could actually do this.",
    author: "Tasha L.",
    role: "Career changer",
  },
];

function IndexPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HomeHeroMobile />
      <HomeHeroDesktop />

      {/* The Rebuilder Section */}
      <section className="bg-cream py-20 lg:py-28 border-b border-navy-deep/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            The Rebuilder
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
            You want to feel like you know where you're going again.
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-navy-deep/80">
            <p>
              Maybe the old plan stopped fitting. Maybe confidence took a hit. Maybe work is pulling
              you in one direction while the rest of your life is pulling somewhere else.
            </p>
            <p>
              A rebuild starts when you stop trying to make what is no longer working look fine.
            </p>
            <p>
              You are not starting from zero. You bring your experience, judgment, lessons, skills,
              and everything you've already lived through with you.
            </p>
            <p className="font-medium text-navy-deep">Now the question is simpler:</p>
            <p className="font-display text-xl sm:text-2xl text-navy-deep font-bold">
              What needs to change next?
            </p>
          </div>
        </div>
      </section>

      {/* Want-First Section: What I Help With */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              What do you want to feel different?
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
              Start with the thing you most want back.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.label}
                className="ii-hover-lift group overflow-hidden rounded-2xl border border-navy-deep/10 bg-white shadow-sm flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden bg-cream">
                  <img
                    src={pillar.image}
                    alt={pillar.label}
                    loading="lazy"
                    className="h-full w-full object-cover ii-img-zoom"
                  />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                    {pillar.label}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-bold text-navy-deep group-hover:text-gold-deep transition-colors leading-snug">
                    {pillar.headline}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-navy-deep/75 flex-1">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-14 max-w-2xl text-center">
            <p className="font-display text-xl font-bold text-navy-deep sm:text-2xl">
              What's your next brick?
            </p>
            <p className="mt-3 text-sm leading-relaxed text-navy-deep/70">
              You do not have to solve the whole rebuild today. Start with the decision,
              conversation, or action that makes the next part clearer.
            </p>
          </div>
        </div>
      </section>

      {/* Story Teaser Section */}
      <section className="bg-navy-deep text-white py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
                Why Barbara Understands
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                She knows what it feels like when the old plan{" "}
                <span className="text-gold italic font-serif">stops working.</span>
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-5 text-white/80 text-base leading-relaxed">
              <p>
                Barbara built her life without much of a safety net. She worked through technical
                and business roles, often in rooms where she had to earn her place, and rebuilt more
                than once through injuries, loss, health struggles, and major personal change.
              </p>
              <p>
                She lost more than 150 pounds during one of those rebuilds. More importantly, she
                had to learn how to trust herself, make decisions differently, and find her own
                voice again.
              </p>
              <p>That is what she brings to coaching now.</p>
              <p>Not a perfect formula.</p>
              <p>
                Perspective from someone who has had to ask the same hard question herself:{" "}
                <span className="text-white font-medium">What do I do next?</span>
              </p>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-white transition-colors"
                >
                  <span>Read Barbara's Story</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-24 lg:py-32 border-b border-navy-deep/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              How We Work Together
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
              Choose the kind of support that helps you move again.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-navy-deep/75">
              You may not know yet whether you need coaching, consulting, or community. Start with
              the kind of support that matches the situation you're in and how deeply you want to
              work through it.
            </p>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {SERVICES.map((svc) => (
              <div
                key={svc.title}
                className="ii-hover-lift flex flex-col overflow-hidden rounded-3xl bg-cream border border-navy-deep/10"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    loading="lazy"
                    className="h-full w-full object-cover ii-img-zoom"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="font-display text-2xl font-bold text-navy-deep">{svc.title}</h3>
                  {svc.identifier && (
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.18em] text-navy-deep/45">
                      {svc.identifier}
                    </p>
                  )}
                  <p className="mt-1.5 text-xs font-semibold text-gold-deep uppercase tracking-wider">
                    {svc.wantLine}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-navy-deep/75 flex-1">
                    {svc.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-navy-deep/10">
                    <Link
                      to="/services"
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-navy-deep hover:text-gold-deep transition-colors"
                    >
                      <span>Explore Offering</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-navy-deep px-8 py-4 text-sm font-bold text-white hover:bg-navy transition-all shadow-md"
            >
              <span>View All Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Community Banner */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            The Rebuilders
          </p>
          <Users className="mx-auto mt-5 h-12 w-12 text-gold-deep" />
          <h2 className="mt-6 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
            Find people who understand the season you're in.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-navy-deep/75 leading-relaxed">
            Sometimes what you want most is to stop feeling like you're the only person trying to
            figure it out.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-navy-deep/75 leading-relaxed">
            The Rebuilders is Barbara's Facebook community for people working through real changes
            in life, confidence, work, and business. Come for live coaching, honest conversations,
            questions, encouragement, and the reminder that rebuilding does not have to be a private
            struggle.
          </p>
          <div className="mt-8">
            <a
              href={BRAND_ASSETS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-md hover:bg-gold-deep transition-all"
            >
              <span>Join the Rebuilders on Facebook</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              What Starts to Change
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
              People come in wanting different things.{" "}
              <span className="block sm:inline">Clarity is usually where movement starts.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-deep/75">
              Some wanted direction. Some wanted confidence. Some wanted to stop second-guessing
              themselves. Their words say more than another promise from us could.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, idx) => (
              <figure
                key={idx}
                className="ii-hover-lift flex flex-col rounded-2xl border border-navy-deep/10 bg-cream p-8 shadow-sm"
              >
                <div className="font-display text-3xl leading-none text-gold/40">“</div>

                <blockquote className="mt-5 flex-1 text-sm sm:text-base leading-relaxed text-navy-deep/85 italic font-serif">
                  "{t.quote}"
                </blockquote>

                <figcaption className="mt-6 border-t border-navy-deep/10 pt-4">
                  <div className="font-bold text-navy-deep">{t.author}</div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-navy-deep/60 mt-0.5">
                    {t.role}
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/testimonials"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-deep hover:text-gold-deep transition-colors"
            >
              <span>Read More Client Stories</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-deep text-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            What's your next brick?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Start with the part you most want to feel different.
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-3 text-base sm:text-lg text-white/80">
            <p>
              Bring the thing that keeps circling in your head, the decision you keep postponing, or
              the part of life or business that no longer feels right.
            </p>
            <p>
              You do not need a perfect plan before the conversation.{" "}
              <span className="text-white font-medium">You need somewhere honest to start.</span>
            </p>
          </div>
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
