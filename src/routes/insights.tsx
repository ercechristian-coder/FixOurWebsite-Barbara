import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Search,
  Clock,
  Calendar,
  ArrowRight,
  BookOpen,
  ChevronRight,
  Sparkles,
  Filter,
} from "lucide-react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights for the Rebuild — Intentional Impact Consulting" },
      {
        name: "description",
        content:
          "Perspectives from Barbara Manzo Gilbert to help you see a situation differently, challenge an assumption, make a clearer decision, or find something useful to do next.",
      },
      { property: "og:title", content: "Insights for the Rebuild — Intentional Impact Consulting" },
      {
        property: "og:description",
        content:
          "Insights for the part of life, work, or business you're rebuilding — useful perspective, not more noise.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

interface Article {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  featured?: boolean;
  image: string;
}

const ARTICLES: Article[] = [
  {
    id: "intentional-leadership-in-uncertainty",
    title: "Leading with Intention in Times of Rapid Transformation",
    subtitle: "How executive clarity and grounded purpose anchor teams through turbulent pivots.",
    category: "Executive Leadership",
    readTime: "6 min read",
    date: "October 14, 2025",
    author: "Barbara Manzo Gilbert",
    featured: true,
    image: "/assets/images/insight-leading-intention.png",
    excerpt:
      "When external change accelerates, reactive leadership consumes energy without creating progress. True transformation requires anchoring your core intent before dictating strategy.",
    keyTakeaways: [
      "Distinguish urgent noise from strategic signal during organizational shifts",
      "Establish non-negotiable personal anchoring practices for high-stakes decisions",
      "Communicate vision with radical clarity and grounded empathy",
    ],
    content: [
      "Leadership in seasons of volatility is rarely tested by your technical knowledge or strategic blueprints. It is tested by your capacity to remain centered when everything around you demands a knee-jerk reaction.",
      "Over two decades of partnering with senior executives and board members, I have observed that the leaders who navigate crisis with sustainable success are not those who claim to have all the answers. They are the ones who possess deep internal alignment — what I call Intentional Anchoring.",
      "When a leader operates from intention rather than reaction, they create a ripple effect throughout their organization. Calmness becomes contagious. Decision fatigue decreases. Focus crystallizes around what truly creates lasting value.",
      "To cultivate intentional leadership today, start with three core commitments: First, audit where your attention flows during high-pressure moments. Second, clarify your non-negotiable values before entering negotiations. Third, create deliberate space between stimulus and response.",
    ],
  },
  {
    id: "c-suite-decision-fatigue",
    title: "Overcoming C-Suite Decision Fatigue: The Power of Strategic Space",
    subtitle: "Protecting cognitive bandwidth and high-leverage thinking in demanding roles.",
    category: "Executive Coaching",
    readTime: "5 min read",
    date: "September 28, 2025",
    author: "Barbara Manzo Gilbert",
    image: "/assets/images/insight-decision-fatigue.png",
    excerpt:
      "The average executive makes dozens of critical decisions daily. Without structured reflection space, cognitive fatigue silently erodes intuition and strategic foresight.",
    keyTakeaways: [
      "Identify the warning signs of decision exhaustion before performance dips",
      "Implement the 'Strategic Buffer' framework for weekly calendar defense",
      "Delegate lower-stakes choices to empower middle leadership",
    ],
    content: [
      "The demands on modern executive leaders are relentless. Back-to-back calendar commitments leave virtually zero room for reflection, deep strategic synthesis, or personal replenishment.",
      "When decision fatigue sets in, leaders often resort to risk-averse default choices or impulsive directives. Strategic space is not a luxury or a reward for finishing your work — it is a foundational requirement for high-leverage execution.",
      "By establishing dedicated coaching rhythms and intentional boundary practices, executives restore their cognitive sharpness and regain enthusiasm for their vision.",
    ],
  },
  {
    id: "building-cohesive-executive-teams",
    title: "From Silos to Synergy: Building Unshakeable Executive Alignment",
    subtitle: "Fostering psychological safety and shared accountability across departmental lines.",
    category: "Organizational Culture",
    readTime: "7 min read",
    date: "August 19, 2025",
    author: "Barbara Manzo Gilbert",
    image: "/assets/images/insight-executive-alignment.png",
    excerpt:
      "High-performing individual executives do not automatically form a high-performing team. Alignment requires intentional dialogue, shared vulnerability, and unified metrics.",
    keyTakeaways: [
      "Uncover hidden agenda misalignments that stall strategic implementation",
      "Build a culture of constructive conflict and mutual trust at the top level",
      "Align functional KPIs with overarching organizational mission",
    ],
    content: [
      "An executive team operating in departmental silos creates friction that permeates every layer of the enterprise. Marketing blames sales, product blames operations, and the CEO is left refereeing internal politics.",
      "True synergy begins when leadership team members shift their primary loyalty from their functional department to the executive table itself.",
      "Through facilitated executive retreats and structured team alignment, we help leadership groups break down subtle power dynamics and establish genuine shared ownership.",
    ],
  },
  {
    id: "quiet-authority-authentic-voice",
    title: "Quiet Authority: Leading with Presence Rather Than Volume",
    subtitle:
      "Why subtle, grounded executive presence commands deeper trust than aggressive rhetoric.",
    category: "Personal Elevation",
    readTime: "4 min read",
    date: "July 05, 2025",
    author: "Barbara Manzo Gilbert",
    image: "/assets/images/insight-quiet-authority.png",
    excerpt:
      "In a world of noise, true authority is felt, not shouted. How leaders can cultivate authentic executive presence rooted in confidence, listening, and clarity.",
    keyTakeaways: [
      "Master active listening as a primary strategic instrument",
      "Align physical posture, vocal cadence, and conviction",
      "Lead high-stakes board conversations with calm assurance",
    ],
    content: [
      "There is a pervasive myth that effective executive presence requires dominant charisma and endless speaking time. In practice, the most influential leaders in any room are often those who speak with deliberate clarity and listen deeply.",
      "Quiet authority stems from self-mastery and clarity of purpose. When your internal foundation is secure, you do not need to perform or posture.",
      "Through individualized executive coaching, we help leaders strip away performative habits and step into their authentic, effortless gravitas.",
    ],
  },
  {
    id: "navigating-executive-transitions",
    title: "Navigating Executive Transitions: Your First 100 Days in Senior Leadership",
    subtitle: "Strategic roadmap for incoming CEOs, VPs, and executive board appointments.",
    category: "Career Transformation",
    readTime: "6 min read",
    date: "June 12, 2025",
    author: "Barbara Manzo Gilbert",
    image: "/assets/images/insight-executive-transitions.png",
    excerpt:
      "Stepping into a higher tier of executive leadership demands a fundamental shift in mindset — moving from tactical expertise to systemic influence and cultural stewardship.",
    keyTakeaways: [
      "Conduct listening tours that build authentic trust without prematurely committing",
      "Map key stakeholder expectations and informal influence networks",
      "Establish early momentum wins while maintaining long-term vision",
    ],
    content: [
      "The transition into senior executive roles represents one of the most vulnerable phases in a leader's career. What made you successful in previous roles will rarely guarantee success at the next level.",
      "Success in your first 100 days hinges on your ability to absorb contextual nuances, evaluate organizational readiness, and cultivate trusted relationships across board members, peers, and direct reports.",
      "Partnering with an executive coach during transition provides a confidential sounding board to process complex organizational dynamics and refine your 90-day execution strategy.",
    ],
  },
];

const CATEGORIES = [
  "All Insights",
  "Executive Leadership",
  "Executive Coaching",
  "Organizational Culture",
  "Personal Elevation",
  "Career Transformation",
];

export function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Insights");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  const featuredArticle = ARTICLES.find((a) => a.featured) ?? ARTICLES[0]!;

  const filteredArticles = ARTICLES.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Insights" || article.category === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-background min-h-screen text-foreground font-sans">
      {/* Hero Header */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-white flex items-center min-h-[500px] lg:min-h-0 lg:h-[470px] lg:max-h-[470px]">
        <img
          src="/assets/images/insights-hero.png"
          alt="Barbara Manzo Gilbert writing and reflecting in study"
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
              <BookOpen className="h-3.5 w-3.5" /> Insights for the Rebuild
            </span>
            <h1 className="font-display text-3xl font-bold leading-[1.15] sm:text-4xl lg:text-[45px] text-white">
              Insights for the part of life, work, or business you're rebuilding.
            </h1>
            <p className="max-w-xl text-sm sm:text-base text-white/90 leading-relaxed">
              You do not need more information for the sake of having more information. These
              articles are here to help you see a situation differently, challenge an assumption,
              make a clearer decision, or find something useful to do next.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 mb-16">
        <div className="bg-card rounded-2xl border border-border/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full">
            <img
              src={featuredArticle.image}
              alt={featuredArticle.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
            <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
              Start Here
            </span>
          </div>
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="text-accent font-semibold uppercase tracking-wider">
                {featuredArticle.category}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {featuredArticle.readTime}
              </span>
            </div>
            <h2
              className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-4 hover:text-primary transition-colors cursor-pointer"
              onClick={() => setActiveArticle(featuredArticle)}
            >
              {featuredArticle.title}
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
              {featuredArticle.excerpt}
            </p>
            <div className="flex items-center justify-between pt-6 border-t border-border/60 mt-auto">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary font-bold text-xs">
                  BMG
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">
                    {featuredArticle.author}
                  </div>
                  <div className="text-[11px] text-muted-foreground">{featuredArticle.date}</div>
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(featuredArticle)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary-light transition-colors"
              >
                Read Article <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Directory Bridge + Editorial Pillars */}
      <section className="max-w-3xl mx-auto px-6 mb-14 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-gold-deep">
          Read for the thing you're working through
        </p>
        <h2 className="mt-4 font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-deep leading-snug">
          Start with what you want to understand better.
        </h2>
        <div className="mt-5 space-y-3 text-sm sm:text-base leading-relaxed text-navy-deep/75">
          <p>
            Some articles will help you think about work. Some will help you think about yourself.
            Some will help you make a decision, notice a pattern, or understand why the old approach
            is no longer working.
          </p>
          <p>
            You do not have to read everything. Find the idea that meets the rebuild you're in now.
          </p>
        </div>

        <div className="mt-9">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-navy-deep/50">
            Explore the Rebuild
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            {[
              "Rebuild Your Self",
              "Rebuild Your Direction",
              "Rebuild Your Work",
              "Rebuild Your Systems",
              "Stories From the Rebuild",
            ].map((pillar) => (
              <span
                key={pillar}
                className="rounded-full border border-gold/40 bg-gold/5 px-4 py-1.5 text-xs font-semibold text-navy-deep/80"
              >
                {pillar}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-border/70">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search insights..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-xs bg-card border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-card rounded-2xl border border-dashed border-border">
            <Filter className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
            <h3 className="font-serif text-lg font-bold text-foreground">
              No articles match your criteria
            </h3>
            <p className="text-sm text-muted-foreground mt-1 mb-4">
              Try adjusting your category filter or search terms.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Insights");
                setSearchQuery("");
              }}
              className="text-xs text-primary font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-card rounded-2xl border border-border/70 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group cursor-pointer"
                onClick={() => setActiveArticle(article)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-card/90 backdrop-blur-md text-foreground text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-border/50">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-[11px] text-muted-foreground mb-3">
                    <Calendar className="w-3.5 h-3.5 text-accent" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <Clock className="w-3.5 h-3.5 text-accent" />
                    <span>{article.readTime}</span>
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                    {article.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border/60 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-muted-foreground">
                      By {article.author}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* Newsletter — The Rebuilder Letter */}
      <section className="bg-muted/40 py-20 border-t border-border/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold tracking-widest text-accent uppercase bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
            The Rebuilder Letter
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 leading-snug">
            One useful perspective for whatever you're rebuilding next.
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Get Barbara's latest thinking on confidence, decisions, work, business, setbacks, and
            starting again without pretending you have everything figured out. The goal is not more
            noise in your inbox — it is one useful idea you can carry back into real life.
          </p>
          <form
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for subscribing to The Rebuilder Letter.");
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 text-xs bg-card border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/40 shadow-sm"
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary-light text-primary-foreground px-6 py-3 rounded-xl text-xs font-semibold shadow-md transition-all whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-[11px] text-muted-foreground mt-3">
            No noise. No performance. Just useful perspective when Barbara has something worth
            sharing.
          </p>
        </div>
      </section>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
          <div className="bg-card text-card-foreground rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-border p-6 sm:p-10 relative my-8">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground p-2 rounded-full bg-muted/50 hover:bg-muted transition-colors text-xs font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>
            <div className="flex items-center gap-2 text-xs text-accent font-semibold uppercase tracking-wider mb-3">
              <span>{activeArticle.category}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-foreground mb-3 leading-tight">
              {activeArticle.title}
            </h2>
            <p className="text-muted-foreground text-sm font-light mb-6 italic">
              {activeArticle.subtitle}
            </p>
            <div className="flex items-center gap-3 py-3 border-y border-border/60 mb-8">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary font-bold text-xs">
                BMG
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">{activeArticle.author}</div>
                <div className="text-[11px] text-muted-foreground">{activeArticle.date}</div>
              </div>
            </div>

            <div className="mb-8 rounded-xl overflow-hidden max-h-72">
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Key Takeaways Box */}
            <div className="bg-muted/50 rounded-xl p-5 border border-border/80 mb-8">
              <h4 className="font-serif text-sm font-bold text-foreground mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" /> Key Insights & Action Points
              </h4>
              <ul className="space-y-2">
                {activeArticle.keyTakeaways.map((takeaway, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed"
                  >
                    <span className="text-accent font-bold">•</span>
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Article Content */}
            <div className="space-y-4 text-sm text-foreground/90 leading-relaxed font-sans mb-10">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Footer CTA */}
            <div className="pt-6 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-muted-foreground">
                If this perspective meets something you're working through, let's talk about it.
              </div>
              <div className="flex items-center gap-3">
                <Link
                  to="/book"
                  onClick={() => setActiveArticle(null)}
                  className="bg-accent hover:bg-accent-glow text-accent-foreground px-5 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-sm"
                >
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
