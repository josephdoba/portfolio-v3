import HeroScene from "./HeroScene";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden pt-24 pb-16">
      <div className="absolute inset-0 -z-10">
        <HeroScene/>
      </div>
      <div className="max-w-5xl mx-auto px-6 font-sans py-32 pb-24">
        <main className="max-w-4xl flex flex-col items-center justify-between px-[2%] sm: items-start backdrop-blur-lg">
            <h1 className="text-6xl leading-tight tracking-tight m-8 underline decoration-[var(--color-blue)]">
              Joseph Doba
            </h1>
            <h2 className="text-xl font-mono m-8">
              Hello! I’m a freelance <strong className="underline decoration-[var(--color-orange-alt)]">Web Developer</strong> and <strong className="underline decoration-[var(--color-orange-alt)]">Cyber Security Specialist</strong>. I build and secure websites for small to medium-sized businesses.
            </h2>
        </main>
      </div >

    </section>
  );
}