import {useState} from "react"

export function Selection({ setSelection }) {

    const [content, setContent] = useState(null)
function submit(){}

    return (
      <div id="selectionRow">
        <button
          onClick={() => {
            setSelection("Find a random recipe");
          }}
        >
          Find a random recipe
        </button>

        <form onSubmit={submit}>
            <input value={content} onChange={(e) => setContent(e.target.value)} />
            Search by ingredient
        </form>
  
      </div>
    );
  }
  