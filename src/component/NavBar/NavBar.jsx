import "./NavBarStyle.css"

const NavBar = ({logo,list,button}) => {
  return (
    <nav>
        <h1>{logo}</h1>
        <ul className="nav-items">
            <li>{list[0]}</li>
            <li>{list[1]}</li>
            <li>{list[2]}</li>
            <li>{list[3]}</li>
        </ul>
        <button>{button}</button>
    </nav>
  )
}

export default NavBar