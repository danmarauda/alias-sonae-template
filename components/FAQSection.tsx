"use client";

import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Service = {
  id: string;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    id: "001",
    title: "What is the 'Value Before Payment' model?",
    description:
      "We start every engagement with a Quick-Win Sprint—a 2-4 week pilot project focused on one specific use case. You see measurable ROI before committing to a full deployment. No upfront enterprise contracts. No vendor lock-in. Just proven results, then scale.",
  },
  {
    id: "002",
    title: "How is ALIAS different from other AI platforms?",
    description:
      "ALIAS is the Palantir of Australia for SMB/SME. We combine enterprise-grade decision intelligence (UCE, MOSAIC, AWE) with a value-first approach. 100% Australian sovereign data storage. No hyped BS—just real AI that delivers 10x faster decisions, 5x cost savings, and 400%+ ROI in 90 days.",
  },
  {
    id: "003",
    title: "What is UCE and why do I need it?",
    description:
      "UCE (Unified Context Engine) is your business brain. It aggregates data from every source—CRM, ERP, spreadsheets, emails—into a single, queryable knowledge graph. No more data silos. No more manual reports. Ask complex business questions in plain English and get instant, accurate answers backed by your entire data ecosystem.",
  },
  {
    id: "004",
    title: "Is my data really sovereign? What about security?",
    description:
      "Yes. 100% Australian sovereign. Your data stays in Australia, stored on Australian infrastructure, governed by Australian law. We're built for Australian businesses who need to comply with local regulations. Enterprise-grade security, end-to-end encryption, and full audit trails. You own your data, always.",
  },
  {
    id: "005",
    title: "What's included in a Quick-Win Sprint?",
    description:
      "A Quick-Win Sprint is a $25K, 2-4 week pilot project focused on one high-impact use case. You get full platform access (UCE, MOSAIC, AWE), dedicated implementation support, and measurable ROI proof. If it works, we scale. If it doesn't, you've only invested $25K to find out. No long-term contracts.",
  },
  {
    id: "006",
    title: "Can ALIAS integrate with my existing systems?",
    description:
      "Yes. UCE connects to 100+ data sources out of the box—Salesforce, HubSpot, Xero, SAP, custom databases, spreadsheets, and more. We also build custom integrations as part of Full Deployment & Expansion. Our platform is designed to work with your existing tech stack, not replace it.",
  },
];

export default function FAQSection() {
  const [expandedService, setExpandedService] = useState<string>("001");

  return (
    <section
      className="relative mx-2 mb-4 min-h-screen overflow-hidden rounded-xl bg-white py-20 sm:mx-4 sm:py-32 dark:bg-black"
      id="faq"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] to-transparent dark:from-white/[0.02]" />

      <div className="container relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Icon Badge */}
        <div className="mb-8 flex justify-center">
          <div className="flex justify-center">
            <div className="inline-flex items-center text-black/70 text-md tracking-tighter dark:text-white/70">
              FAQ
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="mb-16 space-y-4 text-center">
          <h2 className="font-medium text-4xl text-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Frequently asked questions
          </h2>
          <p className="mx-auto max-w-xl text-black/60 text-sm tracking-tighter sm:text-base dark:text-white/60">
            Can't find the answer you're looking for?{" "}
            <a
              className="text-black hover:underline dark:text-white"
              href="#contact"
            >
              Get in touch
            </a>
            .
          </p>
        </div>

        <div className="space-y-4">
          {services.map((service) => (
            <motion.div
              className="group relative border-neutral-200 border-t dark:border-neutral-800"
              initial={{ opacity: 0, y: 20 }}
              key={service.id}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {/* Background hover effect */}
              {/* <div className="absolute inset-0 bg-neutral-50 dark:bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" /> */}

              {/* Collapsed State - Clickable Row */}
              <button
                aria-label={
                  expandedService === service.id ? "Show less" : "Show more"
                }
                className="relative flex w-full items-center justify-between py-6"
                onClick={() =>
                  setExpandedService(
                    expandedService === service.id ? "" : service.id
                  )
                }
                type="button"
              >
                <div className="flex items-center gap-6">
                  <span className="font-mono text-neutral-400 text-sm transition-colors duration-200 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-400">
                    ({service.id})
                  </span>
                  <h3 className="font-medium text-lg transition-colors duration-200 group-hover:text-neutral-700 dark:group-hover:text-neutral-200">
                    {service.title}
                  </h3>
                </div>
                <div className="flex h-8 w-8 items-center justify-center">
                  {expandedService === service.id ? (
                    <Minus className="h-5 w-5 text-neutral-400 transition-colors duration-200 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-400" />
                  ) : (
                    <Plus className="h-5 w-5 text-neutral-400 transition-colors duration-200 group-hover:text-neutral-600 dark:text-neutral-500 dark:group-hover:text-neutral-400" />
                  )}
                </div>
              </button>

              {/* Expanded State */}
              <AnimatePresence>
                {expandedService === service.id && (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="relative overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    initial={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pb-8">
                      {/* Content */}
                      <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
                        <div className="max-w-xl space-y-4">
                          <motion.p
                            animate={{ opacity: 1 }}
                            className="text-neutral-600 dark:text-neutral-400"
                            initial={{ opacity: 0 }}
                            transition={{
                              delay: 0.1,
                            }}
                          >
                            {service.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
