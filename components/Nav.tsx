import Link from "next/link";

export default function Nav() {
  const links = [
    ["Case Studies", "/case-studies"],
    ["Articles", "/articles"],
    ["Mini Classes", "/classes"],
    ["Resources", "/resources"],
    ["About", "/about"],
    ["Contact", "/contact"]
  ] as const;

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="container flex items-center justify-between py-3">
        <Link href="/" className="text-xl font-bold text-white">
          <span className="px-2 py-1 rounded-lg bg-medill-purple mr-2">•</span> State of Retail
        </Link>
        <div className="flex items-center gap-4">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm hover:underline">
              {label}
            </Link>
          ))}
          <Link href="/admin" className="badge">Admin</Link>
        </div>
      </nav>
    </header>
  );
}
