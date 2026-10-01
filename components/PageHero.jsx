export default function PageHero({ eyebrow, title, lead }) {
  return (
    <section className="container page-hero">
      <div className="eyebrow">{eyebrow}</div>
      <h1 className="h1 h1-sub">{title}</h1>
      {lead && <p className="lead">{lead}</p>}
    </section>
  );
}
