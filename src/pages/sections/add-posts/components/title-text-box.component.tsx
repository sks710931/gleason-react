import { makeStyles } from "@material-ui/core";
import Icon from "@material-ui/core/Icon/Icon";
import axios from "axios";
import _ from "lodash";
import React, { useRef, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { InputBox } from "../../../../components/input-box/input-box.component";


interface Props {
  onChange : (title: string) => void;
}
export const TitleTextBox = ({onChange}:Props) => {
  const classes: any = useStyles();
  const [title, setTitle] = useState("");
  const [isVerified, setVerification] = useState<boolean | undefined>(
    undefined
  );
  const delayedCall = useRef(_.debounce((q) => verify(q), 1000)).current;
  const {addToast} = useToasts();
  const verify = async (text: string) => {
    if(text.trim() !== ''){
      const response = await axios.get(
        process.env.REACT_APP_ENDPOINT_URL + "/admin/verify-title/" + text.trim()
      );
      if (response.status === 200) {
        setVerification(response.data);
        if(response.data){
          onChange(text);
          addToast("Title is available to use.", {
            appearance: 'success',
            autoDismiss: true,
          });
          
        }else{
          addToast("Title is unavailable.", {
            appearance: 'error',
            autoDismiss: true,
          });
        }
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
