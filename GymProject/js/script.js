var Prueba = angular.module("Prueba",['ui.router']);

Prueba.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/Inicio")

    $stateProvider
    .state("llamada",{
        url:'/Contacto',
        templateUrl:"templates/Contacto.html"
    })

    .state("Horarios",{
        url:'/Horarios',
        templateUrl:"templates/Horarios.html"
    })

    .state("Membresia",{
        url:'/Membresia',
        templateUrl:"templates/Membresia.html"
    })

    .state("Inicio",{
        url:'/Inicio',
        templateUrl:"templates/Inicio.html"
    });

})

