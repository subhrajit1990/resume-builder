import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const ResumePreview = ({ resumeData, selectedTemplate: Template }) => {
  const previewRef = useRef();

  // Setup print handler
  const handlePrint = useReactToPrint({
    content: () => previewRef.current,
    documentTitle: "resume", // file name suggestion
  });

  return (
    <div style={{ textAlign: "center" }}>
      {/* Resume Preview */}
      <div
        ref={previewRef}
        style={{
          width: "210mm",         // A4 width
          minHeight: "297mm",     // A4 height
          margin: "auto",
          padding: "20px",
          background: "white",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        }}
      >
        <Template data={resumeData} />
      </div>

      {/* Download Button */}
      <button
        onClick={handlePrint}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Download as PDF
      </button>
    </div>
  );
};

export default ResumePreview;