import { NextResponse } from "next/server";

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Contact endpoint scaffold.
 * In production, connect this to your CRM, mailbox, or automation platform.
 */
export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactPayload;

    const name = payload.name?.trim() || "";
    const email = payload.email?.trim() || "";
    const message = payload.message?.trim() || "";

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 },
      );
    }

    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Please provide a valid email." }, { status: 400 });
    }

    // Keep response shape stable so client integration remains simple.
    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
  }
}
