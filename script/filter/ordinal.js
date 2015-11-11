/**
 * Created by vicman on 11/10/15.
 */

angular.module('myApp')
    .filter('ordinal', function(){
        return function(number){
            if(isNaN(number) || number <= 0){
                return number;
            }
            else {
                if (number == 1) {
                    return number + 'st';
                }
                else if (number == 2) {
                    return number + 'nd';
                }
                else if (number == 3) {
                    return number + 'rd';
                }
                else {
                    return number + 'th';
                }
            }
        };
    });