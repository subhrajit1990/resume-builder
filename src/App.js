import { useState } from "react";
import TemplatePicker from "./components/TemplatePicker";
import ResumePreview from "./components/ResumePreview";
import SectionEditor from "./components/SectionEditor";
import DownloadButton from "./components/DownloadButton";
import defaultResume from "./data/defaultResume.json";

export default function App() {
  const [template, setTemplate] = useState("A");
  const [resumeData, setResumeData] = useState(defaultResume);
  const [editingSection, setEditingSection] = useState(null);
  const [textCase, setTextCase] = useState({}); // per-section case: normal/upper/lower/capitalize

  const openEditor = (sectionKey) => setEditingSection(sectionKey);

  const saveSection = (sectionKey, html, sectionCase) => {
    setResumeData((prev) => ({ ...prev, [sectionKey]: html }));
    if (sectionCase) {
      setTextCase((prev) => ({ ...prev, [sectionKey]: sectionCase }));
    }
    setEditingSection(null);
  };

  return (
    <div className="app">
      <header className="header">📄 Resume Builder</header>

      <div className="main">
        <aside className="sidebar">
          <h3 className="sidebar-title">Templates</h3>
          <TemplatePicker value={template} onChange={setTemplate} />
          <DownloadButton />
          <p className="hint">
            Tip: Tap any section on the preview to edit it.
          </p>
        </aside>

        <section className="preview-area">
          <ResumePreview
            template={template}
            data={resumeData}
            textCase={textCase}
            onSectionClick={openEditor}
          />
        </section>
      </div>

      {editingSection && (
        <SectionEditor
          section={editingSection}
          initialValue={resumeData[editingSection]}
          initialCase={textCase[editingSection] || "normal"}
          onSave={(html, sectionCase) => saveSection(editingSection, html, sectionCase)}
          onClose={() => setEditingSection(null)}
        />
      )}
    </div>
  );
}