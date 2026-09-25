import React, { useState } from "react";
import { motion } from "framer-motion";
import { Loader2, AlertCircle } from "lucide-react";
import Field from "@/components/site/Field";
import FormStatus from "@/components/site/FormStatus";
import { sendEnquiry, isValidEmail } from "@/lib/webhook";

export default function LowRatingForm({ rating, answers }) {
  const [f, setF] = useState({ name: "", email: "", phone: "", critique: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (f.website) { setStatus("success"); return; }
    const errs = {};
    if (f.critique.trim().length < 5) errs.critique = "Bitte beschreiben Sie kurz, was wir verbessern können.";
    if (f.email && !isValidEmail(f.email)) errs.email = "Bitte prüfen Sie die E-Mail-Adresse.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("loading");
    const qa = answers.map((a) => `${a.q}: ${a.a}`).join(" | ");
    try {
      await sendEnquiry({
        name: f.name || "Anonymes Feedback",
        email: f.email,
        phone: f.phone,
        description: `[Interne Bewertung: ${rating}/5 Sterne] ${qa} | Kritik: ${f.critique}`,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") return <FormStatus title="Danke für Ihre Offenheit" text="Ihr Feedback ist direkt bei Snezana eingegangen. Wir nehmen es ernst und melden uns gerne bei Ihnen." />;

  return (
    <motion.form initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} onSubmit={submit} noValidate className="space-y-5">
      <input type="text" value={f.website} onChange={set("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <p className="text-center text-ink/70">Es tut uns leid, dass wir Ihre Erwartungen nicht ganz erfüllt haben. Was können wir besser machen?</p>
      <Field label="Ihre Kritik *" textarea value={f.critique} onChange={set("critique")} error={errors.critique} placeholder="Ihr ehrliches Feedback …" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name (optional)" value={f.name} onChange={set("name")} autoComplete="name" />
        <Field label="E-Mail (optional)" type="email" value={f.email} onChange={set("email")} error={errors.email} autoComplete="email" />
      </div>
      {status === "error" && <p className="flex items-center gap-2 rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert"><AlertCircle className="h-4 w-4" />Senden fehlgeschlagen. Bitte versuchen Sie es erneut.</p>}
      <button type="submit" disabled={status === "loading"} className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-ink font-semibold text-cream transition hover:bg-ink/90 disabled:opacity-70">
        {status === "loading" ? <><Loader2 className="h-5 w-5 animate-spin" /> Wird gesendet …</> : "Feedback intern senden"}
      </button>
    </motion.form>
  );
}