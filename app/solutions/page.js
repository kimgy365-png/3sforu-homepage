import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CtaStrip from "@/components/CtaStrip";
import { services } from "@/data/site";

export const metadata = {
  title: "사업영역",
  description: "오프라인유통판촉관리(샘플링·진열·순회관리·유통가공)와 FM관리(미화·보안·시설유지·자산관리) 두 전문 조직의 서비스와 운영 프로세스.",
  alternates: { canonical: "/solutions/" },
};

export default function Solutions() {
  return (
    <>
      <PageHero eyebrow="SOLUTIONS" title="사업영역" lead="판촉사업본부와 자산관리사업본부, 두 개의 전문 조직이 현장 운영의 전 과정을 책임집니다." />
      {services.map((s) => (
        <section key={s.id} id={s.id} className="container" style={{ paddingBottom: 88 }}>
          <div className="area">
            <Reveal className="area-photos">
              {s.images.map((src, i) => (
                <div className="photo" key={src}><img src={src} alt={s.imageAlt[i]} loading="lazy" /></div>
              ))}
            </Reveal>
            <Reveal>
              <div className="eyebrow" style={{ letterSpacing: "0.04em" }}>{s.short}</div>
              <h2 className="h2" style={{ marginBottom: 14 }}>{s.title}</h2>
              <p className="muted" style={{ fontSize: 15, lineHeight: 1.75, marginBottom: 24 }}>{s.desc}</p>
              <h3 style={{ fontSize: 15, color: "var(--ink-green)", marginBottom: 8 }}>운영 프로세스</h3>
              <div>
                {s.process.map((p) => (
                  <div className="proc" key={p.step}><b>{p.step}</b><div><strong>{p.title}</strong><span>{p.desc}</span></div></div>
                ))}
              </div>
            </Reveal>
          </div>
          <Reveal className="card" style={{ marginTop: 36 }}>
            <h3 style={{ fontSize: 15, color: "var(--ink-green)", marginBottom: 14 }}>세부 서비스</h3>
            <div className="items-2 checks">
              {s.items.map((it) => <div key={it}>{it}</div>)}
            </div>
          </Reveal>
        </section>
      ))}
      <CtaStrip text="각자의 전문성으로, 믿고 맡길 수 있는 파트너입니다" />
    </>
  );
}
