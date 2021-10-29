var Student = (function () {
    function Student(info) {
        this.info = info;
    }
    Student.prototype.getInfo = function (key) {
        return this.info[key];
    };
    return Student;
}());
var stu = new Student({
    name: '赵子龙',
    age: 56,
    gender: '男',
    marriage: false
});
var op = stu.getInfo('marriage');
console.log(op);
//# sourceMappingURL=page.js.map