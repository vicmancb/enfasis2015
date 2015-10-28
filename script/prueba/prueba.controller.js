/**
 * Created by vicman on 10/27/15.
 */
angular.module('myApp')
    .controller('pruebaController', function($scope, pruebaService){
        $scope.users = pruebaService.users;
    });