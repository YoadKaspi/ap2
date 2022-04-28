import Message from "../Message/Message";
import Image from "../Message/Image";
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
  });
  return renderedMessages;
}

export default RenderChat;
