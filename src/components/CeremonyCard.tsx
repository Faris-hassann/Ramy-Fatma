import type { Dict } from "@/lib/i18n";
import Reveal from "./Reveal";

export function DateBlock({ t, showAt }: { t: Dict; showAt: boolean }) {
  return (
    <div className="mt-6 text-cream">
      <div className="flex justify-center gap-16 font-body text-[13px] font-light text-cream/70">
        <span>{showAt ? t.atTime : t.time}</span>
        <span>{t.weekday}</span>
      </div>
      <div className="mt-3 flex items-center justify-center gap-4">
        <span className="font-heading text-[40px] font-light leading-none">{t.dayNumber}</span>
        <span className="h-[46px] w-px bg-cream/50" />
        <span className="flex flex-col items-start font-heading text-[14px] font-light leading-[25px]">
          <span>{t.monthName}</span>
          <span>{t.yearNumber}</span>
        </span>
      </div>
    </div>
  );
}

export default function CeremonyCard({ t }: { t: Dict }) {
  return (
    <section className="relative px-[6%]">
      <Reveal>
        <div className="wine-card relative rounded-[14px] px-4 pb-12 pt-10 text-center">
          {/* Parents / Family Information */}
          <div className="grid grid-cols-[1fr_auto_1fr] items-center justify-center gap-x-3 text-center">
            {/* Groom's family */}
            <div className="flex flex-col items-center">
              <span className="font-uchen text-[11px] font-medium tracking-[1.4px] text-cream/70 uppercase">
                {t.parentsTitle}
              </span>
              <span className="mt-1 font-heading text-[15px] font-semibold text-cream">
                {t.groomFather}
              </span>
              <span className="mt-0.5 font-heading text-[15px] font-semibold text-cream">
                {t.groomMother}
              </span>
            </div>

            {/* Vertical divider */}
            <div className="h-14 w-px bg-cream/35" />

            {/* Bride's family */}
            <div className="flex flex-col items-center">
              <span className="font-uchen text-[11px] font-medium tracking-[1.4px] text-cream/70 uppercase">
                {t.parentsTitle}
              </span>
              <span className="mt-1 font-heading text-[15px] font-semibold text-cream">
                {t.brideFather}
              </span>
              <span className="mt-0.5 font-heading text-[15px] font-semibold text-cream">
                {t.brideMother}
              </span>
            </div>
          </div>

          {/* Announcement text */}
          <p className="mt-8 px-2 font-display text-[17px] leading-[1.6] text-cream">
            {t.announcement}
          </p>

          {/* Couple names */}
          <div className="mt-8">
            <p className="font-display text-[38px] font-light leading-tight text-cream">{t.groom}</p>
            <p className="mt-2 font-uchen text-[10px] font-light tracking-[1.4px] text-cream/70 uppercase">
              {t.groomLabel}
            </p>
            <p className="my-3 font-amp text-[34px] leading-none text-cream">&amp;</p>
            <p className="font-display text-[38px] font-light leading-tight text-cream">{t.bride}</p>
            <p className="mt-2 font-uchen text-[10px] font-light tracking-[1.4px] text-cream/70 uppercase">
              {t.brideLabel}
            </p>
          </div>

          <img
            src="/Images/flower2-decoration.webp"
            alt=""
            className="animate-sway pointer-events-none absolute -right-[9%] top-[30%] w-[27%] select-none rtl:-left-[9%] rtl:right-auto rtl:-scale-x-100"
          />
        </div>
      </Reveal>
    </section>
  );
}
