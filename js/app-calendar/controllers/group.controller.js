let GroupController = function(UserService,$stateParams) {

  let vm = this;

  vm.groups = [];

  activate();

  function activate () {
    UserService.getGroups().then( (res) => {
      vm.groups = res.data.results;
    });
  }

};

GroupController.$inject = ['UserService','$stateParams'];

export default GroupController;