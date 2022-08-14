import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/characters">Marvel Characters</Link></li>
                    <li><Link to="/comics">Marvel Comics</Link></li>
                    <li><Link to="/creators">Marvel Creators</Link></li>
                    <li><Link to="/events">Marvel Events</Link></li>
                    <li><Link to="/series">Marvel Series</Link></li>
                    <li><Link to="/story">Marvel Stories</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout