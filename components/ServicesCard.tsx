// components/ServicesCard.tsx
import type { ReactNode } from "react";

type ServicesCardProps = {
  title: string;
  subtitle?: string;
  points?: string[];
  icons?: ReactNode[];
};

export default function ServicesCard({
  title,
  subtitle,
  points,
  icons,
}: ServicesCardProps) {
  return (
    <div className="items-center justify-center bg-zinc-90 font-sans">
      <section className="w-full max-w-5xl flex-col items-center justify-between py-8 px-16 sm:items-start rounded-md bg-[var(--color-white)] shadow-sm hover:shadow-lg transform opacity-100 hover:opacity-101 hover:scale-102 transition-all duration-150 ease-in-out">
        <div className="flex flex-col items-center gap-8 text-center sm:items-start sm:text-left">

          {icons && icons.length > 0 && (
            <div className="relative w-full overflow-x-hidden">
              <div className="flex animate-marquee">
                {icons.map((icon, i) => (
                  <div key={`icon-main-${i}`} className="shrink-0 px-[2%]">
                    {icon}
                  </div>
                ))}
                {icons.map((icon, i) => (
                  <div
                    key={`icon-dup-${i}`}
                    className="shrink-0 px-[2%]"
                    aria-hidden="true">
                    {icon}
                  </div>
                ))}

                {icons.map((icon, i) => (
                  <div
                    key={`icon-dup-${i}`}
                    className="shrink-0 px-[2%]"
                    aria-hidden="true">
                    {icon}
                  </div>
                ))}
                {icons.map((icon, i) => (
                  <div
                    key={`icon-dup-${i}`}
                    className="shrink-0 px-[2%]"
                    aria-hidden="true">
                    {icon}
                  </div>
                ))}
                  {icons.map((icon, i) => (
                  <div
                    key={`icon-dup-${i}`}
                    className="shrink-0 px-[2%]"
                    aria-hidden="true">
                    {icon}
                  </div>
                ))}
                  {icons.map((icon, i) => (
                  <div
                    key={`icon-dup-${i}`}
                    className="shrink-0 px-[2%]"
                    aria-hidden="true">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          )}

          <h1 className="text-lg font-sans underline decoration-[var(--color-blue)]">{title}</h1>

          {subtitle && (
            <h2 className="text-md font-mono opacity-90">{subtitle}</h2>
          )}

          {points && points.length > 0 && (
            <div className="mt-2 space-y-2 font-mono text-sm">
              {points.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
