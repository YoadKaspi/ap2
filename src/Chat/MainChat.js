import msgList from "./Message/msgList";
import userList from "../Users";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./MainChat.css";
import RenderChat from "./RenderChat/RanderChat";
import RenderContactMenu from "./RenderContactMenu/RenderContactMenu";
import findUser from "./findUser/findUser";
import VerifyContact from "./VerifyContact/VerifyContact";

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
    const [file, setFile] = useState(null);
    function handleChange(e) {
        e.preventDefault();
        setFile(URL.createObjectURL(e.target.files[0]));
        console.log(file);
    }

    // document.getElementById("currChat").scrollTop = document.getElementById("currChat").scrollHeight;
    return (
        <div className="d-flex justify-content-start">
            <div>
                <div className="d-flex justify-content-around contact-headline">
                    <div> contact list </div>
                </div>
                <div className="list-group">
                    {" "}
                    <RenderContactMenu
                        contacts={contactList}
                        userName={userName}
                        setContactName={setContactName}
                        messageList={messageList}
                    />{" "}
                </div>
                <div className="d-flex align-items-center add-contact">
                    <input
                        type="text"
                        id="addContactArea"
                        className="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                    />
                    <button
                        className="btn btn-light add-contact-button"
                        onClick={() => {
                            const txt = document.getElementById("addContactArea").value;
                            if (
                                VerifyContact({
                                    userName,
                                    contactName: txt,
                                    contactList: contactList,
                                })
                            ) {
                                const newContact = findUser({ userName: txt, userList });
                                setContactList((contactList) => [...contactList, newContact]);
                                document.getElementById("addContactArea").value = "";
                            } else {
                                document.getElementById("warning").innerHTML = "cannot add contact";
                            }
                        }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-person-plus"
                            viewBox="0 0 16 16"
                        >
                            <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                            <path
                                fillRule="evenodd"
                                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                            />
                        </svg>
                    </button>
                </div>
                <div id="warning" className="add-contact-val"></div>
            </div>
            <div className="chat-frame">
                <div id="currChat" className="list-group msgBox">
                    {" "}
                    <RenderChat messages={messageList} userName={userName} contactName={contactName} />{" "}
                </div>
                <div className="textbox-block d-flex align-items-center">
                    <div className="input-group mb-3">
                        <div className="btn-group dropup">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown">
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
                                <button className="dropdown-item">
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
                                </button>
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
                                var date = new Date();
                                var dateTxt =
                                    String(date.getDate()) +
                                    "/" +
                                    String(date.getMonth() + 1) +
                                    "/" +
                                    String(date.getFullYear());
                                setMessageList((messageList) => [
                                    ...messageList,
                                    {
                                        sender: userName,
                                        reciever: contactName,
                                        text: txt,
                                        date: dateTxt,
                                        type: "text",
                                    },
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
                    <input type="file" onChange={handleChange}></input>
                    <button
                        onClick={() => {
                            var date = new Date();
                            var dateTxt =
                                String(date.getDate()) +
                                "/" +
                                String(date.getMonth() + 1) +
                                "/" +
                                String(date.getFullYear());
                            setMessageList((messageList) => [
                                ...messageList,
                                {
                                    sender: userName,
                                    reciever: contactName,
                                    text: file,
                                    date: dateTxt,
                                    type: "img",
                                },
                            ]);
                        }}
                    >
                        send
                    </button>
                </div>
            </div>

            <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#staticBackdrop">
                Launch static backdrop modal
            </button>

            <div
                class="modal fade"
                id="staticBackdrop"
                data-mdb-backdrop="static"
                data-mdb-keyboard="false"
                tabindex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">
                                Modal title
                            </h5>
                            <button
                                type="button"
                                class="btn-close"
                                data-mdb-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">...</div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">
                                Close
                            </button>
                            <button type="button" class="btn btn-primary">
                                Understood
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainChat;
