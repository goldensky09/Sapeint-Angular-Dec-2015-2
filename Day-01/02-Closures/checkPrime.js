function getPrimeFactory(){
    var cache = {};
    function checkPrime(n){
        console.log("processing ", n);
        if (n <=3 ) return true;
        for(var i=2; i<= (n/2); i++)
            if (n % i === 0) return false;
        return true;
    }
    function isPrime(n){
        if (!cache.hasOwnProperty(n))
            cache[n] = checkPrime(n);
        return cache[n];
    }
    return isPrime;
}

function getSqrtFactory(){
    var cache = {};
    function getSqrt(n){
        console.log("processing ", n);
        return Math.sqrt(n);
    }
    return function(n){
        if (!cache.hasOwnProperty(n))
            cache[n] = getSqrt(n);
        return cache[n];
    }
}

function memoize(fn){
    var cache = {};
    return function(n){
        var key = JSON.stringify(arguments);
        if (!cache.hasOwnProperty(key))
            cache[key] = fn.apply(this, arguments);
        return cache[key];
    }
}

