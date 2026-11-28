import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import type { SubmitEvent } from "react";

function Contact() {
  const navigate = useNavigate();
  const [fullNameError, setFullNameError] = useState("");
  const fullNameRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const [subjectError, setSubjectError] = useState("");
  const emailRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState("");
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [messageError, setMessageError] = useState("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = {
      fullName: fullNameRef.current?.value.trim() ?? "",
      subject: subjectRef.current?.value.trim() ?? "",
      email: emailRef.current?.value.trim() ?? "",
      message: messageRef.current?.value.trim() ?? "",
    };

    setFullNameError("");

    if (data.fullName.length < 3) {
      setFullNameError("Full Name must be at least 3 characters long.");
      return;
    }

    setSubjectError("");

    if (data.subject.length < 3) {
      setSubjectError("Subject must be at least 3 characters long.");
      return;
    }

    setEmailError("");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(data.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    }

    setMessageError("");
    if (data.message.length < 10) {
      setMessageError("Message must be at least 10 characters long.");
      return;
    }

    navigate("/message-success");
  };

  return (
    <main className="min-h-screen bg-cream">
      <div className="mx-auto w-full max-w-md px-4 py-8">
        <h1 className="mb-6 text-2xl font-bold text-berry">Contact</h1>

        <p className="mt-4 text-base font-medium text-dark mb-4">
          Need to get in touch with us? Please fill out the form with your
          inquiry and we will get back to you as soon as possible.
        </p>
        <div className="w-full rounded-lg bg-neutral-soft/50 p-5 sm:p-8">
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-4">
              <label htmlFor="fullName" className="block mb-2 text-dark">
                Full Name
              </label>

              <input
                type="text"
                ref={fullNameRef}
                id="fullName"
                name="fullName"
                placeholder="Enter your full name"
                required
                className="w-full rounded-lg border border-caramel py-2.5 px-3"
              />

              {fullNameError && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {fullNameError}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 text-dark">
                Subject
              </label>

              <input
                type="text"
                ref={subjectRef}
                id="subject"
                name="subject"
                placeholder="Enter the subject"
                required
                className="w-full rounded-lg border border-caramel py-2.5 px-3"
              />

              {subjectError && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {subjectError}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-dark">
                Email
              </label>

              <input
                type="email"
                ref={emailRef}
                id="email"
                name="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-lg border border-caramel py-2.5 px-3"
              />

              {emailError && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {emailError}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-dark">
                Message
              </label>

              <textarea
                id="message"
                ref={messageRef}
                name="message"
                rows={5}
                placeholder="Enter your message here"
                required
                className="w-full rounded-lg border border-caramel py-2.5 px-3"
              />

              {messageError && (
                <p role="alert" className="mt-1 text-sm text-red-600">
                  {messageError}
                </p>
              )}
            </div>

            <button
              type="submit"

              className="rounded-lg bg-berry px-6 py-3 w-full font-semibold text-white hover:bg-caramel disabled:opacity-50"
            >
              Send Message
            </button>
          </form>
        </div>

        <Link to="/" className="inline-block mt-3 text-berry hover:underline">
          ← Back to Shop
        </Link>
      </div>
    </main>
  );
}

export default Contact;
