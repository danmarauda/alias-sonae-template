"use client";

import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const BLOG_POSTS = [
  {
    id: 1,
    category: "Product",
    title: "Introducing Multi-Agent Workflows",
    excerpt:
      "Learn how to orchestrate multiple AI agents working together to solve complex tasks efficiently and seamlessly.",
    date: "Mar 15, 2025",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    category: "Engineering",
    title: "Building Autonomous Systems with Sonae",
    excerpt:
      "Deep dive into the architecture behind our autonomous agent system and how it scales.",
    date: "Mar 10, 2025",
    readTime: "8 min read",
    featured: false,
  },
  {
    id: 3,
    category: "AI Research",
    title: "The Future of Contextual AI",
    excerpt:
      "Exploring how context-aware AI agents are revolutionizing the way we interact with technology.",
    date: "Mar 5, 2025",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    category: "Tutorial",
    title: "Getting Started with Custom Agents",
    excerpt:
      "A comprehensive guide to creating your first custom AI agent from scratch in under 10 minutes.",
    date: "Feb 28, 2025",
    readTime: "12 min read",
    featured: false,
  },
  {
    id: 5,
    category: "Product",
    title: "Performance Optimization Tips",
    excerpt:
      "Best practices for optimizing agent performance and reducing latency in production environments.",
    date: "Feb 22, 2025",
    readTime: "7 min read",
    featured: false,
  },
  {
    id: 6,
    category: "Case Study",
    title: "How Teams Are Using Sonae",
    excerpt:
      "Real-world examples of development teams leveraging AI agents to boost productivity and innovation.",
    date: "Feb 15, 2025",
    readTime: "10 min read",
    featured: false,
  },
];

