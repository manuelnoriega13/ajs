angular
    .module('myApp', [])
    .run(function ($rootScope) {
        $rootScope.rootProperty = "root scope";
    })
    .controller('externalController', function ($scope) {
        $scope.externalProperty = "external scope";
    })
    .controller('internalController', function ($scope) {
        $scope.internalProperty = "internal scope";

        $scope.message = "desde el internal $scope "
            + $scope.rootProperty + " "
            + $scope.externalProperty + " "
            + $scope.internalProperty;
    })