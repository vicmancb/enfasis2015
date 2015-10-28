/**
 * Created by vicman on 10/27/15.
 */
angular.module('myApp')
    .service('homeService', function(){

        this.users = [
            {
                name: "Victor servicio",
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
    });