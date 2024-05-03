import "../styles/navbar.css";

export default function Navbar () {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-left">
                    <p>Nazib Akbar</p>
                </div>
                <div className="navbar-right">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}