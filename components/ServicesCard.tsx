type ServicesCardProps = {
  title: string;
  subtitle?: string;
  points: string[];
  icons?: ReactNode[];
};

export default function ServicesCard ({title, subtitle, points, icons}: ServicesCardProps) {
  return (
<div className=" items-center justify-center bg-zinc-90 font-sans">
      <section className="w-full max-w-3xl flex-col items-center justify-between py-24 px-16 sm:items-start border-1 bg-[var(--color-white)] hover:shadow-lg transform opacity-99 hover:opacity-100 hover:scale-102 transition-all duration-250 ease-in-out">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <div>
            {icons}
          </div>
          <h1>
            {title}
          </h1>
          <h2>
            {subtitle}
          </h2>
          <p>
            {points}
          </p>
        </div>
      </section>
    </div >
  )
}