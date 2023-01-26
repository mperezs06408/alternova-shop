import { NavLink } from "react-router-dom"
import "./Layout.scss"

function Layout({children}){

    return(
        <>
            <nav className="menu">
                <div className="menu__nav">
                    <NavLink to="/" className="menu__item">Store</NavLink>
                    <NavLink to="/cart" className="menu__item" >Go to cart</NavLink>
                </div>
            </nav>
            {children}
        </>
    )
}

export default Layout;