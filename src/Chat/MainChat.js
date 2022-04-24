import Message from "./Message/Message";
import msgList from "./Message/msgList";
import userList from "../Users";
import RenderContact from "./Contact/Contact";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./MainChat.css";

function MainChat() {
  const { userName } = useParams();
  const [contactName, setContactName] = useState("");
  var renderedMessages = msgList.map((message, key) => {
    console.log(contactName);
    if (
      (message.sender === userName && message.reciever === contactName) ||
      (message.reciever === userName && message.sender === contactName)
    ) {
      return <Message {...message} key={key} />;
    }
  });

  var contacts = userList.map((user, key) => {
    if (user.username !== userName) {
      return (
        <RenderContact {...user} key={key} contactState={setContactName} />
      );
    }
  });

  return (
    <div className="d-flex justify-content-start">
      <div className="list-group"> {contacts} </div>
      <div className="chat-frame">
        <div className="chat">{renderedMessages}</div>
      </div>
    </div>
  );
}

export default MainChat;
