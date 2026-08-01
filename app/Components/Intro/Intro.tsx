"use client";
import Image from "next/image";
import Link from "next/link";
import { FaHandPeace } from "react-icons/fa";
import { PiHandWavingBold } from "react-icons/pi";
import { PiPlant } from "react-icons/pi";
import { GrLocationPin } from "react-icons/gr";
import { GiSandsOfTime } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { useLanguage } from "../../context/LanguageContext";

const Intro = () => {
  const { t } = useLanguage();
  return (
    <section className="relative flex flex-col items-center justify-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#fff6ef] to-transparent pointer-events-none" />

      <div className="relative flex flex-col items-center text-center max-w-3xl">
        <div className="relative mb-8">
          <div className="absolute inset-0 rounded-full bg-[#ffe8dd] opacity-80 blur-2xl" />
          <div className="relative flex items-center justify-center p-1 rounded-full bg-white shadow-[0_20px_80px_rgba(0,0,0,0.08)]">
            <div className="relative overflow-hidden rounded-full border-4 border-[#f7e7db] bg-white w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[250px] md:h-[250px]">
              <Image
                src="/images/vImg.png"
                width={250}
                height={250}
                alt="Vanshika Sabharwal"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>

        <span className="inline-flex items-center rounded-full bg-[#f5e3d7] px-4 py-2 text-sm font-medium text-[#8b4e2f] mb-6">
          <span className="mr-2 text-xs">•</span>
          {t("intro.role")}
          <span className="ml-2 text-xs">•</span>
        </span>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#111827] leading-tight">
          {t("intro.greeting")} <span className="text-[#a75d32]">Vanshika Sabharwal</span>,<br />
          {t("intro.niceToMeetYou")} <span aria-hidden="true">
            <PiHandWavingBold className="inline-block ml-1" />
          </span>
        </h1>

        <div className="mt-6 flex items-center justify-center gap-3 text-[#b9774c]">
          <span className="h-px w-14 bg-[#d9b292]" />
          <PiPlant className="text-3xl" />
          <span className="h-px w-14 bg-[#d9b292]" />
        </div>

        {/* <p className="mt-5 text-base sm:text-lg text-[#4b5563] max-w-2xl mx-auto">
          I build reliable, user-friendly web applications and love turning ideas into impactful digital experiences.
        </p> */}

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-[#37241c] px-8 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-[#2c1d16]"
          >
            <span className="mr-2">{t("intro.hireMe")}</span>
          </Link>

          <Link
            href="/Resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full border border-[#37241c] bg-white px-8 py-3 text-sm font-medium text-[#37241c] shadow-sm transition hover:bg-[#f9f4ef]"
          >
            {t("intro.downloadCv")}
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-m text-[#6b7280]">
          <div className="inline-flex items-center gap-2">
            <span className="text-[#a75d32]">
              <GrLocationPin />
            </span>
            {t("intro.india")}
          </div>
          <div className="hidden sm:inline-block h-4 w-px bg-[#d1d5db]" />
          <div className="inline-flex items-center gap-2">
            <span className="text-[#a75d32]">
              <MdEmail />
            </span>
            vanshikasabharwalwork@gmail.com
          </div>
          <div className="hidden sm:inline-block h-4 w-px bg-[#d1d5db]" />
          <div className="inline-flex items-center gap-2">
            <span className="text-[#a75d32]">
              <GiSandsOfTime />
            </span>
            {t("intro.openToOpportunities")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
