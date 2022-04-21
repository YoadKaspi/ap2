import doSearch from "../Search/Search";
import "./Contact.css";

function RenderContact({username, displayname, password}) {
    return (
        <div className="contact-field">{displayname}</div>
    );
}

export default RenderContact;