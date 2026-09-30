import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Calendar as CalendarIcon,
  Clock,
  CheckCircle2,
  ShieldCheck,
  User,
  Building,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Schedule an Executive Consultation — Intentional Impact Consulting" },
      {
        name: "description",
        content:
          "Reserve a confidential 30-minute discovery consultation with Barbara Manzo Gilbert to explore executive coaching, leadership alignment, and strategic advisory.",
      },
      {
        property: "og:title",
        content: "Schedule an Executive Consultation — Intentional Impact Consulting",
      },
      {
        property: "og:description",
        content: "Book a confidential executive discovery session with Barbara Manzo Gilbert.",
      },
      {
        property: "og:image",
        content: "/assets/images/barbara-portrait.png",
      },
      {
        name: "twitter:image",
        content: "/assets/images/barbara-portrait.png",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BookPage,
});

const AVAILABLE_DATES = [
  { day: "Thu", date: "Oct 16", fullDate: "Thursday, October 16, 2025" },
  { day: "Fri", date: "Oct 17", fullDate: "Friday, October 17, 2025" },
  { day: "Mon", date: "Oct 20", fullDate: "Monday, October 20, 2025" },
  { day: "Tue", date: "Oct 21", fullDate: "Tuesday, October 21, 2025" },
  { day: "Wed", date: "Oct 22", fullDate: "Wednesday, October 22, 2025" },
];

const TIME_SLOTS = ["10:00 AM EST", "11:30 AM EST", "01:30 PM EST", "03:00 PM EST", "04:30 PM EST"];

