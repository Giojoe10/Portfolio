const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userModel = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userModel.pre("save", async () => {
    this.password = await bcrypt.hash(this.password, 12);
}
)


module.exports = mongoose.model("users", userModel);