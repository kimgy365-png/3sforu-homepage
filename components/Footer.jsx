import Link from "next/link";
import { company, services } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand">{company.brand}</div>
            <div style={{ fontSize: 15, lineHeight: 1.7 }}>{company.tagline}</div>
          </div>
          <div>
            <h4>Company</h4>
            <Link href="/about/">회사소개</Link>
            <Link href="/coverage/">커버리지</Link>
            <Link href="/careers/">채용정보</Link>
          </div>
          <div>
            <h4>Solutions</h4>
            {services.map((s) => (
              <Link key={s.id} href={`/solutions/#${s.id}`}>{s.title}</Link>
            ))}
            <Link href="/results/">고객성과</Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link href="/contact/">문의하기</Link>
            <Link href="/contact/?type=서비스+소개서+요청">서비스 소개서 요청</Link>
            <Link href="/privacy/">개인정보처리방침</Link>
          </div>
        </div>
        <div className="legal">
          {company.name} · 사업자등록번호 {company.bizNo} · 대표이사 {company.ceo}
          <br />
          {company.address} · TEL {company.tel} · FAX {company.fax}
          {company.email ? <> · {company.email}</> : null}
          <br />© {company.founded}–{new Date().getFullYear()} 3SforU CORPORATION. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
