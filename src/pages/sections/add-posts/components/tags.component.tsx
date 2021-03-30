import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { InputBox } from "../../../../components/input-box/input-box.component";
import { ITag } from "../../../../data/IPost";
import { useTags } from "../../../../hooks/useTags";
export const PostTags = () => {
  const classes: any = useStyles();
  const [newTag, setNewTag] = useState<string>("");
  let tags: ITag[] = [];
  const getData = () => {
     // eslint-disable-next-line react-hooks/rules-of-hooks
     tags = useTags();
  }
  getData();
  return (
    <div>
      <h3>Tags</h3>
      <div className={classes.inputRow}>
        <InputBox
          placeholder="Add new tag here"
          type="text"
          maxLength={50}
          icon="tag"
          value={newTag}
          onTextChange={(e) => setNewTag(e)}
        />
        <button className={`${classes.button} btn`}>Add Tag</button>
      </div>
      <div className={classes.checkboxes}>
        {tags.map((tag, index) => {
          const key = `key_${index}`;
          return (
            <FormControlLabel
              key={key}
              control={<Checkbox name={tag.tagName} />}
              label={tag.tagName}
            />
          );
        })}
        
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  checkboxes:{
    display: "flex",
    flexDirection: "column",
    '& .Mui-checked':{
      color: '#709ef5',
    }
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  button: {
    marginBottom: 15,
    marginLeft: 15,
  },
}));
