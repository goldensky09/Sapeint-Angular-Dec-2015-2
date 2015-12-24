angular
    .module("myApp.greet", ["ngRoute"])
    .config(function($routeProvider){
        $routeProvider
            .when("/greet" ,{
                templateUrl : "greet/greet.html",
                controller : "greetController"
            })
    })
    .controller("greetController", ['$scope', function(x){
        x.name = '';
        x.message = '';
        x.greet = function(){
            x.message = 'Hi ' + x.name + ', Have a nice day!';
        }
    }]);

