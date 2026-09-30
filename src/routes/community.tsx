import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Facebook } from "lucide-react";
import { BRAND_ASSETS } from "./__root";

// The Rebuilders community Facebook group (Community page only)
const COMMUNITY_GROUP_URL = "https://www.facebook.com/groups/2878771655789230";

export const Route = createFileRoute("/community")({
  head: () => ({
    meta: [
      { title: "The Rebuilders Community — Intentional Impact Consulting" },
      {
        name: "description",
        content:
          "The Rebuilders is Barbara's Facebook community for people working through real changes in life, confidence, work, and business. Come for live coaching, honest conversation, and a reason to keep showing up.",
      },
      {
        property: "og:title",
        content: "The Rebuilders Community — Intentional Impact Consulting",
      },
      {
        property: "og:description",
        content:
          "A community for people rebuilding something. Live coaching, real practices, and people who understand the season you're in.",
      },
      { property: "og:image", content: BRAND_ASSETS.barbaraPortrait },
      { name: "twitter:image", content: BRAND_ASSETS.barbaraPortrait },
    ],
  }),
  component: CommunityPage,
});

const COMMUNITY_CARDS = [
  {
    label: "Belonging",
    headline: "I want to be around people who understand this season.",
    body: "You do not need everybody here to have the same story. You need people who understand what it means to be changing something, questioning something, or trying to rebuild a part of life that no longer fits.",
  },
  {
    label: "The Rebuild Live",
    headline: "I want somewhere to bring the question I keep circling.",
    body: "Barbara's live Facebook coaching gives you a place to ask questions in real time, listen to real conversations, and hear situations that may help you understand your own more clearly.",
  },
  {
    label: "Honest Conversation",
    headline: "I want to stop pretending everything is fine.",
    body: "You do not have to perform progress here. You can say: this is hard. I don't know what comes next. I tried something and it didn't work. Honesty gives you something real to work with.",
  },
  {
    label: "Visible Progress",
    headline: "I want proof that I'm actually moving.",
    body: "Progress is not always dramatic. Sometimes it is a decision you finally make, a conversation you stop avoiding, a boundary you keep, or a promise to yourself that you follow through on. Those moments count.",
  },
];

const PRACTICES = [
  {
    title: "The Rebuild Check-In",
    prompt: "What's working? What's not? What needs rebuilding next?",
    body: "A simple pause that helps you notice what is actually happening instead of running on autopilot.",
  },
  {
    title: "What's Your Next Brick?",
    prompt: "What is one useful thing you can do next?",
    body: "When everything feels too big, reduce the rebuild to one decision, action, or conversation you can actually handle. The castle is the vision. The brick is the action.",
  },
  {
    title: "The Honest Reset",
    prompt: "What happened? What did I learn? What changes now?",
    body: "A reset does not mean the rebuild failed. It means reality gave you new information and you are willing to use it.",
  },
  {
    title: "Rebuild Wins",
    prompt: "This week, I rebuilt...",
    body: "Confidence becomes easier to trust when you can see evidence of progress. The win does not have to be dramatic. It has to be real.",
  },
];

const RHYTHM = [
  {
    day: "Monday",
    title: "Rebuild Check-In",
    prompt: "What's working? What's not? What needs rebuilding next?",
  },
  {
    day: "Wednesday",
    title: "What's Your Next Brick?",
    prompt: "Reduce one overwhelming situation to the next meaningful move.",
  },
  {
    day: "Friday",
    title: "Rebuild Wins",
    prompt: "This week, I rebuilt...",
  },
  {
    day: "Weekly",
    title: "The Rebuild Live",
    prompt:
      "Barbara's live Facebook coaching conversation around real questions, real situations, and what comes next.",
  },
];

const PROGRESSION = [
  {
    step: "01",
    label: "Observer",
    copy: "You are here. You listen, watch, read, and begin noticing what resonates.",
  },
  {
    step: "02",
    label: "Participant",
    copy: "You start answering prompts, reacting, asking questions, or joining conversations.",
  },
  {
    step: "03",
    label: "Rebuilder",
    copy: "The ideas stop being content and start becoming practice. You begin deliberately rebuilding something in your own life, work, confidence, or business.",
  },
  {
    step: "04",
    label: "Contributor",
    copy: "You start sharing what you are learning, what worked, what did not, and the wins you can finally see.",
  },
  {
    step: "05",
    label: "Example",
    copy: "Your own rebuild becomes evidence that another person can move forward too. Your experience starts helping people beyond you.",
  },
  {
    step: "06",
    label: "Guide",
    copy: "Over time, some Rebuilders naturally begin helping newer people through lived experience, perspective, and encouragement.",
  },
];

