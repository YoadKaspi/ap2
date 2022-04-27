import { useParams } from "react-router-dom";
import findLastMessage from "../findUser/findLastMessage";
import findUser from "../findUser/findUser";
import userList from "../../Users";
import "./Contact.css";

function RenderContact({ contactname, displayname, imgPath, contactState }) {
    const userName = useParams();

    const user = findUser({ userName: userName.userName, userList });
    const lastMsg = findLastMessage({ userName: userName, contactName: contactname });

    var lastMsgDisplay;

    if (lastMsg === "") {
        lastMsgDisplay = "";
    } else if (lastMsg.sender === user.userName) {
        lastMsgDisplay = user.displayname + " : ";
    } else {
        lastMsgDisplay = displayname + " : ";
    }

    return (
        <div className="contact-field">
            <button
                className="list-group-item list-group-item-action"
                aria-current="true"
                onClick={() => {
                    contactState(contactname);
                }}
            >
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <img src={require("./img/" + imgPath)} className="images" />
                    </div>
                    <div className="flex-grow-1 container">
                        <div className="row justify-content-between">
                            <h3 className="col-8">{displayname}</h3>
                            <small className="col-4">{lastMsg.date}</small>
                        </div>
                        <div className="row">
                            <p className="mb-1 flex-grow-1 ms-3">
                                <b>{lastMsgDisplay}</b>
                                {lastMsg.text}
                            </p>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default RenderContact;
