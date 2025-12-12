// use these classes to show the box
//  border-5 border-solid border-[var(--color-red)]

import HeroScene from "./HeroScene";

export default function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden pt-24 pb-48">
      <div className="absolute inset-0 -z-10">
        <HeroScene/>
      </div>
      <div className="max-w-5xl mx-auto px-6 font-sans py-32">
        {/* w-stretch flex items-center justify-left font-sans border-1 border-solid border-[var(--color-red)] */}
        <main className="max-w-4xl flex-col items-center justify-between px-12 sm: items-start backdrop-blur-lg">
          {/* max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start */}
            <h1 className="text-6xl leading-tight tracking-tight m-8">
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