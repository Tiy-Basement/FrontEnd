// this is throwing an error; it needs something as a parameter 
// on line 4 and the same thing in the single quotes on line 14.

let SplashController = function() {
  
  console.log('I am using my home controller.');

  let vm = this;

  vm.title = 'Home Page';

};

SplashController.$inject = [];

export default SplashController;