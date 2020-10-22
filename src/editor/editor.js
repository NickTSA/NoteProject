import React, { useState, useEffect } from "react";
import _ from "lodash";
import ReactQuill from "react-quill";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function EditorComponent(props) {
  const [text, setText] = useState(props.selectedNote.body);
  const [title, setTitle] = useState(props.selectedNote.title);
  const [id, setId] = useState(props.selectedNote.id);

  useEffect(() => {
    setText(props.selectedNote.body);
    setTitle(props.selectedNote.title);
    setId(props.selectedNote.id);
  }, [
    props.selectedNote.body,
    props.selectedNote.title,
    props.selectedNote.id
  ]);

  const update = props.noteUpdate(id, { title: title, body: text });

  const updateBody = async (val) => {
    setText(val);
    _.debounce(() => update, 3000);
  };

  const { classes } = props;

  return (
    <div className={classes.editorContainer}>
      <ReactQuill value={text} onChange={updateBody} />
    </div>
  );
}

export default withStyles(styles)(EditorComponent);
