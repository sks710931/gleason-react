import { makeStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React, { useState } from "react";
import { Editor } from "../../../components/Editor/editor.component";
import { headerService } from "../../../services/content-header.service";
import { FeaturedImage } from "./components/featured-image";
import { PostSummaryInput } from "./components/summary.component";
import { PostTags } from "./components/tags.component";
import { TitleTextBox } from "./components/title-text-box.component";
import { ISavePost, ITag } from './../../../data/IPost';

export const AddPostSection = () => {
  const initialPost:ISavePost = {
    description:'',
    title: '',
    postModel:'',
    selectedAuthors:{
      authorDescription:'',
      authorImage:'',
      authorName:'',
      email:'',
      id:0,
      posts:[]
    }, 
    selectedTags:[],
    image:'',
    readTime: 8,
  }
  headerService.setHeader("Add Post");
  const classes: any = useStyles();
  const [post, setPost] = useState<ISavePost>(initialPost);
  const editorContentChangeHandler = (value: string) => {
    setPost({...post, postModel: value});
  };
  const featuredImageChangeHandler = (src:string) => {
    setPost({...post, image: `${process.env.REACT_APP_ENDPOINT_URL}/${src}`})
  }

  const summaryChangeHandler = (summary:string) => {
    setPost({...post, description: summary});
  }

  const titleChangeHandler = (heading: string) => {
    setPost({...post, title: heading})
  }

  const tagsChangeHandler =(tags: ITag[]) => {
    setPost({...post,selectedTags:tags})
  }
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
          <TitleTextBox onChange={titleChangeHandler}/>
          <Editor onContentChange={editorContentChangeHandler} />
        </div>
        <div className={classes.details}>
          <h3>Additional Details</h3>
          <PostSummaryInput onChange={summaryChangeHandler} />
          <PostTags onChange={tagsChangeHandler}/>
          <FeaturedImage onChange={featuredImageChangeHandler} />
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
    },
    overflowY:'auto',
    overflowX:'hidden',
    height:'705px',
    paddingRight: 20,
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
    width: 1100,
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
