// use these classes to show the box
//  border-5 border-solid border-[var(--color-red)]

export default function HeroBanner() {
  return (
    <div className="items-center justify-center bg-zinc-90 font-sans">
      <main className=" w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-s text-5xl leading-1 tracking-tight">
            Joseph AJ Doba
          </h1>
          <h2 className="text-lg font-mono p-5 max-w-s">
            Hello! I’m a freelance <strong>Web Developer</strong> and <strong>Cyber Security Specialist</strong> who builds and secures websites for small and medium-sized businesses.
          </h2>
        </div>
      </main>
    </div >
  );
}