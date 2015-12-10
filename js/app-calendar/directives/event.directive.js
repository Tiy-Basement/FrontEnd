let modalform = function() {
  
  return{ 

    restrict: 'E',
    replace: true,
    scope: {
      show: '='
    },
    transclude: true,
    link: function(scope, elem, attr) {
      scope.dStyle = {};
      if (attr.width) {
        scope.dStyle.width = attr.width;
      }
      if (attr.height) {
        scope.dStyle.height = attr.height;
      }
      scope.hideModal = function() {
        scope.show = false;
      };
    },
    templateUrl: 'templates/app-calendar/addEvent.tpl.html',
  };

};

modalform.$inject = [];

export default modalform;