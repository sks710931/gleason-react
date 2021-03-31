import axios from "axios";

export const getImages = async (token: string): Promise<string[]> => {
    let data :string[] = [];
     const response = await axios.get(`${process.env.REACT_APP_ENDPOINT_URL}/admin/images`,{
        headers:{
          Authorization : `Bearer ${token}`
        }
      });
      
      if(response.status === 200){
        data= response.data;
      }
    return data;
}