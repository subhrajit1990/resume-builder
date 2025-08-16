export default function TemplateA({ data, textCase, onSectionClick }) {
  return (
    <div className="template template-a">
      <h1 className="name" onClick={() => onSectionClick("name")}
          dangerouslySetInnerHTML={{ __html: data.name }} />
      <h3 className="section-title">Summary</h3>
      <div className={`content case-${textCase.summary || "normal"}`}
           onClick={() => onSectionClick("summary")}
           dangerouslySetInnerHTML={{ __html: data.summary }} />
      <h3 className="section-title">Experience</h3>
      <div className={`content case-${textCase.experience || "normal"}`}
           onClick={() => onSectionClick("experience")}
           dangerouslySetInnerHTML={{ __html: data.experience }} />
      <h3 className="section-title">Education</h3>
      <div className={`content case-${textCase.education || "normal"}`}
           onClick={() => onSectionClick("education")}
           dangerouslySetInnerHTML={{ __html: data.education }} />
      <h3 className="section-title">Skills</h3>
      <div className={`content case-${textCase.skills || "normal"}`}
           onClick={() => onSectionClick("skills")}
           dangerouslySetInnerHTML={{ __html: data.skills }} />
    </div>
  );
}