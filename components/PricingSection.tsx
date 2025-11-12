"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PricingSection() {

  return (
    <section
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-white py-16 sm:mx-4 sm:py-24 dark:bg-black"
      id="pricing"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent dark:from-white/[0.02]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Icon at the top */}
        <div className="mb-6 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-black dark:bg-white" />
            <div className="h-px w-4 bg-black dark:bg-white" />
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-12 space-y-3 text-center">
          <h2 className="font-medium text-4xl text-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Value Before Payment
          </h2>
          <p className="mx-auto max-w-xl text-black/60 text-sm tracking-tighter sm:text-base dark:text-white/60">
            Start with a Quick-Win Sprint. Scale to full deployment. Pay only for proven results.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="relative mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Quick-Win Sprint */}
            <div className="rounded-2xl border border-black/10 bg-black/5 p-6 dark:border-white/5 dark:bg-zinc-900/50">
              <div className="space-y-4">
                <div>
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="font-medium text-blue-500/85 text-xs tracking-tighter dark:text-blue-500/85">
                      START HERE
                    </span>
                  </div>
                  <h3 className="mb-1.5 font-medium text-2xl text-black tracking-tighter dark:text-white">
                    Quick-Win Sprint
                  </h3>
                  <p className="text-black/60 text-sm tracking-tighter dark:text-white/60">
                    Prove value in 2-4 weeks with a focused pilot project.
                  </p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="font-semibold text-4xl text-black tracking-tighter dark:text-white">
                    $25K
                  </span>
                </div>
                <ul className="space-y-2 text-black/70 text-sm dark:text-white/70">
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>2-4 week pilot project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>One focused use case</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Measurable ROI proof</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>Full platform access</span>
                  </li>
                </ul>
                <Button className="w-full rounded-lg bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-500 dark:hover:bg-blue-600">
                  Start Sprint
                </Button>
              </div>
            </div>

            {/* Full Deployment & Expansion */}
            <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-6 dark:border-red-500/30 dark:bg-red-500/5">
                <div className="space-y-4">
                  <div>
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="font-medium text-red-500/85 text-xs tracking-tighter dark:text-red-500/85">
                        MOST POPULAR
                      </span>
                    </div>
                    <h3 className="mb-1.5 font-medium text-2xl text-black tracking-tighter dark:text-white">
                      Full Deployment & Expansion
                    </h3>
                    <p className="text-black/60 text-sm tracking-tighter dark:text-white/60">
                      Enterprise-wide rollout with ongoing optimization.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-4xl text-black tracking-tighter dark:text-white">
                      $95K-500K
                    </span>
                  </div>
                  <ul className="space-y-2 text-black/70 text-sm dark:text-white/70">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Multi-department deployment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Custom integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Dedicated success team</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Quarterly strategy reviews</span>
                    </li>
                  </ul>
                  <Button className="w-full rounded-lg bg-red-500 text-white hover:bg-red-600 dark:bg-red-500 dark:hover:bg-red-600">
                    Scale Up
                  </Button>
                </div>
              </div>
            </div>

            {/* AgentWorks */}
            <div className="rounded-2xl border border-black/10 bg-black/5 p-6 dark:border-white/5 dark:bg-zinc-900/50">
                <div className="space-y-4">
                  <div>
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="font-medium text-green-500/85 text-xs tracking-tighter dark:text-green-500/85">
                        ONGOING
                      </span>
                    </div>
                    <h3 className="mb-1.5 font-medium text-2xl text-black tracking-tighter dark:text-white">
                      AgentWorks
                    </h3>
                    <p className="text-black/60 text-sm tracking-tighter dark:text-white/60">
                      Managed AI agents for continuous operations.
                    </p>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-semibold text-4xl text-black tracking-tighter dark:text-white">
                      $2.5K-25K
                    </span>
                    <span className="text-black/60 text-sm dark:text-white/60">/month</span>
                  </div>
                  <ul className="space-y-2 text-black/70 text-sm dark:text-white/70">
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Pre-built agent library</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>24/7 autonomous operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Monthly optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span>Usage-based scaling</span>
                    </li>
                  </ul>
                  <Button className="w-full rounded-lg bg-green-500 text-white hover:bg-green-600 dark:bg-green-500 dark:hover:bg-green-600">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Value Proposition */}
        <div className="relative mt-12">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 text-center md:grid-cols-3">
            <div className="space-y-1.5">
              <p className="font-medium text-black tracking-tighter dark:text-white">
                Value Before Payment
              </p>
              <p className="text-black/60 text-sm tracking-tighter dark:text-white/60">
                Start with a Quick-Win Sprint. Pay only after you see measurable results.
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="font-medium text-black tracking-tighter dark:text-white">
                100% Australian Sovereign
              </p>
              <p className="text-black/60 text-sm tracking-tighter dark:text-white/60">
                Your data stays in Australia. Built for Australian businesses.
              </p>
            </div>
            <div className="space-y-1.5">
              <p className="font-medium text-black tracking-tighter dark:text-white">
                No Hyped BS
              </p>
              <p className="text-black/60 text-sm tracking-tighter dark:text-white/60">
                Real AI. Real results. No buzzwords. No vendor lock-in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
