import msgList from "../Message/msgList";
import Message from "../Message/Message";

function doSearch({username, contactname}) {
    var messages = msgList.map((message, key) => {
        if(message.sender === username && message.reciever === contactname) {
            return <Message {...Message} key = {key}/>
        }
    });
    return messages;
};

export default doSearch;