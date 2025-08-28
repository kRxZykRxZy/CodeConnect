import React, { useState, useEffect, useRef } from 'react';
import Editor from '@monaco-editor/react';

const CodeEditor = ({ file, onSave }) => {
  const [content, setContent] = useState(file.content);
  const editorRef = useRef(null);

  useEffect(() => {
    setContent(file.content);
  }, [file]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  const handleSave = () => {
    onSave(file.id, editorRef.current.getValue());
  };

  return (
    <div className="editor-container">
      <button onClick={handleSave}>Save</button>
      <Editor
        height="90vh"
        language={file.language || 'javascript'}
        value={content}
        onMount={handleEditorDidMount}
      />
    </div>
  );
};

export default CodeEditor;
