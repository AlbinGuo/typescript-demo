"use strict";
function join(first, second) {
    return "" + first + second;
}
function join2(first, second) {
    console.log('first:', typeof first);
    console.log('second', typeof second);
    if (typeof first === 'number' && typeof second === 'number') {
        return first + second;
    }
    else {
        return "" + first + second;
    }
}
function anotherJoin(first, second) {
    return first;
}
function map(params) {
    console.log('params', params);
    return params;
}
var rst = join2(4, '3');
console.log('rst=', rst);
anotherJoin(2222, 0);
//# sourceMappingURL=demo.js.map