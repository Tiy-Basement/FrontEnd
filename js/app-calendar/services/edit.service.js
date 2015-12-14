let EditService = function($http, $cookies, $stateParams, FILESERVER) {
  
  // console.log('edit service');

  // console.log($stateParams.id);

  let tkn = $cookies.get('Access-Token');
  // console.log(tkn);

  let url = FILESERVER.SERVER.URL + 'group/' + $stateParams.id;
  // console.log(url);

  // let url2 = FILESERVER.SERVER.URL + 'users/info';
  // $http.get(url2, {headers: {'Access-Token': tkn}});

  //group constructor
  function Group (groupObj) {
    this.name = groupObj.name;
    this.password = groupObj.password;
    this.id = groupObj.id;
  }

  let id = $stateParams.id;
  console.log(id);

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