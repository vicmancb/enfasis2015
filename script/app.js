/**
 * Created by vicman on 10/20/15.
 */

var myApp = angular.module('myApp', [
        'ui.router',
        'pascalprecht.translate'
    ])

    .config(function($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/');
        $locationProvider.html5Mode(true);
    })
    .config(function ($translateProvider) {
        $translateProvider.translations('en', {
            TITLE: 'Hello',
            FOO: 'This is a paragraph.',
            BUTTON_LANG_EN: 'english',
            BUTTON_LANG_DE: 'german'
        });
        $translateProvider.translations('de', {
            TITLE: 'Hallo',
            FOO: 'Dies ist ein Paragraph.',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch'
        });
        $translateProvider.translations('es', {
            TITLE: 'Hola Emir',
            FOO: 'Dies ist ein Paragraph.',
            BUTTON_LANG_EN: 'englisch',
            BUTTON_LANG_DE: 'deutsch'
        });
        $translateProvider.preferredLanguage('en');
    });