let memberItem = function($state, SOMESERVICE) {
  
  return {
    restrict: 'E',
    replace: true,
    scope: {
      member: '='
    },
    template: `
      <div class="sideMember" ng-click="vm.clicked(member)">
        <div>{{ member.name }}</div>
      </div>
    `,
    controller: 'HomeController as vm',
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('root.user', {id: scope.somethingsomethingId});
      });
    }
  };

};

memberItem.$inject = ['$state', 'SOMESERVICE'];

export default memberItem;