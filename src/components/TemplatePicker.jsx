import { useState } from "react";

const TEMPLATES = [
  { id: "A", name: "Template A", img: process.env.PUBLIC_URL + "/templates/templateA.svg" },
  { id: "B", name: "Template B", img: process.env.PUBLIC_URL + "/templates/templateB.svg" },
  { id: "C", name: "Template C", img: process.env.PUBLIC_URL + "/templates/templateC.svg" }
];

export default function TemplatePicker({ value, onChange }) {
  const [selected, setSelected] = useState(value);

  const select = (id) => {
    setSelected(id);
    onChange(id);
  };

  return (
    <div className="template-picker" aria-label="Choose a template">
      <div className="template-scroll">
        {TEMPLATES.map((t) => (
          <div
            key={t.id}
            className={`template-card ${selected === t.id ? "active" : ""}`}
            onClick={() => select(t.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" ? select(t.id) : null)}
          >
            <div className="template-img-wrap">
              <img src={t.img} alt={t.name} />
              <span className="add-icon">+</span>
            </div>
            <p>{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}