import '../styles/Header.scss'
import { ReactComponent as Search } from '../assets/search.svg'

const Header = () => {
    return (
        <div id="Header">
            <span className="travel">Travel Advisor</span>
            <div className="search">
                <span>Explore new places</span>
                <div className="search_input">
                    <Search className="absolute" width={15}/>
                    <input type="search" placeholder="Search"/>
                </div>
            </div>
        </div>
    )
}

export default Header