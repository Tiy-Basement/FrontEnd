let EditService = function($http, $cookies) {
  
  console.log('edit service');

  this.editGroup = function (groupObj) {
    let g = new Group(groupObj);
    let tkn = $cookies.get('Access-Token');
    return $http.put(
      'http://tiy-basement.herokuapp.com/group',
      g,
      {headers: {
        'Access-Token': tkn
      }}
    );
  };

};

EditService.$inject = ['$http', '$cookies'];

export default EditService;