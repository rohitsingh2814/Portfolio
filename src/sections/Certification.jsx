import { ExternalLink } from "lucide-react";

// ── Certification Data ──────────────────────────────────────
// Edit/add entries here — grid auto-fills, 4 per row on desktop.
const certifications = [
  {
    title: "React.js",
    issuer: "Scaler School",
    date: "2025",
    description: "Core React.js to build scalable client side.",
    image: "cerficates/react,js_page-0001.jpg",
    url: "#",
  },
  {
    title: "Meta Databases",
    issuer: "Meta (Coursera)",
    date: "2024",
    description: "Build scalable databases for promgram and flow sql and nosql.",
    image: "public/cerficates/databases.jpg",
    url: "#",
  },
  {
    title: "Computer networking",
    issuer: "Google (cousera)",
    date: "2024",
    description: "TCP, OSI Layer ,Subneting ,establisment of scalable networing system",
    image: "cerficates/computer_networking.jpg",
    url: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2023",
    description: "HTML5, CSS3, Flexbox, Grid, and accessible layouts.",
    image: "public/cerficates/image.png",
    url: "#",
  },
  {
    title: "Hardware implentation and OS",
    issuer: "IBM (Coursera)",
    date: "2024",
    description: "OS and its components ,Kernel design ,Process state",
    image: "cerficates/hardware_operating.jpg",
    url: "#",
  },
  {
    title: "software Testing.",
    issuer: "coursera",
    date: "2023",
    description: "Testing fundamentals and levels ,Test automation.",
    image: "public/cerficates/software_testing.jpg",
    url: "#",
  },
  {
    title: "Python",
    issuer: "HackerRank",
    date: "2023",
    description: "Pytnon fundamentals and Logic-building across data structures & algorithms.",
    image: "public/cerficates/python.png",
    url: "#",
  },
  {
    title: "Git & GitHub Essentials",
    issuer: "Infosys SpringBoard",
    date: "2025",
    description: "Branching, pull requests, and collaborative dev.",
    image: "https://placehold.co/400x240/0f172a/20b2a6?text=Git+%26+GitHub",
    url: "#",
  },
];

export const Certification = () => {
  return (
    <section id="certification" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certification
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Credentials that{" "}
            <span className="font-serif italic font-normal text-white">
              back it up.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Courses and certifications I've completed along the way — each
            one links out to the original credential.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <a
              key={idx}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 flex flex-col overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx % 4) * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-primary/5">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 flex flex-col flex-1">
                {/* Date */}
                <span className="text-xs text-muted-foreground mb-2">
                  {cert.date}
                </span>

                {/* Title & Issuer */}
                <h3 className="text-base font-semibold leading-snug mb-1 group-hover:text-primary transition-colors duration-300">
                  {cert.title}
                </h3>
                <p className="text-sm text-primary/80 mb-2">{cert.issuer}</p>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {cert.description}
                </p>

                {/* Link */}
                <div className="flex items-center gap-2 mt-4 text-xs font-medium text-secondary-foreground group-hover:text-primary transition-colors duration-300">
                  View certificate
                  <ExternalLink className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

