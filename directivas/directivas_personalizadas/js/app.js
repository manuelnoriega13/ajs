angular
    .module('miModulo', [])
    .directive('miDirectiva', function(){
        return {
            restrict:'AECM',
            replace:true,
            templateUrl:'../directiva.html'
        }

    })