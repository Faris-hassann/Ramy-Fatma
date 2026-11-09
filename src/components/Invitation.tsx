"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { dictionaries, type Locale } from "@/lib/i18n";
import CeremonyCard from "./CeremonyCard";
import Cover from "./Cover";
import DressCode from "./DressCode";
import Guestbook from "./Guestbook";
import Hero from "./Hero";
import PartyCard from "./PartyCard";
import Venue from "./Venue";

export default function Invitation({ locale }: { locale: Locale }) {
  const t = dictionaries[locale];
  const [opened, setOpened] = useState(false);
  const [coverGone, setCoverGone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = coverGone ? "" : "hidden";
  }, [coverGone]);

  const handleOpen = () => {
    setOpened(true);
    window.scrollTo(0, 0);
    setTimeout(() => setCoverGone(true), 1700);
  };

  return (
    <>
      <LanguageSwitch locale={locale} label={t.switchLang} dark={!coverGone} />

      {!coverGone && <Cover t={t} onOpen={handleOpen} />}

      <main
        className={`paper-bg mx-auto min-h-screen w-full max-w-[520px] overflow-hidden transition-opacity duration-1000 ${
          opened ? "opacity-100" : "opacity-0"
        }`}
      >
        {opened && (
          <>
            <Hero t={t} />
            <CeremonyCard t={t} />
            <PartyCard t={t} locale={locale} />
            <Venue t={t} locale={locale} />
            <DressCode t={t} />
            <Guestbook t={t} locale={locale} />
            <footer className="relative z-10 px-8 pb-28 pt-10 text-center">
              <p className="font-display text-[17px] italic leading-relaxed text-wine/85">
                {t.thankYouNote}
              </p>
            </footer>
          </>
        )}
      </main>
    </>
  );
}

function LanguageSwitch({ locale, label, dark }: { locale: Locale; label: string; dark: boolean }) {
  const other = locale === "en" ? "ar" : "en";
  return (
    <Link
      href={`/${other}`}
      hrefLang={other}
      className={`fixed end-4 top-4 z-[60] rounded-full px-4 py-1.5 text-sm backdrop-blur transition-colors ${
        dark
          ? "border border-white/30 bg-white/10 text-white hover:bg-white/20"
          : "border border-wine/20 bg-white/70 text-wine shadow-sm hover:bg-white"
      } ${other === "ar" ? "font-[family-name:var(--font-amiri)]" : "font-[family-name:var(--font-lora)]"}`}
    >
      {label}
    </Link>
  );
}
