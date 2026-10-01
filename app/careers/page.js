import Link from "next/link";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CtaStrip from "@/components/CtaStrip";
import { company, jobs } from "@/data/site";

export const metadata = {
  title: "채용정보",
  description: "판촉과 자산관리, 두 영역에서 현장을 함께 만들어갈 3S for U의 채용 공고.",
  alternates: { canonical: "/careers/" },
};

export default function Careers() {
  return (
    <>
      <PageHero eyebrow="CAREERS" title={`${company.brand}와 함께할 인재를 찾습니다`} lead="판촉과 자산관리, 두 영역에서 현장을 함께 만들어갈 동료를 기다립니다." />
      <section className="container" style={{ paddingBottom: 88 }}>
        <h2 style={{ fontSize: 20, color: "var(--ink-green)", marginBottom: 24 }}>채용 공고</h2>
        <div style={{ display: "grid", gap: 16 }}>
          {jobs.map((j) => (
            <Reveal className="job" key={j.title}>
              <div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <span className="pill">{j.dept}</span>
                  <span className="muted" style={{ fontSize: 13 }}>{j.type}</span>
                </div>
                <h3>{j.title}</h3>
                <p className="desc">{j.desc}</p>
                <div className="meta"><span>근무지 · {j.location}</span><span>마감 · {j.deadline}</span></div>
              </div>
              <Link className="btn btn-sm" href="/contact/?type=채용+문의">지원 문의</Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CtaStrip text="채용 관련 문의사항이 있다면" />
    </>
  );
}
