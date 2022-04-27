import RenderContact from "../Contact/Contact";

function RenderContactMenu({
  contacts,
  userName,
  setContactName,
  messageList,
}) {
  var renderedContacts = contacts.map((user, key) => {
    return (
      <RenderContact
        contactname={user.username}
        displayname={user.displayname}
        imgPath={user.imgPath}
        contactState={setContactName}
        key={key}
        messageList={messageList}
      />
    );
  });
  return renderedContacts;
}

export default RenderContactMenu;
