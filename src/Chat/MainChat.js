import RenderMessage from "../Message/Message";
import msgList from "../Messages";

function MainChat(userName) {
    var personalMsg = msgList.filter()
    var messages = msgList.map((msg) => {
        return RenderMessage(msg.text);
    });
    return (
        <div className="central-frame">
            <div className="col-1 col-lg-3 g-0 left-menu">
                {messages}
            </div>
        </div>
    );
}

export default MainChat;