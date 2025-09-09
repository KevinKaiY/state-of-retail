import Link from "next/link";
import Card from "@/components/Card";
import NewsletterForm from "@/components/NewsletterForm";

export default async function Home() {
  return (
    <div className="space-y-10">
      <section className="card">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">State of Retail</h1>
        <p className="text-white/80 max-w-3xl">
          A hub for retail insights that blends academic rigor with industry relevance. Explore case studies,
          research-driven articles, and bite-sized mini classes to stay ahead.
        </p>
        <div className="mt-6 flex gap-3">
          <Link className="btn" href="/case-studies">Browse Case Studies</Link>
          <Link className="btn" href="/classes">Start Mini Classes</Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-4">
        <Card title="Retail Media 101" description="A primer on retail media networks and monetization." href="/classes/retail-media-101"/>
        <Card title="Customer Experience Benchmarks" description="Measuring what matters across web, mobile, and social." href="/articles/cx-benchmarks"/>
        <Card title="Omnichannel at Starbucks" description="Case: digital transformation, loyalty, and store ops." href="/case-studies/starbucks-omnichannel"/>
      </section>

      <section className="card">
        <h2 className="text-2xl font-semibold mb-2">Subscribe to Retail Signals</h2>
        <p className="text-white/80">Get monthly updates with new cases, articles, and classes.</p>
        <NewsletterForm />
      </section>
    </div>
  );
}
