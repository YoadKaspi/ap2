import RenderContact from "../Contact/Contact";

function RenderContactMenu({ contacts, userName, setContactName }) {
  var renderedContacts = contacts.map((user, key) => {
    return <RenderContact {...user} key={key} contactState={setContactName} />;
  });
  return renderedContacts;
}

export default RenderContactMenu;
