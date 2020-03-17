angular.module('app').component('pmAccordion',
    {
      restrict: 'E',
      transclude: true,
      templateUrl: '/components/accordion/accordion.html',
      bindings:{
        "itemId": "@"
      },
      controllerAs: '$ctrl',
      bindToController: true,
      controller: function() {
      }
  })