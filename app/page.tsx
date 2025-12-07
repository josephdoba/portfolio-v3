export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-90 font-sans">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-4xl leading-10 tracking-tight">
            Joseph AJ Doba
          </h1>
          <h2 className="text-lg font-sans">
            Full-Stack Web Developer and Cyber Security Specialist.
          </h2>
          <p className="text-medium font-mono">
            Hello! I’m a freelance developer who builds and secures websites for small and medium-sized businesses.
          </p>
        </div>
      </main >
    </div >
  );
}
