import Message from "../Message/Message";
import Image from "../Message/Image";
import Video from "../Message/Video";
import Audio from "../Message/Audio";
import FilterMessages from "../Filter/FilterMsg";

function RenderChat({ messages, userName, contactName }) {
    var chatMessages = FilterMessages({ messages, userName, contactName });
    var renderedMessages = chatMessages.map((message, key) => {
        if (message.type === "text") {
            return <Message {...message} key={key} />;
        }
        if (message.type === "img") {
            return <Image {...message} key={key} />;
        }
        if (message.type === "video") {
            return <Video {...message} key={key} />;
        }
        if (message.type === "audio") {
            return <Audio {...message} key={key} />;
        }
    });
    return renderedMessages;
}

export default RenderChat;
