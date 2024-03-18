import mongoose from "mongoose"

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connection SUCCESS")
    } catch (error) {
        console.error("MongoDB connection FAIL")
        console.error(error)
    }
}
export default connect;