/**
 * Created by vicman on 10/27/15.
 */

angular.module('myApp')
    .config(function($stateProvider){
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'script/home/home.html',
                controller: 'homeController'
            })
    });