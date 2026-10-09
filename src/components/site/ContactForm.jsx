import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, ArrowRight, AlertCircle } from "lucide-react";
import Field from "@/components/site/Field";
import ChipGroup from "@/components/site/ChipGroup";
import FormStatus from "@/components/site/FormStatus";
import { sendEnquiry, isValidEmail, isValidPhone } from "@/lib/webhook";

const TOPICS = ["Termin anfragen", "Offerte anfragen", "Allgemeine Frage"];
const EMPTY = { name: "", email: "", phone: "", message: "", website: "" };

export default function ContactForm({ defaultTopic = "Termin anfragen" }) {
  const [f, setF] = useState(EMPTY);
  const [topic, setTopic] = useState(defaultTopic);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [errMsg, setErrMsg] = useState("");

  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const validate = () => {
    const e = {};
    if (f.name.trim().length < 2) e.name = "Bitte gib deinen Namen ein.";
    if (!isValidEmail(f.email)) e.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    if (!isValidPhone(f.phone)) e.phone = "Bitte prüfe die Telefonnummer.";
    if (f.message.trim().length < 5) e.message = "Bitte schreib mir eine kurze Nachricht.";
    if (!consent) e.consent = "Bitte bestätige die Datenschutzerklärung.";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status === "loading") return;
    if (f.website) { setStatus("success"); return; } // honeypot
    if (!validate()) return;
    setStatus("loading");
    try {
      await sendEnquiry({ name: f.name, email: f.email, phone: f.phone, description: `[${topic}] ${f.message}` });
      setStatus("success");
    } catch (err) {
      setErrMsg(err.message === "duplicate" ? "Diese Nachricht wurde bereits gesendet." : "Senden fehlgeschlagen. Bitte versuche es erneut oder schreib mir per WhatsApp.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return <FormStatus title="Vielen Dank!" text="Deine Anfrage ist bei mir eingegangen. Ich melde mich so schnell wie möglich bei dir." onReset={() => { setF(EMPTY); setConsent(false); setStatus("idle"); }} />;
  }

  return (
    <form onSubmit={submit} noValidate className="space-y-6">
      <input type="text" name="website" value={f.website} onChange={set("website")} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      <ChipGroup label="Dein Anliegen" options={TOPICS} value={topic} onChange={setTopic} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name *" value={f.name} onChange={set("name")} error={errors.name} autoComplete="name" placeholder="Vor- und Nachname" />
        <Field label="Telefon" type="tel" value={f.phone} onChange={set("phone")} error={errors.phone} autoComplete="tel" placeholder="+41 …" />
      </div>
      <Field label="E-Mail *" type="email" value={f.email} onChange={set("email")} error={errors.email} autoComplete="email" placeholder="name@beispiel.ch" />
      <Field label="Nachricht *" textarea value={f.message} onChange={set("message")} error={errors.message} placeholder="Wunschtermin, Fragen oder Hautbedürfnisse …" />
      <label className="flex cursor-pointer items-start gap-3 text-sm text-ink/70">
        <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-5 w-5 shrink-0 accent-[#B8860B]" />
        <span>Ich habe die <Link to="/datenschutz" className="text-gold underline underline-offset-2">Datenschutzerklärung</Link> gelesen und bin mit der Verarbeitung meiner Angaben einverstanden.</span>
      </label>
      {errors.consent && <p className="-mt-3 text-sm text-destructive">{errors.consent}</p>}
      {status === "error" && (
        <p className="flex items-center gap-2 rounded-2xl bg-destructive/10 px-4 py-3 text-sm text-destructive" role="alert"><AlertCircle className="h-4 w-4 shrink-0" />{errMsg}</p>
      )}
      <button type="submit" disabled={status === "loading"} className="group flex h-14 w-full items-center justify-center gap-2 rounded-full bg-gold font-semibold text-white transition-all duration-500 hover:bg-gold-dark disabled:opacity-70 sm:w-auto sm:px-10">
        {status === "loading" ? <><Loader2 className="h-5 w-5 animate-spin" /> Wird gesendet …</> : <>Anfrage senden <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>}
      </button>
    </form>
  );
}