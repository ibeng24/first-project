import './Layout.css';
import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return(
        <div className='Layout'>
            <header className='Layout-header'>
                <nav className="navbar">
                    <a className="active"><Link to="/">Home</Link></a>
                    <a><Link to="/blog">Blog</Link></a>
                    <a><Link to="/profile">Profile</Link></a>
                    <a><Link to="/*"></Link></a>
                </nav>

                <Outlet />
            </header>
        </div>
    )
}

export default Layout;