export function BookPage() {
  const [selectedDate, setSelectedDate] = useState(AVAILABLE_DATES[0]!);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]!);
  const [step, setStep] = useState<"slot" | "details" | "confirmed">("slot");
  const [submitError, setSubmitError] = useState("");

  const [bookingForm, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    role: "",
    topic: "1-on-1 Executive Coaching",
    goals: "",
  });

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError("");

    try {
      const response = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "booking",
          selectedDate: selectedDate.fullDate,
          selectedTime,
          ...bookingForm,
        }),
      });

      if (!response.ok) {
        throw new Error("Booking request delivery failed.");
      }

      setStep("confirmed");
    } catch {
      setSubmitError(
        "This booking request could not be sent from this preview. Please email Barbara directly or try again on the production website.",
      );
    }
  };

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white flex items-center min-h-[500px] lg:min-h-0 lg:h-[470px] lg:max-h-[470px]">
        <img
          src="/assets/images/barbara-hero.png"
          alt="Book a free consultation with Barbara Manzo Gilbert"
          className="absolute inset-0 h-full w-full object-cover object-[70%_center] lg:object-[78%_center]"
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
              <CalendarIcon className="h-3.5 w-3.5" /> Book a Consultation
            </span>
            <h1 className="font-display text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[45px] text-white">
              Schedule a free consultation with Barbara.
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-white/90 leading-relaxed">
              You don't need to have everything figured out before the conversation. Pick a time
              that works and bring whatever has been sitting on your mind.
            </p>
          </div>
        </div>
      </section>

      {/* Main Booking Container */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        {step === "confirmed" ? (
          /* Confirmation State */
          <div className="bg-card rounded-2xl border border-border/80 p-8 sm:p-12 text-center max-w-2xl mx-auto shadow-xl space-y-6">
            <div className="w-16 h-16 rounded-full bg-accent/20 text-accent mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h2 className="font-serif text-3xl font-bold text-foreground">
              Consultation Confirmed
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Thank you, <span className="font-semibold text-foreground">{bookingForm.name}</span>.
              Your discovery session with Barbara Manzo Gilbert has been provisionally scheduled.
            </p>

            <div className="bg-muted/50 rounded-xl p-6 border border-border text-left space-y-3 max-w-md mx-auto">
              <div className="flex items-center gap-3 text-xs font-semibold text-foreground">
                <CalendarIcon className="w-4 h-4 text-accent" />
                <span>{selectedDate.fullDate}</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold text-foreground">
                <Clock className="w-4 h-4 text-accent" />
                <span>{selectedTime} (30 Minutes)</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <Mail className="w-4 h-4 text-accent" />
                <span>Confirmation sent to: {bookingForm.email}</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground italic">
              Barbara's executive team will send a calendar invitation containing the secure Zoom
              conference link within 12 hours.
            </p>

            <div className="pt-4">
              <button
                onClick={() => {
                  setStep("slot");
                }}
                className="bg-primary hover:bg-primary-light text-primary-foreground px-6 py-3 rounded-xl text-xs font-semibold shadow-md transition-all"
              >
                Schedule Another Session
              </button>
            </div>
          </div>
        ) : (
          /* Booking Flow Steps */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Context & Overview */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-card rounded-2xl border border-border/80 p-6 space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary font-bold text-sm">
                  BMG
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    Barbara Manzo Gilbert
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Founder & Executive Advisory Partner
                  </p>
                </div>

                <hr className="border-border/60" />

                <div className="space-y-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2 text-foreground font-medium">
                    <Clock className="w-4 h-4 text-accent" /> 30-Minute Discovery Session
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-accent" /> Strict Executive Confidentiality
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-accent" /> High-Value Strategic Reflection
                  </div>
                </div>
              </div>

              <div className="bg-muted/40 rounded-2xl border border-border/70 p-6 space-y-3">
                <h4 className="font-serif text-sm font-bold text-foreground">What to Expect</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  During our 30 minutes, we will explore your primary leadership objectives, current
                  organizational dynamics, and determine whether our advisory framework aligns with
                  your vision.
                </p>
              </div>
            </div>

            {/* Right Column: Date & Slot Picker or Form */}
            <div className="lg:col-span-8">
              <div className="bg-card rounded-2xl border border-border/80 p-6 sm:p-8 shadow-lg">
                {step === "slot" ? (
                  <div>
                    <h3 className="font-serif text-xl font-bold text-foreground mb-1">
                      1. Select Date & Time
                    </h3>
                    <p className="text-xs text-muted-foreground mb-6">
                      Times displayed in Eastern Standard Time (EST).
                    </p>

                    {/* Date Selector */}
                    <div className="mb-8">
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        Available Consultation Dates
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                        {AVAILABLE_DATES.map((d) => (
                          <button
                            key={d.date}
                            type="button"
                            onClick={() => setSelectedDate(d)}
                            className={`p-3 rounded-xl text-center border text-xs transition-all ${
                              selectedDate.date === d.date
                                ? "bg-primary text-primary-foreground border-primary font-bold shadow-md"
                                : "bg-background border-border hover:bg-muted text-foreground"
                            }`}
                          >
                            <div className="text-[10px] uppercase opacity-80">{d.day}</div>
                            <div className="text-sm font-serif font-bold mt-0.5">{d.date}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Slots */}
                    <div className="mb-8">
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-3">
                        Select Start Time for {selectedDate.fullDate}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {TIME_SLOTS.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setSelectedTime(slot)}
                            className={`py-3 px-4 rounded-xl text-center border text-xs font-medium transition-all ${
                              selectedTime === slot
                                ? "bg-accent text-accent-foreground border-accent font-bold shadow-md"
                                : "bg-background border-border hover:bg-muted text-foreground"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Next Button */}
                    <div className="pt-6 border-t border-border/60 flex items-center justify-between">
                      <div className="text-xs text-muted-foreground">
                        Selected:{" "}
                        <span className="font-semibold text-foreground">
                          {selectedDate.day}, {selectedDate.date}
                        </span>{" "}
                        at <span className="font-semibold text-foreground">{selectedTime}</span>
                      </div>
                      <button
                        onClick={() => setStep("details")}
                        className="bg-primary hover:bg-primary-light text-primary-foreground px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
                      >
                        Enter Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ) : (
                  /* Step 2: Details Form */
                  <form onSubmit={handleBookingSubmit} className="space-y-6">
                    <div className="flex items-center justify-between border-b border-border/60 pb-4">
                      <div>
                        <h3 className="font-serif text-xl font-bold text-foreground">
                          2. Executive Details
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          {selectedDate.fullDate} at {selectedTime}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setStep("slot")}
                        className="text-xs text-primary font-semibold hover:underline"
                      >
                        Change Time
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={bookingForm.name}
                          onChange={(e) => setFormData({ ...bookingForm, name: e.target.value })}
                          placeholder="e.g. Barbara Gilbert"
                          className="w-full px-4 py-3 text-xs bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Executive Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={bookingForm.email}
                          onChange={(e) => setFormData({ ...bookingForm, email: e.target.value })}
                          placeholder="e.g. bgilbert@organization.com"
                          className="w-full px-4 py-3 text-xs bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Phone / Mobile *
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookingForm.phone}
                          onChange={(e) => setFormData({ ...bookingForm, phone: e.target.value })}
                          placeholder="+1 (555) 000-0000"
                          className="w-full px-4 py-3 text-xs bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Organization / Company Name
                        </label>
                        <input
                          type="text"
                          value={bookingForm.organization}
                          onChange={(e) =>
                            setFormData({ ...bookingForm, organization: e.target.value })
                          }
                          placeholder="e.g. Apex Enterprises"
                          className="w-full px-4 py-3 text-xs bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Title / Executive Role
                        </label>
                        <input
                          type="text"
                          value={bookingForm.role}
                          onChange={(e) => setFormData({ ...bookingForm, role: e.target.value })}
                          placeholder="e.g. CEO, Managing Director, Board Chair"
                          className="w-full px-4 py-3 text-xs bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                          Primary Focus Area
                        </label>
                        <select
                          value={bookingForm.topic}
                          onChange={(e) => setFormData({ ...bookingForm, topic: e.target.value })}
                          className="w-full px-4 py-3 text-xs bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all text-foreground"
                        >
                          <option value="1-on-1 Executive Coaching">
                            1-on-1 Executive Coaching
                          </option>
                          <option value="Executive Team Retreat">
                            Executive Team Retreat Facilitation
                          </option>
                          <option value="Culture Strategy">
                            Culture & Organizational Strategy
                          </option>
                          <option value="Leadership Community">
                            Intentional Community Membership
                          </option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-foreground mb-2">
                        What would make this consultation most valuable for you?
                      </label>
                      <textarea
                        rows={4}
                        value={bookingForm.goals}
                        onChange={(e) => setFormData({ ...bookingForm, goals: e.target.value })}
                        placeholder="Briefly describe what you hope to explore or accomplish in our conversation..."
                        className="w-full px-4 py-3 text-xs bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                      />
                    </div>

                    <div className="pt-4 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setStep("slot")}
                        className="text-xs font-semibold text-muted-foreground hover:text-foreground"
                      >
                        ← Back to Date Selection
                      </button>

                      <button
                        type="submit"
                        className="bg-accent hover:bg-accent-glow text-accent-foreground px-8 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
                      >
                        Confirm & Reserve Consultation
                      </button>
                    </div>

                    {submitError && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-center text-xs font-medium text-red-700">
                        {submitError}
                      </p>
                    )}
                  </form>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
