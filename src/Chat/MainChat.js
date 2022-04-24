import Message from "./Message/Message";
import msgList from "./Message/msgList";
import userList from "../Users";
import RenderContact from "./Contact/Contact";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./MainChat.css";

function MainChat() {
    function renderNewMessage() {
        var newMsg = { sender: userName, reciever: contactName, text: currMsg };
        msgList.push(newMsg);
        return { renderedMessages };
    }

    const { userName } = useParams();
    const [contactName, setContactName] = useState("");
    const [currMsg, setCurrMsg] = useState("");

    var renderedMessages = msgList.map((message, key) => {
        if (
            (message.sender === userName && message.reciever === contactName) ||
            (message.reciever === userName && message.sender === contactName)
        ) {
            return <Message {...message} key={key} />;
        }
    });

    var contacts = userList.map((user, key) => {
        if (user.username !== userName) {
            return <RenderContact {...user} key={key} contactState={setContactName} />;
        }
    });

    return (
        <div className="d-flex justify-content-start">
            <div>
                <div className="contact-headline"> contact list </div>
                <div className="list-group"> {contacts} </div>
            </div>
            <div className="chat-frame">
                <div> {renderedMessages} </div>
                <div className="textbox-block d-flex align-items-center">
                    <div className=""></div>
                    <div className="">
                        <input className="form-control" value={currMsg}></input>
                    </div>
                    <div className="">
                        <button className="btn btn-outline-dark" onClick={renderNewMessage()}>
                            send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainChat;
