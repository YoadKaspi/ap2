import Message from "./Message/Message";
import msgList from "./Message/msgList";
import userList from "../Users";
import RenderContact from "./Contact/Contact";
import { useParams } from "react-router-dom";

function MainChat() {
  const { userName } = useParams();
  var renderedMessages = msgList.map((message, key) => {
    if (message.sender === userName) {
      return <Message {...message} key={key} />;
    }
  });
  var contacts = userList.map((user, key) => {
    if (user.username !== userName) {
      return <RenderContact {...user} key={key} />;
    }
  });
  return (
    <div>
      <div className="central-frame">
        <div className="left-menu">{contacts}</div>
        <div className="chat">{renderedMessages}</div>
      </div>
    </div>
  );
}

export default MainChat;
