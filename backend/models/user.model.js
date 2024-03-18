import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: "First name is required"
    },
    lastName: {
        type: String,
        required: "Last name is required",
    },
    userName: {
        type: String,
        required: "Username is required",
        unique: true,
    },
    password: {
        type: String,
        required: "Password is required",
        minlength: 6,
    },
    profilePicture: {
        type: String,
        default: "",
    },
});
const User = mongoose.model("User", userSchema);
export default User;
