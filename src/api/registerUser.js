import { APIHEADER, BASEAPI } from "../const/API"

export const register = ({email, password, re_password}) => {
    fetch(BASEAPI+'/auth/users/', {
        method:'POST',
        headers: APIHEADER,
        body: JSON.stringify({
            email,
            password,
            re_password
        })
    })
    .then((response) => response.json())
    .then((json) => {
      return json;
    })
    .catch((error) => {
      return error;
    });
  }
  
  module.exports = {
    register
  }
  