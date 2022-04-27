import RenderContact from "../Contact/Contact";

function RenderContactMenu({ contacts, userName, setContactName }) {
    var renderedContacts = contacts.map((user, key) => {
        return (
            <RenderContact
                contactname={user.username}
                displayname={user.displayname}
                imgPath={user.imgPath}
                contactState={setContactName}
                key={key}
            />
        );
    });
    return renderedContacts;
}

export default RenderContactMenu;
