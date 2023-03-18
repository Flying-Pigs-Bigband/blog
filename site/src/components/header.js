import * as React from "react"
import { Link } from "gatsby"

const NavMenuItem = [
  {
    text: "Home",
    url: "/"
  },
  {
    text: "About",
    url: "/about"
  },
  {
    text: "History",
    url: "/history"
  }
]

const Header = ({ siteTitle }) => (
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <img src="https://images.microcms-assets.io/assets/5084b49f40dd4197ad075bb54f28547b/3dae89a58e5c4b8ba4cd9134717eff2b/pigs_logo_darkblue.png" alt="logo" />
      <span className="ml-3 text-xl">Flying Pigs Bigband</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    {NavMenuItem.map((link, index) => (
          <React.Fragment key={index}>
            <Link to={link.url} className="mr-5 hover:text-gray-900">{link.text}</Link>
          </React.Fragment>
    ))}
    </nav>
  </div>
</header>
)

export default Header
