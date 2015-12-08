
let groupItem = function($state, HomeService) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      car: '='
    },
    template: `
      <div>
        {{vm.group.name}}
      </div>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      return HomeService.getGroup();
    }
  };
};

groupItem.$inject = ['$state', 'HomeService'];

export default groupItem;