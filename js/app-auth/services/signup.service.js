let SignupService = function($http) {

  function User (userObj) {
    this.name = userObj.name;
    this.email = userObj.email;
    this.phone = userObj.phone;
    this.password = userObj.password;
  }

  this.createUser = function (userObj) {
    let u = new User(userObj);
    console.log(u);
    // return $http.post(url, u, /*  server headers/config  */);
  };

};
   
SignupService.$inject = ['$http'];

export default SignupService;