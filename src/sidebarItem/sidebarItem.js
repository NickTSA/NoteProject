import React from "react";
import { removeHTMLTags } from "../helpers";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";

function SidebarItemComponent({
  index,
  note,
  classes,
  selectedNoteIndex,
  deleteNote,
  selectNote
}) {
  const selectItem = (n, i) => selectNote(n, i);
  const deleteItem = (note) => {
    if (window.confirm(`Are you sure you want to delete ${note.title} ?`)) {
      deleteNote(note);
    }
  };
  return (
    <div key={index}>
      <ListItem
        className={classes.listItem}
        selected={selectedNoteIndex === index}
        alignItems="flex-start"
      >
        <div
          className={classes.textSection}
          onClick={() => selectItem(note, index)}
        >
          {" "}
          <ListItemText
            primary={note.title}
            secondary={removeHTMLTags(note.body.substring(0, 30)) + "..."}
          />{" "}
        </div>
        <DeleteIcon
          onClick={() => deleteItem(note)}
          className={classes.deleteIcon}
        />
      </ListItem>
    </div>
  );
}

export default withStyles(styles)(SidebarItemComponent);
