import React, { useState, useEffect } from "react";
import "./styles.css";
import firebase from "firebase/app";
import SidebarComponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";

export default function App() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot((serverUpdate) => {
        const notes = serverUpdate.docs.map((_doc) => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        setNotes(notes);
      });
  }, []);

  function selectNote(n, i) {
    setSelectedNoteIndex(i);
    setSelectedNote(n);
  }

  const noteUpdate = (id, noteObj) => {
    firebase.firestore().collection("notes").doc(id).update({
      title: noteObj.title,
      body: noteObj.body,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    });
  };

  return (
    <div className="app-container">
      <SidebarComponent
        selectedNoteIndex={selectedNoteIndex}
        notes={notes}
        // deleteNote={deleteNote}
        selectNote={selectNote}
        // newNote={newNote}
      />
      {selectedNote ? (
        <EditorComponent
          selectedNote={selectedNote}
          selectedNoteIndex={selectedNoteIndex}
          notes={notes}
          noteUpdate={noteUpdate}
        />
      ) : null}
    </div>
  );
}
