let DeleteService = function ($http) {

  let url = 'http://tiy-basement.herokuapp.com/group';

  this.deleteGroup = deleteGroup;


  function deleteGroup (groupObj) {
    return $http.delete(url,
      {headers: $cookies.get(access_token)}
    );
  }




};

DeleteService.$inject =['$http'];

export default DeleteService;