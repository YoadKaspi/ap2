import "./Message.css";

function RenderMessage(message) {
    return(
        <div className="message my_message">
            {message}
        </div>
    );
};

export default RenderMessage;