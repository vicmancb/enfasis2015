/**
 * Created by vicman on 10/20/15.
 */

var myApp = angular.module('myApp', [
    'ui.router'
])
    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    });