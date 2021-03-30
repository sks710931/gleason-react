import { makeStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon/Icon";
import axios from "axios";
import _ from "lodash";
import React, { useRef, useState } from "react";
import { InputBox } from "../../../../components/input-box/input-box.component";
export const TitleTextBox = () => {
  const classes: any = useStyles();
  const [title, setTitle] = useState("");
  const [isVerified, setVerification] = useState<boolean | undefined>(
    undefined
  );
  const delayedCall = useRef(_.debounce((q) => verify(q), 1000)).current;

  const verify = async (title: string) => {
    if(title.trim() !== ''){
      const response = await axios.get(
        process.env.REACT_APP_ENDPOINT_URL + "/admin/verify-title/" + title.trim()
      );
      if (response.status === 200) {
        setVerification(response.data);
      }
    }
    else{
      setVerification(undefined);
    }
  };
  const titleChangeandler = (text: string) => {
    setTitle(text);
    delayedCall(text);
  };
  return (
    <div className={classes.content}>
      <div className={classes.container}>
        <InputBox
          value={title}
          type="text"
          placeholder="Enter post title"
          maxLength={500}
          onTextChange={titleChangeandler}
        />
        {isVerified ? (
          <Icon
            className={`fas fa-check-circle ${
              isVerified === undefined ? classes.hide : classes.showGreen
            }`}
          ></Icon>
        ) : (
          <Icon
            className={`fas fa-times-circle ${
              isVerified === undefined ? classes.hide : classes.showRed
            }`}
          ></Icon>
        )}
      </div>
      {isVerified===false && (
        <p className={classes.textDanger}>There is already a post available with the entered title.</p>
      )}
    </div>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    "& span": {
      marginLeft: 10,
      marginBottom: 15,
    },
  },
  hide: {
    display: "none",
  },
  showGreen: {
    display: "block",
    color: "green",
  },
  showRed: {
    display: "block",
    color: "red",
  },
  content: {
    width: "100%",
  },
  textDanger: {
    color: 'red',
    marginTop: '-12px !important'
  }
}));
