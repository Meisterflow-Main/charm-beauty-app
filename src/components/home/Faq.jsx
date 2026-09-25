import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";
import Reveal from "@/components/site/Reveal";
import Eyebrow from "@/components/site/Eyebrow";

export default function Faq() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
          <Reveal delay={0.1}><h2 className="mt-5 text-5xl font-semibold text-ink">Häufige Fragen</h2></Reveal>
        </div>
        <Reveal delay={0.2} className="lg:col-span-7 lg:col-start-6">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`q${i}`} className="border-ink/10">
                <AccordionTrigger className="py-6 text-left font-heading text-lg font-medium text-ink hover:text-gold hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="pb-6 text-base leading-relaxed text-ink/70">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}