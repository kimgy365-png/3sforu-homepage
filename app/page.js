import Link from "next/link";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import { company, services, whyUs, coverageTags, extraStats, clients, results, testimonials, certifications } from "@/data/site";

export default function Home() {
  const serviceCount = services.reduce((n, s) => n + s.items.length, 0);
  const stats = [
    { value: String(company.founded), label: "설립 연도" },
    { value: `${services.length}개`, label: "전문 사업본부" },
    { value: `${serviceCount}종`, label: "세부 서비스 영역" },
    { value: `${coverageTags.length}개`, label: "운영 채널 · 시설 유형" },
    ...extraStats,
  ].slice(0, 4);

  return (
    <>
      <section className="container hero2">
        <div className="eyebrow">RETAIL EXECUTION &amp; FACILITY PARTNER</div>
        <h1 className="h1">현장 운영을 단순하게,<br /><span className="accent">결과는 확실하게</span></h1>
        <p className="sub">두 개의 전문영역, 하나의 신뢰 — {company.brand}</p>
        <div className="hero-actions">
          <Link href="#services" className="btn">어떻게 운영하는지 보기 →</Link>
          <Link href="/contact/" className="btn btn-outline">도입 문의</Link>
        </div>
        <div className="hero-badge">{company.group} · {company.founded}년 설립</div>
        <div className="hero-photos">
          <div className="photo">
            <img src="/images/sales-1.webp" alt="매장에서 시식 샘플링을 운영하는 판촉사원" width="996" height="552" fetchPriority="high" />
            <span className="chip">판촉사업본부</span>
          </div>
          <div className="photo">
            <img src="/images/fm-2.webp" alt="기계실에서 설비를 점검하는 시설관리 담당자" width="904" height="918" />
            <span className="chip">자산관리사업본부</span>
          </div>
        </div>
      </section>

      <section className="container" aria-label="핵심 지표">
        <Reveal className="stats">
          {stats.map((s) => (
            <div className="stat" key={s.label}><b>{s.value}</b><span>{s.label}</span></div>
          ))}
        </Reveal>
      </section>

      <section id="services" className="container section" style={{ paddingBottom: 24 }}>
        <Reveal>
          <div className="eyebrow">SOLUTIONS</div>
          <h2 className="h2" style={{ marginBottom: 40 }}>두 개의 사업본부, 현장 운영의 전 과정</h2>
          <Services items={services} />
        </Reveal>
      </section>

      {clients.length > 0 && (
        <section className="band-white section-tight" aria-label="함께한 고객사">
          <div className="container">
            <div className="eyebrow" style={{ color: "var(--text-3)" }}>함께한 고객사</div>
            <div className="client-grid">
              {clients.map((c) => <img key={c.name} src={c.logo} alt={c.name} loading="lazy" />)}
            </div>
          </div>
        </section>
      )}

      <section id="about" className="container section">
        <Reveal>
          <div className="eyebrow">WHY 3S FOR U</div>
          <h2 className="h2">확신을 가지고 나아가세요</h2>
          <p className="lead" style={{ marginBottom: 44 }}>변화가 준비된 매장과 건물을 위해, 현장을 가장 잘 아는 전문가들이 검증된 전략을 실행합니다.</p>
        </Reveal>
        <div className="grid-4">
          {whyUs.map((w, i) => (
            <Reveal className="why" key={w.title} delay={i * 80}>
              <div className="ico"><Icon name={w.icon} /></div>
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="coverage" className="band-dark section">
        <div className="container">
          <Reveal>
            <div className="eyebrow">COVERAGE</div>
            <h2 className="h2" style={{ marginBottom: 32, maxWidth: 560 }}>유통 전 채널과 시설 전 영역을 아우릅니다</h2>
            <ul className="tags" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {coverageTags.map((t) => <li className="tag-pill" key={t}>{t}</li>)}
            </ul>
            <p style={{ marginTop: 28 }}><Link href="/coverage/" className="link-arrow" style={{ color: "var(--mint)" }}>커버리지 자세히 보기 →</Link></p>
          </Reveal>
        </div>
      </section>

      {results.length > 0 && (
        <section id="results" className="container section">
          <Reveal>
            <div className="eyebrow">RESULTS</div>
            <h2 className="h2" style={{ marginBottom: 36 }}>단계마다 성장하는 고객사</h2>
          </Reveal>
          <div className="grid-3">
            {results.slice(0, 3).map((r) => (
              <Reveal className="card" key={r.title}>
                <div className="result-title">{r.title}</div>
                <div style={{ display: "flex", gap: 24 }}>
                  <div className="stat-card"><b>{r.stat1}</b><span>{r.label1}</span></div>
                  <div className="stat-card"><b>{r.stat2}</b><span>{r.label2}</span></div>
                </div>
              </Reveal>
            ))}
          </div>
          <p style={{ marginTop: 24 }}><Link className="link-arrow" href="/results/">성과 사례 더 보기 →</Link></p>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="band-white section" aria-label="고객 후기">
          <div className="container">
            <div className="eyebrow">CLIENT VOICE</div>
            <div className="grid-3" style={{ marginTop: 24 }}>
              {testimonials.slice(0, 3).map((t) => (
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

      {certifications.length > 0 && (
        <section className="container section-tight" aria-label="자격 및 인증">
          <div className="eyebrow">CERTIFICATIONS</div>
          <div className="grid-3">
            {certifications.map((c) => (
              <div className="card" key={c.name}><b style={{ color: "var(--ink-green)" }}>{c.name}</b><p className="muted" style={{ fontSize: 15, marginTop: 6 }}>{c.desc}</p></div>
            ))}
          </div>
        </section>
      )}

      <section className="cta">
        <div className="container">
          <h2>변화를 준비하고 계신가요?</h2>
          <p>오랜 기간 현장에서 검증된 파트너, {company.brand}와 함께하세요.</p>
          <div className="cta-actions">
            <Link href="/contact/" className="btn btn-light">문의하기 →</Link>
            <Link href="/contact/?type=서비스+소개서+요청" className="btn btn-ghost">서비스 소개서 요청</Link>
          </div>
        </div>
      </section>

      <section className="container section-tight" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        <div>
          <div className="eyebrow" style={{ marginBottom: 8 }}>CAREERS</div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "var(--ink-green)" }}>{company.brand}와 함께할 인재를 찾습니다</div>
        </div>
        <Link href="/careers/" className="btn btn-sm">채용 공고 보기 →</Link>
      </section>

      <ContactSection />
    </>
  );
}
