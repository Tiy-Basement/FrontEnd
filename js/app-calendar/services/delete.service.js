let DeleteService = function($http, $cookies) {

  let url = 'http://tiy-basement.herokuapp.com/group';
  
  this.deleteGroup = deleteGroup;



DeleteService.$inject = ['$http', '$cookies'];

export default DeleteService;