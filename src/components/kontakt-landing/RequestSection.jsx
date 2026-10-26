import React from "react";
import { CONTACT } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import ContactForm from "@/components/site/ContactForm";

export default function RequestSection() {
  return (
    <section id="anfrage" className="scroll-mt-28 px-3 pb-24 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Anfrage</Eyebrow>
          <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">Deine Terminanfrage</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/70">
            Schreib mir deinen Wunschtermin, deine Fragen oder deine Hautbedürfnisse. Ich melde mich persönlich bei dir zurück und bestätige deinen Termin.
          </p>
          <p className="mt-6 text-base leading-relaxed text-ink/60">
            Lieber direkt sprechen? Ruf mich an unter <a href={CONTACT.phoneHref} className="text-gold underline underline-offset-2">{CONTACT.phone}</a> oder schreib mir per{" "}
            <a href={CONTACT.whatsapp} target="_blank" rel="noopener noreferrer" title="Beim Klick auf WhatsApp werden Daten an Meta übermittelt." className="text-gold underline underline-offset-2">WhatsApp</a>.
          </p>
        </Reveal>
        <Reveal delay={0.15} className="rounded-[2rem] border border-ink/5 bg-white/70 p-6 backdrop-blur sm:p-10 lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}