import { makeStyles, Theme } from "@material-ui/core/styles";

interface Props{
  onChange: (summary:string) => void;
}
export const PostSummaryInput = ({onChange}:Props) => {
  const classes: any = useStyles();
  const changeHandler = (summary: string) => {
    onChange(summary);
  }
  return (
    <div className={classes.textAreaContainer}>
      <label  htmlFor="postSummary">
        <span className={classes.label}>Post Summary</span>
      </label>
      <textarea
        name="postSummary"
        cols={60}
        rows={5}
        maxLength={1000}
        onChange={(e) => changeHandler(e.target.value)}
      ></textarea>
    </div>
  );
};

const useStyles = makeStyles(({palette}: Theme) => ({
  label: {
    marginBottom: 50,
    fontWeight: 500,
  },
  textAreaContainer:{
    '& textarea':{
      all: 'unset',
      border: `1px solid ${palette.grey[400]}`,
      padding: 10,
      boxSizing: 'border-box',
      '&:focus':{
        borderBottom: '3px solid #709ef5'
      }
    }
  }
}));
