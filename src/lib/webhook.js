import { WEBHOOK_URL } from "@/lib/site";

const KEY = "cb_last_submission";

export const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
export const isValidPhone = (v) => !v || /^[+\d\s()/-]{7,20}$/.test(v.trim());

// Sends {name,email,phone,description} to the MeisterFlow webhook.
// Duplicate protection: identical payloads within 2 minutes are rejected.
export async function sendEnquiry({ name = "", email = "", phone = "", description = "" }) {
  const payload = { name: name.trim(), email: email.trim(), phone: phone.trim(), description: description.trim() };
  const fingerprint = JSON.stringify(payload);
  const last = JSON.parse(sessionStorage.getItem(KEY) || "null");
  if (last && last.fp === fingerprint && Date.now() - last.t < 120000) {
    throw new Error("duplicate");
  }
  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: fingerprint,
  });
  if (!res.ok) throw new Error("failed");
  sessionStorage.setItem(KEY, JSON.stringify({ fp: fingerprint, t: Date.now() }));
}