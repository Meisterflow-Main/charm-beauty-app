import React from "react";
import { ShieldCheck } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";
import { Image } from "@/components/ui/image";

const CERT_URL = "https://media.base44.com/images/public/6ab62a2b7c4d0724c8fa8507/e9f65a780_FramedSGMKProfessionalCertificate.png";

export default function Certificate() {
  return (
    <section className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow>Zertifizierung</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold text-ink sm:text-5xl">
              Geprüfte Sachkunde&nbsp;– dein Vertrauen in professionelle Hände
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink/70">
              Snežana Đurić hat den offiziellen Sachkundenachweis der Schweizerischen Gesellschaft für medizinische
              Kosmetik (SGMK) erfolgreich absolviert. Damit erfüllt sie die Anforderungen der Verordnung über
              nichtionisierende Strahlung und Schall (V-NISSG) für Behandlungen wie Cellulite- und Fettpolster-Therapien.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink/70">
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold" />
                Offizielle Prüfungsstelle gemäss V-NISSG
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold" />
                Zertifiziert in Cellulite &amp; Fettpolster-Behandlungen
              </li>
              <li className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-gold" />
                Abgeschlossen im Juli 2024 in Baar ZG
              </li>
            </ul>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7">
            <figure className="relative mx-auto max-w-2xl">
              <div className="overflow-hidden rounded-[2rem] border border-gold/20 bg-cream/40 p-4 shadow-[0_30px_80px_-40px_rgba(4,21,31,0.45)] sm:p-6">
                <div className="relative aspect-[350/622] w-full">
                  <Image
                    src={CERT_URL}
                    alt="SGMK Sachkundenachweis Cellulite und Fettpolster – Snežana Đurić"
                    fittingType="fit"
                    className="h-full w-full"
                  />
                </div>
              </div>
              <figcaption className="mt-4 text-center text-xs uppercase tracking-[0.18em] text-ink/50">
                Sachkundenachweis SGMK · Snežana Đurić
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}