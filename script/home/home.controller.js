/**
 * Created by vicman on 10/27/15.
 */
angular.module('myApp')
    .controller('homeController', function($scope, homeService){
        $scope.users = homeService.users;
    });