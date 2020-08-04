import React, { useState } from "react";
import ReactQuill from "react-quill";
import debounce from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

function EditorComponent(props) {
  const [text, setText] = useState({});
  const [title, setTitle] = useState("");
  const [id, setId] = useState("");

  const updateBody = async val => {
    await setText({ text: val });
  };

  const { classes } = props;

  return (
    <div className={classes.editorContainer}>
      <ReactQuill value={text} onChange={updateBody}>
        {" "}
      </ReactQuill>
    </div>
  );
}

export default withStyles(styles)(EditorComponent);
