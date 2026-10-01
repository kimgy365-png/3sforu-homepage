"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { company, inquiryTypes, CONTACT_ENDPOINT } from "@/data/site";

const initial = { company: "", name: "", phone: "", email: "", type: "", message: "", consent: false, website: "" };

export default function ContactSection({ headingTag: H = "h2" }) {
  const [f, setF] = useState(initial);
  const [status, setStatus] = useState("idle"); // idle | sending | ok | err | unconfigured
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("type");
    if (t && inquiryTypes.includes(t)) setF((p) => ({ ...p, type: t }));
  }, []);

  const on = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value }));

  const validate = () => {
    const e = {};
    if (!f.name.trim()) e.name = "담당자명을 입력해 주세요.";
    if (!/^[0-9+\-\s()]{8,}$/.test(f.phone.trim())) e.phone = "연락 가능한 전화번호를 입력해 주세요.";
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = "이메일 형식을 확인해 주세요.";
    if (!f.type) e.type = "문의 유형을 선택해 주세요.";
    if (f.message.trim().length < 5) e.message = "문의 내용을 5자 이상 입력해 주세요.";
    if (!f.consent) e.consent = "개인정보 수집·이용에 동의해 주세요.";
    return e;
  };

  const submit = async (ev) => {
    ev.preventDefault();
    if (f.website) return; // 봇 차단용 허니팟
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;
    if (!CONTACT_ENDPOINT) { setStatus("unconfigured"); return; }
    setStatus("sending");
    try {
      const { consent, website, ...payload } = f;
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...payload, consentAt: new Date().toISOString(), source: window.location.href }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      setF(initial);
    } catch {
      setStatus("err");
    }
  };

  const Err = ({ k }) => (errors[k] ? <div role="alert" style={{ color: "#b3261e", fontSize: 13, marginTop: 5 }}>{errors[k]}</div> : null);

  return (
    <section id="contact" className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="eyebrow">CONTACT</div>
        <H className="h2" style={{ marginBottom: 12 }}>문의하기</H>
        <p className="lead" style={{ marginTop: 0, marginBottom: 32 }}>
          판촉·FM 도입 상담, 서비스 소개서 요청, 채용 문의를 남겨 주시면 담당자가 확인 후 연락드립니다.
        </p>
        <div className="grid-2" style={{ gap: 36, alignItems: "start" }}>
          <form className="form" onSubmit={submit} noValidate aria-label="문의 양식">
            <div className="hp" aria-hidden="true">
              <label>웹사이트<input tabIndex={-1} autoComplete="off" value={f.website} onChange={on("website")} /></label>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="c-company">회사명</label>
                <input id="c-company" className="input" autoComplete="organization" value={f.company} onChange={on("company")} />
              </div>
              <div className="field">
                <label htmlFor="c-name">담당자명<i>*</i></label>
                <input id="c-name" className="input" autoComplete="name" value={f.name} onChange={on("name")} aria-invalid={!!errors.name} />
                <Err k="name" />
              </div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="c-phone">연락처<i>*</i></label>
                <input id="c-phone" className="input" type="tel" inputMode="tel" autoComplete="tel" placeholder="010-0000-0000" value={f.phone} onChange={on("phone")} aria-invalid={!!errors.phone} />
                <Err k="phone" />
              </div>
              <div className="field">
                <label htmlFor="c-email">이메일</label>
                <input id="c-email" className="input" type="email" autoComplete="email" value={f.email} onChange={on("email")} aria-invalid={!!errors.email} />
                <Err k="email" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="c-type">문의 유형<i>*</i></label>
              <select id="c-type" className="input" value={f.type} onChange={on("type")} aria-invalid={!!errors.type}>
                <option value="" disabled>문의 유형 선택</option>
                {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
              </select>
              <Err k="type" />
            </div>
            <div className="field">
              <label htmlFor="c-msg">문의 내용<i>*</i></label>
              <textarea id="c-msg" className="input" rows={5} value={f.message} onChange={on("message")} aria-invalid={!!errors.message} />
              <Err k="message" />
            </div>
            <div>
              <label className="check">
                <input type="checkbox" checked={f.consent} onChange={on("consent")} />
                <span>
                  [필수] 개인정보 수집·이용에 동의합니다. (항목: 회사명, 담당자명, 연락처, 이메일, 문의 내용 / 목적: 문의 응대 / 보유기간: 처리 완료 후 1년) <Link href="/privacy/" target="_blank">자세히 보기</Link>
                </span>
              </label>
              <Err k="consent" />
            </div>
            <button className="btn" type="submit" disabled={status === "sending"} style={{ justifyContent: "center" }}>
              {status === "sending" ? "전송 중…" : "문의 보내기"}
            </button>
            <div aria-live="polite">
              {status === "ok" && <div className="notice ok">문의가 접수되었습니다. 영업일 기준 1~2일 내 연락드리겠습니다.</div>}
              {status === "err" && <div className="notice err">전송에 실패했습니다. 잠시 후 다시 시도하시거나 {company.tel}로 문의해 주세요.</div>}
              {status === "unconfigured" && (
                <div className="notice warn">온라인 접수가 아직 연결되지 않아 문의가 전송되지 않았습니다. 대표전화 {company.tel}로 문의해 주세요.</div>
              )}
            </div>
          </form>
          <div className="card">
            <ul className="info" style={{ margin: 0, padding: 0 }}>
              <li><b>주소</b><span>{company.address}</span></li>
              <li><b>전화</b><span><a href={`tel:${company.tel.replace(/-/g, "")}`}>{company.tel}</a> (FAX {company.fax})</span></li>
              {company.email && <li><b>이메일</b><span><a href={`mailto:${company.email}`}>{company.email}</a></span></li>}
              <li><b>응대</b><span>평일 접수, 영업일 기준 1~2일 내 회신</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
