import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Navbar() {
  const togleMode = () => {
    localStorage.getItem("darkMode") || "light"
  }
  const { title} = useParams()
  const [theme, setTheme] = useState(togleMode)
  const handleTimeTogle = () => {
    const newTheme = theme == "dark-mode" ? "light": "dark-mode"
    setTheme(newTheme)
  }
  useEffect(() => {
    document.body.classList = "";
    document.body.classList.add(theme)
    localStorage.setItem("darkMode", theme)
  }, [theme])
  return (
    <header className="header">
      <div className="container header-container" >
        <div>{title && <Link to="/"  className="header-logo">
            <figure>
              <img
              src={`../assets/icon-${title.toLocaleLowerCase()}.svg`}
              alt={`${title} icon`}/>
            </figure>
            <span>{title}</span>
        </Link>}
        </div>
        <div>
          <div className="dark-btn" onClick={handleTimeTogle}>
            <input type="checkbox" checked={theme == "dark-mode"} readOnly/>
            <span>
              <span></span>
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
