angular.module('app').component('pmFooter',
    {
      restrict: 'E',
      transclude: true,
      templateUrl: '/components/shared/footer.html',
      controllerAs: 'vm',
      bindToController: true,
      controller: function() {
      }
  })