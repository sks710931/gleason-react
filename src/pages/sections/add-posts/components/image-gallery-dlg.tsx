import { makeStyles } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import React, { useState } from "react";
import { useImages } from "../../../../hooks/useImages";
import { Theme } from '@material-ui/core/styles';

interface Props {
  open: boolean;
  onClose: (value: string) => void;
}
export const ImageGalleryDialog = ({ onClose, open }: Props) => {
  const handleClose = () => {
    onClose(selectedImage);
  };
  const [selectedImage, setSelectedImage] = useState('');
  const images: string[] = useImages();
  const classes: any = useStyles();

  const selectedImageHandler = (image:string) => {
    setSelectedImage(image);
  }
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
      fullWidth={true}
      maxWidth="lg"
    >
      <DialogTitle id="simple-dialog-title">
        <h3 className={classes.title}>Select Featured Image</h3>
      </DialogTitle>
      <DialogContent dividers>
        <div className={classes.content}>
          {images &&
            images.map((image, index) => (
              <button key={index} onClick={() => selectedImageHandler(image)} className={classes.imageItem}>
                <img
                  src={`${process.env.REACT_APP_ENDPOINT_URL}/${image}`}
                  alt={image}
                />
              </button>
            ))}
        </div>
      </DialogContent>
      <DialogActions>
        <button className="btn" onClick={handleClose}>
          Continue
        </button>
      </DialogActions>
    </Dialog>
  );
};
const useStyles = makeStyles(({palette}: Theme) => ({
  title: {
    color: "#709ef5",
    margin: 0,
    fontWeight: 500,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 10,
  },
  imageItem: {
    all: "unset",
    margin: 10,
    border: `1px solid ${palette.grey[400]}`,
    '& img': {
      width: "200px",
      height: 125,
    },
    '&:focus':{
      outline: '3px solid #709ef5',
    }
  },
}));
