import msgList from "./Message/msgList";
import userList from "../Users";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./MainChat.css";
import RenderChat from "./RenderChat/RanderChat";
import RenderContactMenu from "./RenderContactMenu/RenderContactMenu";
import findUser from "./findUser/findUser";

function MainChat() {
  const { userName } = useParams();
  const contactNames = findUser({ userName, userList }).contacts;

  const getContacts = (names) => {
    let contacts = [];
    for (let i = 0; i < names.length; i++) {
      contacts.push(findUser({ userName: names[i], userList }));
    }
    return contacts;
  };

  const [contactName, setContactName] = useState("");
  const [messageList, setMessageList] = useState(msgList);
  const [contactList, setContactList] = useState(getContacts(contactNames));

  // const currContacts = contactNames.map((name) => findUser({ name, userList }));

  return (
    <div className="d-flex justify-content-start">
      <div>
        <div className="contact-headline"> contact list </div>
        <input id="searchUser"></input>
        <button
          onClick={() => {
            const search = document.getElementById("searchUser").value;
            var newContact = findUser({ search, userList });
            if (typeof newContact === "undefined") {
            } else {
              setContactList((contactList) => [...contactList, newContact]);
            }
          }}
        >
          add
        </button>
        <div className="list-group">
          {" "}
          <RenderContactMenu
            contacts={contactList}
            userName={userName}
            setContactName={setContactName}
          />{" "}
        </div>
      </div>
      <div className="chat-frame">
        <div className="">
          {" "}
          <RenderChat
            messages={messageList}
            userName={userName}
            contactName={contactName}
          />{" "}
        </div>
        <div className="textbox-block d-flex align-items-center">
          <div className="input-group mb-3">
            <div className="btn-group dropup">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-paperclip"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                </svg>
              </button>
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  <div className="d-flex justify-content-between">
                    Image
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24 "
                      height="24"
                      fill="currentColor"
                      className="bi bi-image"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z" />
                    </svg>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="d-flex justify-content-between">
                    File
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-file-earmark"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
                    </svg>
                  </div>
                </a>
                <a href="#" className="dropdown-item">
                  <div className="d-flex justify-content-between">
                    Voice
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-mic"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                      <path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0v5zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3z" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
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
