"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const PRIMARY_LINKS = [
  { name: "HOME", href: "/" },
  { name: "FIXTURES", href: "/fixtures" },
  { name: "GROUPS", href: "/groups" },
  { name: "TEAMS", href: "/teams" },
  { name: "LIVE", href: "/live", live: true },
  { name: "BRACKET", href: "/bracket" },
  { name: "VENUES", href: "/venues" },
  { name: "SCORERS", href: "/scorers" },
  { name: "TICKETS", href: "/tickets" },
];

const SECONDARY_LINKS = [
  { name: "HISTORY", href: "/history" },
  { name: "ANTHEMS", href: "/anthems" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-[80px] flex items-center"
        style={{
          background: scrolled
            ? "rgba(5,10,5,0.97)"
            : "rgba(5,10,5,0.92)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: "0.5px solid #1A1A1A",
        }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 flex flex-col items-center gap-1 py-1"
            style={{ fontFamily: "var(--font-bebas-neue), sans-serif", textDecoration: "none" }}
          >
            <div style={{ height: 28, width: 20, position: "relative", flexShrink: 0 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/worldcuptrophy.jpg" alt="" className="w-full h-full object-contain" />
            </div>
            <span
              className="text-[12px] md:text-[14px] text-white tracking-[0.15em] leading-none"
              style={{ letterSpacing: "0.2em", whiteSpace: "nowrap" }}
            >
              FIFA WORLD CUP <span style={{ color: "#C8102E" }}>2026</span>
            </span>
          </Link>

          {/* Desktop — primary */}
          <div className="hidden lg:flex items-center gap-5">
            {PRIMARY_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link flex items-center gap-1.5 pb-0.5"
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    color: active ? "#F2F2F2" : "#666666",
                    transition: "color 0.15s",
                    borderBottom: active ? "2px solid #C8102E" : "2px solid transparent",
                  }}
                >
                  {link.live && (
                    <span
                      className="animate-pulse-dot inline-block w-1.5 h-1.5 rounded-full"
                      style={{ background: "#C8102E" }}
                    />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop — secondary */}
          <div className="hidden lg:flex items-center gap-5">
            {SECONDARY_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="nav-link pb-0.5"
                  style={{
                    fontFamily: "var(--font-barlow-condensed), sans-serif",
                    fontWeight: 600,
                    fontSize: "13px",
                    letterSpacing: "0.1em",
                    color: active ? "#F2F2F2" : "#555555",
                    transition: "color 0.15s",
                    borderBottom: active ? "2px solid #C8102E" : "2px solid transparent",
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-1"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="fixed inset-0 z-40 flex flex-col pt-[80px] px-8 pb-12 overflow-y-auto"
            style={{ background: "rgba(5,10,5,0.99)" }}
          >
            <div className="flex flex-col gap-6 pt-10">
              {[...PRIMARY_LINKS, ...SECONDARY_LINKS].map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    style={{
                      fontFamily: "var(--font-bebas-neue), sans-serif",
                      fontSize: "32px",
                      color: pathname === link.href ? "#C8102E" : "#F2F2F2",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
