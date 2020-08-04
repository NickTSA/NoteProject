import React, { useState, useEffect } from "react";
import "./styles.css";
import firebase from "firebase/app";
import SidebarComponent from "./sidebar/sidebar";
import EditorComponent from "./editor/editor";

export default function App() {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);
  const [notes, setNotes] = useState({});

  useEffect(() => {
    firebase
      .firestore()
      .collection("notes")
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data["id"] = _doc.id;
          return data;
        });
        console.log(notes);
        setNotes({ notes: notes });
      });
  }, []);

  return (
    <div className="app-container">
      <SidebarComponent />
      <EditorComponent />
    </div>
  );
}
