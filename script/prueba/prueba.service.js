/**
 * Created by vicman on 10/27/15.
 */
angular.module('myApp')
    .service('pruebaService', function(){

        this.users = [
            {
                name: "Victor prueba",
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