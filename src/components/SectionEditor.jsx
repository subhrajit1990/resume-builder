import { useEffect, useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

// Font size whitelist
const Size = ReactQuill.Quill.import("attributors/style/size");
Size.whitelist = ["12px", "14px", "16px", "18px", "20px"];
ReactQuill.Quill.register(Size, true);

export default function SectionEditor({ section, initialValue, initialCase, onSave, onClose }) {
  const [value, setValue] = useState(initialValue || "");
  const [caseMode, setCaseMode] = useState(initialCase || "normal");
  const editorRef = useRef(null);

  useEffect(() => setValue(initialValue || ""), [initialValue]);
  useEffect(() => setCaseMode(initialCase || "normal"), [initialCase]);

  const modules = useMemo(
    () => ({
      toolbar: [
        [{ size: Size.whitelist }],
        ["bold", "italic", "underline"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, false] }],
        ["link", "clean"]
      ]
    }),
    []
  );

  return (
    <div className="editor-modal" role="dialog" aria-modal="true">
      <div className="editor-card">
        <div className="editor-head">
          <h3>Edit: {section}</h3>
          <button onClick={onClose} aria-label="Close">✕</button>
        </div>

        <label className="label">Text case</label>
        <select value={caseMode} onChange={(e) => setCaseMode(e.target.value)}>
          <option value="normal">Normal</option>
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>

        <div className={`editor-wrap case-${caseMode}`}>
          <ReactQuill
            ref={editorRef}
            value={value}
            onChange={setValue}
            modules={modules}
            theme="snow"
          />
        </div>

        <div className="editor-actions">
          <button onClick={() => onSave(value, caseMode)}>Save</button>
        </div>
      </div>
      <style>{`
        .editor-modal{position:fixed;inset:0;background:rgba(0,0,0,.35);display:grid;place-items:center;z-index:50;padding:12px;}
        .editor-card{background:#fff;border-radius:12px;max-width:720px;width:100%;padding:12px;border:1px solid #e5e7eb;}
        .editor-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;}
        .label{display:block;margin:6px 0 4px;color:#334155;font-size:13px;}
        .editor-wrap{background:#fff;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;}
        .editor-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:10px;}
        .case-normal .ql-editor{ text-transform:none; }
        .case-upper .ql-editor{ text-transform:uppercase; }
        .case-lower .ql-editor{ text-transform:lowercase; }
        .case-capitalize .ql-editor{ text-transform:capitalize; }
      `}</style>
    </div>
  );
}