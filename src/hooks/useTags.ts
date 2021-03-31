/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react"
import { ITag } from "../data/IPost"

export const useTags = (): ITag[] => {
  const [tags, setTags] = useState<ITag[]>([]);
  const {getAccessTokenSilently} = useAuth0();
  useEffect(()=> {
    const getData = async () => {
      axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/admin/tags`,{
        headers:{
          Authorization : `Bearer ${await getAccessTokenSilently()}`
        }
      }).then(response => {
        if(response.status === 200){
          setTags(response.data)
        }
      })
    }
    getData();
  },[])
  return tags;
}