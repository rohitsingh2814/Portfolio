import { useEffect, useState } from "react";
import { ExternalLink, Loader, AlertCircle, TrendingUp } from "lucide-react";

// ── Usernames ──────────────────────────────────────────────
const GITHUB_USERNAME = "rohitsingh2814";
const LEETCODE_USERNAME = "rohitkrsingh2814";
const GFG_USERNAME = "rohitsingh7cl26";

// ── Hardcoded Stats ────────────────────────────────────────
const GFG_STATS = {
  codingScore: 18,
  problemsSolved: 12,
  instituteRank: 14209,
  basic: 5,
  easy: 6,
  medium: 1,
  hard: 0,
  url: `https://www.geeksforgeeks.org/profile/${GFG_USERNAME}`,
};

const HACKERRANK_STATS = {
  stars: 3,
  badges: 5,
  problemsSolved: 40,
  levels: [
    { label: "Problem Solving", stars: 3, max: 5 },
    { label: "Python", stars: 2, max: 5 },
    { label: "SQL", stars: 3, max: 5 },
    { label: "Java", stars: 1, max: 5 },
  ],
  url: "https://www.hackerrank.com/",
};

const CODECHEF_STATS = {
  rating: 1200,
  stars: 2,
  problemsSolved: 35,
  divisions: [
    { label: "Div 4", solved: 20, color: "#22c55e" },
    { label: "Div 3", solved: 10, color: "#eab308" },
    { label: "Div 2", solved: 5, color: "#f97316" },
  ],
  url: "https://www.codechef.com/",
};

// ── Platform Definitions ───────────────────────────────────
const PLATFORMS = [
  {
    id: "leetcode",
    name: "LeetCode",
    accent: "#f97316",
    bg: "rgba(249,115,22,0.08)",
    border: "rgba(249,115,22,0.35)",
    url: `https://leetcode.com/u/${LEETCODE_USERNAME}/`,
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
  },
  {
    id: "github",
    name: "GitHub",
    accent: "#e2e8f0",
    bg: "rgba(226,232,240,0.06)",
    border: "rgba(226,232,240,0.2)",
    url: `https://github.com/${GITHUB_USERNAME}`,
    logo: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
  {
    id: "gfg",
    name: "GeeksforGeeks",
    accent: "#22c55e",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.3)",
    url: GFG_STATS.url,
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    accent: "#10b981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.3)",
    url: HACKERRANK_STATS.url,
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
  },
  {
    id: "codechef",
    name: "CodeChef",
    accent: "#f59e0b",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.3)",
    url: CODECHEF_STATS.url,
    logo: "https://cdn.codechef.com/images/cc-logo.svg",
  },
];

// ── Responsive Tab Styles (injected once) ──────────────────
const TAB_STYLES = `
  .cs-tab-bar {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    border-bottom: 1px solid rgba(255,255,255,0.06);
    padding: 14px 16px 0;
  }
  .cs-tab-btn {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 9px 14px;
    border-radius: 10px 10px 0 0;
    border: none;
    background: transparent;
    cursor: pointer;
    transition: all 0.25s ease;
    border-bottom: 2px solid transparent;
    flex-shrink: 0;
    outline: none;
  }
  .cs-tab-label {
    font-size: 12px;
    white-space: nowrap;
    transition: color 0.2s;
  }
  /* Medium screens: tighten padding */
  @media (max-width: 640px) {
    .cs-tab-btn {
      padding: 8px 10px;
      gap: 5px;
    }
    .cs-tab-label {
      font-size: 11px;
    }
  }
  /* Small screens: hide labels, show icons only */
  @media (max-width: 400px) {
    .cs-tab-label {
      display: none;
    }
    .cs-tab-btn {
      padding: 8px 10px;
    }
  }
`;

