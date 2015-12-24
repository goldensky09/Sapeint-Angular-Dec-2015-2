/* Sync */

//Service Provider
function addSync(x,y){
    console.log("[SP] processing ", x , " and ", y);
    var result = x + y;
    console.log("[SP] returning result");
    return result;
}

//Service Consumer
function addSyncClient(x,y){
    console.log("[SC] triggering add");
    var result = addSync(x,y);
    console.log("[SC] result = ", result);
}

/* Async  - Using Callbacks*/

//Service Provider
function addAsync(x,y, onResult){
    console.log("[SP] processing ", x , " and ", y);
    setTimeout(function(){
        var result = x + y;
        console.log("[SP] returning result");
        if (typeof onResult  === 'function')
            onResult(result);
    },3000);
}

//Service Consumer
function addAsyncClient(x,y){
    console.log("[SC] triggering add");
    addAsync(x,y, function(result){
        console.log("[SC] result = ", result);
    });
}

/* Using Events */
var asyncAdder = (function(){
    var _callbacks = [];
    return {
        add : function(x,y){
            console.log("[SP] processing ", x , " and ", y);
            setTimeout(function(){
                var result = x + y;
                console.log("[SP] returning result");
                _callbacks.forEach(function(cb){ cb(result); });
            },3000);
        },
        subscribeOnResult : function(callback){
            _callbacks.push(callback);
        }
    }
})();

/* Using Promises */
function add(x,y){
    var promise = new Promise(function(resolve, reject){
        console.log("[SP] processing ", x , " and ", y);
        setTimeout(function(){
            var result = x + y;
            console.log("[SP] returning result");
            resolve(result);
        },3000);
    });
    return promise;
}
