import { getBySlug } from "@/lib/content";
import Link from "next/link";

export default async function Page({ params }: { params: { slug: string } }) {
  const post = await getBySlug("case-studies", params.slug);
  if (!post) return <div className="card">Not found</div>;
  return (
    <article className="prose prose-invert max-w-none card">
      <h1 className="!mb-1">{post.title}</h1>
      <p className="!mt-0 text-white/70">{post.date} · {post.minutes} min</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <div className="mt-6">
        <Link className="btn" href="/case-studies">Back</Link>
      </div>
    </article>
  );
}
