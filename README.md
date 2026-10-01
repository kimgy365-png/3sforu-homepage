# 3S for U 홈페이지 (Next.js 정적 사이트)

## 실행
```bash
npm install
npm run dev        # 개발 서버 http://localhost:3000
npm run build      # 정적 파일 생성 → ./out  (이 폴더를 그대로 호스팅)
```
- 배포 전 `.env.example`을 `.env.local`로 복사해 **NEXT_PUBLIC_SITE_URL**(실제 도메인), **NEXT_PUBLIC_CONTACT_ENDPOINT**(문의 수신 주소)를 설정하세요.
- 호스팅: `out/` 폴더를 Vercel·Netlify·Cloudflare Pages·일반 웹서버에 업로드.

## 콘텐츠 수정 = `data/site.js` 한 파일
값이 비어 있으면 해당 섹션이 자동으로 숨겨집니다. 아래를 채우면 섹션이 켜집니다.

| 항목 | 위치 | 효과 |
|---|---|---|
| 대표 이메일 | `company.email` | 푸터·문의·개인정보처리방침에 표시 |
| 고객사 로고 | `clients` | 홈에 고객사 로고 월 표시 (사용 허락 확보 후) |
| 성과 사례 | `results` | 홈·고객성과 페이지에 카드 표시 |
| 고객 후기 | `testimonials` | 홈·고객성과 페이지에 표시 |
| 자격·인증 | `certifications` | 홈에 인증 섹션 표시 |
| 추가 실수치 | `extraStats` | 핵심 지표 바에 지사 수·인력 수 등 추가 |
| 대표 인사말 | `greeting`, `greetingBy` | 회사소개에 인사말 섹션 표시 |
| 지사 | `branches` | 커버리지 지사 카드 추가 |

## 공개 전 확인 필수 ([확인필요] 주석 참조)
1. 대표자 표기 (`company.ceo`) — 원본 디자인 내 불일치 있었음
2. 미션·비전 문구, 연혁 연도 (`mission`, `vision`, `history`)
3. FM 서비스 항목의 직영/협력 구분
4. 개인정보처리방침 문구 — 법무 검토
5. 문의 폼 엔드포인트 연결 전에는 접수가 되지 않으며 "전화 문의 안내"가 표시됩니다.
