"use strict";
var DataManager = (function () {
    function DataManager(data) {
        this.data = data;
    }
    DataManager.prototype.getItem = function (index) {
        return this.data[index];
    };
    return DataManager;
}());
var DataManager2 = (function () {
    function DataManager2(data) {
        this.data = data;
    }
    DataManager2.prototype.getItem = function (index) {
        return this.data[index];
    };
    return DataManager2;
}());
var DataManager3 = (function () {
    function DataManager3(data) {
        this.data = data;
    }
    DataManager3.prototype.getItem = function (index) {
        return this.data[index].name;
    };
    return DataManager3;
}());
var DataManager4 = (function () {
    function DataManager4(data) {
        this.data = data;
    }
    DataManager4.prototype.getItem = function (index) {
        return this.data[index];
    };
    return DataManager4;
}());
function hello(param) {
    return param;
}
var fn = function () { return '11'; };
var fn2 = hello;
var fn3 = function () {
    return '123456';
};
var data = new DataManager(['111']);
console.log(data.getItem(0));
var data2 = new DataManager2(['222']);
console.log(data2.getItem(0));
var data3 = new DataManager3([
    {
        name: '豹子头-林冲'
    }
]);
console.log(data3.getItem(0));
var data4 = new DataManager4(['444']);
console.log(data4.getItem(0));
//# sourceMappingURL=class%E6%B3%9B%E5%9E%8B.js.map