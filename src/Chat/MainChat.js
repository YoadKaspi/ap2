import Message from "./Message/Message";
import msgList from "./Message/msgList";
import userList from "../Users";
import RenderContact from "./Contact/Contact";
import { useParams } from "react-router-dom";

function MainChat() {
    /*var messages = msgList.map((message, key) => {
        return <Message {...message} key={key} />;
    });*/
    const {userName} = useParams();
    console.log(userName);
    let messages = [];
    for (var msg in msgList) {
        if(msg.sender === userName) {
            console.log("success");
            messages.push(msg);
        }
    }
    var renderedMessages = messages.map((message, key) => {
        return <Message {...message} key = {key} />;
    });
    var contacts = userList.map((user, key) => {
        if(user.username !== userName) {
            return <RenderContact {...user} key = {key} />
        } 
    });
    return (
        <div>
        <div className="left-menu">
        </div>
        <div className="central-frame">
            <div className="col-1 col-lg-3 g-0">{renderedMessages}</div>
            <div>{contacts}</div>
        </div>
        </div>
    );
}

export default MainChat;
