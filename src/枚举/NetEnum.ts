enum Status {
  OFFLINE = 2,
  ONLINE = 5,
  DELETED
}

console.log(Status.OFFLINE)
console.log(Status.ONLINE)
console.log(Status.DELETED)
console.log('==============')
console.log(Status[2])

const NetStatus = {
  OFFLINE: 0,
  ONLINE: 1,
  DELETED: 2
}
function getResult(status: number) {
  if (status === NetStatus.ONLINE) {
    return 'online'
  } else if (status === NetStatus.OFFLINE) {
    return 'offline'
  } else return 'deleted'
}

const result = getResult(1)
console.log('result', result)
