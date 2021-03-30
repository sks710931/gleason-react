import { makeStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon/Icon";
import _ from "lodash";
import React, { useRef, useState } from "react";
import { InputBox } from "../../../../components/input-box/input-box.component";
export const TitleTextBox = () => {
  const classes: any = useStyles();
  const [title, setTitle] = useState("");
  const [isVerified, setVerification] = useState<boolean | undefined>(undefined);
  const delayedCall = useRef(_.debounce(q => verify(q), 1000)).current;


  const verify = (title: string) => {
    console.log('debounced: ', title)
  }
  const titleChangeandler = (text: string) => {
    setTitle(text);
    delayedCall(text);
  };
  return (
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
}));
