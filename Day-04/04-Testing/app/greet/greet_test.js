describe("Greet", function(){
    beforeEach(module("myApp.greet"));
    
    describe("Greet Controller", function(){
        it("Should initialize the name and message with empty string", inject(function($controller){
            var dummyScope = {};
            $controller("greetController", {$scope : dummyScope});
            
            expect(dummyScope.name).toBe('');
            expect(dummyScope.message).toBe('');
        }));
        it("Should populate the message when greeted", inject(function($controller){
            var dummyScope = {};
            var expectedMessage = 'Hi Magesh, Have a nice day!';
            $controller("greetController", {$scope : dummyScope});
            
            dummyScope.name = 'Magesh';
            dummyScope.greet();
            expect(dummyScope.message).toBe(expectedMessage);
        }));
    });
});