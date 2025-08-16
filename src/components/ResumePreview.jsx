import TemplateA from "./templates/TemplateA";
import TemplateB from "./templates/TemplateB";
import TemplateC from "./templates/TemplateC";

export default function ResumePreview({ template, data, textCase, onSectionClick }) {
  const common = { data, textCase, onSectionClick };
  if (template === "B") return <TemplateB {...common} />;
  if (template === "C") return <TemplateC {...common} />;
  return <TemplateA {...common} />;
}