import { makeStyles, Theme } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React, { ReactElement } from "react";

interface InputBoxProps {
  type: string;
  placeholder: string;
  value: string;
  onTextChange: (text: string) => void;
  icon: string;
}
export const InputBox = (props: InputBoxProps): ReactElement<InputBoxProps> => {
  const { type, placeholder, value, onTextChange, icon } = props;
  const classes: any = useStyles();
  return (
    <div className={classes.inputBox}>
      <Icon className={classes.inputIcon}>{icon}</Icon>
      <input
        autoComplete="off"
        value={value}
        onChange={($event) => onTextChange($event.target.value)}
        className={classes.input}
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
};

const useStyles = makeStyles(({ palette }: Theme): any => ({
  inputBox: {
    display: `flex`,
    flexDirection: `row`,
    justifyContent: `flex-start`,
    position: `relative`,
  },
  input: {
    width: `100%`,
    border: `1px solid ${palette.grey[400]}`,
    padding: `10px`,
    paddingRight: `35px`,
    "&:focus": {
      border: `1px solid ${palette.grey[400]}`,
      borderBottom: `2px solid #709ef5`,
      outline: `none`,
    },
  },
  inputIcon: {
    marginTop: 5,
    color: palette.grey[600],
    position: `absolute`,
    right: 10,
  },
}));
