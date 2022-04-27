import msgList from "../Message/msgList";

function findLastMessage({ userName, contactName }) {
    var last = "";
    for (var m in msgList) {
        if (
            (msgList[m].sender === userName.userName && msgList[m].reciever === contactName) ||
            (msgList[m].reciever === userName.userName && msgList[m].sender === contactName)
        ) {
            last = msgList[m];
        }
    }
    return last;
}

export default findLastMessage;
