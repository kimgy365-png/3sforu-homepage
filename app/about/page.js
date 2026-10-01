import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CtaStrip from "@/components/CtaStrip";
import { company, overviewRows, greeting, greetingBy, mission, vision, history, organization } from "@/data/site";

export const metadata = {
  title: "회사소개",
  description: `${company.name}는 ${company.founded}년 설립 이래 판촉사업본부와 자산관리사업본부 두 축으로 현장 운영의 전 과정을 책임져 온 종합 현장관리 기업입니다.`,
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US" title="고객의 가치를 높이는 기업"
        lead={`${company.founded}년 설립 이래, 판촉사업본부와 자산관리사업본부 두 축으로 현장 운영의 전 과정을 책임져 온 종합 현장관리 기업입니다.`}
      />

      <section className="container" style={{ paddingBottom: 72 }}>
        <Reveal>
          <dl className="rows" style={{ margin: 0 }}>
            {overviewRows.map((r) => (
              <div className="row" key={r.label}><dt>{r.label}</dt><dd>{r.value}</dd></div>
            ))}
          </dl>
        </Reveal>
      </section>

      {greeting && (
        <section className="band-white">
          <div className="container section">
            <div className="ceo">
              <div />
              <div>
                <div className="eyebrow">GREETING</div>
                <h2 className="h2" style={{ marginBottom: 16 }}>대표이사 인사말</h2>
                <p style={{ fontSize: 15, lineHeight: 1.85, maxWidth: 640, whiteSpace: "pre-line" }}>{greeting}</p>
                {greetingBy && <p style={{ marginTop: 16, fontWeight: 700, color: "var(--ink-green)" }}>{greetingBy}</p>}
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="container section">
        <Reveal>
          <div className="eyebrow">MISSION &amp; VISION</div>
          <h2 className="h2" style={{ marginBottom: 32 }}>경영 철학</h2>
        </Reveal>
        <div className="grid-2">
          <Reveal className="card"><h3 style={{ fontSize: 17, color: "var(--ink-green)", marginBottom: 10 }}>미션</h3><p className="muted" style={{ fontSize: 15, lineHeight: 1.75 }}>{mission}</p></Reveal>
          <Reveal className="card" delay={80}><h3 style={{ fontSize: 17, color: "var(--ink-green)", marginBottom: 10 }}>비전</h3><p className="muted" style={{ fontSize: 15, lineHeight: 1.75 }}>{vision}</p></Reveal>
        </div>
      </section>

      <section className="band-dark section">
        <div className="container">
          <div className="eyebrow">HISTORY</div>
          <h2 className="h2" style={{ marginBottom: 36 }}>연혁</h2>
          <div className="timeline">
            {history.map((h) => (
              <div className="tl" key={h.desc}><div className="y">{h.year ?? "●"}</div><div className="d">{h.desc}</div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <Reveal>
          <div className="eyebrow">ORGANIZATION</div>
          <h2 className="h2" style={{ marginBottom: 32 }}>조직 구성</h2>
        </Reveal>
        <div className="grid-3">
          {organization.map((o) => (
            <Reveal className="card" key={o.name}>
              <h3 style={{ fontSize: 17, color: "var(--ink-green)" }}>{o.name}</h3>
              <p className="muted" style={{ fontSize: 15, marginTop: 8 }}>{o.role}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaStrip text="현장 운영 파트너가 필요하신가요?" />
    </>
  );
}
