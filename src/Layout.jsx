import { Outlet, Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
    return (
        <div>
            <nav className="navbar">
                <ul className="list">
                    <Link to="/"><img src="https://rare-gallery.com/thumbs/582155-marvel-background.jpeg" className="logo" alt="" /></Link>
                    <li className="nav-items"><Link className="nav-link" to="/characters">Marvel Characters</Link></li>
                    <li className="nav-items"><Link className="nav-link" to="/comics">Marvel Comics</Link></li>
                    <li className="nav-items"><Link className="nav-link" to="/creators">Marvel Creators</Link></li>
                    <li className="nav-items"><Link className="nav-link" to="/events">Marvel Events</Link></li>
                    <li className="nav-items"><Link className="nav-link" to="/series">Marvel Series</Link></li>
                    <li className="nav-items"><Link className="nav-link" to="/story">Marvel Stories</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout