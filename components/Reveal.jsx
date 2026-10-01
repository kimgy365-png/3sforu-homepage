"use client";
import { useEffect, useRef } from "react";

/** 스크롤 진입 시 부드럽게 나타나는 래퍼. JS가 없거나 모션 축소 설정이면 즉시 표시 */
export default function Reveal({ children, as: Tag = "div", className = "", delay = 0, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return; // 첫 화면은 그대로 표시
    el.classList.add("pre");
    if (delay) el.style.transitionDelay = `${delay}ms`;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.remove("pre"); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return <Tag ref={ref} className={`reveal ${className}`.trim()} {...rest}>{children}</Tag>;
}
