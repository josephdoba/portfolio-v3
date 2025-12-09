// use these classes to show the box
//  border-5 border-solid border-[var(--color-red)]

export default function HeroBanner() {
  return (
    <section className="w-full pt-24 pb-48 bg-[green]">
      <div className="max-w-5xl mx-auto px-6 font-sans">
        {/* w-stretch flex items-center justify-left font-sans border-1 border-solid border-[var(--color-red)] */}
        <main className="max-w-4xl flex-col items-center justify-between py-32 sm: items-start">
          {/* max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start */}
            <h1 className="text-5xl leading-tight tracking-tight p-4">
              Joseph AJ Doba
            </h1>
            <h2 className="text-xl font-mono p-8">
              Hello! I’m a freelance <strong>Web Developer</strong> and <strong>Cyber Security Specialist</strong>. I build and secure websites for small to medium-sized businesses.
            </h2>
        </main>
      </div >

    </section>
  );
}