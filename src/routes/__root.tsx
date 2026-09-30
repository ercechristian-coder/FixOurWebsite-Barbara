import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Linkedin, Mail, Menu, X, ArrowRight } from "lucide-react";

export const BRAND_ASSETS = {
  favicon: "/assets/images/intentional-impact-logo.png",
  logo: "/assets/images/intentional-impact-logo.png",
  barbaraPortrait: "/assets/images/barbara-portrait.png",
  socialShareImage: "/assets/images/barbara-portrait.png",
  quoteIcon: "/assets/images/quote-icon.png",
  fbIcon: "/assets/images/facebook-icon.png",
  facebookUrl: "https://www.facebook.com/profile.php?id=61589920620680",
  linkedinUrl:
    "https://www.linkedin.com/in/barbara-gilbert-83276829?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  xUrl: "https://x.com/kinnexor?s=11&t=J3KSTyaJhRRIGtjtF_WQfw",
  tiktokUrl: "https://www.tiktok.com/@barbaramanzogilbe?_r=1&_t=ZT-980JsgdrSbV",
  email: "Intentionalimpactconsulting@gmail.com",
};

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/community", label: "Community" },
    { to: "/insights", label: "Insights" },
    { to: "/testimonials", label: "Testimonials" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-navy-deep/10 bg-white/90 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3.5 group">
          <img
            src={BRAND_ASSETS.logo}
            alt="Intentional Impact Consulting"
            width={56}
            height={56}
            className="h-12 w-12 rounded-full object-cover shadow-sm ring-2 ring-gold/30 transition-transform duration-300 group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-display text-lg font-bold tracking-tight text-navy-deep leading-snug">
              Intentional Impact
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-gold-deep -mt-0.5">
              Consulting
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{
                className:
                  "text-gold-deep font-semibold underline underline-offset-8 decoration-2 decoration-gold",
              }}
              inactiveProps={{
                className: "text-navy-deep/80 hover:text-gold-deep font-medium",
              }}
              className="text-sm tracking-wide transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Header CTAs */}
        <div className="flex items-center gap-3">
          <a
            href="/book"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy-deep shadow-sm transition-all hover:bg-gold-deep hover:shadow-md md:inline-flex items-center gap-1.5"
          >
            <span>Book Consultation</span>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-navy-deep hover:bg-navy-deep/5 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-navy-deep/10 bg-white px-6 py-6 lg:hidden animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                activeOptions={{ exact: link.to === "/" }}
                activeProps={{
                  className: "text-gold-deep font-bold pl-2 border-l-2 border-gold",
                }}
                inactiveProps={{
                  className: "text-navy-deep/80 hover:text-gold-deep font-medium pl-2",
                }}
                className="py-1 text-base tracking-wide transition-all"
              >
                {link.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3 pt-4 border-t border-navy-deep/10">
              <a
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gold py-3 text-center text-sm font-bold text-navy-deep shadow-md"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3 lg:px-8">
        {/* Column 1: Brand Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-3.5">
            <img
              src={BRAND_ASSETS.logo}
              alt="Intentional Impact Consulting"
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover ring-2 ring-white/20"
            />
            <div>
              <h3 className="font-display text-xl font-bold text-white tracking-tight">
                Intentional Impact
              </h3>
              <p className="text-xs uppercase tracking-widest text-gold font-semibold">
                Consulting
              </p>
            </div>
          </div>

          <p className="max-w-sm text-sm leading-relaxed text-white/75">
            <strong className="text-white font-medium">Real coaching for real life.</strong> Helping
            people rebuild confidence, clarity, and business from someone who has lived it.
          </p>

          <div className="pt-2">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold hover:text-white transition-colors"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Explore</h4>
          <ul className="mt-5 space-y-2.5 text-sm">
            {[
              { to: "/about", label: "About Barbara" },
              { to: "/services", label: "Coaching Services" },
              { to: "/community", label: "The Rebuilders Community" },
              { to: "/insights", label: "Insights & Writing" },
              { to: "/testimonials", label: "Client Testimonials" },
              { to: "/contact", label: "Contact Barbara" },
              { to: "/book", label: "Book a Free Consultation" },
            ].map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-white/75 transition-colors hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Social & Contact */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Connect</h4>

          <div className="mt-5 space-y-3.5 text-sm">
            <a
              href={`mailto:${BRAND_ASSETS.email}`}
              className="flex items-center gap-3 text-white/80 hover:text-gold transition-colors"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15">
                <Mail className="h-4 w-4" />
              </div>
              <span className="truncate">{BRAND_ASSETS.email}</span>
            </a>

            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={BRAND_ASSETS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:bg-[#1877F2] hover:border-transparent hover:scale-105"
              >
                <Facebook className="h-4 w-4" />
              </a>

              <a
                href={BRAND_ASSETS.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:bg-[#0A66C2] hover:border-transparent hover:scale-105"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href={BRAND_ASSETS.xUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (formerly Twitter)"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:bg-black hover:border-transparent hover:scale-105 font-bold text-xs"
              >
                X
              </a>

              <a
                href={BRAND_ASSETS.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition-all hover:bg-black hover:border-transparent hover:scale-105 text-xs font-bold"
              >
                TT
              </a>
            </div>

            <div className="pt-3">
              <a
                href={BRAND_ASSETS.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white/70 hover:text-gold transition-colors"
              >
                <span>Watch The Rebuild Live on Facebook</span>
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 md:flex-row lg:px-8 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Intentional Impact Consulting. All rights reserved.</p>
          <p className="text-center md:text-right">
            Barbara Manzo Gilbert · Intentional Impact Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream px-4 py-20">
      <div className="max-w-md text-center">
        <span className="font-display text-8xl font-bold text-gold-deep">404</span>
        <h1 className="mt-4 font-display text-2xl font-bold text-navy-deep">Page not found</h1>
        <p className="mt-3 text-sm leading-relaxed text-navy-deep/70">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy-deep shadow-md hover:bg-gold-deep transition-all"
          >
            Return Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-full border border-navy-deep/20 bg-white px-6 py-3 text-sm font-semibold text-navy-deep hover:bg-navy-deep/5 transition-all"
          >
            Contact Barbara
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold text-navy-deep">
          This page didn't load properly
        </h1>
        <p className="mt-3 text-sm text-navy-deep/70">
          Something went wrong on our end. You can try refreshing or heading back home.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-navy-deep shadow transition-colors hover:bg-gold-deep"
          >
            Try again
          </button>
          <Link
            to="/"
            className="rounded-full border border-navy-deep/20 bg-white px-6 py-2.5 text-sm font-semibold text-navy-deep hover:bg-accent"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Intentional Impact Consulting — Barbara Manzo Gilbert" },
      {
        name: "description",
        content:
          "Real coaching for real life. Helping you rebuild your life, your confidence, and your business with Barbara Manzo Gilbert.",
      },
      { name: "author", content: "Barbara Manzo Gilbert" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", type: "image/png", href: BRAND_ASSETS.favicon },
      { rel: "apple-touch-icon", href: BRAND_ASSETS.favicon },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}
