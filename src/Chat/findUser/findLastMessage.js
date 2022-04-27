// import msgList from "../Message/msgList";

function findLastMessage({ userName, contactName, messageList }) {
  var last = "";
  for (var m in messageList) {
    if (
      (messageList[m].sender === userName.userName &&
        messageList[m].reciever === contactName) ||
      (messageList[m].reciever === userName.userName &&
        messageList[m].sender === contactName)
    ) {
      last = messageList[m];
    }
  }
  return last;
}

export default findLastMessage;
