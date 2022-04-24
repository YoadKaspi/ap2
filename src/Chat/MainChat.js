import Message from "./Message/Message";
import msgList from "./Message/msgList";
import userList from "../Users";
import RenderContact from "./Contact/Contact";
import { useParams } from "react-router-dom";
import "./MainChat.css";

function MainChat() {
    const { userName } = useParams();
    var renderedMessages = msgList.map((message, key) => {
        if (message.sender === userName || message.reciever === userName) {
            return <Message {...message} key={key} />;
        }
    });
    var contacts = userList.map((user, key) => {
        if (user.username !== userName) {
            return <RenderContact {...user} key={key} />;
        }
    });
    return (
        <div className="d-flex justify-content-start d-flex align-items-start bd-highlight mb-3">
            <div className="list-group">{contacts}</div>
            <div className="chat-frame">
                <div className="chat">{renderedMessages}</div>
                <div className="mt-auto p-2 bd-highlight"></div>
            </div>
        </div>
    );
}

export default MainChat;
