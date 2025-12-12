import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="max-w-5xl mx-auto px-6 py-24 font-sans">
        {/* Top section: image + text */}
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
          {/* Avatar / photo */}
          <div className="shrink-0 mx-auto md:mx-0">
            <Link href={`/contact`}>
              <div className="relative h-48 w-48 md:h-56 md:w-56 rounded-xl overflow-hidden border border-zinc-200  shadow-sm hover:shadow-lg transform opacity-100 hover:opacity-101 hover:scale-102 transition-all duration-150 ease-in-out">
              
                <img
                  src="https://blkgithvuinfzkalmncq.supabase.co/storage/v1/object/sign/photos/me.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9kODNiNjc3Zi1lNjBjLTQ2YTgtOGM0ZS02NmY4ZWM0ZjcxZDIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJwaG90b3MvbWUucG5nIiwiaWF0IjoxNzY1NTMxOTQxLCJleHAiOjQ5MTkxMzE5NDF9.CBJnPpVG4JPqr1Pe8G8j5tcZijAcoplrL6XIJ1aVOf4"
                  alt="Joseph AJ Doba"
                />
              </div>
            </Link>
          </div>

          {/* Text content */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-4xl leading-tight tracking-tight">
              About Joseph AJ Doba
            </h1>

            <p className="text-sm font-mono text-zinc-600">
              Victoria, BC · Web Developer &amp; Cyber Security Specialist
            </p>

            <p className="text-[15px] font-mono leading-relaxed">
              I’m a freelance <strong>Web Developer</strong> and{" "}
              <strong>Cyber Security Specialist</strong> based in Victoria, BC.
              I help small and medium-sized businesses build secure, modern web
              experiences – from the first mockup through to deployment and
              ongoing hardening.
            </p>

            <p className="text-[15px] font-mono leading-relaxed">
              My background blends <strong>full-stack development</strong> and{" "}
              <strong>practical security work</strong>. I’ve completed intensive
              training in both disciplines, earning diplomas in Full-Stack Web
              Development and Cyber Security from Lighthouse Labs, along with
              the CompTIA Security+ certification. I’ve also done hands-on
              penetration testing during an internship, working with tools like
              Kali Linux, Nmap, Wireshark, Metasploit, and OpenVAS while
              following frameworks such as OWASP Top 10 and MITRE ATT&amp;CK.
            </p>

            <p className="text-[15px] font-mono leading-relaxed">
              On the web side, I work primarily with JavaScript/TypeScript,
              React, Next.js, Node.js, and PostgreSQL/Supabase. I care about
              performance, clarity, and building systems that are easy to extend
              later, not one-off hacks that are painful to maintain.
            </p>

            <p className="text-[15px] font-mono leading-relaxed">
              Before freelancing, I spent years in customer-facing and technical
              roles at companies like Shopify and PG Music. That experience
              taught me how important reliability, documentation, and clear
              communication are for real-world teams. I bring that mindset into
              every project.
            </p>

            <p className="text-[15px] font-mono leading-relaxed">
              Outside of work I’m a long-time musician and tinkerer. I’ve been
              playing with computers and the piano for about two decades, and I
              still love experimenting—whether that’s building tools in Rust,
              prototyping game ideas, or exploring new ways to visualize data
              and networks on the web.
            </p>
          </div>
        </section>

        {/* Logos / companies section */}
        <section className="mt-16">
          <h2 className="text-2xl tracking-tight mb-4">
            Professional Experience:
          </h2>

          <div className="flex flex-wrap gap-4 md:gap-6">
            {/* Replace these with real logos/images later */}
            <div className="rounded-lg border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-mono">
              Music In Communities
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-mono">
              InteGolf
            </div>
            <div className="rounded-lg border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-mono">
              Shopify
            </div>
            {/* Add more as needed */}
          </div>
        </section>
      </main>
    </div>
  );
}
