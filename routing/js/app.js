angular
    .module('enrutamiento', ['ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'paginas/inicio.html',
                controller: 'MainController'
            })
            .when('/contacto', {
                templateUrl: 'paginas/contacto.html',
                controller: 'ContactoController'
            })
            .when('/nosotros', {
                templateUrl: 'paginas/nosotros.html',
                controller: 'NosotrosController'
            })
            .otherwise({
                redirectTo: '/'
            });
            $locationProvider.html5Mode(true);
    })
    .controller('MainController', function ($scope) {
        $scope.texto = "Pagina principal";
    })
    .controller('ContactoController', function ($scope) {
        $scope.texto = "contacto 2342342342432";
    })
    .controller('NosotrosController', function ($scope) {
        $scope.texto = "esta es la pagina";
    })