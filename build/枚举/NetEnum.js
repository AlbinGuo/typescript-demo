"use strict";
var Status;
(function (Status) {
    Status[Status["OFFLINE"] = 2] = "OFFLINE";
    Status[Status["ONLINE"] = 5] = "ONLINE";
    Status[Status["DELETED"] = 6] = "DELETED";
})(Status || (Status = {}));
console.log(Status.OFFLINE);
console.log(Status.ONLINE);
console.log(Status.DELETED);
console.log('==============');
console.log(Status[2]);
var NetStatus = {
    OFFLINE: 0,
    ONLINE: 1,
    DELETED: 2
};
function getResult(status) {
    if (status === NetStatus.ONLINE) {
        return 'online';
    }
    else if (status === NetStatus.OFFLINE) {
        return 'offline';
    }
    else
        return 'deleted';
}
var result = getResult(1);
console.log('result', result);
//# sourceMappingURL=NetEnum.js.map