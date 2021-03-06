import msgList from "./Message/msgList";
import userList from "../Users";
import { useParams } from "react-router-dom";
import { useState } from "react";
import "./MainChat.css";
import RenderChat from "./RenderChat/RanderChat";
import RenderContactMenu from "./RenderContactMenu/RenderContactMenu";
import findUser from "./findUser/findUser";
import VerifyContact from "./VerifyContact/VerifyContact";
import RenderCurrContact from "./RenderChat/RenderCurrContact";

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
    }

    function handleMsgAreaChange() {
        if (contactName === "") {
            document.getElementById("msgArea").value = "";
        }
    }

    var mediaRecorder;
    var audioUrl;

    //
    return (
        <div className="d-flex justify-content-start">
            <div>
                <div className="d-flex justify-content-between contact-headline container">
                    <div> contact list </div>
                    <button
                        className="btn btn-light add-contact-button"
                        data-bs-toggle="modal"
                        data-bs-target="#contactModal"
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
                <div className="list-group msgBox">
                    {" "}
                    <RenderContactMenu
                        contacts={contactList}
                        userName={userName}
                        setContactName={setContactName}
                        messageList={messageList}
                    />{" "}
                </div>
            </div>
            <div className="chat-frame">
                <div className="contact-block">
                    <RenderCurrContact contactName={contactName} />
                </div>
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
                                <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#imageModal">
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
                                <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#videoModal">
                                    <div className="d-flex justify-content-between">
                                        Video
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            className="bi bi-camera-reels"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                                            <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z" />
                                            <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                        </svg>
                                    </div>
                                </button>
                                <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#recordModal">
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
                                </button>
                            </div>
                        </div>
                        <input
                            type="text"
                            id="msgArea"
                            className="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-default"
                            onChange={handleMsgAreaChange}
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
                                document.getElementById("currChat").scrollTop =
                                    document.getElementById("currChat").scrollHeight;
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
                </div>
            </div>
            <div
                className="modal fade"
                id="imageModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Upload an image file
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body mb-3">
                            <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                accept="image/*"
                            ></input>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
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
                                    document.getElementById("currChat").scrollTop =
                                        document.getElementById("currChat").scrollHeight;
                                }}
                            >
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="videoModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Upload a video file
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body mb-3">
                            <input
                                className="form-control"
                                type="file"
                                id="formFile"
                                onChange={handleChange}
                                accept="video/*"
                            />
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
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
                                            type: "video",
                                        },
                                    ]);
                                    document.getElementById("currChat").scrollTop =
                                        document.getElementById("currChat").scrollHeight;
                                }}
                            >
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="contactModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                add new contact
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body mb-3">
                            <input
                                type="text"
                                id="addContactArea"
                                className="form-control"
                                aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-default"
                                placeholder="Contact name"
                            />
                        </div>
                        <div className="modal-footer">
                            <div id="warning" className="add-contact-val text-start"></div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
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
                                        document.getElementById("warning").innerHTML = "";
                                    } else {
                                        document.getElementById("warning").innerHTML = "cannot add contact";
                                    }
                                }}
                            >
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="modal fade"
                id="recordModal"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex="-1"
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">
                                Press to start recording
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body mb-3">
                            <div id="warning" className="add-contact-val"></div>
                            <div className="btn-group d-grid gap-2">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                                            navigator.mediaDevices
                                                .getUserMedia({ audio: true })
                                                .then((stream) => {
                                                    mediaRecorder = new MediaRecorder(stream);
                                                    mediaRecorder.start();

                                                    const data = [];

                                                    mediaRecorder.ondataavailable = (event) => data.push(event.data);
                                                    mediaRecorder.onstop = () => {
                                                        const audioB = new Blob(data);
                                                        audioUrl = URL.createObjectURL(audioB);
                                                        mediaRecorder = null;
                                                    };
                                                })
                                                .catch((err) => {
                                                    console.log("failed to record!");
                                                    console.log(err.name, err.message);
                                                });
                                        }
                                    }}
                                >
                                    record
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={() => {
                                        if (mediaRecorder) {
                                            mediaRecorder.stop();
                                        }
                                    }}
                                >
                                    stop recording
                                </button>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-dismiss="modal"
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
                                            text: audioUrl,
                                            date: dateTxt,
                                            type: "audio",
                                        },
                                    ]);
                                }}
                            >
                                send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainChat;
