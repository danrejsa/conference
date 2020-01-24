import React, { Fragment, Component,useState } from 'react';
import aunLogo from "../assets/nse.jpg";
import background1 from "../assets/slanted.svg";
import Home from "./home";
import Register from "./register";
import Submission from "./submission";
import Symposium from "./symposium";
import Venue from "./venue";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';


const NavbarComponent = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return ( 
        <Fragment> 
       <Router>
        <div className="pers">
        <header className="container-header type1" id="header">
          <div className="top-nav">
            <div className="containers">
              <div className="rows">
                <div className="top-left col-sm-6 hidden-xs">
                  <ul className="list-inline list-inline-top">
                    <li>
                      <a href="#">
                      <i class="material-icons">.</i>
                        <span className="text" style={{ fontSize:"13px"}}>.</span>
                      </a>
                    </li>
                    <li>
                      <a href="tel:+***********">
                      <i class="material-icons">.</i>
                        <span className="text" style={{ fontSize:"13px"}}>.</span>
                      </a>
                    </li>                    
                  </ul>
                </div>
                <div className="top-right" style={{marginTop:"-4rem", marginRight:"3rem"}}>
                  <ul className="list-inline">
                         
                   
                  <div class="marquee-div" >
                   <marquee>
                       <p  class="marquee-text" >
                       The Nigerian Society of Engineers Yola Branch
                        presents
                         <i> International Conference on Addressing Societal Challenges Through Innovative Engineering Research....</i>
                        <strong style={{color:"red"}}>Date</strong>: 9TH - 12TH November, 2020...
                         <strong style={{color:"red"}}>Venue</strong>: American University of Nigeria, Yola, Nigeria.
            
                         </p>
                         </marquee>   
                         </div>          
                                                     
                   </ul>
                </div>

              </div>
            </div>
          </div>
      
      <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">               
         <a href="/" title="aun logo" rel="home">
                  <img
                    style={{                     
                      height : "120px",
                      width : "120px"                      
                    }}
                    src={aunLogo}
                    alt="aun-logo"
                  />
                </a>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar >
          <NavItem className="header-links" id="home">
              <NavLink href="/" className="linkers">Home</NavLink>
            </NavItem>           
            <NavItem className="header-links">
            <Link  to="/symposium" ><NavLink className="linkers"> Symposium</NavLink></Link>
            </NavItem> 
            <NavItem className="header-links">
            <Link to="/submission" ><NavLink className="linkers">Submission</NavLink></Link>
            </NavItem>
            <NavItem className="header-links" id="venue">
              <Link to="/venue&amp;accomodation" ><NavLink className="linkers">Venue &amp; Accomodation</NavLink></Link>
            </NavItem>  
            
          </Nav>
        </Collapse>
      </Navbar>
  


 </div>
</header>
</div>

<Route path="/" exact component={Home}/>
<Route path="/register_now"  component={Register}/>
<Route path="/submission"  component={Submission}/>
<Route path="/symposium"  component={Symposium}/>
<Route path="/venue&amp;accomodation"  component={Venue}/>
</Router>
</Fragment> );
    
}
 
export default NavbarComponent;