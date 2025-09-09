import Card from "@/components/Card";
import Link from "next/link";
import { listCollection } from "@/lib/content";

export default async function Page() {
  const items = await listCollection("case-studies");
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Case Studies</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(p => (
          <Card key={p.slug} title={p.title} description={p.description} href={`/case-studies/${p.slug}`} meta={`${p.date} · ${p.minutes} min`}/>
        ))}
      </div>
      <p className="text-sm text-white/60">Add or edit content in <span className="badge">/content/case-studies</span>.</p>
    </div>
  );
}
