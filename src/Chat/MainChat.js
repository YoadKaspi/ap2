import msgList from "./Message/msgList";
import userList from "../Users";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./MainChat.css";
import RenderChat from "./RenderChat/RanderChat";
import RenderContactMenu from "./RenderContactMenu/RenderContactMenu";

function MainChat() {
  const { userName } = useParams();
  const [contactName, setContactName] = useState("");
  const [messageList, setMessageList] = useState(msgList);

  return (
    <div className="d-flex justify-content-start">
      <div>
        <div className="contact-headline"> contact list </div>
        <div className="list-group">
          {" "}
          <RenderContactMenu
            contacts={userList}
            userName={userName}
            setContactName={setContactName}
          />{" "}
        </div>
      </div>
      <div className="chat-frame">
        <div>
          {" "}
          <RenderChat
            messages={messageList}
            userName={userName}
            contactName={contactName}
          />{" "}
        </div>
        <div className="textbox-block d-flex align-items-center">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Default
            </span>
            <input
              type="text"
              id="msgArea"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
            <button
              className="btn btn-light send-button"
              onClick={() => {
                const txt = document.getElementById("msgArea").value;
                setMessageList((messageList) => [
                  ...messageList,
                  { sender: userName, reciever: contactName, text: txt },
                ]);
                document.getElementById("msgArea").value = "";
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                fill="currentColor"
                className="bi bi-forward-fill"
                viewBox="0 0 16 16"
              >
                <path d="m9.77 12.11 4.012-2.953a.647.647 0 0 0 0-1.114L9.771 5.09a.644.644 0 0 0-.971.557V6.65H2v3.9h6.8v1.003c0 .505.545.808.97.557z" />
              </svg>
            </button>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  );
}

export default MainChat;
