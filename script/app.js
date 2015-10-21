/**
 * Created by vicman on 10/20/15.
 */

var myApp = angular.module('myApp', [])
    .controller('myController', function($scope){
        $scope.users = [
            {
                name: "Victor",
                age: 27
            },
            {
                name: "Emir",
                age: 35
            },
            {
                name: "Pepito",
                age: 50
            },
            {
                name: "federico",
                age: 20
            }
        ];
        console.log('este es el controlador');
    });