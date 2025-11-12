

export default function FeaturesSection() {
  return (
    <section
      className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-white py-20 sm:mx-4 sm:py-32 dark:bg-black"
      id="features"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Icon at the top */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded-full bg-black dark:bg-white" />
            <div className="h-px w-4 bg-black dark:bg-white" />
            <div className="flex gap-1">
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
              <div className="h-2 w-2 rounded-full bg-black dark:bg-white" />
            </div>
          </div>
        </div>

        {/* Main heading */}
        <div className="mb-4 text-center">
          <h2 className="mb-4 font-medium text-4xl text-black tracking-tight sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
            Three Pillars. One Platform.
          </h2>
          <p className="mx-auto max-w-2xl text-base text-black/60 sm:text-lg dark:text-white/60">
            UCE, MOSAIC, and AWE work together to deliver enterprise-grade decision intelligence.
            <br />
            Built for Australian businesses. Sovereign, secure, and scalable.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-blue-400 text-xs tracking-wide">
                UCE
              </span>
            </div>
            <h3 className="mb-8 font-medium text-2xl text-black tracking-tight sm:text-3xl dark:text-white">
              Unified Context Engine
            </h3>
            <div className="flex-1 rounded-lg border border-black/10 bg-black/5 p-6 dark:border-white/5 dark:bg-zinc-900/50">
              <div className="space-y-4">
                <p className="font-serif text-black/80 text-sm leading-relaxed dark:text-white/80">
                  Your business brain. UCE aggregates data from every source—CRM,
                  ERP, spreadsheets, emails—into a single, queryable knowledge graph.
                </p>
                <p className="font-serif text-black/80 text-sm leading-relaxed dark:text-white/80">
                  No more data silos. No more manual reports. Just instant answers
                  to complex business questions.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-black/60 text-xs dark:text-white/60">Real-time data sync</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-black/60 text-xs dark:text-white/60">Natural language queries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <span className="text-black/60 text-xs dark:text-white/60">Sovereign data storage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. MOSAIC */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-purple-400 text-xs tracking-wide">
                MOSAIC
              </span>
            </div>
            <h3 className="mb-8 font-medium text-2xl text-black tracking-tight sm:text-3xl dark:text-white">
              Multi-Objective Strategic AI Core
            </h3>
            <div className="flex-1 rounded-lg border border-black/10 bg-black/5 p-6 dark:border-white/5 dark:bg-zinc-900/50">
              <div className="space-y-4">
                <p className="font-serif text-black/80 text-sm leading-relaxed dark:text-white/80">
                  Your strategic advisor. MOSAIC analyzes scenarios, models outcomes,
                  and recommends optimal decisions across competing priorities.
                </p>
                <p className="font-serif text-black/80 text-sm leading-relaxed dark:text-white/80">
                  From pricing strategies to resource allocation, MOSAIC helps you
                  make smarter decisions faster.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-black/60 text-xs dark:text-white/60">Scenario modeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-black/60 text-xs dark:text-white/60">Multi-objective optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <span className="text-black/60 text-xs dark:text-white/60">Risk assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. AWE */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-green-400 text-xs tracking-wide">
                AWE
              </span>
            </div>
            <h3 className="mb-8 font-medium text-2xl text-black tracking-tight sm:text-3xl dark:text-white">
              Agentic Workflow Engine
            </h3>
            <div className="flex-1 rounded-lg border border-black/10 bg-black/5 p-6 dark:border-white/5 dark:bg-zinc-900/50">
              <div className="space-y-4">
                <p className="font-serif text-black/80 text-sm leading-relaxed dark:text-white/80">
                  Your execution layer. AWE orchestrates AI agents to automate
                  complex workflows—from data entry to customer service to compliance.
                </p>
                <p className="font-serif text-black/80 text-sm leading-relaxed dark:text-white/80">
                  Deploy pre-built agents or create custom workflows. AWE handles
                  the heavy lifting while you focus on strategy.
                </p>
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-black/60 text-xs dark:text-white/60">Pre-built agent library</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-black/60 text-xs dark:text-white/60">Custom workflow builder</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-green-500" />
                    <span className="text-black/60 text-xs dark:text-white/60">24/7 autonomous operation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Value Delivery */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-xs text-zinc-400 tracking-wide dark:text-zinc-500">
                Results
              </span>
            </div>
            <h3 className="mb-8 font-medium text-2xl text-black tracking-tight sm:text-3xl dark:text-white">
              Measurable Impact
            </h3>
            <div className="relative flex-1 overflow-hidden rounded-lg border border-black/10 bg-white p-6 dark:border-white/5 dark:bg-zinc-950">
              <div className="relative flex h-full min-h-[200px] flex-col space-y-6">
                {/* Stats Grid */}
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-3xl text-black dark:text-white">
                        10x
                      </span>
                    </div>
                    <p className="text-black/60 text-xs dark:text-white/60">
                      Faster decision-making
                    </p>
                  </div>

                  <div className="h-px w-full bg-black/10 dark:bg-white/10" />

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-3xl text-black dark:text-white">
                        5x
                      </span>
                    </div>
                    <p className="text-black/60 text-xs dark:text-white/60">
                      Cheaper than consultants
                    </p>
                  </div>

                  <div className="h-px w-full bg-black/10 dark:bg-white/10" />

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-3xl text-black dark:text-white">
                        400%+
                      </span>
                    </div>
                    <p className="text-black/60 text-xs dark:text-white/60">
                      ROI in 90 days
                    </p>
                  </div>

                  <div className="h-px w-full bg-black/10 dark:bg-white/10" />

                  <div className="space-y-1">
                    <div className="flex items-baseline gap-2">
                      <span className="font-bold text-3xl text-black dark:text-white">
                        100%
                      </span>
                    </div>
                    <p className="text-black/60 text-xs dark:text-white/60">
                      Australian sovereign
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
