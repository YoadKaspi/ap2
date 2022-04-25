import RenderContact from "../Contact/Contact";
import FilterContacts from "../Filter/FilterContact";

function RenderContactMenu({ contacts, userName, setContactName }) {
  var currContacts = FilterContacts({ contacts, userName });
  var renderedContacts = currContacts.map((user, key) => {
    return <RenderContact {...user} key={key} contactState={setContactName} />;
  });
  return renderedContacts;
}

export default RenderContactMenu;
