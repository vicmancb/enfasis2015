/**
 * Created by vicman on 10/27/15.
 */
angular.module('myApp')
    .controller('homeController', function($scope, homeService, $translate){
        var self = this;


        var promise = homeService.getCountries();

        promise.then(function (response){
            self.countries = response.data;
        });

        self.changeLanguage = function(key){
            $translate.use(key);
        };

        self.countryName = "Colombia";
    });