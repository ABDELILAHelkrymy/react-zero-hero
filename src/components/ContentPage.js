import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import hljs from "highlight.js";
import ReactMarkdown from "react-markdown";

marked.setOptions({
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL + "/" : "/",
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "plaintext";
    return hljs.highlight(code, { language }).value;
  },
  langPrefix: "hljs language-",
});

const ContentComponent = () => {
  const { section, title } = useParams();
  const [content, setContent] = useState("");

  const url = `${window.location.origin}/react-zero-to-hero/lessons/${section}/${title}.md`;

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log(response);
        return response.text()
      })
      .then((markdown) => {
        console.log(markdown);
        return setContent(markdown)
      })
      .catch((err) => console.error("Error fetching markdown:", err));
  }, [section, title, url]);

  return <div> <ReactMarkdown>{content}</ReactMarkdown> </div>;
};

export default ContentComponent;
