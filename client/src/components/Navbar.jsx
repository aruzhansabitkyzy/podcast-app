import '../assets/style/navbar.css';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa'
import * as HiIcons from 'react-icons/hi'

export const Navbar = () => {
    return( 
        <div className="navbar_container">
            <div className="navbar_logo">
                <img src={require("../assets/img/logo-no-background.png")} alt="" width="150px" height="20px"/>
            </div>
            <div className="discover">
                <Link to='/' style={{color: "#FFF", textDecoration: 'none'}}>
                <FaIcons.FaHome />
                <p>Discover</p></Link> 
            </div>
            <div className="around_you"> 
                <Link to='/around-you' style={{color: "#FFF", textDecoration: 'none'}}>
                    <FaIcons.FaImage />
                    <p>Around you</p></Link>
            </div>
            <div className="top_artists">
                <Link to='/top-artists' style={{color: "#FFF", textDecoration: 'none'}}>
                    <HiIcons.HiUserGroup />
                    <p>Top Artists</p></Link>
            </div>
            <div className="top_charts">
                <Link to='/top-charts' style={{color: "#FFF", textDecoration: 'none'}}>
                    <FaIcons.FaHashtag />
                    <p>Top Charts</p></Link>
            </div>
        </div>
    )
}