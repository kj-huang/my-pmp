angular.module('app').component('pmHeader',
    {
      restrict: 'E',
      transclude: true,
      templateUrl: '/components/shared/header.html',
      controllerAs: 'vm',
      bindToController: true,
      controller: function() {
      }
  })