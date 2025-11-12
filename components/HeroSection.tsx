"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative mx-2 mt-1 mb-4 flex min-h-[calc(100vh-5.5rem)] w-full items-center justify-center overflow-hidden rounded-xl py-6 sm:mx-4 sm:py-10">
      {/* Large "ALIAS" text in background - vertical on right side */}
      <div
        className="-right-24 pointer-events-none absolute bottom-12 origin-bottom-right"
        style={{ writingMode: "vertical-rl" }}
      >
        <span className="select-none font-bold text-[12rem] text-black/[0.03] tracking-tighter sm:text-[14rem] md:text-[16rem] lg:text-[18rem] dark:text-white/[0.03]">
          ALIAS
        </span>
      </div>

      <div className="relative z-10 mx-auto w-full px-4">
        {/* Centered content */}
        <div className="space-y-8 text-center">
          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center text-black/70 text-md tracking-tighter dark:text-white/70">
              The Decision Intelligence Platform for Australia's Next Economy
            </div>
          </div>

          <h1 className="font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            High-Impact AI. <br />
            Zero{" "}
            <span className="text-red-500/85 dark:text-red-500/85">
              Hyped BS.
            </span>
          </h1>

          <p className="mx-auto max-w-2xl text-base text-black/60 tracking-tighter sm:text-lg md:text-xl dark:text-white/60">
            The Palantir of Australia for SMB/SME. Enterprise-grade decision intelligence
            without enterprise complexity. Value before payment, always.
          </p>

          <div className="flex items-center justify-center gap-4 pt-2">
            <Button
              asChild
              className="group relative h-9 overflow-hidden rounded-lg bg-black px-8 text-white tracking-tighter transition-all duration-300 hover:bg-black/90 sm:h-10 sm:px-4 dark:bg-white dark:text-black dark:hover:bg-white/90"
              size="lg"
            >
              <Link href="/login">
                <span className="group-hover:-translate-y-full relative inline-block transition-transform duration-300 ease-in-out">
                  <span className="block opacity-100 transition-opacity duration-300 group-hover:opacity-0">
                    Start Your Quick-Win Sprint
                  </span>
                  <span className="absolute top-full left-0 block opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    Start Your Quick-Win Sprint
                  </span>
                </span>
              </Link>
            </Button>
            <Button
              asChild
              className="h-9 rounded-lg border-1 border-black/10 border-solid px-8 text-black tracking-tighter transition-all duration-300 hover:bg-black/5 sm:h-10 sm:px-4 dark:border-white/10 dark:text-white dark:hover:bg-white/5"
              size="lg"
              variant="ghost"
            >
              <Link href="/#pricing">Watch Platform Demo</Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-8 pt-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-black/50 tracking-tight dark:text-white/50">
                <span className="font-medium text-black/70 dark:text-white/70">
                  10x
                </span>{" "}
                faster decisions
              </span>
            </div>
            <div className="h-4 w-px bg-black/10 dark:bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-black/50 tracking-tight dark:text-white/50">
                <span className="font-medium text-black/70 dark:text-white/70">
                  5x
                </span>{" "}
                cheaper than consultants
              </span>
            </div>
            <div className="h-4 w-px bg-black/10 dark:bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="text-black/50 tracking-tight dark:text-white/50">
                <span className="font-medium text-black/70 dark:text-white/70">
                  400%+
                </span>{" "}
                ROI in 90 days
              </span>
            </div>
          </div>

          {/* Platform Components Section */}
          <div className="space-y-6 pt-16">
            <div className="flex flex-col items-center gap-2">
              <span className="font-medium text-black/40 text-xs uppercase tracking-wider dark:text-white/40">
                Platform Pillars
              </span>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-black/20 to-transparent dark:via-white/20" />
            </div>

            <div className="mx-auto flex max-w-full items-center justify-center gap-3 overflow-x-auto sm:gap-4">
              <div className="group flex cursor-pointer flex-col items-center gap-3 rounded-xl border border-black/15 border-dashed px-16 py-6 transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02] dark:border-white/15 dark:hover:border-white/30 dark:hover:bg-white/[0.02]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/20 transition-transform duration-300 group-hover:scale-110">
                  <span className="font-bold text-blue-600 text-lg dark:text-blue-400">U</span>
                </div>
                <span className="font-medium text-black/50 text-xs tracking-tight transition-colors group-hover:text-black/70 dark:text-white/50 dark:group-hover:text-white/70">
                  UCE
                </span>
              </div>
              <div className="group flex cursor-pointer flex-col items-center gap-3 rounded-xl border border-black/15 border-dashed px-16 py-6 transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02] dark:border-white/15 dark:hover:border-white/30 dark:hover:bg-white/[0.02]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-purple-500/20 transition-transform duration-300 group-hover:scale-110">
                  <span className="font-bold text-purple-600 text-lg dark:text-purple-400">M</span>
                </div>
                <span className="font-medium text-black/50 text-xs tracking-tight transition-colors group-hover:text-black/70 dark:text-white/50 dark:group-hover:text-white/70">
                  MOSAIC
                </span>
              </div>
              <div className="group flex cursor-pointer flex-col items-center gap-3 rounded-xl border border-black/15 border-dashed px-16 py-6 transition-all duration-300 hover:border-black/30 hover:bg-black/[0.02] dark:border-white/15 dark:hover:border-white/30 dark:hover:bg-white/[0.02]">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-500/20 transition-transform duration-300 group-hover:scale-110">
                  <span className="font-bold text-green-600 text-lg dark:text-green-400">A</span>
                </div>
                <span className="font-medium text-black/50 text-xs tracking-tight transition-colors group-hover:text-black/70 dark:text-white/50 dark:group-hover:text-white/70">
                  AWE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
