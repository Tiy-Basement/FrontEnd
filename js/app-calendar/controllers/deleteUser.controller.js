let DeleteUserController = function($http, DeleteService, $state) {
  let vm = this;

  vm.deleteUser = deleteUser;

  function deleteUser(userObj){
    DeleteService.deleteUser(userObj).then((res)=> {
      console.log(res);
      $state.go(root2.splash);
    });

  }

};

DeleteUserController.$inject = ['$http', 'DeleteService', '$state'];

export default DeleteUserController;