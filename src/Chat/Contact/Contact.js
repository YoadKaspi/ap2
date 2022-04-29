import { useParams } from "react-router-dom";
import findLastMessage from "../findUser/findLastMessage";
import findUser from "../findUser/findUser";
import userList from "../../Users";
import "./Contact.css";

function RenderContact({
  contactname,
  displayname,
  imgPath,
  contactState,
  messageList,
}) {
  const userName = useParams();

  const lastMsg = findLastMessage({
    userName: userName,
    contactName: contactname,
    messageList: messageList,
  });

  var lastMsgDisplay;
  var displayText;

  const user = findUser({ userName: lastMsg.sender, userList });

  if (lastMsg === "") {
    lastMsgDisplay = "";
  } else {
    lastMsgDisplay = user.displayname + " : ";
  }

  if (lastMsg.type === "text") {
    displayText = lastMsg.text;
  }
  if (lastMsg.type === "img") {
    displayText = "sent an image";
  }
  if (lastMsg.type === "video") {
    displayText = "sent a video";
  }
  if (lastMsg.type === "audio") {
    displayText = "sent a voice message";
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
            <div className="row">
              <h3 className="col-7">{displayname}</h3>
              <small className="date">{lastMsg.date}</small>
            </div>
            <div className="row">
              <p className="mb-1 flex-grow-1 ms-3 last-msg">
                <b>{lastMsgDisplay}</b>
                {displayText}
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default RenderContact;
