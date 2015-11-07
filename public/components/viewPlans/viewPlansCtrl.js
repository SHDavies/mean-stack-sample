(function() {
  'use strict';

  app.controller('viewPlansCtrl', function($scope, planService, plans) {

    $scope.plans = plans;
  });
}());
