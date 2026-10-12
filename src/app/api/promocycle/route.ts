import { NextRequest, NextResponse } from "next/server";

const FORM_BASE = "https://docs.google.com/forms/d/e/1FAIpQLSf9nxbRONKn6sg2fmfZel_BZ2hW3CNcYHLFwzEjM2jUEEdViA";
const DOMAINS = new Set(["Tech", "Management", "Design"]);
const SUBDOMAINS = new Set([
  "Frontend", "Backend", "Fullstack", "AI/ML", "Blockchain",
  "Competitive Programming", "App Dev", "Gamedev", "Cybersecurity",
  "DevOps/Cloud", "Marketing", "Video Editing", "Editorial",
  "Finance and Outreach", "Graphic Design", "UI/UX Design", "3D Design",
]);

function text(value: unknown, limit: number): value is string {
  return typeof value === "string" && value.trim().length > 0 && value.length <= limit;
}

function choices(value: unknown, allowed: Set<string>): value is string[] {
  return Array.isArray(value) && value.length > 0 && value.length <= allowed.size
    && value.every((item) => typeof item === "string" && allowed.has(item));
}

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin) {
    return NextResponse.json({ error: "This submission must be sent from the website." }, { status: 403 });
  }

  let data;
  try {
    const body = await request.text();
    if (body.length > 20000) {
      return NextResponse.json({ error: "Your submission is too large." }, { status: 413 });
    }
    data = JSON.parse(body);
  } catch {
    return NextResponse.json({ error: "Invalid submission. Please check your details." }, { status: 400 });
  }

  if (!data || !text(data.name, 200) || !text(data.email, 254)
    || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
    || !text(data.registrationNumber, 100) || !text(data.submissionLinks, 10000)
    || !choices(data.domains, DOMAINS) || !choices(data.subdomains, SUBDOMAINS)) {
    return NextResponse.json({ error: "Please complete every field and select at least one domain and subdomain." }, { status: 400 });
  }

  try {
    // Verified email collection / one-response restrictions require Google login.
    // The owner must use Responder input email collection for anonymous proxy submissions.
    const form = await fetch(`${FORM_BASE}/viewform`, {
      cache: "no-store", signal: AbortSignal.timeout(15000),
    });
    const formHtml = await form.text();
    if (form.url.includes("accounts.google.com") || formHtml.includes('data-sign-in-to-continue="true"')) {
      return NextResponse.json({ error: "Submissions are temporarily unavailable because the form requires Google sign-in. Please contact CodeChef-VIT." }, { status: 503 });
    }
    if (!form.ok || !formHtml.includes('id="mG61Hd"')) {
      return NextResponse.json({ error: "The submission form is currently unavailable. Please try again later." }, { status: 503 });
    }

    const fields = new URLSearchParams({
      "entry.1371590280": data.name.trim(),
      "entry.796481565": data.registrationNumber.trim(),
      "entry.1942443083": data.submissionLinks.trim(),
      emailAddress: data.email.trim(),
      fvv: "1",
      pageHistory: "0",
    });
    new Set<string>(data.domains).forEach((value) => fields.append("entry.599562589", value));
    new Set<string>(data.subdomains).forEach((value) => fields.append("entry.343739276", value));
    const fbzx = formHtml.match(/name="fbzx" value="([^"]+)"/)?.[1];
    if (fbzx) fields.set("fbzx", fbzx);

    const response = await fetch(`${FORM_BASE}/formResponse`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: fields.toString(),
      signal: AbortSignal.timeout(15000),
    });
    const html = await response.text();
    // Google can return HTTP 200 for validation errors: require its confirmation view.
    const confirmed = html.includes("freebirdFormviewerViewResponseConfirmationMessage")
      || /class="[^"]*\bvHW8K\b[^"]*"/.test(html);
    if (!response.ok || response.url.includes("accounts.google.com")
      || html.includes('id="mG61Hd"') || !confirmed) {
      return NextResponse.json({ error: "Google Forms did not confirm your submission. Please check your details or try again later." }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Unable to confirm your submission right now. Please try again later." }, { status: 502 });
  }
}
