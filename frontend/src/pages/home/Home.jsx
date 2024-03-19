import Sidebar from "../../components/sidebar/Sidebar.jsx"
const Home = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-900 bg-opacity-25 backdrop-blur-3xl" >
            <div className="login-box">
                <Sidebar />
                {/* <MessageContainer /> */}
            </div>
        </div >
    )
}
export default Home;

