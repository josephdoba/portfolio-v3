// use these classes to show the box
//  border-5 border-solid border-[var(--color-red)]

export default function HeroBanner() {
  return (
    <div className="flex items-center justify-left font-sans">
      <main className=" w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
      
        <div className="">
          <h1 className="text-4xl leading-tight tracking-tight">
            Joseph AJ Doba
          </h1>
          <h2 className="text-xl font-mono p-10">
            Hello! I’m a freelance <strong>Web Developer</strong> and <strong>Cyber Security Specialist</strong> who builds and secures websites for small and medium-sized businesses.
          </h2>
        </div>
      </main>
    </div >
  );
}