angular
    .module('filtros', [])
    .controller("filtrosController", function ($scope) {
        $scope.hoy = new Date();
        $scope.dias = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'viernes'];
        $scope.personas = [
            {
                'nombre': 'manuel',
                'nac': 've'
            },
            {
                'nombre': 'alejandro',
                'nac': 've'
            },
            {
                'nombre': 'veronica',
                'nac': 'col'
            },
            {
                'nombre': 'sofia',
                'nac': 'arg'
            },
            {
                'nombre': 'claudia',
                'nac': 'usa'
            }
        ]
    });