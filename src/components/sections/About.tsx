import { useT } from "@/providers/LocaleProvider";
import { Reveal } from "@/components/Reveal";
import { PcbTrace } from "@/components/visuals/PcbTrace";
import portrait from "@/assets/mehdi-portrait.jpg";

export function About() {
  const t = useT();
  return (
    <section className="relative py-20 md:py-28">
      <div id="about" className="section-anchor mx-auto grid max-w-6xl items-start gap-12 px-4 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <span className="font-mono text-[11px] uppercase tracking-wider text-accent-cyan">
            {t.about.eyebrow}
          </span>
          <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            {t.about.title}
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/85">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </Reveal>

        <Reveal className="md:col-span-5" delay={120}>
          <div className="relative mx-auto w-full max-w-[320px] sm:max-w-[360px]">
            <PcbTrace className="absolute -right-6 -top-6 h-40 w-40 text-accent-cyan/40" />
            <PcbTrace className="absolute -bottom-6 -left-6 h-32 w-32 rotate-180 text-accent-violet/40" />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
              {/*
                IMPORTANT: This is the user's original photo, used as-is.
                CSS framing only. Do NOT apply filters, blend modes, AI edits,
                background replacement, retouching or generated portraits.
              */}
              <img
                src={portrait}
                alt={t.about.photoAlt}
                loading="lazy"
                className="aspect-[4/4] sm:aspect-[4/5] w-full object-cover object-[center_42%] sm:object-[center_top]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
