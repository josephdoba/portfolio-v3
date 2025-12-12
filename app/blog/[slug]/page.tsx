import { createClient } from "@supabase/supabase-js";
import { notFound } from "next/navigation";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  subtitle: string | null;
  content: string;
  created_at: string;
  cover_image_url: string | null;
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .single<BlogPost>();

  if (error || !data) {
    console.error(error);
    notFound();
  }

  const post = data;

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="max-w-3xl mx-auto px-6 py-16 font-sans">
        <p className="text-xs font-mono text-zinc-500 mb-3">
          {new Date(post.created_at).toLocaleDateString()}
        </p>

        <h1 className="text-3xl font-bold mb-3">{post.title}</h1>

        {post.subtitle && (
          <p className="text-lg text-zinc-700 mb-6">{post.subtitle}</p>
        )}

        {/* optional cover image later */}

        <article className="prose prose-zinc max-w-none font-mono text-[15px]">
          {/* for now content is plain text; later you can store markdown/HTML */}
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </main>
    </div>
  );
}
