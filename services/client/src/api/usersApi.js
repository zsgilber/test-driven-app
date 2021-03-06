import axios from "axios";

class usersApi {
  static getUsers() {
    return axios
      .get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
      .then(response => {
        const users = response.data.data.users; //JSON response has 'data' field, need to get users inside that field
        return users;
      })
      .catch(error => console.log(error));
  }
}

export default usersApi;
