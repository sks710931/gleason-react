import { makeStyles, Theme } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import React, { ReactElement } from "react";

export interface InputBoxProps {
  type: string;
  placeholder: string;
  value: string;
  onTextChange: (text: string) => void;
  maxLength?:number;
  icon?: string;
}

export const InputBox = (props: InputBoxProps): ReactElement<InputBoxProps> => {
  const { type, placeholder, value, onTextChange, icon, maxLength } = props;
  const classes: any = useStyles();
  return (
    <div className={classes.inputBox}>
      <Icon data-testid="icon" className={classes.inputIcon}>
        {icon}
      </Icon>
      <input
        data-testid="input-field"
        autoComplete="off"
        value={value}
        onChange={($event) => onTextChange($event.target.value)}
        className={classes.input}
        type={type}
        maxLength={maxLength ? maxLength: 100}
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
    width: `100%`,
    marginBottom : 15
  },
  input: {
    width: `100%`,
    border: `1px solid ${palette.grey[400]}`,
    padding: `10px`,
    height: 20,
    paddingRight: `35px`,
    "&:focus": {
      border: `1px solid ${palette.grey[400]}`,
      borderBottom: `2px solid #709ef5`,
      outline: `none`,
      height:19,
    },
  },
  inputIcon: {
    marginTop: 5,
    color: palette.grey[600],
    position: `absolute`,
    right: 10,
  },
}));
