import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="max-w-5xl mx-auto px-6 py-24 font-sans">
        <section className="flex flex-col md:flex-row items-start gap-10 md:gap-14">
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

          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-4xl leading-tight tracking-tight underline decoration-[var(--color-blue)]">
              Who is Joseph Doba?
            </h1>

            <p className="text-sm font-mono text-zinc-600">
              Full-Stack Web Developer · Cyber Security Specialist
            </p>

            <p className="text-[15px] font-mono leading-relaxed">
              I help small and medium-sized businesses ship secure, modern web experiences from
              first mockup through deployment. I also conduct cyber security audits and look for vulnerabilities in your systems before the baddies do. 
            </p>

            <p className="text-[15px] font-mono leading-relaxed">
              I hold diplomas in Full-Stack Web Development and Cyber Security from Lighthouse Labs, and CompTIA Security+ certified. I&apos;ve used tools like Kali Linux, Nmap, Wireshark,
              Metasploit, and OpenVAS while following best practices from OWASP Top 10, NIST, and MITRE
              ATT&amp;CK. Before freelancing I worked in customer-facing roles at companies like Shopify, which taught me how to solve complex problems.
            </p>

            <p className="text-[15px] font-mono leading-relaxed">
              Outside of work, I enjoy creating music and tinkering with computers. I'm currently learning Rust, video-game design, and art.
            </p>
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl tracking-tight mb-4">
            Professional Experience:
          </h2>

          <div className="flex flex-wrap gap-4 md:gap-6">
            <a href="https://musicincommunities.com/">
              <div className="rounded-lg border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-mono shadow-sm hover:shadow-lg transform opacity-100 hover:opacity-101 hover:scale-102 transition-all duration-150 ease-in-out">
                
                Music In Communities
              </div>
            </a>

            <a href="https://www.integolf.com/">            
              <div className="rounded-lg border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-mono shadow-sm hover:shadow-lg transform opacity-100 hover:opacity-101 hover:scale-102 transition-all duration-150 ease-in-out">
                InteGolf
              </div>
            </a>
            
            <a href="https://www.shopify.com/">
              <div className="rounded-lg border border-zinc-200 bg-white/80 px-4 py-3 text-sm font-mono shadow-sm hover:shadow-lg transform opacity-100 hover:opacity-101 hover:scale-102 transition-all duration-150 ease-in-out">
                Shopify
              </div>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
