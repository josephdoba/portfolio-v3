import { supabase } from "@/lib/supabase";

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
      <main className="flex w-full max-w-3xl flex-col py-32 px-6 sm:px-16">
        <h1 className="text-4xl font-sans mb-8">Blog</h1>

        <ul className="space-y-8">
          {posts?.map((post: any) => (
            <li
              key={post.id}
              className="rounded-lg border border-zinc-200 bg-white/80 p-6 shadow-sm"
            >
              <h2 className="text-2xl font-sans mb-1">{post.title}</h2>

              {post.subtitle && (
                <p className="text-sm text-zinc-500 font-mono mb-3">
                  {post.subtitle}
                </p>
              )}

              <p className="text-sm font-mono whitespace-pre-line">
                {post.content}
              </p>

              {post.created_at && (
                <p className="mt-3 text-xs text-zinc-400 font-mono">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>
              )}
            </li>
          ))}

          {(!posts || posts.length === 0) && (
            <li className="text-sm font-mono text-zinc-500">
              No posts yet. Time to paste in that dev log.
            </li>
          )}
        </ul>
      </main>
    </div>
  );
}