// ── Difficulty Progress Bar ────────────────────────────────
const DiffBar = ({ label, value, total, color, textColor }) => {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;
  return (
    <div style={{ marginBottom: "12px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
        <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{label}</span>
        <span style={{ fontSize: "12px", fontWeight: 500, color: textColor || color }}>
          {value}{" "}
          <span style={{ color: "var(--color-text-secondary)", fontWeight: 400 }}>/ {total}</span>
        </span>
      </div>
      <div style={{ height: "6px", background: "rgba(255,255,255,0.07)", borderRadius: "99px", overflow: "hidden" }}>
        <div
          style={{
            height: "100%",
            width: `${pct}%`,
            background: color,
            borderRadius: "99px",
            transition: "width 1s ease",
          }}
        />
      </div>
    </div>
  );
};

// ── Star Rating ────────────────────────────────────────────
const StarRating = ({ stars, max = 5, color }) => (
  <div style={{ display: "flex", gap: "3px" }}>
    {Array.from({ length: max }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < stars ? color : "rgba(255,255,255,0.1)"}>
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ))}
  </div>
);

// ── Stat Number Box ────────────────────────────────────────
const StatNum = ({ label, value, accent }) => (
  <div
    style={{
      background: "rgba(255,255,255,0.04)",
      border: "0.5px solid rgba(255,255,255,0.08)",
      borderRadius: "10px",
      padding: "12px 14px",
      flex: 1,
      minWidth: "80px",
    }}
  >
    <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>{label}</div>
    <div style={{ fontSize: "20px", fontWeight: 500, color: accent }}>{value}</div>
  </div>
);

// ── Section Label ──────────────────────────────────────────
const SectionLabel = ({ children }) => (
  <div
    style={{
      marginBottom: "8px",
      fontSize: "11px",
      color: "var(--color-text-secondary)",
      fontWeight: 500,
      letterSpacing: "0.07em",
      textTransform: "uppercase",
    }}
  >
    {children}
  </div>
);

// ── Loading State ──────────────────────────────────────────
const LoadingState = () => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "48px 0",
      gap: "12px",
    }}
  >
    <Loader
      style={{
        width: 28,
        height: 28,
        color: "var(--color-text-secondary)",
        animation: "spin 1s linear infinite",
      }}
    />
    <span style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
      Fetching live stats...
    </span>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

// ── Error State ────────────────────────────────────────────
const ErrorState = ({ platform, msg }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 0",
      gap: "12px",
      textAlign: "center",
    }}
  >
    <AlertCircle style={{ width: 28, height: 28, color: "#ef4444" }} />
    <p
      style={{
        fontSize: "13px",
        color: "var(--color-text-secondary)",
        maxWidth: "280px",
        lineHeight: 1.6,
        margin: 0,
      }}
    >
      {msg}
    </p>
    <a
      href={platform.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        fontSize: "12px",
        color: platform.accent,
        display: "flex",
        alignItems: "center",
        gap: "4px",
        textDecoration: "none",
      }}
    >
      View profile <ExternalLink style={{ width: 12, height: 12 }} />
    </a>
  </div>
);

// ── LeetCode Panel ─────────────────────────────────────────
const LeetCodePanel = ({ platform }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            submitStatsGlobal { acSubmissionNum { difficulty count } }
            profile { ranking }
          }
        }`,
        variables: { username: LEETCODE_USERNAME },
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        const stats = d?.data?.matchedUser?.submitStatsGlobal?.acSubmissionNum;
        const ranking = d?.data?.matchedUser?.profile?.ranking;
        if (!stats) throw new Error();
        const easy = stats.find((s) => s.difficulty === "Easy")?.count ?? 0;
        const med = stats.find((s) => s.difficulty === "Medium")?.count ?? 0;
        const hard = stats.find((s) => s.difficulty === "Hard")?.count ?? 0;
        setData({ easy, med, hard, total: easy + med + hard, ranking });
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState />;
  if (error)
    return (
      <ErrorState
        platform={platform}
        msg="LeetCode GraphQL is blocked on localhost. Stats will appear on your deployed site."
      />
    );

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "24px", flexWrap: "wrap" }}>
        <StatNum label="Total Solved" value={data.total} accent={platform.accent} />
        <StatNum
          label="Global Rank"
          value={data.ranking ? `#${data.ranking.toLocaleString()}` : "—"}
          accent={platform.accent}
        />
      </div>
      <SectionLabel>Difficulty Breakdown</SectionLabel>
      <DiffBar label="Easy" value={data.easy} total={data.total} color="#22c55e" textColor="#22c55e" />
      <DiffBar label="Medium" value={data.med} total={data.total} color="#eab308" textColor="#eab308" />
      <DiffBar label="Hard" value={data.hard} total={data.total} color="#ef4444" textColor="#ef4444" />
    </div>
  );
};

