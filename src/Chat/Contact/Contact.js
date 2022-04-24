import doSearch from "../Search/Search";
import "./Contact.css";

function RenderContact({ username, displayname, password }) {
    var dog = require("./img/dog.jpg");
    return (
        <div className="contact-field">
            <button class="list-group-item list-group-item-action" aria-current="true">
                <div class="d-flex">
                    <div class="flex-shrink-0">
                        <img src={dog} height="100px" width="100px" />
                    </div>
                    <div className="flex-grow-1 container">
                        <div className="row justify-content-between">
                            <h3 class="col-8">{displayname}</h3>
                            <small className="col-3">3 days ago</small>
                        </div>
                        <div className="row">
                            <p class="mb-1 flex-grow-1 ms-3">Some placeholder content in a paragraph.</p>
                        </div>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default RenderContact;

//                <div className="align-self-center">
//<p class="mb-1 flex-grow-1 ms-3">Some placeholder content in a paragraph.</p>
//</div>
