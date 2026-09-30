import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BRAND_ASSETS } from "../../../routes/__root";

const HERO_IMAGE = "/assets/images/barbara-hero.png";

export function HomeHeroMobile() {
  return (
    <section className="relative isolate flex items-end overflow-hidden bg-navy-deep text-white min-h-[560px] lg:hidden">
      {/* Full-bleed boardroom background image */}
      <img
        src={HERO_IMAGE}
        alt="Barbara Manzo Gilbert leading a strategic discussion"
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      {/* Partial-height bottom-anchored gradient: clear photo up top, navy behind copy/CTAs */}
      <div
        className="absolute inset-x-0 bottom-0 h-[62%]"
        style={{
          background:
            "linear-gradient(to top, rgba(11,19,43,0.97) 0%, rgba(11,19,43,0.93) 28%, rgba(11,19,43,0.78) 52%, rgba(11,19,43,0.38) 76%, rgba(11,19,43,0) 100%)",
        }}
      />

      {/* Hero copy — bottom-anchored, full width on mobile */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-8">
        <div className="max-w-xl space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.22em] text-gold">
            <span>Lived Experience</span>
            <span className="text-gold/40">•</span>
            <span>Real Coaching</span>
          </div>

          <h1 className="font-display text-[28px] font-bold leading-[1.1] sm:text-4xl text-white">
            Get Clear on What Comes Next.{" "}
            <span className="text-gold italic font-serif">Trust Yourself Enough to Move.</span>
          </h1>

          <p className="max-w-xl text-sm sm:text-base text-white/90 leading-relaxed">
            Cut through the noise, rebuild what matters, and take a next step that works in real
            life.
          </p>

          <div className="pt-2 flex flex-row gap-2.5">
            <Link
              to="/book"
              className="inline-flex flex-1 min-w-0 items-center justify-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-lg hover:bg-gold-deep transition-all hover:scale-[1.02]"
            >
              <span>Book a Call</span>
              <ArrowRight className="h-4 w-4 shrink-0" />
            </Link>

            <a
              href={BRAND_ASSETS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 min-w-0 items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-all hover:border-gold hover:bg-white/10"
            >
              <span>Watch Live</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
