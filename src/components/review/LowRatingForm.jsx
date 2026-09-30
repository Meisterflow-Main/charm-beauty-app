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
    if (f.critique.trim().length < 5) errs.critique = "Bitte beschreibe kurz, was ich verbessern kann.";
    if (f.email && !isValidEmail(f.email)) errs.email = "Bitte prüfe die E-Mail-Adresse.";
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

  if (status === "success") return <FormStatus title="Danke für deine Offenheit" text="Dein Feedback ist direkt bei Snezana eingegangen. Ich nehme es ernst und melde mich gerne bei dir." />;

  return (
    <motion.form initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} onSubmit={submit} noValidate className="space-y-5">
      <input type="text" value={f.website} onChange={set("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <p className="text-center text-ink/70">Es tut mir leid, dass ich deine Erwartungen nicht ganz erfüllt habe. Was kann ich besser machen?</p>
      <Field label="Deine Kritik *" textarea value={f.critique} onChange={set("critique")} error={errors.critique} placeholder="Dein ehrliches Feedback …" />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name (optional)" value={f.name} onChange={set("name")} autoComplete="name" />
        <Field label="E-Mail (optional)" type="email" value={f.email} onChange={set("email")} error={errors.email} autoComplete="email" />
      </div>
      {status === "error" && <p className="flex items-center gap-2 rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert"><AlertCircle className="h-4 w-4" />Senden fehlgeschlagen. Bitte versuche es erneut.</p>}
      <button type="submit" disabled={status === "loading"} className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-ink font-semibold text-cream transition hover:bg-ink/90 disabled:opacity-70">
        {status === "loading" ? <><Loader2 className="h-5 w-5 animate-spin" /> Wird gesendet …</> : "Feedback senden"}
      </button>
    </motion.form>
  );
}