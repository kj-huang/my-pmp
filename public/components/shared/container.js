angular.module('app').component('pmContainer',
    {
      restrict: 'E',
      transclude: true,
      template: '<div style=""><div ng-transclude></div></div>',
      controllerAs: 'vm',
      bindToController: true,
      controller: function() {
      }
  })