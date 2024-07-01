import React, { useState, useRef, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import './Editor.css';

function MyCodeEditor() {
  const [code, setCode] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setCode(e.target.value);
  };

  const handleScroll = () => {
    const textarea = textareaRef.current;
    const highlighter = textarea.nextSibling;
    highlighter.scrollTop = textarea.scrollTop;
    highlighter.scrollLeft = textarea.scrollLeft;
  };

  return (
    <div className="editor-wrapper">
      <h1>Code Editor</h1>
      <p>Js text editor and syntax highlight</p>
      <a
        href="https://github.com/Manasaoruganti/Tealfeed-Assignment-" // Replace with your GitHub repo URL
        target="_blank"
        rel="noopener noreferrer"
        className="github-button"
      >
        GitHub Repo Link
      </a>
      <div className="editor-container">
        <textarea
          ref={textareaRef}
          className="code-input"
          value={code}
          onChange={handleChange}
          onScroll={handleScroll}
          spellCheck="false"
          rows="30"
          cols="120"
          placeholder="Enter your code here..."
        />
        <pre className="code-highlight" aria-hidden="true">
          <code className="language-js">{code}</code>
        </pre>
      </div>
    </div>
  );
}

export default MyCodeEditor;
