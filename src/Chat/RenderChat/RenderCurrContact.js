import userList from "../../Users";
import findUser from "../findUser/findUser";
import "./RenderCurrContact.css";

function RenderCurrContact({ contactName }) {
    if (contactName === "") {
        return;
    } else {
        const contact = findUser({ userName: contactName, userList });
        console.log(contact);
        return (
            <div className="d-flex flex-shrink-0 container">
                <div className="col-sm-1.5">
                    <img src={require("../Contact/img/" + contact.imgPath)} className="contact-image" />
                </div>
                <div className="align-self-center">
                    <div className="display-name">{contact.displayname}</div>
                </div>
            </div>
        );
    }
}

export default RenderCurrContact;
