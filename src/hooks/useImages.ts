import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react"

export const useImages = (): string[] => {
  const [images, setImages] = useState<string[]>([]);
  const {getAccessTokenSilently} = useAuth0();
  useEffect(()=> {
    const getData = async () => {
      axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/admin/images`,{
        headers:{
          Authorization : `Bearer ${await getAccessTokenSilently()}`
        }
      }).then(response => {
        if(response.status === 200){
          setImages(response.data)
        }
      })
    }
    getData();
  })
  return images;
}