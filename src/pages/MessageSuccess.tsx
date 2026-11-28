import { Link } from "react-router-dom";

function MessageSuccess() {
  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto w-full max-w-4xl px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold text-berry">Message Success</h1>

        <p className="mt-4 text-lg text-dark">
          Thank you for your Message! Your message was sent successfully. We'll
          be in touch soon.
        </p>
        <Link to="/" className="inline-block mt-3 text-berry hover:underline">
          ← Back to Shop
        </Link>
      </div>
    </main>
  );
}

export default MessageSuccess;
