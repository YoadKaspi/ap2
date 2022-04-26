import "./Contact.css";

function RenderContact({
  username,
  displayname,
  password,
  imgPath,
  contactState,
}) {
  return (
    <div className="contact-field">
      <button
        className="list-group-item list-group-item-action"
        aria-current="true"
        onClick={() => {
          contactState(username);
        }}
      >
        <div className="d-flex">
          <div className="flex-shrink-0">
            <img src={require("./img/" + imgPath)} className="images" />
          </div>
          <div className="flex-grow-1 container">
            <div className="row justify-content-between">
              <h3 className="col-8">{displayname}</h3>
              <small className="col-3">3 days ago</small>
            </div>
            <div className="row">
              <p className="mb-1 flex-grow-1 ms-3">
                Some placeholder content in a paragraph.
              </p>
            </div>
          </div>
        </div>
      </button>
    </div>
  );
}

export default RenderContact;
