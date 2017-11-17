const promise = new Promise((resovle, reject) => {
    resovle('success1');
    reject('error');
    resovle('success2');
});

promise.then(res => {
    console.log('then: ', res);
}).catch(err => {
    console.log('catch: ', err);
});

Promise.resovle(1).then(res => {
    console.log(res);
    return 2;
}).catch(err => {
    return 3;
}).catch(res => {
    console.log(res);
});
