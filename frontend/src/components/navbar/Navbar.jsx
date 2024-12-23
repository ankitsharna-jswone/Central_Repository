
import './Navbar.css'
import logo from '../../assets/JSW_Group_logo.svg'


const Navbar = () => {
  return (
    <nav className="nav">
        <img src={logo} alt="img"></img>
        <div className="Heading">Automation Report</div>
        <div className="Tabs">
            <div className="buttons" data-target="SalesForce">
                <a href="#">
                    SalesForce
                </a>
            </div>
            <div className="buttons" data-target="ERP">
                <a href="#">ERP</a>
            </div>
            <div className="buttons" data-target="CCP">
                <a href="#">CCP</a>
            </div>
            <div className="buttons" data-target="Retail">
                <a href="#">Retail</a>
            </div>
        </div>
        </nav>
  )
}

export default Navbar