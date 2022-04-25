function findUser({ userName, userList }) {
  const user = userList.find((object) => object.username === userName);
  return user;
}

export default findUser;
