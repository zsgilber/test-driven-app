import axios from "axios";

class usersApi {
  static getUsers() {
    return axios
      .get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
      .then(response => {
        console.log(response)
      })
      .catch(error => console.log(error));
  }
}

export default usersApi;
