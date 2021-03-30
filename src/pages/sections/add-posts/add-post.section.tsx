import { makeStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React from "react";
import { Editor } from "../../../components/Editor/editor.component";
import { headerService } from "../../../services/content-header.service";
import { PostSummaryInput } from "./components/summary.component";
import { TitleTextBox } from "./components/title-text-box.component";

export const AddPostSection = () => {
  headerService.setHeader("Add Post");
  const classes: any = useStyles();

  const editorContentChangeHandler = (value: string) => {};

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
      <div className={classes.container}>
        <div className={classes.form}>
          <TitleTextBox />
          <Editor onContentChange={editorContentChangeHandler} />
        </div>
        <div className={classes.details}>
          <h3>Additional Details</h3>
          <PostSummaryInput />
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  details:{
    paddingLeft: 30,
    '& h3':{
      color: "#709ef5",
    }
  },
  container:{
    display: "flex",
    flexDirection: "row",
  },
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
