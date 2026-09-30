import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BRAND_ASSETS } from "./__root";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Barbara Manzo Gilbert — Intentional Impact Consulting" },
      {
        name: "description",
        content:
          "Barbara Manzo Gilbert has rebuilt her work, health, confidence, and direction more than once. Lived experience, not theory, shapes how she coaches today.",
      },
      {
        property: "og:title",
        content: "About Barbara Manzo Gilbert — Intentional Impact Consulting",
      },
      {
        property: "og:description",
        content:
          "She knows what it feels like when the old plan stops working. Lived experience. Real coaching.",
      },
      { property: "og:image", content: BRAND_ASSETS.barbaraPortrait },
      { name: "twitter:image", content: BRAND_ASSETS.barbaraPortrait },
    ],
  }),
  component: AboutPage,
});

const STORY_STEPS = [
  {
    step: "01",
    title: "She learned to listen before she ever called herself a coach.",
    text: "Barbara started selling young, door to door and person to person. Long before coaching became part of her work, she was learning how to listen, read a room, understand what mattered to somebody, and speak to the person in front of her. That ability to listen still matters more to her than having the fastest answer.",
  },
  {
    step: "02",
    title: "She knows what it means to build without a safety net.",
    text: "There was no financial backing or easy path waiting for Barbara. She took opportunities where she could find them, learned new skills, and kept building. That experience shaped one of the beliefs behind her work today: starting again is not starting from zero. You bring what you have already learned with you.",
  },
  {
    step: "03",
    title: "She learned how to trust herself in rooms that did not always make that easy.",
    text: "Barbara moved into technical and business roles where she was often the only woman in the room. She learned how systems work, how teams move, how to lead, and how important it is to trust your own judgment when you cannot wait for everybody else to validate it first.",
  },
  {
    step: "04",
    title: "Then life changed the plan.",
    text: "Injuries, loss, and difficult seasons forced Barbara to start over more than once. There were times when things she had worked hard to build no longer looked the way she thought they would. That is why she does not treat starting again like failure. Sometimes rebuilding is simply what comes next.",
  },
  {
    step: "05",
    title: "The hardest rebuild became personal.",
    text: "Serious health struggles eventually forced Barbara to look at her body, habits, confidence, and sense of self differently. She lost more than 150 pounds. But the number is only part of the story. She also had to rebuild trust in herself and find her own voice again. That experience sits underneath one of the strongest beliefs in Barbara's work today: confidence is rebuilt through evidence.",
  },
  {
    step: "06",
    title: "Eventually, people started asking how she did it.",
    text: "Coaching returned to Barbara because people kept asking questions. How did you get through that? How did you start again? How did you know what to do next? For a long time, her answer was essentially that she had figured it out as she went. Eventually, she realized that what she had learned could help other people make their own rebuild feel less overwhelming. Today, Barbara helps people get clear about what is no longer working, understand what they want to feel different, and choose a next step they can actually take.",
  },
];

const VALUES = [
  {
    label: "HONESTY WITHOUT CRUELTY",
    headline: "I want someone to tell me the truth without tearing me down.",
    text: "Barbara will not pretend something is working when it isn't. But honesty does not require shame. The goal is to see the situation clearly enough to do something useful with it.",
  },
  {
    label: "REAL LIFE FIRST",
    headline: "I want a plan that still works when life gets messy.",
    text: "Advice that only works when you have unlimited time, energy, focus, and motivation is not very useful. The next step has to fit the life you are actually living.",
  },
  {
    label: "YOUR DECISIONS",
    headline: "I want to trust myself, not become dependent on someone else's answers.",
    text: "Barbara can ask questions, challenge assumptions, offer perspective, and help make the situation clearer. The decisions remain yours. The point is to rebuild your ability to hear yourself and move with more confidence.",
  },
];

