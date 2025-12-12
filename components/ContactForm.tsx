// components/ContactForm.tsx
"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      serviceType: String(formData.get("serviceType") || "").trim(),
      message: String(formData.get("message") || "").trim(),
      honeypot: String(formData.get("website") || "").trim(), // hidden field
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full rounded-lg border border-zinc-200 bg-white/90 p-6 shadow-sm backdrop-blur"
    >
      {/* Honeypot (hidden from real humans) */}
      <div className="hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" autoComplete="off" />
      </div>

      <div className="grid gap-4">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-mono">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-md border border-zinc-300 bg-[var(--background)] px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-mono">
            Email<span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-zinc-300 bg-[var(--background)] px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="company" className="text-sm font-mono">
            Company (optional)
          </label>
          <input
            id="company"
            name="company"
            className="w-full rounded-md border border-zinc-300 bg-[var(--background)] px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="serviceType" className="text-sm font-mono">
            What are you looking for?
          </label>
          <select
            id="serviceType"
            name="serviceType"
            className="w-full rounded-md border border-zinc-300 bg-[var(--background)] px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
            defaultValue="unspecified"
          >
            <option value="unspecified">Not sure yet</option>
            <option value="web">Web development</option>
            <option value="security">Security review / penetration test</option>
            <option value="both">Both web + security</option>
            <option value="other">Something else</option>
          </select>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-mono">
            Tell me about your project<span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-md border border-zinc-300 bg-[var(--background)] px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[var(--color-blue)]"
            placeholder="What do you need help with? Any timelines or constraints I should know about?"
          />
        </div>

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-2 inline-flex items-center justify-center rounded-md bg-[var(--color-blue)] px-4 py-2 text-sm font-mono text-white shadow-sm hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed transition"
        >
          {status === "submitting" ? "Sending…" : "Send message"}
        </button>

        {status === "success" && (
          <p className="text-xs font-mono text-emerald-600 mt-1">
            Thanks! Your message has been sent.
          </p>
        )}

        {status === "error" && (
          <p className="text-xs font-mono text-red-600 mt-1">
            {error || "Something went wrong. Please try again."}
          </p>
        )}
      </div>
    </form>
  );
}
