import "./Message.css";
import { useParams } from "react-router-dom";

function Message({ sender, reciever, text }) {
    const { userName } = useParams();
    const { displayName } = useParams();

    if (text === "" || reciever === "") {
        return;
    } else if (sender === userName) {
        return (
            <div className="flex-row message my_message">
                {text} {displayName}
            </div>
        );
    } else if (reciever === userName) {
        return <div className="flex-row-reverse message other_message">{text}</div>;
    }
}

export default Message;
