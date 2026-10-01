import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CtaStrip from "@/components/CtaStrip";
import { branches, coverageTags } from "@/data/site";

export const metadata = {
  title: "커버리지",
  description: "대형마트·편의점·백화점부터 오피스·물류센터·병원 시설까지, 유통 전 채널과 시설 전 영역을 아우르는 3S for U의 현장 네트워크.",
  alternates: { canonical: "/coverage/" },
};

export default function Coverage() {
  return (
    <>
      <PageHero eyebrow="COVERAGE" title="전국을 잇는 현장 운영 네트워크" lead="유통 전 채널과 시설 전 영역을 아우르며, 지역별 담당 체계는 상담 시 구체적으로 안내해 드립니다." />

      <section className="container" style={{ paddingBottom: 72 }}>
        <h2 className="h2" style={{ fontSize: 24, marginBottom: 24 }}>본사 · 지사</h2>
        <div className="grid-3">
          {branches.map((b) => {
          const q = encodeURIComponent(b.address);
          return (
            <Reveal className="card" key={b.name}>
              <h3 style={{ fontSize: 17, color: "var(--ink-green)" }}>{b.name}</h3>
              <p className="muted" style={{ fontSize: 15, marginTop: 8, lineHeight: 1.65 }}>{b.address}</p>
              {b.tel && <p className="muted" style={{ fontSize: 15, marginTop: 4 }}>TEL {b.tel}</p>}
              <div style={{ display: "flex", gap: 14, marginTop: 16 }}>
                <a className="link-arrow" href={`https://map.naver.com/p/search/${q}`} target="_blank" rel="noopener noreferrer">네이버지도 ↗</a>
                <a className="link-arrow" href={`https://map.kakao.com/?q=${q}`} target="_blank" rel="noopener noreferrer">카카오맵 ↗</a>
              </div>
            </Reveal>
          );
          })}
        </div>
        <p className="muted" style={{ fontSize: 15, marginTop: 20 }}>전국 매장·시설의 운영 가능 지역은 상담 시 안내해 드립니다.</p>
      </section>

      <section className="band-dark section">
        <div className="container">
          <div className="eyebrow">CHANNELS</div>
          <h2 className="h2" style={{ marginBottom: 28 }}>운영 채널 · 시설 유형</h2>
          <ul className="tags" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {coverageTags.map((t) => <li className="tag-pill" key={t}>{t}</li>)}
          </ul>
        </div>
      </section>
      <CtaStrip text="우리 매장·시설도 커버 가능한지 확인해 보세요" label="커버리지 문의 →" />
    </>
  );
}
