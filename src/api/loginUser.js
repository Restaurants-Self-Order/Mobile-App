//example api request: replace with your API request here in folder API

import { APIHEADER, BASEAPI } from "../const/API"

export const login = ({email, password, re_password}) => {
    fetch(BASEAPI+'/auth/users/', {
        method:'POST',
        headers: APIHEADER,
        body: JSON.stringify({
            email,
            password
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
    login
  }
  