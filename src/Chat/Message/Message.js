import "./Message.css";

function Message({ sender, reciever, text }) {
    console.log(text + ", RenderMessage");

    return <div className="message my_message">{text}</div>;
}

export default Message;
