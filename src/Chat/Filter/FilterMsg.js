function FilterMessages({ messages, userName, contactName }) {
  const chatMessages = messages.filter(
    (msg) =>
      (msg.sender === userName && msg.reciever === contactName) ||
      (msg.reciever === userName && msg.sender === contactName)
  );
  return chatMessages;
}

export default FilterMessages;
