import "./Message.css";
import findUser from "../findUser/findUser";
import userList from "../../Users";

function Audio({ sender, reciever, text }) {
    const user = findUser({ userName: sender, userList });
    if (reciever === "" || text === "") {
        return;
    }
    return (
        <div className="message">
            <div className="d-flex">
                <div className="flex-shrink-0">
                    <img src={require("../Contact/img/" + user.imgPath)} className="image" />
                </div>
                <div className="flex-grow-1 container">
                    <div className="row justify-content-between">
                        <h3 className="col-8 displayName">{user.displayname}</h3>
                    </div>
                    <div className="row">
                        <audio controls>
                            <source src={text} type="audio/mpeg"></source>
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Audio;
