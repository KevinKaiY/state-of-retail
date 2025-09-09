'use client';

export default function NewsletterForm() {
  const handleSubmit = () => {
    alert('This is a static demo. Connect to your ESP in /app/api/subscribe.');
  };

  return (
    <form className="mt-4 flex gap-2 max-w-md">
      <input className="input w-full" type="email" placeholder="you@company.com" required/>
      <button className="btn" type="button" onClick={handleSubmit}>Subscribe</button>
    </form>
  );
}
