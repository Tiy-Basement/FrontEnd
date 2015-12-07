let DeleteService = function($http) {

  let url = 'http://tiy-basement.herokuapp.com/group';
  
  this.deleteGroup = deleteGroup;

  function Group (groupObj){
    this.objectId = groupObj.objectId;
    this.name = groupObj.name;
    this.password = groupObj.password;
  }


  function deleteGroup (groupObj){
    let g = new Group();
    return $http.delete(url + '/' + groupObj.objectId, 
      g,
      {headers: $cookies.get(access_token)} );
  }
  

};

DeleteService.$inject = ['$http'];

export default DeleteService;