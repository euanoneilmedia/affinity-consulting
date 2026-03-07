"use client";

import { FormEvent, useState } from "react";
import { Container, Section } from "@/components/layout";
import { DarkCard, Eyebrow } from "@/components/ui";

/**
 * Contact form component
 * Handles basic form submission
 */
export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: String(formData.get("name") || "").trim(),
          email: String(formData.get("email") || "").trim(),
          message: String(formData.get("message") || "").trim(),
        }),
      });

      if (!response.ok) {
        throw new Error("Message could not be sent.");
      }

      form.reset();
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    } catch {
      setIsSubmitting(false);
      setErrorMessage("We could not send your message. Please try again in a moment.");
    }
  };

  return (
    <Section variant="light" id="contact">
      <Container size="md">
        <div className="text-center">
          <div className="mb-3">
            <Eyebrow>Let&apos;s Talk</Eyebrow>
          </div>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Ready to transform your services?
          </h2>
          <p className="mb-10 text-base leading-8 text-text-secondary sm:text-lg">
            Tell us a little about your challenge and we will respond with next steps.
          </p>

          <DarkCard className="mx-auto max-w-xl border-neutral-700 text-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-text-primary">
                  Full name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-card border border-neutral-600 bg-background-primary px-4 py-3 text-text-primary placeholder-text-muted transition-colors focus:border-brand-primary focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-text-primary">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-card border border-neutral-600 bg-background-primary px-4 py-3 text-text-primary placeholder-text-muted transition-colors focus:border-brand-primary focus:outline-none"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-text-primary"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full rounded-card border border-neutral-600 bg-background-primary px-4 py-3 text-text-primary placeholder-text-muted transition-colors focus:border-brand-primary focus:outline-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-card bg-brand-primary px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-brand-primary-light disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : submitted ? "Thank you!" : "Send message"}
              </button>

              {errorMessage && <p className="text-sm text-red-300">{errorMessage}</p>}
            </form>
          </DarkCard>
        </div>
      </Container>
    </Section>
  );
}
