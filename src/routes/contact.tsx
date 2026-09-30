import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ArrowRight,
  MessageSquare,
  CalendarDays,
} from "lucide-react";
import { BRAND_ASSETS } from "./__root";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Barbara — Intentional Impact Consulting" },
      {
        name: "description",
        content:
          "Start a conversation with Barbara Manzo Gilbert. You don't need to know exactly what you need before you reach out — book a free consultation or send a message.",
      },
      { property: "og:title", content: "Contact Barbara — Intentional Impact Consulting" },
      {
        property: "og:description",
        content:
          "A human place to start a conversation. Book a free consultation or send Barbara a message about what you most want to feel different.",
      },
      { property: "og:image", content: BRAND_ASSETS.socialShareImage },
      { name: "twitter:image", content: BRAND_ASSETS.socialShareImage },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    helpWith: "I'm Not Sure Yet",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "contact", ...formData }),
      });

      if (!response.ok) {
        throw new Error("Message delivery failed.");
      }

      setSubmitted(true);
    } catch {
      setSubmitError(
        "Your message could not be sent from this preview. Please email Barbara directly or try again on the production website.",
      );
    }
  };

  return (
    <div className="flex flex-col bg-white">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white flex items-center min-h-[500px] lg:min-h-0 lg:h-[470px] lg:max-h-[470px]">
        <img
          src="/assets/images/contact-hero.png"
          alt="Barbara Manzo Gilbert walking and talking on the phone"
          className="absolute inset-0 h-full w-full object-cover object-[78%_center] lg:object-[82%_center]"
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
            <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.22em] text-gold">
              <span>Start Here</span>
            </div>
            <h1 className="font-display text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[45px] text-white">
              You don't need to know exactly what you need{" "}
              <span className="text-gold italic font-serif">before you reach out.</span>
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-white/90 leading-relaxed">
              If something in life, confidence, work, or business keeps pulling at your attention,
              start with that. Tell Barbara what feels unclear and what you most want to feel
              different.
            </p>
            <div className="pt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold text-navy-deep shadow-lg hover:bg-gold-deep transition-all hover:scale-[1.02]"
              >
                <span>Book a Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#send-message"
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-white transition-colors"
              >
                <span>Send a Message</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Choice Section */}
      <section className="bg-cream py-20 lg:py-28 border-b border-navy-deep/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              Choose the Easiest Place to Start
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl lg:text-5xl">
              You can book a conversation or simply send a message.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {/* Card 1: Book a Conversation */}
            <div className="ii-hover-lift flex flex-col rounded-3xl border border-navy-deep/10 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                  <CalendarDays className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                  Book a Conversation
                </p>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy-deep leading-snug">
                I want to talk this through with Barbara.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-navy-deep/75 flex-1">
                If you already know you want a real conversation, choose an available time and bring
                whatever has been sitting on your mind. You do not need to have the situation
                organized perfectly before the call.
              </p>
              <div className="mt-6 pt-5 border-t border-navy-deep/10">
                <Link
                  to="/book"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3.5 text-sm font-bold text-navy-deep shadow-md hover:bg-gold-deep transition-all"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Card 2: Send a Message */}
            <div className="ii-hover-lift flex flex-col rounded-3xl border border-navy-deep/10 bg-white p-8 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-deep">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gold-deep">
                  Send a Message
                </p>
              </div>
              <h3 className="mt-5 font-display text-2xl font-bold text-navy-deep leading-snug">
                I want to reach out first.
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-navy-deep/75 flex-1">
                If booking a conversation feels like too much of a first step, send Barbara a
                message and tell her what has been pulling at your attention.
              </p>
              <div className="mt-6 pt-5 border-t border-navy-deep/10">
                <a
                  href="#send-message"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-navy-deep/20 bg-white px-6 py-3.5 text-sm font-bold text-navy-deep hover:bg-navy-deep/5 transition-all"
                >
                  <span>Send Barbara a Message</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Area */}
      <section className="bg-white py-20 lg:py-24 border-b border-navy-deep/5">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              Reach Barbara
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold text-navy-deep sm:text-3xl">
              A few ways to get in touch.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Phone */}
            <div className="bg-card rounded-2xl border border-navy-deep/10 p-6 flex items-start gap-4 shadow-sm">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-deep/10 text-navy-deep">
                <Phone className="h-5 w-5 text-gold-deep" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-deep/50">
                  Phone
                </h4>
                <p className="mt-1 text-sm font-semibold text-navy-deep">+1 (800) 555-IMPACT</p>
                <p className="mt-0.5 text-[11px] text-navy-deep/50">Temporary placeholder</p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card rounded-2xl border border-navy-deep/10 p-6 flex items-start gap-4 shadow-sm min-w-0">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-deep/10 text-navy-deep">
                <Mail className="h-5 w-5 text-gold-deep" />
              </div>
              <div className="min-w-0 flex-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-deep/50">
                  Email
                </h4>
                <p
                  className="mt-1 text-[13px] xl:text-sm font-semibold text-navy-deep truncate lg:whitespace-nowrap"
                  title="barbara@intentionalimpactconsulting.com"
                >
                  barbara@intentionalimpactconsulting.com
                </p>
                <p className="mt-0.5 text-[11px] text-navy-deep/50">Temporary placeholder</p>
              </div>
            </div>

            {/* Office / Location */}
            <div className="bg-card rounded-2xl border border-navy-deep/10 p-6 flex items-start gap-4 shadow-sm sm:col-span-2 lg:col-span-1">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-deep/10 text-navy-deep">
                <MapPin className="h-5 w-5 text-gold-deep" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-deep/50">
                  Office / Location
                </h4>
                <p className="mt-1 text-sm font-semibold text-navy-deep">
                  United States (Virtual &amp; On-site)
                </p>
                <p className="mt-0.5 text-[11px] text-navy-deep/50">Temporary placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="send-message" className="bg-cream py-20 lg:py-28 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
              Send Barbara a Message
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl">
              Start with what you want to feel different.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-navy-deep/75">
              You do not need the perfect explanation. A few honest sentences about where you are
              and what you wish felt different are enough to begin.
            </p>
          </div>

          <div className="mt-12 rounded-3xl border border-navy-deep/10 bg-white p-8 shadow-lg sm:p-10">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/20 text-gold-deep">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-navy-deep">Message Received</h3>
                <p className="mx-auto max-w-md text-sm leading-relaxed text-navy-deep/70">
                  Thank you, {formData.fullName}. Your message has been received. Barbara will
                  review what you shared and follow up with you.
                </p>
                <div className="pt-6">
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-navy-deep hover:text-gold-deep transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 text-sm bg-cream/40 border border-navy-deep/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all text-navy-deep"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 text-sm bg-cream/40 border border-navy-deep/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all text-navy-deep"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2">
                      Phone Number
                      <span className="ml-1 font-normal normal-case text-navy-deep/50">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 text-sm bg-cream/40 border border-navy-deep/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all text-navy-deep"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2">
                      What Would You Like Help With?
                    </label>
                    <select
                      value={formData.helpWith}
                      onChange={(e) => setFormData({ ...formData, helpWith: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-cream/40 border border-navy-deep/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all text-navy-deep"
                    >
                      <option value="Life Direction">Life Direction</option>
                      <option value="Confidence / Rebuilding After a Setback">
                        Confidence / Rebuilding After a Setback
                      </option>
                      <option value="One on One Coaching">One on One Coaching</option>
                      <option value="The Rebuild Live / Community">
                        The Rebuild Live / Community
                      </option>
                      <option value="Life & Business Consulting">
                        Life &amp; Business Consulting
                      </option>
                      <option value="I'm Not Sure Yet">I'm Not Sure Yet</option>
                      <option value="Something Else">Something Else</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-navy-deep mb-2">
                    What do you most want to feel different?
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell Barbara what's been going on, what feels unclear, or what you hope could change."
                    className="w-full px-4 py-3 text-sm bg-cream/40 border border-navy-deep/15 rounded-xl focus:outline-none focus:ring-2 focus:ring-gold/40 transition-all resize-none text-navy-deep"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-navy-deep hover:bg-navy text-white py-4 text-sm font-bold uppercase tracking-wider shadow-lg transition-all"
                >
                  <Send className="h-4 w-4" /> Send Message
                </button>

                {submitError && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-xs font-medium text-red-700">
                    {submitError}
                  </p>
                )}

                <p className="text-center text-[11px] text-navy-deep/50">
                  You do not need the whole rebuild mapped out. You only need somewhere honest to
                  start.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Not Sure What Fits */}
      <section className="bg-white py-20 lg:py-24 border-t border-navy-deep/5">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
            Not Sure Which Kind of Support Fits?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold text-navy-deep sm:text-4xl">
            You don't have to decide that before we talk.
          </h2>
          <div className="mt-6 space-y-3 text-base sm:text-lg leading-relaxed text-navy-deep/75">
            <p>Maybe you want to trust yourself again.</p>
            <p>Maybe you want the noise to stop long enough to make a decision.</p>
            <p>Maybe life and business are pulling in different directions.</p>
            <p>Maybe you simply know something is not working the way you want it to anymore.</p>
          </div>
          <p className="mt-6 text-base sm:text-lg leading-relaxed text-navy-deep/75">
            Start there. Barbara can help you look at the situation and talk through what kind of
            support may make sense next.
          </p>
          <div className="mt-8">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-navy-deep hover:text-gold-deep transition-colors"
            >
              <span>Explore Coaching Services</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy-deep text-white py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold">
            What's your next brick?
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold sm:text-4xl lg:text-5xl">
            Sometimes the next step is simply saying it out loud.
          </h2>
          <div className="mx-auto mt-6 max-w-2xl space-y-3 text-base sm:text-lg text-white/80">
            <p>
              Bring the question you keep circling, the decision you've been avoiding, or the part
              of life or business you want to feel different.
            </p>
            <p>You do not need the answer before the conversation starts.</p>
          </div>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-navy-deep shadow-xl hover:bg-gold-deep transition-all hover:scale-105"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="#send-message"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-gold hover:text-white transition-colors"
            >
              <span>Send a Message</span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
