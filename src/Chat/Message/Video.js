import "./Message.css";
import findUser from "../findUser/findUser";
import userList from "../../Users";

function Video({ sender, reciever, text }) {
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
                        <video controls className="big_image">
                            <source src={text} type="video/mp4"></source>
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Video;
