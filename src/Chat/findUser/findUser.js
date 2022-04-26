function findUser({ userName, userList }) {
  var user = userList.find((object) => object.username === userName);
  return user;
}

export default findUser;
