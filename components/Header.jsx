"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { nav, company } from "@/data/site";

export default function Header() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  const isCurrent = (href) => pathname.startsWith(href);

  return (
    <header className="header">
      <div className="header-in">
        <Link href="/" className="logo" aria-label={`${company.brand} 홈`}>
          <img src="/images/logo.webp" alt={company.brand} width="100" height="46" />
        </Link>
        <nav className="nav" aria-label="주 메뉴">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={isCurrent(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
        </nav>
        <Link href="/contact/" className="btn btn-sm header-cta">문의하기</Link>
        <button
          className="burger" type="button" aria-expanded={open} aria-controls="mobile-menu"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"} onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu${open ? " open" : ""}`}>
        {nav.map((n) => (
          <Link key={n.href} href={n.href} aria-current={isCurrent(n.href) ? "page" : undefined}>
            {n.label}
          </Link>
        ))}
        <Link href="/contact/" className="btn">문의하기</Link>
      </div>
    </header>
  );
}
