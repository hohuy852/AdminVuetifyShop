import axios from 'axios';
const API_URL = 'https://web-demo.online/'
class AuthService {
  async login(user) {
    return axios
      .post(API_URL+ 'login', {
        email: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.access_token) {
        //   TokenService.setUser(response.data)
          localStorage.setItem('user', JSON.stringify(response.data));
          //console.log(localStorage)
         
        }
        return response.data;
      });
    // .then(function (response) {
    //   console.log(response);
    // })
  }
  logout() {
    return axios
      .post(API_URL + 'logout')
      //.then(TokenService.removeUser())
      .then(localStorage.removeItem('user'))
    
  }
}

export default new AuthService();