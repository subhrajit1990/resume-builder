import React, { useState } from "react";
import TemplatePicker from "./components/TemplatePicker";
import ResumePreview from "./components/ResumePreview";

// Import all templates
import TemplateA from "./components/templates/TemplateA";
import TemplateB from "./components/templates/TemplateB";
import TemplateC from "./components/templates/TemplateC";

// Import some starter resume JSON
import resumeData from "./data/defaultResume.json";

// Map template IDs to actual components
const TEMPLATE_MAP = {
  A: TemplateA,
  B: TemplateB,
  C: TemplateC,
};

export default function App() {
  const [selectedTemplateId, setSelectedTemplateId] = useState("A"); // default template

  // Pick the actual component based on selectedTemplateId
  const SelectedTemplate = TEMPLATE_MAP[selectedTemplateId];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Resume Builder</h1>

      {/* Template Picker */}
      <TemplatePicker value={selectedTemplateId} onChange={setSelectedTemplateId} />

      {/* Resume Preview + Download */}
      <ResumePreview
        resumeData={resumeData}
        selectedTemplate={SelectedTemplate} // ✅ pass component, not string
      />
    </div>
  );
}