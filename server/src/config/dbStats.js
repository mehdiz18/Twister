const axios = require("axios");
const User = require("../entities/Users/User");
const Friend = require("../entities/Friends/Friends");
const Message = require("../entities/Messages/Message");
const colors = require("colors");
const { getUsersInfos } = require("../entities/Users/UsersController");

const dbStats = async (req, res) => {
    const st = await axios.get("http://localhost:5000/api/users/infos");
    console.log(st.data.message);
}

module.exports = { dbStats };