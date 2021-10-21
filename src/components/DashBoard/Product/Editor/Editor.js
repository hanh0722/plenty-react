import React, { useState, forwardRef } from "react";
import ReactQuill from "react-quill";
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import "react-quill/dist/quill.snow.css";
const Editor = forwardRef(({ focusEditorHandler, getValue }, ref) => {
  const [value, setValue] = useState("");
  const getValueFromEditor = (content, delta, source, editor) => {
    setValue(content);
    getValue(editor.getHTML());
  };
  return (
    <>
      <QuillToolbar />
      <ReactQuill
        ref={ref}
        className="editor"
        theme="snow"
        value={value}
        onChange={getValueFromEditor}
        modules={modules}
        formats={formats}
        placeholder="Add description for product"
        onFocus={focusEditorHandler}
      />
    </>
  );
});

export default Editor;
