"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Wordmark from "./Wordmark";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Create", href: "#create" },
  { label: "Teams", href: "#share" },
  { label: "Uptime", href: "#stay-up" },
  { label: "Migrate", href: "#move" },
  { label: "Security", href: "#secure" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 border-b border-border transition-colors duration-200",
        open && "bg-white",
        scrolled && "bg-white"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <Link href="/" aria-label="Cephron home" className="flex items-center shrink-0 no-underline">
          <Wordmark />
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#cta"
            className={cn(
              buttonVariants({ variant: "default" }),
              "inline-flex items-center h-10 px-5 rounded-md border-0 text-sm font-semibold bg-primary hover:bg-primary-active text-white transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md active:scale-[0.98]"
            )}
          >
            Request a Demo
          </Link>
        </div>

        <button
          className="lg:hidden -mr-2.5 p-2.5 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden px-6 pb-6 flex flex-col gap-1 bg-white border-b border-border max-h-[calc(100dvh-4rem)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-body py-2.5"
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="#cta"
            onClick={() => setOpen(false)}
            className="mt-3 flex items-center justify-center h-11 rounded-md text-sm font-semibold bg-primary hover:bg-primary-active text-white no-underline transition-all duration-150 active:scale-[0.98]"
          >
            Request a Demo
          </Link>
        </div>
      )}
    </header>
  );
}
