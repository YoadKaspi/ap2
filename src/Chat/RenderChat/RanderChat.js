import Message from "../Message/Message";
import FilterMessages from "../Filter/FilterMsg";

function RenderChat({ messages, userName, contactName }) {
    var chatMessages = FilterMessages({ messages, userName, contactName });
    var renderedMessages = chatMessages.map((message, key) => {
        return <Message {...message} key={key} />;
    });
    return renderedMessages;
}

export default RenderChat;
