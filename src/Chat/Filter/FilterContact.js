function FilterContacts({ contacts, userName }) {
  const currContacts = contacts.filter(
    (contact) => contact.username !== userName
  );
  return currContacts;
}

export default FilterContacts;
