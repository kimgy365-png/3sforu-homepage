const P = { width: 26, height: 26, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": true };
export default function Icon({ name }) {
  switch (name) {
    case "network": return (<svg {...P}><circle cx="12" cy="5" r="2.2" /><circle cx="5" cy="18" r="2.2" /><circle cx="19" cy="18" r="2.2" /><path d="M12 7.2v4.3M12 11.5 6.4 16M12 11.5 17.6 16" /></svg>);
    case "chart": return (<svg {...P}><path d="M4 20V4M4 20h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></svg>);
    case "people": return (<svg {...P}><circle cx="9" cy="8" r="3" /><path d="M3.5 19c.6-3 2.8-4.6 5.5-4.6s4.9 1.6 5.5 4.6" /><path d="M16 6.2a3 3 0 0 1 0 5.6M18 14.6c1.6.6 2.7 2 3 4.4" /></svg>);
    case "puzzle": return (<svg {...P}><path d="M10 4h4v3a2 2 0 1 0 0 4v3h-4v-3a2 2 0 1 1 0-4V4Z" transform="translate(-2 2)" /><path d="M4 12h3M17 12h3" /></svg>);
    default: return null;
  }
}
