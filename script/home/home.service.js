/**
 * Created by vicman on 10/27/15.
 */
angular.module('myApp')
    .service('homeService', function($http){
        var self = this;

        this.getCountries = function(){
            return $http({
                method : 'GET',
                url : 'https://restcountries.eu/rest/v1/all'
            });
        };

    });