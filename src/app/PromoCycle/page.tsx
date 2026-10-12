"use client";

import Ripple from "@/components/Ripple";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ArrowUpRight, CheckCircle2, FileText, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

// Add the task sheet at public/promocycle-tasks.pdf.
const TASKS_PDF = "/promocycle-tasks.pdf";
const DOMAINS = ["Tech", "Management", "Design"];
const SUBDOMAINS = [
  "Frontend", "Backend", "Fullstack", "AI/ML", "Blockchain",
  "Competitive Programming", "App Dev", "Gamedev", "Cybersecurity",
  "DevOps/Cloud", "Marketing", "Video Editing", "Editorial",
  "Finance and Outreach", "Graphic Design", "UI/UX Design", "3D Design",
];
const inputStyle = "w-full border border-white/25 bg-black px-4 py-3 text-base text-white placeholder:text-white/35 focus:border-[#FF3B00] focus:outline-none focus:ring-1 focus:ring-[#FF3B00] disabled:opacity-50";
const buttonStyle = "inline-flex min-h-12 items-center justify-center gap-3 border border-[#FF3B00] px-6 py-3 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#FF3B00] disabled:cursor-not-allowed disabled:opacity-50";

export default function PromoCyclePage() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [pdfOpen, setPdfOpen] = useState(false);
  const [pdfStatus, setPdfStatus] = useState<"loading" | "ready" | "missing">("loading");

  async function openTasks() {
    setPdfOpen(true);
    setPdfStatus("loading");
    try {
      const response = await fetch(TASKS_PDF, { method: "HEAD", cache: "no-store" });
      setPdfStatus(response.ok && response.headers.get("content-type")?.includes("application/pdf") ? "ready" : "missing");
    } catch {
      setPdfStatus("missing");
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;
    setError("");
    const data = new FormData(event.currentTarget);
    if (!data.getAll("domains").length || !data.getAll("subdomains").length) {
      setError("Please select at least one domain and one subdomain.");
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch("/api/promocycle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          registrationNumber: data.get("registrationNumber"),
          domains: data.getAll("domains"),
          subdomains: data.getAll("subdomains"),
          submissionLinks: data.get("submissionLinks"),
        }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error || "Your submission could not be confirmed. Please try again.");
      }
      setSubmitted(true);
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Unable to submit. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="relative isolate min-h-screen w-full overflow-hidden bg-black px-5 pb-20 pt-16 font-Space_Grotesk text-white sm:px-8 md:pt-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 motion-reduce:hidden">
        <Ripple duration={7000} />
      </div>
      <div className="mx-auto max-w-screen-xl">
        <header className="mb-10 border-b border-white/25 pb-10 md:mb-14 md:pb-14">
          <p className="mb-5 text-xs tracking-[0.2em] text-white/60 sm:text-sm">CODECHEF-VIT / 2026</p>
          <h1 className="font-enigma text-[clamp(2.25rem,7.5vw,7.5rem)] font-bold leading-[1.1]">
            PROMOTIONAL<br /><span className="text-[#FF3B00]">CYCLE &apos;26</span>
          </h1>
          <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="text-base leading-relaxed text-white/75 sm:text-lg">Choose your domains, take on the tasks, and submit your work.</p>
              <p className="mt-4 text-sm text-white/60">Deadline <span className="ml-2 text-[#FF3B00]">16 October 2026 · 9:00 PM IST</span></p>
            </div>
            <button type="button" onClick={openTasks} className={`${buttonStyle} w-full shrink-0 text-[#FF3B00] hover:bg-[#FF3B00] hover:text-black md:w-auto`}>
              <FileText size={18} aria-hidden="true" /> View task sheet <ArrowUpRight size={18} aria-hidden="true" />
            </button>
          </div>
        </header>

        <section aria-labelledby="submission-heading" className="relative border border-white/25 bg-black/90">
          <span aria-hidden="true" className="absolute -left-1 -top-1 h-2 w-2 bg-[#FF3B00]" />
          <span aria-hidden="true" className="absolute -right-1 -top-1 h-2 w-2 bg-[#FF3B00]" />
          <span aria-hidden="true" className="absolute -bottom-1 -left-1 h-2 w-2 bg-[#FF3B00]" />
          <span aria-hidden="true" className="absolute -bottom-1 -right-1 h-2 w-2 bg-[#FF3B00]" />
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/25 px-5 py-5 sm:px-8">
            <h2 id="submission-heading" className="font-enigma text-xl sm:text-3xl">TASK SUBMISSION</h2>
            <span className="text-xs text-white/50">All fields are required</span>
          </div>
          {submitted ? (
            <div role="status" className="px-5 py-16 text-center sm:px-8">
              <CheckCircle2 className="mx-auto mb-5 text-[#FF3B00]" size={40} aria-hidden="true" />
              <h3 className="font-enigma text-2xl sm:text-4xl">SUBMISSION RECEIVED</h3>
              <p className="mt-4 text-white/65">Your work has been submitted to CodeChef-VIT.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-5 sm:p-8 md:p-10">
              <fieldset disabled={submitting} className="space-y-8">
                <legend className="sr-only">Promotional cycle task submission</legend>
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="block space-y-3"><span className="text-sm">Name <span className="text-[#FF3B00]">*</span></span><input name="name" autoComplete="name" required maxLength={200} placeholder="Your full name" className={inputStyle} /></label>
                  <label className="block space-y-3"><span className="text-sm">Registration number <span className="text-[#FF3B00]">*</span></span><input name="registrationNumber" required maxLength={100} placeholder="Your VIT registration number" className={inputStyle} /></label>
                  <label className="block space-y-3 md:col-span-2"><span className="text-sm">Email <span className="text-[#FF3B00]">*</span></span><input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="Your email address" className={inputStyle} /></label>
                </div>
                <fieldset>
                  <legend className="mb-2 text-sm">Domain <span className="text-[#FF3B00]">*</span></legend>
                  <p className="mb-4 text-sm text-white/50">Select all that you have applied for.</p>
                  <div className="grid gap-3 sm:grid-cols-3">
                    {DOMAINS.map((domain) => (
                      <label key={domain} className="flex min-h-12 cursor-pointer items-center gap-3 border border-white/25 px-4 py-3 transition-colors hover:border-[#FF3B00] has-[:checked]:border-[#FF3B00] has-[:checked]:bg-[#FF3B00]/10">
                        <input type="checkbox" name="domains" value={domain} className="h-4 w-4 shrink-0 accent-[#FF3B00]" /><span className="text-sm">{domain}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <fieldset>
                  <legend className="mb-2 text-sm">Subdomain <span className="text-[#FF3B00]">*</span></legend>
                  <p className="mb-4 text-sm text-white/50">Select all subdomains you are submitting tasks for.</p>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {SUBDOMAINS.map((subdomain) => (
                      <label key={subdomain} className="flex min-h-12 cursor-pointer items-center gap-3 border border-white/25 px-4 py-3 transition-colors hover:border-[#FF3B00] has-[:checked]:border-[#FF3B00] has-[:checked]:bg-[#FF3B00]/10">
                        <input type="checkbox" name="subdomains" value={subdomain} className="h-4 w-4 shrink-0 accent-[#FF3B00]" /><span className="text-sm">{subdomain}</span>
                      </label>
                    ))}
                  </div>
                </fieldset>
                <label className="block space-y-3"><span className="text-sm">Submission link(s) <span className="text-[#FF3B00]">*</span></span><textarea name="submissionLinks" required maxLength={10000} rows={4} placeholder="Paste your task links here, one per line" className={`${inputStyle} resize-y`} /><span className="block text-xs text-white/50">Make sure your links can be accessed by the reviewing team.</span></label>
              </fieldset>
              {error && <p role="alert" className="mt-6 border border-[#FF3B00]/50 bg-[#FF3B00]/10 p-4 text-sm text-white">{error}</p>}
              <div className="mt-8 flex flex-col gap-4 border-t border-white/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-white/50">Review your details before submitting.</p>
                <button type="submit" disabled={submitting} className={`${buttonStyle} w-full bg-[#FF3B00] text-black hover:bg-[#ff5421] sm:w-auto`}>
                  {submitting ? <><Loader2 size={18} className="animate-spin" aria-hidden="true" /> Submitting…</> : <>Submit tasks <ArrowUpRight size={18} aria-hidden="true" /></>}
                </button>
              </div>
            </form>
          )}
        </section>
      </div>
      <Dialog open={pdfOpen} onOpenChange={setPdfOpen}>
        <DialogContent data-lenis-prevent className="w-[calc(100%-2rem)] max-w-5xl rounded-none border-white/25 bg-black p-5 font-Space_Grotesk text-white sm:rounded-none sm:p-6">
          <DialogHeader>
            <DialogTitle className="pr-8 font-enigma text-xl sm:text-3xl">PROMOTIONAL CYCLE TASKS</DialogTitle>
            <DialogDescription className="text-white/60">Read the task sheet before submitting your work.</DialogDescription>
          </DialogHeader>
          {pdfStatus === "loading" && <p role="status" className="py-16 text-center text-white/60">Loading task sheet…</p>}
          {pdfStatus === "missing" && <p role="status" className="py-16 text-center text-white/60">The task sheet is coming soon. Please check back later.</p>}
          {pdfStatus === "ready" && <>
            <object data={TASKS_PDF} type="application/pdf" aria-label="Promotional cycle task sheet" className="h-[60vh] w-full bg-white sm:h-[65vh]">
              <p className="p-6 text-black">Preview is unavailable in this browser. Use the button below to view the task sheet.</p>
            </object>
            <a href={TASKS_PDF} target="_blank" rel="noopener noreferrer" className={`${buttonStyle} text-[#FF3B00] hover:bg-[#FF3B00] hover:text-black`}>Open PDF <ArrowUpRight size={18} aria-hidden="true" /></a>
          </>}
        </DialogContent>
      </Dialog>
    </div>
  );
}
