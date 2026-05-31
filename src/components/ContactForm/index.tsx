"use client";

import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";
import { type SubmitEvent, useState } from "react";

export function ContactForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    const formData = new FormData(event.currentTarget);
    const body = new URLSearchParams();

    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact form");
      }

      router.push("/contact-me-success");
    } catch {
      setSubmitError("Unable to send your message. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <form
      name="contact"
      action="/__forms.html"
      method="POST"
      onSubmit={handleSubmit}
      className="mx-auto my-10 flex h-full w-[372px] flex-col justify-center gap-6 px-8"
    >
      <input type="hidden" name="form-name" value="contact" />
      <Input type="text" label="name">
        _name:
      </Input>
      <Input type="email" label="email">
        _email:
      </Input>
      <Input type="textarea" label="message">
        _message:
      </Input>
      {submitError && <p className="text-red-400">{submitError}</p>}
      <Button as="button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "sending-message" : "submit-message"}
      </Button>
    </form>
  );
}