const CATEGORIES = [
  "All Posts",
  "Product",
  "Engineering",
  "AI Research",
  "Tutorial",
  "Case Study",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");

  const filteredPosts =
    activeCategory === "All Posts"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-white py-16 sm:mx-4 sm:py-24 dark:bg-black">
        <div
          className="-bottom-12 -right-16 sm:-bottom-16 sm:-right-20 pointer-events-none absolute origin-bottom-right"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="select-none font-bold text-[12rem] text-black/[0.03] tracking-tighter sm:text-[14rem] md:text-[16rem] lg:text-[18rem] dark:text-white/[0.03]">
            Insights
          </span>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <div className="inline-flex items-center text-black/70 text-md tracking-tighter dark:text-white/70">
                Thoughts, stories, and ideas.
              </div>
            </div>

            <h1 className="font-semibold text-4xl tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              The Sonae{" "}
              <span className="text-red-500/85 dark:text-red-500/85">Blog</span>
            </h1>

            <p className="mx-auto max-w-2xl text-base text-black/60 tracking-tighter sm:text-lg md:text-xl dark:text-white/60">
              Discover insights, tutorials, and stories about building with AI
              agents. Stay updated with the latest in autonomous systems.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="relative mx-2 mb-8 sm:mx-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {CATEGORIES.map((category) => (
              <button
                className={`rounded-lg px-4 py-2 text-sm tracking-tighter transition-all duration-300 ${
                  category === activeCategory
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "border border-black/10 bg-transparent text-black hover:border-black/30 hover:bg-black/5 dark:border-white/10 dark:text-white dark:hover:border-white/30 dark:hover:bg-white/5"
                }`}
                key={category}
                onClick={() => setActiveCategory(category)}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.filter((post) => post.featured).length > 0 && (
        <section className="relative mx-2 mb-4 sm:mx-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-6">
              <span className="font-medium text-black/40 text-xs uppercase tracking-wider dark:text-white/40">
                Featured
              </span>
            </div>

            {filteredPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Link
                  className="group block overflow-hidden rounded-2xl border border-black/10 bg-black/5 transition-all duration-300 hover:border-black/30 dark:border-white/5 dark:bg-zinc-900/50 dark:hover:border-white/30"
                  href="/"
                  key={post.id}
                >
                  <div className="grid grid-cols-1 gap-8 p-8 sm:p-12 lg:grid-cols-2">
                    <div className="flex flex-col justify-between space-y-6">
                      <div className="space-y-4">
                        <div className="inline-flex items-center rounded-lg bg-red-500/10 px-3 py-1 text-red-500 text-xs tracking-tighter">
                          {post.category}
                        </div>

                        <h2 className="font-medium text-3xl text-black tracking-tighter transition-colors sm:text-4xl md:text-5xl dark:text-white">
                          {post.title}
                        </h2>

                        <p className="text-base text-black/60 tracking-tighter sm:text-lg dark:text-white/60">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 text-black/50 text-sm tracking-tighter dark:text-white/50">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3.5 w-3.5" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <Button
                          className="group/btn h-9 rounded-lg bg-black px-6 text-white tracking-tighter transition-all duration-300 hover:bg-black/90 sm:h-10 dark:bg-white dark:text-black dark:hover:bg-white/90"
                          size="lg"
                          type="button"
                        >
                          <span className="flex items-center gap-2">
                            Read Article
                            <ArrowUpRight className="group-hover/btn:-translate-y-0.5 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5" />
                          </span>
                        </Button>
                      </div>
                    </div>

                    <div className="relative min-h-[300px] overflow-hidden rounded-xl">
                      <Image
                        alt={post.title}
                        className="object-cover"
                        fill
                        src="/eye.jpeg"
                      />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      )}

      {/* All Posts Grid */}
      <section className="relative mx-2 mb-4 py-12 sm:mx-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="font-medium text-black/40 text-xs uppercase tracking-wider dark:text-white/40">
              {activeCategory === "All Posts"
                ? "Latest Articles"
                : `${activeCategory} Articles`}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts
              .filter((post) => !post.featured)
              .map((post) => {
                const getArticleDesign = (id: number) => {
                  switch (id) {
                    case 2: // Engineering - Workflow nodes
                      return (
                        <div className="absolute inset-0 flex items-center justify-center p-6">
                          <div className="relative h-full w-full">
                            <svg
                              className="pointer-events-none absolute inset-0 h-full w-full"
                              preserveAspectRatio="none"
                            >
                              <title>Workflow connections</title>
                              <line
                                stroke="rgba(59, 130, 246, 0.2)"
                                strokeWidth="1"
                                x1="20%"
                                x2="50%"
                                y1="30%"
                                y2="50%"
                              />
                              <line
                                stroke="rgba(239, 68, 68, 0.2)"
                                strokeWidth="1"
                                x1="80%"
                                x2="50%"
                                y1="30%"
                                y2="50%"
                              />
                              <line
                                stroke="rgba(251, 146, 60, 0.2)"
                                strokeWidth="1"
                                x1="50%"
                                x2="50%"
                                y1="50%"
                                y2="80%"
                              />
                            </svg>
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute top-[30%] left-[20%] h-6 w-6 rounded-full border border-blue-500/20 bg-blue-500/10" />
                            <div className="-translate-y-1/2 absolute top-[30%] right-[20%] h-6 w-6 translate-x-1/2 rounded-full border border-red-500/20 bg-red-500/10" />
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-8 w-8 rounded-lg border border-black/15 bg-black/10 dark:border-white/15 dark:bg-white/10" />
                            <div className="-translate-x-1/2 absolute bottom-[20%] left-1/2 h-6 w-6 translate-y-1/2 rounded-full border border-orange-500/20 bg-orange-500/10" />
                          </div>
                        </div>
                      );
                    case 3: // AI Research - Circuit pattern
                      return (
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="relative h-full w-full">
                            <div className="absolute top-1/4 left-1/4 h-12 w-12 rounded-lg border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5" />
                            <div className="absolute top-1/4 right-1/4 h-12 w-12 rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5" />
                            <div className="absolute bottom-1/4 left-1/4 h-12 w-12 rounded-full border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5" />
                            <div className="absolute right-1/4 bottom-1/4 h-12 w-12 rounded-lg border border-black/10 bg-black/5 dark:border-white/10 dark:bg-white/5" />
                            <div className="-translate-x-1/2 -translate-y-1/2 absolute top-1/2 left-1/2 h-16 w-16 rounded-lg border-2 border-red-500/20 bg-red-500/10" />
                          </div>
                        </div>
                      );
                    case 4: // Tutorial - Steps
                      return (
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 bg-black/10 font-medium text-black/40 text-xs dark:border-white/15 dark:bg-white/10 dark:text-white/40">
                                1
                              </div>
                              <div className="h-2 w-24 rounded-full bg-black/10 dark:bg-white/10" />
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/15 bg-black/10 font-medium text-black/40 text-xs dark:border-white/15 dark:bg-white/10 dark:text-white/40">
                                2
                              </div>
                              <div className="h-2 w-20 rounded-full bg-black/10 dark:bg-white/10" />
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-red-500/20 bg-red-500/15 font-medium text-red-500/60 text-xs">
                                3
                              </div>
                              <div className="h-2 w-16 rounded-full bg-red-500/15" />
                            </div>
                          </div>
                        </div>
                      );
                    case 5: // Product - Grid pattern
                      return (
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="grid grid-cols-4 gap-2">
                            <div className="h-10 w-10 rounded-lg bg-black/5 dark:bg-white/5" />
                            <div className="h-10 w-10 rounded-lg bg-black/10 dark:bg-white/10" />
                            <div className="h-10 w-10 rounded-lg bg-black/5 dark:bg-white/5" />
                            <div className="h-10 w-10 rounded-lg bg-black/10 dark:bg-white/10" />
                            <div className="h-10 w-10 rounded-lg bg-black/10 dark:bg-white/10" />
                            <div className="h-10 w-10 rounded-lg bg-red-500/15 dark:bg-red-500/15" />
                            <div className="h-10 w-10 rounded-lg bg-black/10 dark:bg-white/10" />
                            <div className="h-10 w-10 rounded-lg bg-black/5 dark:bg-white/5" />
                            <div className="h-10 w-10 rounded-lg bg-black/5 dark:bg-white/5" />
                            <div className="h-10 w-10 rounded-lg bg-black/10 dark:bg-white/10" />
                            <div className="h-10 w-10 rounded-lg bg-black/5 dark:bg-white/5" />
                            <div className="h-10 w-10 rounded-lg bg-black/10 dark:bg-white/10" />
                          </div>
                        </div>
                      );
                    case 6: // Case Study - Bar chart
                      return (
                        <div className="absolute inset-0 flex items-end justify-center gap-3 p-8">
                          <div className="h-[30%] w-8 rounded-t-md bg-black/10 dark:bg-white/10" />
                          <div className="h-[45%] w-8 rounded-t-md bg-black/15 dark:bg-white/15" />
                          <div className="h-[65%] w-8 rounded-t-md bg-red-500/20 dark:bg-red-500/20" />
                          <div className="h-[50%] w-8 rounded-t-md bg-black/15 dark:bg-white/15" />
                          <div className="h-[35%] w-8 rounded-t-md bg-black/10 dark:bg-white/10" />
                        </div>
                      );
                    default:
                      return (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="grid grid-cols-3 gap-2">
                            <div className="h-12 w-12 rounded-lg bg-black/10 dark:bg-white/10" />
                            <div className="h-12 w-12 rounded-lg bg-black/10 dark:bg-white/10" />
                            <div className="h-12 w-12 rounded-lg bg-black/10 dark:bg-white/10" />
                            <div className="h-12 w-12 rounded-lg bg-black/10 dark:bg-white/10" />
                            <div className="h-12 w-12 rounded-lg bg-red-500/15 dark:bg-red-500/15" />
                            <div className="h-12 w-12 rounded-lg bg-black/10 dark:bg-white/10" />
                          </div>
                        </div>
                      );
                  }
                };

                return (
                  <Link
                    className="group flex flex-col overflow-hidden rounded-xl border border-black/10 bg-white transition-all duration-300 hover:border-black/30 dark:border-white/5 dark:bg-zinc-950 dark:hover:border-white/30"
                    href={`/blog/${post.id}`}
                    key={post.id}
                  >
                    {/* Image placeholder */}
                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-black/[0.03] to-black/[0.08] dark:from-white/[0.03] dark:to-white/[0.08]">
                      {getArticleDesign(post.id)}
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-6">
                      <div className="space-y-3">
                        <div className="inline-flex items-center rounded-lg bg-black/5 px-2.5 py-1 text-black/70 text-xs tracking-tighter dark:bg-white/5 dark:text-white/70">
                          {post.category}
                        </div>

                        <h3 className="font-medium text-black text-xl tracking-tighter transition-colors group-hover:text-red-500/85 dark:text-white dark:group-hover:text-red-500/85">
                          {post.title}
                        </h3>

                        <p className="text-black/60 text-sm tracking-tighter dark:text-white/60">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-black/10 border-t pt-4 dark:border-white/10">
                        <div className="flex flex-col gap-1 text-black/50 text-xs tracking-tighter dark:text-white/50">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="h-3 w-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        <ArrowUpRight className="group-hover:-translate-y-0.5 h-4 w-4 text-black/40 transition-all group-hover:translate-x-0.5 group-hover:text-red-500/85 dark:text-white/40 dark:group-hover:text-red-500/85" />
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="relative mx-2 mb-4 overflow-hidden rounded-xl bg-black/5 py-16 sm:mx-4 sm:py-20 dark:bg-zinc-900/50">
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
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

          <h2 className="mb-4 font-medium text-3xl text-black tracking-tighter sm:text-4xl md:text-5xl dark:text-white">
            Stay in the loop
          </h2>

          <p className="mb-8 text-base text-black/60 tracking-tighter sm:text-lg dark:text-white/60">
            Get the latest updates on AI agents, product news, and exclusive
            insights delivered to your inbox.
          </p>

          <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <input
              className="flex-1 rounded-lg border border-black/10 bg-white px-4 py-3 text-black text-sm tracking-tighter placeholder:text-black/40 focus:border-black/30 focus:outline-none dark:border-white/10 dark:bg-black dark:text-white dark:focus:border-white/30 dark:placeholder:text-white/40"
              placeholder="Enter your email"
              type="email"
            />
            <Button
              className="group h-11 rounded-lg bg-red-500/85 px-6 text-white tracking-tighter transition-all duration-300 hover:bg-red-500/95 dark:bg-red-500/85 dark:hover:bg-red-500/95"
              size="lg"
              type="button"
            >
              <span className="flex items-center gap-2">
                Subscribe
                <ArrowUpRight className="group-hover:-translate-y-0.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Button>
          </div>

          <p className="mt-4 text-black/40 text-xs tracking-tighter dark:text-white/40">
            No spam. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </section>
    </div>
  );
}
