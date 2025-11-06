

import React from "react";
function Note({note}) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US");
    return <div className="note-container">
        <h2 className="note-title">{note.title}</h2>
        <p className="note-content">{note.content}</p>
        <p className="note-date">{formattedDate}</p>

    </div>
}
export default Note