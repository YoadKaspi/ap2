import findUser from "../findUser/findUser";
import userList from "../../Users";

function VerifyContact({ userName, contactName, contactList }) {
  if (contactName === userName) {
    return false;
  }
  const temp = findUser({ userName: contactName, userList: contactList });
  if (typeof temp !== "undefined") {
    return false;
  }
  const contacts = findUser({ userName, userList }).contacts;
  if (contacts.includes(contactName)) {
    return false;
  }
  const newContact = findUser({ userName: contactName, userList });
  if (typeof newContact === "undefined") {
    return false;
  }
  return true;
}

export default VerifyContact;
