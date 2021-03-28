import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react";

export const useAccessToken =  () => {
  const {getAccessTokenSilently}=useAuth0();
  const [token, setToken] = useState<string>();
  useEffect(() => {
    const getUsersAsync = async () => {
      const accessToken = await getAccessTokenSilently();
      setToken(accessToken);
    }
    getUsersAsync();
  })

  return token;
}