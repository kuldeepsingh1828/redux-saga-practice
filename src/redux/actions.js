function getUserData() {
    return { type: "GET_USER" }
}

function setUserData(users) {
    return { type: "SET_USER", users }
}

export { getUserData, setUserData }