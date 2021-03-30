import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import { useState } from "react";
import { InputBox } from "../../../../components/input-box/input-box.component";
import { ITag } from "../../../../data/IPost";
import { useTags } from "../../../../hooks/useTags";
import { useAuth0 } from "@auth0/auth0-react";
import { useToasts } from "react-toast-notifications";


interface Props {
  onChange : (tags: ITag[]) => void;
}
export const PostTags = ({onChange}: Props) => {
  const classes: any = useStyles();
  const {addToast} = useToasts();
  const { getAccessTokenSilently } = useAuth0();
  const [newTag, setNewTag] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<ITag[]>([]);
  let tags: ITag[] = useTags();
  const addTagHandler = () => {
    if (newTag !== "") {
      const addTag = async () => {
        axios.post(
          `${process.env.REACT_APP_ENDPOINT_URL}/admin/tags/add`,
          {
            tagName: newTag,
          },
          {
            headers: {
              Authorization: `Bearer ${await getAccessTokenSilently()}`,
            },
          }
        ).then(response => {
          if(response.status===200){
            tags = [...tags, response.data];
            addToast('Tag created successfully.', {
              appearance:'success',
              autoDismiss: true,
            });
            setNewTag('');
          }
        }, error => {
          addToast(error, {
            appearance:'error',
            autoDismiss: true,
          });
        });
      };
      addTag();
    }
  };

  const checkboxChangeHandler = (event: React.ChangeEvent<HTMLInputElement>, checked: boolean, tag: ITag) => {
    if(checked){
      setSelectedTags([...selectedTags, tag]);
      onChange([...selectedTags, tag]);
    }else{
      const newtags = selectedTags.filter((tagItem:ITag) => tagItem.id !== tag.id);
      setSelectedTags(newtags);
      onChange(newtags);
    }
    
  }
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
        <button onClick={addTagHandler} className={`${classes.button} btn`}>
          Add Tag
        </button>
      </div>
      <div className={classes.checkboxes}>
        {tags.map((tag, index) => {
          const key = `key_${index}`;
          return (
            <FormControlLabel
              key={key}
              control={<Checkbox onChange={(event, checked) => checkboxChangeHandler(event, checked, tag)} name={tag.tagName} />}
              label={tag.tagName}
            />
          );
        })}
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  checkboxes: {
    display: "flex",
    flexDirection: "column",
    "& .Mui-checked": {
      color: "#709ef5",
    },
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
