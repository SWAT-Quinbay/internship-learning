import axios from "axios"


export const registerUser = ({ success, error, user }) => {
    axios
      .post("http://10.30.1.87:8081/user/register", user)
      .then((res) => {
        success && success(res);
      })
      .catch((err) => {
        error && error(err);
      });
  };

  export const loginUser = ({ success, error, user }) => {
    axios
      .post("http://10.30.1.87:8081/user/login", user)
      .then((res) => {
        success && success(res);
      })
      .catch((err) => {
        error && error(err);
      });
  };
  

  export const verifyUser = ({ success, error, payload }) => {
    axios
      .post("http://10.30.1.87:8081/user/login", payload)
      .then((res) => {
        success && success(res);
      })
      .catch((err) => {
        error && error(err);
      });
  };
