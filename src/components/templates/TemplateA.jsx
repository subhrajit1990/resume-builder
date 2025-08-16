export default function TemplateA({ data = {}, textCase = {}, onSectionClick }) {
  const safeHtml = (value) => ({ __html: value || "" });

  return (
    <div className="template template-a">
      {/* Name */}
      <h1
        className="name"
        onClick={() => onSectionClick?.("name")}
        dangerouslySetInnerHTML={safeHtml(data.name)}
      />

      {/* Summary */}
      <h3 className="section-title">Summary</h3>
      <div
        className={`content case-${textCase.summary || "normal"}`}
        onClick={() => onSectionClick?.("summary")}
        dangerouslySetInnerHTML={safeHtml(data.summary)}
      />

      {/* Experience */}
      <h3 className="section-title">Experience</h3>
      <div
        className={`content case-${textCase.experience || "normal"}`}
        onClick={() => onSectionClick?.("experience")}
        dangerouslySetInnerHTML={safeHtml(data.experience)}
      />

      {/* Education */}
      <h3 className="section-title">Education</h3>
      <div
        className={`content case-${textCase.education || "normal"}`}
        onClick={() => onSectionClick?.("education")}
        dangerouslySetInnerHTML={safeHtml(data.education)}
      />

      {/* Skills */}
      <h3 className="section-title">Skills</h3>
      <div
        className={`content case-${textCase.skills || "normal"}`}
        onClick={() => onSectionClick?.("skills")}
        dangerouslySetInnerHTML={safeHtml(data.skills)}
      />
    </div>
  );
}