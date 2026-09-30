import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BRAND_ASSETS } from "../../../routes/__root";

const HERO_IMAGE = "/assets/images/barbara-hero.png";

export function HomeHeroDesktop() {
  return (
    <section className="relative isolate hidden overflow-hidden bg-navy-deep text-white lg:flex lg:items-center lg:min-h-0 lg:h-[470px] lg:max-h-[470px]">
      {/* Full-bleed boardroom background image */}
      <img
        src={HERO_IMAGE}
        alt="Barbara Manzo Gilbert leading a strategic discussion"
        className="absolute inset-0 h-full w-full object-cover object-[78%_center]"
      />
      {/* Left-to-right dark gradient overlay: very dark behind copy, fading to clear over Barbara */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(11,19,43,0.96) 0%, rgba(11,19,43,0.90) 30%, rgba(11,19,43,0.78) 45%, rgba(11,19,43,0.50) 58%, rgba(11,19,43,0.18) 72%, rgba(11,19,43,0.05) 84%, rgba(11,19,43,0) 100%)",
        }}
      />

      {/* Hero copy — left aligned, ~50% width on desktop */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8">
        <div className="max-w-[50%] space-y-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.22em] text-gold">
            <span>Lived Experience</span>
            <span className="text-gold/40">•</span>
            <span>Real Coaching</span>
          </div>

          <h1 className="font-display text-[45px] font-bold leading-[1.12] text-white">
            Get Clear on What Comes Next.{" "}
            <span className="text-gold italic font-serif">Trust Yourself Enough to Move.</span>
          </h1>

          <p className="max-w-xl text-base text-white/90 leading-relaxed">
            When life, confidence, or business no longer feels like it fits, Barbara helps you cut
            through the noise, see what needs rebuilding, and find a next step that works in real
            life.
          </p>

          <div className="pt-2 flex flex-row gap-3">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-bold text-navy-deep shadow-lg hover:bg-gold-deep transition-all hover:scale-[1.02]"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>

            <a
              href={BRAND_ASSETS.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-gold hover:bg-white/10"
            >
              <span>Watch The Rebuild Live</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
