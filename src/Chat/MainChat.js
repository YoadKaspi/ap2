import RenderMessage from "../Message/Message";
import msgList from "../Messages";

function MainChat(userName) {
    var messages = msgList.filter(function (message) {
        return message.username === userName;
    })
    return (
        <div className="central-frame">
            <div className="left-menu">
                   {console.log(messages)}
            </div>
        </div>
    );
}

export default MainChat;