function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section — Full-bleed background with left-to-right gradient, matching homepage structure */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white flex items-center min-h-[500px] lg:min-h-0 lg:h-[470px] lg:max-h-[470px]">
        {/* Full-bleed warm office/portrait background image */}
        <img
          src="/assets/images/about-hero.png"
          alt="Barbara Manzo Gilbert, Founder of Intentional Impact Consulting"
          className="absolute inset-0 h-full w-full object-cover object-[80%_center] lg:object-[82%_center]"
        />

        {/* Left-to-right dark gradient overlay: very dark behind copy, fading out toward Barbara */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.92) 28%, rgba(11,19,43,0.82) 42%, rgba(11,19,43,0.55) 55%, rgba(11,19,43,0.20) 65%, rgba(11,19,43,0.04) 75%, rgba(11,19,43,0) 85%)",
          }}
        />

        {/* Mobile/tablet readable backdrop */}

        {/* Hero copy — left aligned, ~50% width on desktop */}
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 lg:py-0">
          <div className="max-w-xl lg:max-w-[50%] space-y-3">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              Meet Barbara Manzo Gilbert
            </p>

            <h1 className="font-display text-3xl font-bold leading-[1.1] sm:text-4xl lg:text-[45px] text-white">
              She knows what it feels like <br />
              <span className="text-gold italic font-serif">when the old plan stops working.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/90 leading-relaxed max-w-xl">
              Barbara knows what it feels like when the old plan stops working. She brings that
              lived experience to helping you get clear on what comes next.
            </p>

            <div className="pt-1">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold text-navy-deep shadow-lg hover:bg-gold-deep transition-all hover:scale-[1.02]"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Her Story Matters */}
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            Why Her Story Matters
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl lg:text-5xl">
            You want to know the person beside you has had to rebuild, too.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy-deep/80">
            <p>
              Barbara's story matters because rebuilding is not an idea she learned from a course.
            </p>
            <p>
              She has had seasons when work changed, health changed, confidence changed, and the
              version of life she thought she was building no longer fit.
            </p>
            <p>
              What she carries into coaching is not a perfect formula for somebody else's life. It
              is the perspective that comes from having to stop, tell the truth about what was no
              longer working, and figure out what came next.
            </p>
          </div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="bg-cream py-24 lg:py-32 border-y border-navy-deep/10">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="space-y-8">
            {STORY_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex flex-col sm:flex-row gap-6 p-8 rounded-2xl bg-white border border-navy-deep/10 shadow-xs"
              >
                <span className="shrink-0 font-display text-3xl font-bold text-gold-deep sm:w-16">
                  {step.step}
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold leading-snug text-navy-deep sm:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-navy-deep/80">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Bridge */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl">
            Your rebuild will not look like Barbara's. <br className="hidden sm:block" />
            <span className="text-gold-deep italic font-serif">And it shouldn't.</span>
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-navy-deep/80">
            <p>
              You have your own history, responsibilities, priorities, losses, ambitions, and
              reasons for wanting something to change.
            </p>
            <p>
              Barbara's job is not to hand you her answer. It is to help you hear your own situation
              more clearly, tell the truth about what is no longer working, and decide what deserves
              your attention next.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-md hover:bg-gold-deep transition-all"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-cream py-24 lg:py-32 border-t border-navy-deep/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              What Working With Barbara Should Feel Like
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl lg:text-5xl">
              You should be able to tell the truth without feeling smaller for it.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {VALUES.map((val) => (
              <div
                key={val.label}
                className="ii-hover-lift rounded-2xl bg-white p-8 border border-navy-deep/10 shadow-sm flex flex-col"
              >
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold-deep">
                  {val.label}
                </span>
                <h3 className="mt-3 font-display text-xl font-bold leading-snug text-navy-deep">
                  {val.headline}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-navy-deep/75 flex-1">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rebuilder Guide */}
      <section className="bg-navy-deep text-white py-24 lg:py-32">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            The Rebuilder Guide
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            She isn't here to rebuild your life for you.
          </h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/85">
            <p>Barbara's role is to help you see the rebuild more clearly.</p>
            <div className="mx-auto max-w-xl space-y-2 text-left text-white/80">
              <p className="font-serif italic text-white/90">What is still working?</p>
              <p className="font-serif italic text-white/90">What isn't?</p>
              <p className="font-serif italic text-white/90">What do you want to feel different?</p>
              <p className="font-serif italic text-white/90">What deserves your attention next?</p>
            </div>
            <p className="pt-2">
              You remain the person making the decisions, placing the next brick, and building
              whatever comes after this season.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-cream py-24 lg:py-32 border-t border-navy-deep/10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            What's Your Next Brick?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl lg:text-5xl">
            You don't need to have everything figured out before you talk about it.
          </h2>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-navy-deep/80">
            <p>Bring the part that feels unclear.</p>
            <p>The decision you keep circling.</p>
            <p>The thing you want to feel different but haven't known how to change.</p>
            <p>
              The first conversation is simply a place to get honest about where you are and see
              what might come next.
            </p>
          </div>
          <div className="mt-10">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-lg hover:bg-gold-deep transition-all"
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
