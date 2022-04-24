import "./Message.css";
import { useParams } from "react-router-dom";

function Message({ sender, reciever, text }) {
    const { userName } = useParams();

    if (sender === userName) {
        return <div className="message my_message">{text}</div>;
    } else {
        return <div className="message other_message">{text}</div>;
    }
}

export default Message;