const EXPECTATIONS = [
  {
    headline: "Real coaching around real situations.",
    body: "The Rebuild Live brings questions, decisions, setbacks, and next steps into the conversation while they are still happening.",
  },
  {
    headline: "Conversations that don't require you to perform.",
    body: "You can be uncertain, frustrated, hopeful, stuck, changing your mind, or still trying to name the problem. That is enough to begin.",
  },
  {
    headline: "Ideas you can actually use.",
    body: "Prompts, mini-trainings, discussions, and Rebuilder practices should help you understand what to do next, not simply give you more content to consume.",
  },
];

function CommunityPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white flex items-center min-h-[500px] lg:min-h-0 lg:h-[470px] lg:max-h-[470px]">
        <img
          src="/assets/images/community-hero.png"
          alt="The Rebuilders gathering in honest community conversation"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-[80%_center]"
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
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">The Rebuilders</p>
            <h1 className="font-display text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[45px] text-white">
              I want to stop feeling like I'm the only one{" "}
              <span className="text-gold italic font-serif">figuring this out.</span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-white/90 leading-relaxed">
              The Rebuilders is Barbara's Facebook community for people working through real changes
              in life, confidence, work, and business. Come to listen, ask questions, get coached,
              and stay connected to the part of you that is still moving forward.
            </p>
            <div className="pt-2">
              <a
                href={COMMUNITY_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold text-navy-deep shadow-lg transition-all hover:bg-gold-deep hover:scale-[1.02]"
              >
                <Facebook className="h-4 w-4" />
                <span>Join the Rebuilders on Facebook</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why People Come Back */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            Why people come back
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl lg:text-[40px]">
            You want support that helps you move.
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-navy-deep/80">
            <p>Sometimes you need encouragement.</p>
            <p>Sometimes you need a question that makes you stop and think.</p>
            <p>
              Sometimes you need to hear another person describe something you have been struggling
              to put into words.
            </p>
            <p>
              The Rebuilders is designed to give you somewhere to return when the rebuild feels
              noisy, lonely, unclear, or easy to put off.
            </p>
          </div>
        </div>
      </section>

      {/* Four Want-First Community Cards */}
      <section className="bg-cream-warm py-24 lg:py-28 border-y border-navy-deep/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {COMMUNITY_CARDS.map((card) => (
              <div
                key={card.label}
                className="ii-hover-lift flex flex-col rounded-2xl border border-navy-deep/10 bg-white p-8 shadow-xs"
              >
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold-deep">
                  {card.label}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-snug text-navy-deep">
                  {card.headline}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-navy-deep/75">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Practices */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              What Rebuilders actually do
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl lg:text-[40px]">
              You do not need a giant breakthrough every week.
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-navy-deep/80">
              A community becomes useful when it gives people something to practice, not just
              something else to scroll through. These simple Rebuilder practices are designed to
              help turn reflection into movement.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {PRACTICES.map((practice) => (
              <div
                key={practice.title}
                className="ii-hover-lift flex flex-col rounded-2xl border border-navy-deep/10 bg-cream p-8 shadow-xs"
              >
                <h3 className="font-display text-xl font-bold text-navy-deep">{practice.title}</h3>
                <p className="mt-3 text-sm font-semibold italic text-gold-deep">
                  {practice.prompt}
                </p>
                <p className="mt-4 text-base leading-relaxed text-navy-deep/75">{practice.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Rhythm */}
      <section className="bg-navy-deep text-white py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
              A simple rhythm to keep the rebuild moving
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[40px]">
              The Rebuilders community is being built around a simple rhythm.
            </h2>
          </div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            {RHYTHM.map((item) => (
              <div key={item.day} className="rounded-2xl border border-white/10 bg-white/5 p-7">
                <div className="flex items-baseline gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gold">
                    {item.day}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{item.prompt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Rebuild Live */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            The Rebuild Live
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl lg:text-[40px]">
            Sometimes someone else's question helps you hear your own situation differently.
          </h2>
          <div className="mt-6 space-y-4 text-base sm:text-lg leading-relaxed text-navy-deep/80">
            <p>
              The Rebuild Live is Barbara's recurring live coaching conversation inside the Facebook
              community.
            </p>
            <p>
              Bring a question. Listen to someone else's. Stay quiet and learn if that is what you
              need that day. You do not have to package your situation perfectly before you show up.
            </p>
            <p>
              The point is real coaching around real situations while people are actually living
              them.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={COMMUNITY_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy-deep shadow-md transition-all hover:bg-gold-deep"
            >
              <Facebook className="h-4 w-4" />
              <span>Join the Rebuilders</span>
            </a>
            <a
              href={BRAND_ASSETS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-navy-deep/70 transition-colors hover:text-gold-deep"
            >
              <span>Watch The Rebuild Live</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Protagonist Ladder */}
      <section className="bg-cream-warm py-24 lg:py-28 border-y border-navy-deep/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              You can grow into the community at your own pace
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl lg:text-[40px]">
              You can start by simply showing up.
            </h2>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-navy-deep/80">
              Nobody has to arrive ready to tell their whole story. Some people listen first. Some
              start answering prompts. Some ask a question. Some eventually share what worked for
              them. And sometimes the person who once came looking for support becomes the person
              whose experience helps somebody newer take their next step.
            </p>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {PROGRESSION.map((stage) => (
              <div
                key={stage.step}
                className="flex flex-col rounded-2xl border border-navy-deep/10 bg-white p-7 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="font-display text-3xl font-bold text-gold-deep">
                    {stage.step}
                  </span>
                  <span className="font-display text-xl font-bold text-navy-deep">
                    {stage.label}
                  </span>
                </div>
                <p className="mt-3 text-base leading-relaxed text-navy-deep/75">{stage.copy}</p>
              </div>
            ))}
          </div>

          {/* Why the ladder matters */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <h3 className="font-display text-2xl font-bold leading-snug text-navy-deep sm:text-3xl">
              The goal isn't to become the loudest person in the room.
            </h3>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-navy-deep/80">
              <p>
                The goal is to become more active in your own rebuild. You can stay quiet for as
                long as you need.
              </p>
              <p>
                Participation should grow because something in you is changing, not because the
                community pressures you to perform. Eventually, what you learn may become useful to
                someone standing where you once stood.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What You Can Expect */}
      <section className="bg-white py-24 lg:py-28">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              What you can expect
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl lg:text-[40px]">
              A place to come back to when you need perspective.
            </h2>
          </div>

          <div className="mt-16 space-y-6">
            {EXPECTATIONS.map((item, idx) => (
              <div
                key={item.headline}
                className="flex flex-col gap-5 rounded-2xl border border-navy-deep/10 bg-cream p-8 shadow-xs sm:flex-row sm:items-start"
              >
                <div className="flex-none font-display text-3xl font-bold text-gold-deep sm:w-16">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy-deep">{item.headline}</h3>
                  <p className="mt-2 text-base leading-relaxed text-navy-deep/75">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Proof */}
      <section className="bg-cream-warm py-24 lg:py-28 border-t border-navy-deep/10">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            From the community
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-navy-deep sm:text-4xl lg:text-[40px]">
            Sometimes the reason you keep showing up is simple.
          </h2>

          <figure className="mx-auto mt-12 max-w-2xl">
            <blockquote className="font-display text-2xl font-medium italic leading-relaxed text-navy-deep sm:text-3xl">
              "Her live sessions feel like medicine. I plan my week around them."
            </blockquote>
            <figcaption className="mt-6 text-sm font-semibold uppercase tracking-widest text-gold-deep">
              Crystal H.
              <span className="block font-medium normal-case tracking-normal text-navy-deep/60">
                Community member
              </span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-deep text-white py-24 lg:py-28">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage: `radial-gradient(50% 50% at 50% 100%, rgba(212,175,55,0.16), transparent 70%)`,
          }}
        />
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">The Rebuilders</p>
          <h2 className="mt-5 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-[40px]">
            I want a place where I can keep showing up.
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-base sm:text-lg leading-relaxed text-white/80">
            <p>You do not need to have everything figured out before you join.</p>
            <p>
              Come listen. Ask a question when you're ready. Try a Rebuild Check-In. Find your next
              brick. Share a win. Start wherever you are.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={COMMUNITY_GROUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-lg transition-all hover:bg-gold-deep"
            >
              <Facebook className="h-5 w-5" />
              <span>Join the Rebuilders on Facebook</span>
            </a>
            <a
              href={BRAND_ASSETS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-widest text-white/70 transition-colors hover:text-gold"
            >
              <span>Watch The Rebuild Live</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
