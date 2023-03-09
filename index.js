
function receivesAFunction (callback) {
   return callback();
}

receivesAFunction(function () {return 'I am a callback'});

function returnsANamedFunction () {
    return receivesAFunction;
}

function returnsAnAnonymousFunction () {
    return function () {
        console.log("I'm anonymous");
    }
}
