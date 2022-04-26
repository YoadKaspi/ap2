import userList from "../../Users";

function findUser({ userName }) {
    var user = userList.find((object) => object.username === userName);
    return user;
}

export default findUser;
