describe("Greeter", function(){
    it("should greet with good morning before 12", function(){
        //arrange
        var name = 'Magesh',
            expectedMessage  = 'Hi Magesh, Good Morning!',
            fakeTimeServiceForMorning = {
                getCurrent : function(){
                    return new Date(2015,11,22,9,0,0);
                }
            },
            greeter = new Greeter(fakeTimeServiceForMorning);
        //act
        greeter.name = name;
        greeter.greet();

        //assert
        expect(greeter.message).toBe(expectedMessage);
    })
    it("should greet with good afternoon after 12", function(){
        //arrange
        var name = 'Magesh',
            expectedMessage  = 'Hi Magesh, Good Afternoon!',
            fakeTimeServiceForAfternoon = {
                getCurrent : function(){
                    return new Date(2015,11,22,15,0,0);
                }
            },
            greeter = new Greeter(fakeTimeServiceForAfternoon);
        //act
        greeter.name = name;
        greeter.greet();

        //assert
        expect(greeter.message).toBe(expectedMessage);
    })
})
