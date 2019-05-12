angular
    .module('miModulo', [])
    .directive('miDirectiva', function () {
        return {
            restrict: 'AECM',
            replace: true,
            templateUrl: '../directiva.html',
            scope: {
                libroAutor: "@",
                libroTitulo: "@",
                libroObjeto: "=",
                enMayusculas: "&"
            }
        }

    })
    .controller('miControlador', function ($scope) {
        $scope.libro = {
            autor: 'george orwell',
            titulo: '1984',
            publicado: 1948
        };

        $scope.enMayusculas = function (libro) {
            return libro.titulo.toUpperCase() + ' ' + libro.autor.toUpperCase();
        }
    })