import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const DownloadButton = ({ children }) => {
  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "resume",
  });

  return (
    <div style={{ textAlign: "center" }}>
      {/* Wrap resume preview */}
      <div
        ref={componentRef}
        style={{
          width: "210mm", // A4 width
          minHeight: "297mm",
          margin: "auto",
          padding: "20px",
          background: "#fff",
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
        }}
      >
        {children}
      </div>

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

export default DownloadButton;