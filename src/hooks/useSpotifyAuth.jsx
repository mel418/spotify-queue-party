import { useState, useEffect } from "react";

export const useSpotifyAuth = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = new URLSearchParams(hash.substring(1)).get('access_token');
      window.location.hash = ''; // clear token from url
    }
  }, []);

  return accessToken;

}