let LoginService = function($http) {
  
  let url = 'https://tiy-basement.herokuapp.com/login';

  function User (userObj) {
    this.username = userObj.username;
    this.password = userObj.password;
  }

  this.reqLogin = function(userObj) {
    let u = new User(userObj);
    console.log(u);
    return $http.post(url, u);
  };

};

LoginService.$inject = ['$http'];

export default LoginService;