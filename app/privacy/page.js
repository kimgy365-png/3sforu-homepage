import PageHero from "@/components/PageHero";
import { company, privacy } from "@/data/site";

export const metadata = {
  title: "개인정보처리방침",
  description: `${company.name} 개인정보처리방침`,
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="PRIVACY" title="개인정보처리방침" lead={`시행일: ${privacy.effectiveDate}`} />
      <section className="container prose" style={{ paddingBottom: 88, maxWidth: 820 }}>
        <p>{company.name}(이하 “회사”)는 「개인정보 보호법」 등 관련 법령에 따라 이용자의 개인정보를 보호하고 관련 고충을 신속히 처리하기 위해 다음과 같이 개인정보처리방침을 수립·공개합니다.</p>

        <h2>1. 수집하는 개인정보 항목 및 수집 방법</h2>
        <ul><li>항목: {privacy.items}</li><li>방법: 홈페이지 문의 양식을 통한 이용자의 직접 입력</li></ul>

        <h2>2. 개인정보의 수집·이용 목적</h2>
        <ul><li>서비스 도입 상담, 소개서 제공, 채용 문의 등 문의 사항에 대한 확인 및 회신</li><li>문의 이력 관리 및 분쟁 대응</li></ul>

        <h2>3. 보유 및 이용 기간</h2>
        <p>{privacy.retention}까지 보유하며, 보유 기간이 지나거나 처리 목적이 달성되면 지체 없이 파기합니다. 다만 관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.</p>

        <h2>4. 개인정보의 제3자 제공 및 처리 위탁</h2>
        <p>회사는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다. 문의 접수·알림 처리를 위해 외부 서비스에 업무를 위탁하는 경우 수탁자와 위탁 업무를 본 방침에 공개합니다.</p>

        <h2>5. 이용자의 권리와 행사 방법</h2>
        <p>이용자는 언제든지 자신의 개인정보에 대한 열람·정정·삭제·처리정지를 요청할 수 있으며, 아래 연락처로 요청하시면 지체 없이 조치합니다. 동의를 거부할 권리가 있으며, 동의하지 않을 경우 문의 접수가 제한될 수 있습니다.</p>

        <h2>6. 개인정보의 파기 절차 및 방법</h2>
        <p>전자적 파일 형태의 정보는 복구할 수 없는 방법으로 삭제하고, 출력물은 분쇄하거나 소각합니다.</p>

        <h2>7. 개인정보의 안전성 확보 조치</h2>
        <p>접근 권한 최소화, 접근 기록 관리, 전송 구간 암호화 등 합리적인 기술적·관리적 보호 조치를 시행합니다.</p>

        <h2>8. 개인정보 관련 문의</h2>
        <p>{company.name} · 대표전화 {company.tel} · {company.address}{company.email ? ` · ${company.email}` : ""}</p>

        <h2>9. 방침의 변경</h2>
        <p>본 방침이 변경되는 경우 시행 7일 전부터 홈페이지를 통해 공지합니다.</p>
      </section>
    </>
  );
}
