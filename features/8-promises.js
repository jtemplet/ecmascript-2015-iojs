// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise

// creates a promise for a deferred operation that is resolved after 1 second
const promise = new Promise((resolve, reject) => {
    const resolvedValue = 'Result from promise';
    console.log('Promise initialized');
    setTimeout(() => {
        console.log('Promise resolved')
        resolve(resolvedValue)
    }, 1000);
});
// Output:
//Promise initialized
//Promise resolved

const promise2 = promise.then(value => {
    console.log(`Value passed into then: ${value}`); // Value passed into then: Result from promise
    return `${value} plus stuff`;
});

const promise3 = promise2.then(console.log); // Result from promise plus stuff
const promise4 = promise3.then({

});