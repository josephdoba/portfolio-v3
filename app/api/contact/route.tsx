// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const company = String(body.company || "").trim();
    const serviceType = String(body.serviceType || "").trim();
    const message = String(body.message || "").trim();
    const honeypot = String(body.honeypot || "").trim();

    // Honeypot check – if this is filled, it's almost certainly a bot.
    if (honeypot) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("contact_requests").insert({
      name,
      email,
      company,
      service_type: serviceType || null,
      message,
    });

    if (error) {
      console.error("contact insert error:", error);
      return NextResponse.json(
        { error: "Failed to save your message. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Unexpected error. Please try again later." },
      { status: 500 }
    );
  }
}
