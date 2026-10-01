import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CtaStrip from "@/components/CtaStrip";
import { results, testimonials, reportingKpis } from "@/data/site";

export const metadata = {
  title: "고객성과",
  description: "3S for U가 판촉·FM 현장에서 성과를 측정하고 보고하는 방식과 고객 사례.",
  alternates: { canonical: "/results/" },
};

export default function Results() {
  return (
    <>
      <PageHero eyebrow="RESULTS" title="고객성과" lead="현장에서 만든 변화를 숫자로 측정하고, 고객사에 투명하게 보고합니다." />

      {results.length > 0 && (
        <section className="container" style={{ paddingBottom: 72 }}>
          <div className="grid-3">
            {results.map((r) => (
              <Reveal className="card" key={r.title}>
                {r.tag && <div style={{ fontSize: 13, fontWeight: 700, color: "var(--green)", letterSpacing: "0.08em", marginBottom: 10 }}>{r.tag}</div>}
                <div className="result-title">{r.title}</div>
                <div style={{ display: "flex", gap: 24, marginBottom: 16 }}>
                  <div className="stat-card"><b>{r.stat1}</b><span>{r.label1}</span></div>
                  <div className="stat-card"><b>{r.stat2}</b><span>{r.label2}</span></div>
                </div>
                {r.desc && <p className="muted" style={{ fontSize: 15, lineHeight: 1.6 }}>{r.desc}</p>}
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className={results.length ? "band-white section" : "container section"} style={results.length ? undefined : { paddingTop: 8 }}>
        <div className={results.length ? "container" : undefined}>
          <Reveal>
            <div className="eyebrow">REPORTING</div>
            <h2 className="h2" style={{ marginBottom: 12 }}>성과는 이렇게 측정하고 보고합니다</h2>
            <p className="lead" style={{ marginTop: 0, marginBottom: 32 }}>매장·시설 단위로 아래 표준 지표를 기록하고, 개선 제안과 함께 정기 보고합니다.</p>
          </Reveal>
          <div className="grid-4">
            {reportingKpis.map((k, i) => (
              <Reveal className="card" key={k.title} delay={i * 70}>
                <h3 style={{ fontSize: 17, color: "var(--ink-green)", marginBottom: 8 }}>{k.title}</h3>
                <p className="muted" style={{ fontSize: 15, lineHeight: 1.7 }}>{k.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {results.length === 0 && (
        <section className="container" style={{ paddingBottom: 72 }}>
          <div className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            <div>
              <h3 style={{ fontSize: 17, color: "var(--ink-green)" }}>프로젝트 사례는 고객사 동의 절차를 거쳐 순차 공개됩니다</h3>
              <p className="muted" style={{ fontSize: 15, marginTop: 6 }}>도입 검토에 필요한 레퍼런스와 성과 자료는 상담 시 별도로 제공해 드립니다.</p>
            </div>
            <Link className="btn btn-sm" href="/contact/?type=서비스+소개서+요청">소개서 · 레퍼런스 요청</Link>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="band-white section">
          <div className="container">
            <div className="eyebrow">CLIENT VOICE</div>
            <div className="grid-3" style={{ marginTop: 24 }}>
              {testimonials.map((t) => (
                <Reveal key={t.quote}>
                  <p className="quote">“{t.quote}”</p>
                  <p style={{ marginTop: 14, fontSize: 13, fontWeight: 700, color: "var(--ink-green)" }}>{t.name}</p>
                  <p className="muted" style={{ fontSize: 13 }}>{t.role}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
      <CtaStrip text="우리 현장에 맞는 성과 지표를 함께 설계해 드립니다" />
    </>
  );
}
