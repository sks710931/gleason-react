import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import { IPost } from "../../data/IPost";
import { headerService } from "../../services/content-header.service";
import { parseDate } from "./../../utils/parse-date";
import Icon from "@material-ui/core/Icon";

export const PostsSection = () => {
  const [allPosts, setAllPosts] = useState([]);
  useEffect(() => {
    headerService.setHeader("All Posts");
    axios
      .get(process.env.REACT_APP_ENDPOINT_URL + `/posts`)
      .then((response) => {
        if (response.status === 200) {
          setAllPosts(response.data);
        }
      });
  }, []);

  const classes: any = useStyles();
  return (
    <div className={classes.content}>
      <div className={classes.flexRow}>
        <div className="left">
          <span>All Posts</span>
        </div>
        <div className="right">
          <button className="btn">Add New</button>
        </div>
      </div>
      <div className={classes.table}>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Tags</th>
              <th>Author</th>
              <th>Published On</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {allPosts.map((post: IPost, index) => {
              const key = `post_${post.id}`;
              return (
                <tr key={key}>
                  <td>{index + 1}</td>
                  <td>
                    <div className={classes.title}>
                      <Icon>article</Icon>
                      <p>{post.title}</p>
                    </div>
                  </td>
                  <td>
                    {post.tags.map((tag) => (
                      <div className={classes.title}>
                        <Icon>tag</Icon>
                        <p>{`${tag.tagName}`}</p>
                      </div>
                    ))}
                  </td>
                  <td>
                    <div className={classes.title}>
                      <img
                        src={post.author.authorImage}
                        alt={post.author.authorName}
                      />
                      <p>{post.author.authorName}</p>
                    </div>
                  </td>
                  <td>
                    <div className={classes.title}>
                      <Icon>calendar_today</Icon>
                      <p>{parseDate(post.publishedAt)}</p>
                    </div>
                  </td>
                  <td>
                    <div className={classes.actions}>
                      <button onClick={() => alert(post.slug)}>
                        <Icon>visibility</Icon>
                      </button>
                      <button>
                        <Icon>edit</Icon>
                      </button>
                      <button>
                        <Icon>delete</Icon>
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  content: {
    padding: 15,
  },
  table: {
    color: "black",
  },
  actions:{
    '& button':{
      all:'unset',
      border: '1px solid #709ef5',
      margin: 3,
      padding: 5,
      color: 'white' ,
      borderRadius: 5,
      backgroundColor:'#709ef5',
      '&:hover': {
        cursor: 'pointer',
        border: '1px solid #709ef5',
        backgroundColor:'white',
        color: '#709ef5' ,
      }
    }
  },
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    "& span": {
      color: "#709ef5",
      marginRight: 5,
    },
    "& img": {
      height: 30,
      width: 30,
      marginRight: 5,
      borderRadius: "50%",
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
