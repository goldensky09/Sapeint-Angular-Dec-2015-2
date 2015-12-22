function Greeter(timeService){
    this._timeService = timeService;
    this.name = '';
    this.message = '';
}
Greeter.prototype.greet = function(){
    if (this._timeService.getCurrent().getHours() < 12){
        this.message = 'Hi ' + this.name + ", Good Morning!";
    } else {
        this.message = 'Hi ' + this.name + ", Good Afternoon!";
    }
}

function TimeService(){
    this.getCurrent = function(){
        return new Date();
    }
}
