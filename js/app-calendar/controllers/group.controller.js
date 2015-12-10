let GroupController = function($scope, GroupService) {

  let vm = this;

  vm.groups = [];

  activate();

  function activate () {
    UserService.getGroups().then( (res) => {
      vm.groups = res.data.results;
    });
  }

};

GroupController.$inject = ['$scope', 'GroupService'];

export default GroupController;