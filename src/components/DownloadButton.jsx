import html2pdf from "html2pdf.js";

export default function DownloadButton() {
  const handleDownload = () => {
    const node = document.querySelector(".template");
    if (!node) return;
    const opt = {
      margin: 10,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" }
    };
    html2pdf().from(node).set(opt).save();
  };

  return (
    <button onClick={handleDownload} style={{ marginTop: 8, width: "100%" }}>
      ⬇️ Download PDF
    </button>
  );
}