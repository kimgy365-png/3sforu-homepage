import Link from "next/link";
export default function CtaStrip({ text, href = "/contact/", label = "문의하기 →" }) {
  return (
    <section className="band-dark section-tight">
      <div className="container strip">
        <div className="t">{text}</div>
        <Link href={href} className="btn btn-sm btn-light">{label}</Link>
      </div>
    </section>
  );
}
