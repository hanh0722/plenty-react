import React, { useState, forwardRef } from "react";
import ReactQuill from "react-quill";
import QuillToolbar, { modules, formats } from "./QuillToolbar";
import "react-quill/dist/quill.snow.css";
const Editor = forwardRef(({focusEditorHandler}, ref) => {
  const [value, setValue] = useState("");
  const getValueFromEditor = (value) => {
    setValue(value);
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
