export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="container py-10 text-sm text-white/70">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>© {new Date().getFullYear()} State of Retail. All rights reserved.</p>
          <p>Built for research, education, and industry impact.</p>
        </div>
      </div>
    </footer>
  );
}
