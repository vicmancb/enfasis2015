/**
 * Created by vicman on 10/27/15.
 */

angular.module('myApp')
    .config(function($stateProvider){
        $stateProvider
            .state('prueba', {
                url: '/pruebanotienequellamarseigual',
                templateUrl: 'script/prueba/prueba.html',
                controller: 'pruebaController'
            })
    });