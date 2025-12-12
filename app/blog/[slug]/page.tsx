import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

type BlogPost = {
  id: number;
  title: string;
  slug: string;
  subtitle: string | null;
  content: string;
  created_at: string;
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .maybeSingle<BlogPost>();

  if (error) {
    console.error("Supabase error loading post:", error);
    notFound();
  }

  if (!post) {
    console.error("No post found for slug:", slug);
    notFound();
  }

  return (
    <div className="min-h-screen bg-[var(--background)]">
      <main className="max-w-3xl mx-auto px-6 py-16 font-sans">


        <h1 className="text-3xl font-bold mb-3 underline decoration-[var(--color-blue)] py-2">{post.title}</h1> 
                <p className="text-xs font-mono text-zinc-500 mb-3">
          {new Date(post.created_at).toLocaleDateString()}
        </p>
        <hr className="py-2"></hr>

        {post.subtitle && (
          <p className="text-lg text-zinc-700 mb-6">{post.subtitle}</p>
        )}

        <article className="prose prose-zinc max-w-none font-mono text-[15px]">
          {post.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </article>
      </main>
    </div>
  );
}
