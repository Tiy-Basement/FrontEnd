let SignupService = function($http) {

  let url = 'https://tiy-basement.herokuapp.com/signup';

  function User (userObj) {
    this.username = userObj.username;
    this.email = userObj.email;
    this.phone = userObj.phone;
    this.password = userObj.password;
  }

  this.createUser = function (userObj) {
    let u = new User(userObj);
    console.log(u);
    return $http.post(url, u);
  };

};
   
SignupService.$inject = ['$http'];

export default SignupService;