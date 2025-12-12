import Link from "next/link";

type ProjectCardProps = {
  title: string;
  blurb: string;
  role?: string;
  techStack?: string;
  href?: string;
};

export default function ProjectCard({
  title,
  blurb,
  role,
  techStack,
  href,
}: ProjectCardProps) {
  return (
    <article className="w-full max-w-5xl flex-col items-center justify-between py-8 px-16 sm:items-start rounded-md bg-[var(--color-white)] shadow-sm hover:shadow-lg transform opacity-100 hover:opacity-101 hover:scale-102 transition-all duration-150 ease-in-out">
      <h2 className="text-2xl sm:text-3xl font-sans mb-2">{title}</h2>

      {role && (
        <p className="text-sm font-mono mb-2 opacity-80">
          {role}
        </p>
      )}

      <p className="text-sm sm:text-base font-mono mb-4 max-w-2xl">
        {blurb}
      </p>

      {techStack && (
        <p className="text-xs font-mono uppercase tracking-wide opacity-80">
          {techStack}
        </p>
      )}

      {href && (
        <Link
          href={href}
          className="inline-block mt-4 text-sm font-mono underline decoration-[var(--color-blue)] hover:text-[var(--color-orange-alt)]"
        >
          View project →
        </Link>
      )}
    </article>
  );
}
