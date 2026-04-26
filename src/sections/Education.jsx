const educations = [
  {
     period: "2023 — 2027",
    degree: "B.Tech — Computer Science & Engineering",
    institution: "Lovely Professional University",
    description:
      "Currently pursuing a Bachelor's in Computer Science, focusing on software development, data structures, algorithms, and modern web technologies. Actively building real-world projects alongside academics.",
    grade: "8.1 CGPA",
    board: "LPU",
    current: true,
    spineColor: "from-primary/80 to-primary/90",
    spineAccent: "bg-primary",
  },
  {
    period: "2020 — 2022",
    degree: "Senior Secondary (12th)",
    institution: "OP Jindal School, Patratu",
    description:
      "Pursued the Science stream (PCM) under CBSE, deepening expertise in Physics, Chemistry, and Mathematics. Developed strong problem-solving capabilities that laid the groundwork for computer science.",
    grade: "83%",
    board: "CBSE",
    current: false,
    spineColor: "from-teal-700 to-teal-900",
    spineAccent: "bg-teal-400",
  },
  {
    period: "2019 — 2020",
    degree: "Secondary Education (10th)",
    institution: "DAV Public School, Urimari",
    description:
      "Completed secondary schooling under the CBSE curriculum with a strong foundation in Science and Mathematics, building the analytical skills that would later fuel a passion for engineering.",
    grade: "72%",
    board: "CBSE",
    current: false,
    spineColor: "from-amber-700 to-amber-900",
    spineAccent: "bg-amber-500",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Education that{" "}
            <span className="font-serif italic font-normal text-white">
              shaped the engineer.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A path of continuous learning — from foundational schooling to
            pursuing a degree in Computer Science, each step building toward a
            future in technology.
          </p>
        </div>

        {/* Book Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="animate-fade-in group"
              style={{ animationDelay: `${(idx + 1) * 150}ms` }}
            >
              <div className="relative flex h-full" style={{ perspective: "800px" }}>

                {/* Book Spine */}
                <div
                  className={`w-5 flex-shrink-0 rounded-l-sm bg-gradient-to-b ${edu.spineColor} flex flex-col items-center justify-center py-4 gap-2 shadow-[-3px_3px_10px_rgba(0,0,0,0.4)] relative overflow-hidden`}
                >
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/20" />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-white/20" />
                  <div className={`w-2 h-2 rounded-full ${edu.spineAccent} opacity-80`} />
                </div>

                {/* Book Cover / Content */}
                <div
                  className="flex-1 glass border border-primary/30 group-hover:border-primary/60 transition-all duration-500 rounded-r-xl rounded-l-none overflow-hidden flex flex-col group-hover:shadow-[4px_8px_32px_rgba(32,178,170,0.15)]"
                >
                  {/* Top color band */}
                  <div className={`h-1 w-full bg-gradient-to-r ${edu.spineColor}`} />

                  {/* Card body */}
                  <div className="p-6 flex flex-col flex-1">

                    {/* Period + current badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-primary font-medium tracking-wide">
                        {edu.period}
                      </span>
                      {edu.current && (
                        <span className="px-2 py-0.5 bg-primary/10 text-[10px] rounded-full text-primary border border-primary/40 font-medium animate-pulse">
                          Ongoing
                        </span>
                      )}
                    </div>

                    {/* Degree title */}
                    <h3 className="text-base font-semibold text-white leading-snug mb-1">
                      {edu.degree}
                    </h3>

                    {/* Institution */}
                    <p className="text-sm text-muted-foreground mb-4">
                      {edu.institution}
                    </p>

                    {/* Decorative divider */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="h-[1px] flex-1 bg-primary/20" />
                      <div className="w-1 h-1 rounded-full bg-primary/40" />
                      <div className="h-[1px] flex-1 bg-primary/20" />
                    </div>

                    {/* Description */}
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                      {edu.description}
                    </p>

                    {/* Grade + Board pills */}
                    <div className="mt-5 flex items-center gap-2">
                      <span className="px-3 py-1 bg-surface text-xs rounded-full text-primary border border-primary/30 font-semibold">
                        {edu.grade}
                      </span>
                      <span className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground border border-white/10">
                        {edu.board}
                      </span>
                    </div>
                  </div>

                  {/* Bottom page-edge effect */}
                  <div className="h-2 bg-gradient-to-r from-transparent via-white/5 to-white/10 border-t border-white/5" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};