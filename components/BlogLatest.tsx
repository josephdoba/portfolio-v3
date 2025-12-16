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


export default async function BlogLatest() {
  const { data, error } = await supabase
  .from("blog_posts")
  .select("id, title, slug, subtitle, content, created_at")
  .order("created_at", { ascending: false })
  .limit(1)
  
  const post = (data?.[0] ?? null) as BlogPost | null;

  if (error || !post ) {
    return null;
  }

  const preview = 
    post.content.length > 300 ? post.content.slice(0, 300).trimEnd() + "..." : post.content;
  
  
  
  return (
  <div className="items-center justify-center font-sans">
        <section className="bg-[var(--color-blue)]/5 flex flex-col items-left px-[10%] sm:px-[20%] py-[3%]">

          <h1 className="text-3xl leading-1 tracking-tight font-sans underline decoration-[var(--color-blue)] pt-2 pb-6">
              Latest Blog
          </h1>
          
          <ul className="items-stretch">
            <li className="h-full">
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-lg border border-zinc-200 bg-white/80 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-xs font-mono text-zinc-500 mb-2">
                  {new Date(post.created_at).toLocaleDateString()}
                </p>

                <h2 className="text-xl font-sans mb-1">{post.title}</h2>

                {post.subtitle && (
                  <p className="text-sm text-zinc-600 mb-3">{post.subtitle}</p>
                )}

                <p className="text-md font-mono">{preview}</p>

                <span className="text-sm font-mono text-[var(--color-blue)]">
                  Read more →
                </span>
              </Link>
            </li>
          </ul>
          <div className="max-w-5xl mx-auto px-6 font-sans ">
            
          </div>
        </section>
      </div >
  )
}