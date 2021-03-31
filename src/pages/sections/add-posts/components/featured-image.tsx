/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { ImageGalleryDialog } from "./image-gallery-dlg";
import { useAuth0 } from "@auth0/auth0-react";
import { getImages } from './../../../../hooks/useImages';

interface Props {
  onChange: (src: string) => void
}
export const FeaturedImage = ({onChange}: Props) => {
  const classes: any = useStyles();
  const [isDlgOpen, setDlgOpen] = useState<boolean>(false);
  const [featuredImage, setFeaturedImage] = useState<string>();
  const [images, setImages] = useState<string[]>([]);
  const {getAccessTokenSilently} = useAuth0();
  useEffect(()=> {
    const get = async () => {
      
      const token = await getAccessTokenSilently();
      const images  = await getImages(token);
      setImages(images);
    }
    get();
    
  },[])
  const onDialogClose = (e: string) => {
    setDlgOpen(false);
    setFeaturedImage(e);
    onChange(e);
  };

  const buttonClickHandler = () => {
    setDlgOpen(true);
  };

  return (
    <div>
      <h3>Featured Image</h3>
      <div className={classes.featuredImageSection}>
        <div className={classes.imgContainer}>
          {featuredImage && (
            <img
              src={`${process.env.REACT_APP_ENDPOINT_URL}/${featuredImage}`}
              alt={featuredImage}
            />
          )}
        </div>
        <button onClick={buttonClickHandler} className="btn">
          Select Image
        </button>
      </div>
      <ImageGalleryDialog images={images} open={isDlgOpen} onClose={onDialogClose} />
    </div>
  );
};

const useStyles = makeStyles(({ palette }: Theme) => ({
  featuredImageSection: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  imgContainer: {
    height: 200,
    width: 350,
    backgroundColor: palette.grey[300],
    marginRight: 20,
    border: "3px solid #709ef5",
    borderRadius: 8,
    "& img": {
      height: 199,
      width: 349,
    },
  },
}));
