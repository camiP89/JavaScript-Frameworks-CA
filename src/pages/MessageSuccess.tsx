import { Link } from "react-router-dom";

function MessageSuccess() {
  return (
    <main className="min-h-screen bg-cream p-8">
      <h1 className="text-lg font-bold text-berry mb-6">Message Success</h1>

      <p className="mt-4 text-lg text-dark">
        Thank you for your Message! Your message was sent successfully. We'll be
        in touch soon.
      </p>
      <Link to="/" className="inline-block mt-3 text-berry hover:underline">
        ← Back to Shop
      </Link>
    </main>
  );
}

export default MessageSuccess;
