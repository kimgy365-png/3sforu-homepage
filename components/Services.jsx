"use client";
import { useState } from "react";
import Link from "next/link";

export default function Services({ items }) {
  const [open, setOpen] = useState({ [items[0]?.id]: true });
  return (
    <div className="acc">
      {items.map((s, i) => {
        const isOpen = !!open[s.id];
        return (
          <div className="acc-item" key={s.id}>
            <h3 style={{ margin: 0 }}>
              <button
                className="acc-btn" type="button" aria-expanded={isOpen} aria-controls={`panel-${s.id}`}
                id={`btn-${s.id}`} onClick={() => setOpen((o) => ({ ...o, [s.id]: !o[s.id] }))}
              >
                <span className="t">
                  <span className="n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="name">{s.title}</span>
                  <span className="tag">{s.short}</span>
                </span>
                <span className="acc-plus" aria-hidden="true">＋</span>
              </button>
            </h3>
            <div className={`acc-panel${isOpen ? " open" : ""}`} id={`panel-${s.id}`} role="region" aria-labelledby={`btn-${s.id}`}>
              <div>
                <div className="acc-body">
                  <div>
                    <p>{s.desc}</p>
                    <div style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
                      <Link className="link-arrow" href={`/contact/?type=${encodeURIComponent(s.inquiryType).replace(/%20/g, "+")}`}>문의하기 →</Link>
                      <Link className="link-arrow" href={`/solutions/#${s.id}`}>운영 프로세스 보기 →</Link>
                    </div>
                  </div>
                  <div className="checks">
                    {s.items.map((it) => <div key={it}>{it}</div>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
