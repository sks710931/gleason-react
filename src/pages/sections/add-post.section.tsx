import { makeStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React, { useState } from "react";
import { Editor } from "../../components/Editor/editor.component";
import { InputBox } from "../../components/input-box/input-box.component";
import { headerService } from "../../services/content-header.service";

export const AddPostSection = () => {
  const [title, setTitle] = useState("");
  headerService.setHeader("Add Post");
  const classes: any = useStyles();

  const editorContentChangeHandler = (value: string) => {};
  const titleChangeandler = (text: string) => {
    setTitle(text);
  };
  return (
    <div className="section">
      <div className={classes.flexRow}>
        <div className="left">
          <span>All Posts</span>
        </div>
        <div className="right">
          <button className={`${classes.button} btn`}>
            <Icon>save</Icon>
            <p>Save</p>
          </button>
          <button className={`${classes.button} btn`}>
            <Icon>upload</Icon>
            <p>Publish</p>
          </button>
        </div>
      </div>
      <div className={classes.form}>
        <InputBox
          value={title}
          type="text"
          placeholder="Enter post title"
          maxLength={500}
          onTextChange={titleChangeandler}
        />
        <Editor onContentChange={editorContentChangeHandler} />
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  form: {
    marginTop: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: 1200,
  },
  button: {
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    "& span": {
      marginRight: 5,
    },
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
    "& .left": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      width: "100%",
      "& span": {
        color: "#709ef5",
        fontWeight: 700,
        fontSize: 18,
      },
    },
    "& .right": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-end",
      width: "100%",
    },
  },
}));
