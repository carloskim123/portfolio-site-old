import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/profile"}>Profile</Link>
            <Link to={"/contact"}>Contact</Link>
        </nav>
    )
}

export default Navbar