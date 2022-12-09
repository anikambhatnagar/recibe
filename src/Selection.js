import { useState } from "react";

export function Selection({ setSelection }) {
  const [content, setContent] = useState("");
  function submit(e) {
    e.preventDefault();
    setSelection(content);
    setContent("");
  }

  return (
    <div>
      <p>
        <button
          onClick={() => {
            setSelection("Find a random recipe");
          }}
        >
          Find a random recipe
        </button>
      </p>
      <form onSubmit={submit}>
        Search by ingredient
        <br />
        <input value={content} onChange={(e) => setContent(e.target.value)} />
      </form>
    </div>
  );
}
