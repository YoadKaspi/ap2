import Message from "./Message/Message";
import msgList from "./Message/msgList";

function MainChat() {
    var messages = msgList.map((message, key) => {
        return <Message {...message} key={key} />;
    });
    return (
        <div className="central-frame">
            <div className="col-1 col-lg-3 g-0 left-menu">{messages}</div>
        </div>
    );
}

export default MainChat;
