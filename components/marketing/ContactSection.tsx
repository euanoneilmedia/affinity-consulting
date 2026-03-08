"use client";

import { FormEvent, useState } from "react";
import { Container, Section } from "@/components/layout";
import { Button, Eyebrow } from "@/components/ui";

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
    <Section variant="white" id="contact">
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

          <div className="mx-auto max-w-xl rounded-card border border-neutral-200 bg-white p-6 shadow-lg text-left sm:p-8">
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
                  className="w-full rounded-card border border-neutral-300 bg-white px-4 py-3 text-text-primary placeholder-text-muted transition-colors focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
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
                  className="w-full rounded-card border border-neutral-300 bg-white px-4 py-3 text-text-primary placeholder-text-muted transition-colors focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
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
                  className="w-full rounded-card border border-neutral-300 bg-white px-4 py-3 text-text-primary placeholder-text-muted transition-colors focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? "Sending..." : submitted ? "Thank you!" : "Send message"}
              </Button>

              {errorMessage && <p className="text-sm text-red-500">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
