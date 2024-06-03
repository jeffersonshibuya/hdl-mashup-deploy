import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light">
      <div className="container-fluid container">
        <a className="navbar-brand">
          <img src={logo} width='240px'/>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav nav-pills">
            <li className="nav-item">
              <a className="nav-link" href="#percentageCertified">Percentage of Certified Accounts</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#accountCategories">Account Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#exemptionCategories">Exemption Categories</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#appraisedValue">Appraised Value</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#topProperties">Top 25 Properties</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar