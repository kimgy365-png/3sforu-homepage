import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company, SITE_URL } from "@/data/site";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: `${company.brand} | 오프라인 유통 판촉·FM 통합 파트너`, template: `%s | ${company.brand}` },
  description: "샘플링·순회관리·유통가공부터 미화·보안·시설관리·자산관리까지. 2007년 설립 3S for U가 현장 운영의 전 과정을 책임집니다.",
  applicationName: company.brand,
  alternates: { canonical: "./" },
  openGraph: {
    type: "website", locale: "ko_KR", siteName: company.brand,
    title: `${company.brand} | ${company.tagline}`,
    description: "오프라인 유통 판촉과 FM(시설관리)을 하나의 파트너로. 전국 현장 운영 전문 기업 3S for U.",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: `${company.brand} 현장 운영` }],
  },
  twitter: { card: "summary_large_image" },
  robots: process.env.NEXT_PUBLIC_NOINDEX === "1" ? { index: false, follow: false } : { index: true, follow: true },
};

export const viewport = { themeColor: "#1E3932", width: "device-width", initialScale: 1 };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: company.brand,
  legalName: company.name,
  alternateName: company.nameEn,
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.webp`,
  foundingDate: String(company.founded),
  telephone: `+82-${company.tel.replace(/^0/, "")}`,
  faxNumber: `+82-${company.fax.replace(/^0/, "")}`,
  address: {
    "@type": "PostalAddress", streetAddress: "여의대방로 112 (신대방동)",
    addressLocality: "동작구", addressRegion: "서울특별시", addressCountry: "KR",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <a className="skip-link" href="#main">본문 바로가기</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </body>
    </html>
  );
}
