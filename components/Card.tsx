import Link from "next/link";
export default function Card({ title, description, href, meta }: { title: string, description?: string, href: string, meta?: string }){
  return (
    <Link href={href as any} className="block card hover:scale-[1.01] transition">
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      {description ? <p className="text-white/80 mb-3">{description}</p> : null}
      {meta ? <p className="text-xs text-white/60">{meta}</p> : null}
    </Link>
  );
}
