import { NavLink } from 'react-router-dom'

function NavBar() {
    return(
        <div>
            <nav className="navbar bg-base-100 justify-center bg-purple-700 rounded-lg">
            <div className="flex">
                <NavLink 
                    className="btn btn-ghost normal-case text-xl" 
                    to="/">Home
                </NavLink>
            </div>
            
            <div className="flex">
                <NavLink 
                    className="btn btn-ghost normal-case text-xl" 
                    to="/artistslist">Artists
                </NavLink>
            </div>
            <div className="flex">
                <NavLink 
                    className="btn btn-ghost normal-case text-xl"
                    to="/albumslist">Albums
                </NavLink>
            </div>
            
            <div className="flex">
                <NavLink 
                    className="btn btn-ghost normal-case text-xl"
                    to="/newartist">New Artist
                </NavLink>  
            </div>
            
        </nav>
        </div>
        
    )
}

export default NavBar;