import { supabase } from "@/lib/supabase";
import Link from "next/link";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  subtitle: string | null;
  content: string;
  created_at: string;
};

export default async function Blog() {
  // pull info from db:
  const { data: posts, error } = await supabase
    .from("blog_posts")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="font-mono text-red-600">Failed to load blog posts.</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen justify-center">
      <main className="flex w-full max-w-4xl flex-col py-32 px-6 sm:px-16">
        <h1 className="text-4xl font-sans mb-8">Blog</h1>

        <ul className="space-y-8">
          {posts?.map((post: BlogPost) => {
            const maxChars = 220;
            const excerpt =
              post.content.length > maxChars
                ? post.content.slice(0, maxChars) + "…"
                : post.content;

            return (
              <li
                key={post.id}
                className="rounded-lg border border-zinc-200 bg-white/80 p-6 shadow-sm"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-sans mb-1 hover:underline">
                    {post.title}
                  </h2>
                </Link>

                {post.subtitle && (
                  <p className="text-sm text-zinc-500 font-mono mb-3">
                    {post.subtitle}
                  </p>
                )}

                <p className="text-sm font-mono whitespace-pre-line mb-3">
                  {excerpt}
                </p>

                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  {post.created_at && (
                    <span>
                      {new Date(post.created_at).toLocaleDateString()}
                    </span>
                  )}
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-[var(--color-blue)] underline underline-offset-4 hover:text-[var(--color-orange-alt)]"
                  >
                    Read more →
                  </Link>
                </div>
              </li>
            );
          })}

          {(!posts || posts.length === 0) && (
            <li className="text-sm font-mono text-zinc-500">
              No posts yet.
            </li>
          )}
        </ul>
      </main>
    </div>
  );
}