// ── GitHub Panel ───────────────────────────────────────────
const GitHubPanel = ({ platform }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
      .then((r) => r.json())
      .then((d) => {
        if (d.message) throw new Error();
        setData(d);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingState />;
  if (error) return <ErrorState platform={platform} msg="Could not reach GitHub API." />;

  const langs = ["JavaScript", "TypeScript", "Python", "C++", "Java"];
  const fakePcts = [40, 25, 20, 10, 5];

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "24px", flexWrap: "wrap" }}>
        <StatNum label="Public Repos" value={data.public_repos} accent={platform.accent} />
        <StatNum label="Followers" value={data.followers} accent={platform.accent} />
        <StatNum label="Following" value={data.following} accent={platform.accent} />
      </div>
      <SectionLabel>Top Languages (estimated)</SectionLabel>
      {langs.map((lang, i) => (
        <DiffBar key={lang} label={lang} value={fakePcts[i]} total={100} color={platform.accent} />
      ))}
    </div>
  );
};

// ── GFG Panel (hardcoded) ──────────────────────────────────
const GFGPanel = ({ platform }) => (
  <div>
    <div style={{ display: "flex", gap: "10px", marginBottom: "24px", flexWrap: "wrap" }}>
      <StatNum label="Problems Solved" value={GFG_STATS.problemsSolved} accent={platform.accent} />
      <StatNum label="Coding Score" value={GFG_STATS.codingScore} accent={platform.accent} />
      <StatNum
        label="Institute Rank"
        value={`#${GFG_STATS.instituteRank.toLocaleString()}`}
        accent={platform.accent}
      />
    </div>
    <SectionLabel>Difficulty Breakdown</SectionLabel>
    <DiffBar label="Basic" value={GFG_STATS.basic} total={GFG_STATS.problemsSolved} color="#60a5fa" textColor="#60a5fa" />
    <DiffBar label="Easy" value={GFG_STATS.easy} total={GFG_STATS.problemsSolved} color="#22c55e" textColor="#22c55e" />
    <DiffBar label="Medium" value={GFG_STATS.medium} total={GFG_STATS.problemsSolved} color="#eab308" textColor="#eab308" />
    <DiffBar label="Hard" value={GFG_STATS.hard} total={GFG_STATS.problemsSolved} color="#ef4444" textColor="#ef4444" />
  </div>
);

// ── HackerRank Panel (hardcoded) ───────────────────────────
const HackerRankPanel = ({ platform }) => (
  <div>
    <div style={{ display: "flex", gap: "10px", marginBottom: "24px", flexWrap: "wrap" }}>
      <StatNum label="Problems Solved" value={HACKERRANK_STATS.problemsSolved} accent={platform.accent} />
      <StatNum label="Badges" value={HACKERRANK_STATS.badges} accent={platform.accent} />
    </div>
    <SectionLabel>Skill Stars</SectionLabel>
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {HACKERRANK_STATS.levels.map((lvl) => (
        <div
          key={lvl.label}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            background: "rgba(255,255,255,0.03)",
            borderRadius: "8px",
            padding: "10px 14px",
            border: "0.5px solid rgba(255,255,255,0.07)",
          }}
        >
          <span style={{ fontSize: "13px", color: "var(--color-text-primary)" }}>{lvl.label}</span>
          <StarRating stars={lvl.stars} max={lvl.max} color={platform.accent} />
        </div>
      ))}
    </div>
  </div>
);

