import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItemComponent from "../sidebarItem/sidebarItem";

function SidebarComponent({ notes, classes, selectedNoteIndex }) {
  const [addingNote, setAddingNote] = useState(false);
  const [title, setTitle] = useState("");

  function newNoteBtnClick() {
    setAddingNote(!addingNote);
    setTitle(null);
    console.log("button clicked");
  }

  const updateTitle = txt => {
    setTitle(txt);
  };

  const newNote = () => {
    console.log(title);
  };

  const selectNote = () => {
    console.log("select note");
  };

  const deleteNote = () => {
    console.log("delete note");
  };

  return (
    <div className={classes.sidebarContainer}>
      <Button className={classes.newNoteBtn} onClick={newNoteBtnClick}>
        {addingNote ? "Cancel" : "Add new note"}
      </Button>
      {addingNote ? (
        <div>
          <input
            type="text"
            className={classes.newNoteInpute}
            placeholder="Enter note title"
            onKeyUp={e => updateTitle(e.target.value)}
          />
          <Button className={classes.newNoteSubmitBtn} onClick={newNote}>
            Submit
          </Button>
        </div>
      ) : null}
      <List>
        {notes.map((note, index) => {
          return (
            <div key={index}>
              <SidebarItemComponent
                note={note}
                index={index}
                selectedNoteIndex={selectedNoteIndex}
                selectNote={selectNote}
              />
            </div>
          );
        })}
      </List>
    </div>
  );
}

export default withStyles(styles)(SidebarComponent);
