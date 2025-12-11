type ServicesCardProps = {
  title: string;
  subtitle?: string;
  points: string[];
  icons?: ReactNode[];
};

export default function ServicesCard ({title, subtitle, points, icons}: ServicesCardProps) {
  return (
<div className="items-center justify-center bg-zinc-90 font-sans px-20">

      <section className="w-full max-w-3xl flex-col items-center justify-between py-8 px-16 sm:items-start rounded-md bg-[var(--color-white)] shadow-sm hover:shadow-lg transform opacity-100 hover:opacity-101 hover:scale-102 transition-all duration-150 ease-in-out">
        
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">
          
          <div className="flex flex-row justify-center items-center gap-1 sm:items-start sm:text-left space-x-4">
            {icons}
          </div>
          <h1 className="text-lg font-sans">
            {title}
          </h1>
          <h2 className="text-md font-mono">
            {subtitle}
          </h2>
          <p className="text-md font-mono">
            {points}
          </p>
        </div>
      </section>
    </div >
  )
}