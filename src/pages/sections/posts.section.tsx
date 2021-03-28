
import  axios from 'axios';
import { useEffect, useState } from 'react';

export const PostsSection = () => {
  const [allPosts, setAllPosts] = useState();
  useEffect(()=>{
    axios.get(process.env.REACT_APP_ENDPOINT_URL + `/posts`)
    .then(response => {
      if(response.status === 200){
        setAllPosts(response.data);
      }
    })
  }, [])
  return (
    <div>
      {JSON.stringify(allPosts)}
    </div>
  )
}