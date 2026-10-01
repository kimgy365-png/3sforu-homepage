/**
 * 사이트 데이터 단일 원천 (Single Source of Truth)
 * - 값이 null / 빈 배열이면 해당 섹션은 화면에서 자동으로 숨겨집니다.
 * - [확인필요] 표시 항목은 공개 전 반드시 실제 정보로 확정하세요.
 */

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "";

export const company = {
  brand: "3S for U",
  name: "(주)쓰리에스포유",
  nameEn: "3SforU Corporation",
  founded: 2007,
  // 확정: 민영준, 오준성 각자대표
  ceo: "민영준, 오준성",
  ceoNote: "각자대표",
  bizNo: "108-81-70978",
  address: "서울특별시 동작구 여의대방로 112 (신대방동)",
  tel: "02-820-7930",
  fax: "02-820-7919",
  email: null, // [확인필요] 대표 이메일 (예: "info@도메인")
  group: "삼구그룹(SAMKOO) 계열사",
  tagline: "현장 운영을 단순하게, 결과는 확실하게",
};

export const nav = [
  { href: "/about/", label: "회사소개" },
  { href: "/solutions/", label: "사업영역" },
  { href: "/coverage/", label: "커버리지" },
  { href: "/results/", label: "고객성과" },
  { href: "/careers/", label: "채용정보" },
];

export const inquiryTypes = [
  "판촉관리 문의",
  "FM관리 문의",
  "서비스 소개서 요청",
  "채용 문의",
  "기타",
];

export const services = [
  {
    id: "sales",
    title: "오프라인유통판촉관리",
    short: "판촉사업본부",
    desc: "샘플링부터 순회관리, 유통가공까지 — 매장이 곧 매출이 되도록 현장을 직접 운영합니다.",
    images: ["/images/sales-1.webp", "/images/sales-2.webp"],
    imageAlt: ["매장에서 시식 샘플링을 운영하는 판촉사원", "매대에 상품을 진열하는 판촉사원"],
    process: [
      { step: "01", title: "현장 진단", desc: "매장 유형 · 카테고리별 판촉 니즈 분석" },
      { step: "02", title: "인력 · 매대 설계", desc: "판촉사원 배치 및 매대 구성 기획" },
      { step: "03", title: "현장 운영", desc: "샘플링 · 진열 · 순회관리 실행" },
      { step: "04", title: "데이터 리포팅", desc: "방문 결과 실시간 보고 및 개선" },
    ],
    items: [
      "매장 샘플링 · 시식 운영", "진열 · 매대(MD) 관리", "CVS · 대형마트 순회관리",
      "판촉사원 파견 · 도급", "유통가공 (라벨링 · 소분 · 세트구성 · 검품)",
      "신제품 런칭 프로모션 기획", "시즌 · 명절 행사 매대 기획운영",
      "매장 재고 · 결품 관리 지원", "방문결과 실시간 데이터 리포팅", "신규 거래처 입점 · 영업 지원",
    ],
    inquiryType: "판촉관리 문의",
  },
  {
    id: "fm",
    title: "FM관리",
    short: "자산관리사업본부",
    desc: "미화부터 보안, 시설 유지관리, 부동산 자산관리까지 — 건물의 가치를 지키는 통합 관리 체계를 운영합니다.",
    // 원본 디자인의 fm 첫 이미지는 경영 분석 장면이라 설비 점검 이미지를 대표로 사용
    images: ["/images/fm-2.webp", "/images/fm-1.webp"],
    imageAlt: ["기계실에서 설비를 점검하는 시설관리 담당자", "자산 운영 현황을 분석하는 모습"],
    process: [
      { step: "01", title: "시설 진단", desc: "건물 현황 · 리스크 요소 점검" },
      { step: "02", title: "관리 체계 설계", desc: "미화 · 보안 · 설비 운영 계획 수립" },
      { step: "03", title: "상주 운영", desc: "인력 상주 및 정기 점검 실행" },
      { step: "04", title: "자산가치 리포팅", desc: "운영 현황 및 개선 제안 보고" },
    ],
    // [확인필요] 직영 수행 항목과 전문 협력업체 수행 항목을 구분해 표기하면 신뢰도가 높아집니다.
    items: [
      "미화(청소) 관리", "보안 · 경비 (출입통제 · 순찰)",
      "시설물 유지보수 (전기 · 공조 · 승강기 · 소방)", "주차관리", "조경관리",
      "에너지관리 (전기 · 수도 효율화)", "방역 · 소독 서비스",
      "부동산 자산관리(PM) · 임대차 대행", "가치평가 및 자문 서비스",
    ],
    inquiryType: "FM관리 문의",
  },
];

export const whyUs = [
  { icon: "network", title: "전국 현장 운영 네트워크", desc: "수도권부터 광역시까지, 균일한 현장 대응 속도를 제공합니다." },
  { icon: "chart", title: "데이터 기반 운영", desc: "방문 결과를 실시간 리포팅해 결품·이슈를 선제적으로 관리합니다." },
  { icon: "people", title: "지속적인 인력 투자", desc: "전문 교육을 거친 운영 인력이 현장 품질을 균일하게 유지합니다." },
  { icon: "puzzle", title: "맞춤형 통합 솔루션", desc: "판촉과 FM을 하나의 계약으로, 고객사 맞춤 체계로 설계합니다." },
];

