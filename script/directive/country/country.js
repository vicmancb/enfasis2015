/**
 * Created by vicman on 11/10/15.
 */
angular.module('myApp')
    .directive('country', function(){
        return {
            templateUrl: 'script/directive/country/country.template.html',
            restrict : 'EA',
            scope : {
              name : '='
            },
            link : function(scope, element, attr){
            }
        };
    });