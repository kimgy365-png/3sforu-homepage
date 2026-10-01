import Link from "next/link";
export const metadata = { title: "페이지를 찾을 수 없습니다" };
export default function NotFound() {
  return (
    <section className="container" style={{ padding: "120px 40px", textAlign: "center" }}>
      <div className="eyebrow">404</div>
      <h1 className="h1 h1-sub">페이지를 찾을 수 없습니다</h1>
      <p className="lead" style={{ margin: "16px auto 28px" }}>주소가 변경되었거나 삭제된 페이지입니다.</p>
      <Link href="/" className="btn">홈으로 돌아가기</Link>
    </section>
  );
}