export const coverageTags = [
  "대형마트", "편의점(CVS)", "백화점", "슈퍼마켓", "관공서 시설", "오피스 빌딩",
  "물류센터", "복합쇼핑몰", "병원 시설", "교육 시설", "상업용 빌딩",
];

/** 신뢰 지표: 사이트 내 확정 정보에서 자동 산출. 추가 실수치는 extraStats에 입력(null이면 숨김) */
export const extraStats = [
  // { value: "00개", label: "전국 지사" },       // [확인필요]
  // { value: "0,000명", label: "현장 운영 인력" }, // [확인필요]
];

/** 고객사 로고: [{ name: "농심", logo: "/images/clients/nongshim.png" }] 형태. 사용 허락 확보 후 입력 */
export const clients = [];

/** 고객 성과 사례: 실제 수치·동의 확보 후 입력. 비어 있으면 홈 섹션은 숨김, 성과 페이지는 안내 문구 표시 */
export const results = [
  // { tag: "판촉 · 대형마트", title: "...", stat1: "", label1: "", stat2: "", label2: "", desc: "" },
];

/** 고객 후기: 실제 후기 + 게재 동의 확보 후 입력 */
export const testimonials = [
  // { quote: "...", name: "OO 담당자", role: "OO사 · 구매팀" },
];

/** 자격·인증 (경비업 허가, ISO 등): 확인된 항목만 입력 */
export const certifications = [
  // { name: "경비업 허가", desc: "..." },
];

/** 성과 보고에 사용하는 표준 지표 (측정·보고 방식 소개용 — 실적 수치 아님) */
export const reportingKpis = [
  { title: "방문 완료율", desc: "계획 대비 실제 방문·운영 완료 비율을 매장 단위로 관리합니다." },
  { title: "결품 발생·대응", desc: "결품 발생 건수와 대응까지 걸린 시간을 함께 기록합니다." },
  { title: "이슈 처리 리드타임", desc: "현장 이슈 접수부터 조치 완료까지의 소요 시간을 보고합니다." },
  { title: "현장 품질 점검", desc: "진열 상태·재고·위생 등 점검 항목의 이행 수준을 점검표로 확인합니다." },
];

export const overviewRows = [
  { label: "상호", value: `${company.name} (${company.nameEn})` },
  { label: "설립일", value: `${company.founded}년` },
  { label: "대표이사", value: `${company.ceo} (${company.ceoNote})` },
  { label: "사업자등록번호", value: company.bizNo },
  { label: "본사 주소", value: company.address },
  { label: "연락처", value: `TEL ${company.tel} · FAX ${company.fax}` },
  { label: "소속", value: company.group },
];

/** 대표이사 인사말 원문: null이면 섹션 숨김 [확인필요] */
export const greeting = null;
export const greetingBy = null; // 예: "대표이사 OOO"

// [확인필요] 아래 미션·비전은 원본 디자인의 초안 문구입니다. 확정 문구로 교체하세요.
export const mission = "고객의 가치를 높이는 기업 — 판촉과 자산관리 전 영역에서 현장의 신뢰를 만듭니다.";
export const vision = "전국 어디서든 하나의 기준으로 현장을 운영하는 통합 파트너.";

// [확인필요] year가 null인 항목은 연도 없이 표시됩니다. 실제 연도를 입력하세요.
export const history = [
  { year: "2007", desc: "(주)쓰리에스포유 설립" },
  { year: null, desc: "삼구그룹(SAMKOO) 계열사(가족사)로 합류" },
  { year: null, desc: "오프라인유통판촉관리 사업본부 운영 개시" },
  { year: null, desc: "자산관리사업본부(FM) 확장, 전국 현장 운영 네트워크 구축" },
];

// 조직 구성: 팀 이름은 비공개 정책에 따라 본부 단위 역할만 표시
export const organization = [
  { name: "판촉사업본부", role: "오프라인유통판촉관리" },
  { name: "자산관리사업본부", role: "FM관리" },
  { name: "경영지원본부", role: "경영지원" },
];

/** 지사 목록: 확정된 주소만 입력. HQ 외에는 확인 후 추가 */
export const branches = [
  { name: "서울 본사", address: company.address, tel: company.tel },
  { name: "영남지점", address: "부산 금정구 중앙대로 1699", tel: "051-510-5691" },
];

export const jobs = [
  {
    dept: "판촉사업본부", type: "정규직", title: "판촉 현장관리 담당자",
    desc: "전국 매장 순회관리 및 판촉 운영 총괄\n담당 지역 매장 방문, 진열/재고 점검, 리포팅",
    location: "서울 · 지역 무관", deadline: "상시채용",
  },
  {
    dept: "자산관리사업본부", type: "정규직", title: "시설관리(FM) 담당자",
    desc: "건물 시설 유지보수 및 미화/보안 운영관리\n관련 자격증 소지자 우대",
    location: "서울", deadline: "상시채용",
  },
  {
    dept: "공통", type: "계약직", title: "판촉사원 (매장 근무)",
    desc: "대형마트/편의점 등 매장 내 샘플링 및 진열 지원",
    location: "전국 매장 근무 (지역별 채용)", deadline: "채용시 마감",
  },
];

/** 개인정보처리방침 (초안: 공개 전 법무 검토 필요) */
export const privacy = {
  effectiveDate: "2026-10-01",
  retention: "문의 처리 완료 후 1년",
  items: "회사명, 담당자명, 연락처, 이메일(선택), 문의 유형, 문의 내용",
};
