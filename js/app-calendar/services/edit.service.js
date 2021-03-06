let EditService = function($http, $cookies, $stateParams, FILESERVER) {
  
  // console.log('edit service');

  // console.log($stateParams.id);

  let tkn = $cookies.get('Access-Token');
  // console.log(tkn);

  let url = FILESERVER.SERVER.URL + 'group/' + $stateParams.id;
  console.log(url);


  //group constructor
  function Group (groupObj) {
    this.name = groupObj.name;
    this.password = groupObj.password;
  }

  let id = $stateParams.id;
  // console.log(id);

  this.editGroup = editGroup;

  function editGroup(groupObj) {
    let g = new Group(groupObj);
    let tkn = $cookies.get('Access-Token');
    console.log(tkn);
    return $http.put(url,
      g,
      {headers: {
        'Access-Token': tkn
      }}
    );
  };

};

EditService.$inject = ['$http', '$cookies', '$stateParams', 'FILESERVER'];

export default EditService;