import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "문의하기",
  description: "판촉·FM 도입 상담, 서비스 소개서 요청, 채용 문의를 남겨 주세요. 영업일 기준 1~2일 내 회신드립니다.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="CONTACT" title="무엇을 도와드릴까요?" lead="상담 요청과 서비스 소개서 요청을 가장 빠르게 처리해 드립니다." />
      <ContactSection headingTag="h2" />
    </>
  );
}
