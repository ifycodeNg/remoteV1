import { useState, useEffect } from "react";
import { userService } from './services/userService';
import { AuthorizedApp } from "./authorized-app";
import { UnauthorizedApp } from "./unauthorized-app";
export const App = () => {
  const [authenticated, setAuthentictaed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    userService.verifyToken()
      .then( (data) => {
        if (data.status !== 'failed') {
          setLoading(false)
          setAuthentictaed(true)
        } else {
          setLoading(false)
          setAuthentictaed(false)
        }
      })
  },[authenticated])

  return (
    <>
    { 
      authenticated ?
        <AuthorizedApp /> : 
          loading ? <p> Loding .....</p> :
        <UnauthorizedApp />
    }
    </>
  )
}