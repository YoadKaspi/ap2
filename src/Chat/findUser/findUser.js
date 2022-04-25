import userList from ".../Users.js";

function findUser({ userName }) {
    var user = userList.find((object) => object.username === userName);
    return user;
}

export default findUser;