// ── CodeChef Panel (hardcoded) ─────────────────────────────
const CodeChefPanel = ({ platform }) => (
  <div>
    <div style={{ display: "flex", gap: "10px", marginBottom: "24px", flexWrap: "wrap" }}>
      <StatNum label="Rating" value={CODECHEF_STATS.rating} accent={platform.accent} />
      <StatNum label="Problems Solved" value={CODECHEF_STATS.problemsSolved} accent={platform.accent} />
      <StatNum
        label="Stars"
        value={`${"★".repeat(CODECHEF_STATS.stars)}${"☆".repeat(5 - CODECHEF_STATS.stars)}`}
        accent={platform.accent}
      />
    </div>
    <SectionLabel>Contest Participation</SectionLabel>
    {CODECHEF_STATS.divisions.map((d) => (
      <DiffBar
        key={d.label}
        label={d.label}
        value={d.solved}
        total={CODECHEF_STATS.problemsSolved}
        color={d.color}
        textColor={d.color}
      />
    ))}
  </div>
);

// ── Main Section ───────────────────────────────────────────
export const CodingStats = () => {
  const [active, setActive] = useState("leetcode");
  const platform = PLATFORMS.find((p) => p.id === active);

  const panels = {
    leetcode: LeetCodePanel,
    github: GitHubPanel,
    gfg: GFGPanel,
    hackerrank: HackerRankPanel,
    codechef: CodeChefPanel,
  };

  const Panel = panels[active];
  const isLive = ["leetcode", "github"].includes(active);

  return (
    <section id="stats" className="py-32 relative overflow-hidden">
      {/* Inject responsive tab styles */}
      <style>{TAB_STYLES}</style>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Coding Activity
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Stats that{" "}
            <span className="font-serif italic font-normal text-white">
              speak for themselves.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Live stats pulled from my coding profiles — click a platform to explore.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-4xl mx-auto animate-fade-in animation-delay-300">
          <div
            className="glass rounded-3xl overflow-hidden"
            style={{
              border: `1px solid ${platform.border}`,
              transition: "border-color 0.4s ease",
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                height: "2px",
                background: `linear-gradient(90deg, transparent, ${platform.accent}, transparent)`,
                transition: "background 0.4s ease",
              }}
            />

            {/* Platform Tab Bar — flex-wrap removes scrollbar */}
            <div className="cs-tab-bar">
              {PLATFORMS.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setActive(p.id)}
                  className="cs-tab-btn"
                  style={{
                    background: active === p.id ? p.bg : "transparent",
                    borderBottomColor: active === p.id ? p.accent : "transparent",
                  }}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 5,
                      overflow: "hidden",
                      background: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 2,
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src={p.logo}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "contain" }}
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </div>
                  <span
                    className="cs-tab-label"
                    style={{
                      fontWeight: active === p.id ? 500 : 400,
                      color: active === p.id ? p.accent : "var(--color-text-secondary)",
                    }}
                  >
                    {p.name}
                  </span>
                </button>
              ))}
            </div>

            {/* Panel Header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "20px 24px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <TrendingUp style={{ width: 16, height: 16, color: platform.accent }} />
                <span style={{ fontSize: "14px", fontWeight: 500, color: "var(--color-text-primary)" }}>
                  {platform.name} Overview
                </span>
              </div>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "11px",
                  color: platform.accent,
                  textDecoration: "none",
                  opacity: 0.8,
                }}
              >
                View Profile <ExternalLink style={{ width: 11, height: 11 }} />
              </a>
            </div>

            {/* Stats Panel */}
            <div style={{ padding: "0 24px 28px", minHeight: "280px" }}>
              <Panel platform={platform} key={active} />
            </div>

            {/* Footer */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.05)",
                padding: "12px 24px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
             
              <div style={{ display: "flex", gap: "4px" }}>
                {PLATFORMS.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setActive(p.id)}
                    style={{
                      width: active === p.id ? "20px" : "6px",
                      height: "6px",
                      borderRadius: "99px",
                      background: active === p.id ? p.accent : "rgba(255,255,255,0.15)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};