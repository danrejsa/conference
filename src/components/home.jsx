import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Register from "./register";


class Home extends Component {
    state = {  }
    render() { 
        return ( <Fragment>
            <Router>
           <div className="background1">
            <div className="title-div" style={{display:"flex", width:"100%", height:"450px",marginLeft:"auto",marginRight:"auto"}}>
            <div className="title-text" style={{textAlign:"center",paddingTop:"5rem",marginTop:"8rem",width:"40%", background:"#f8f9fa",marginLeft:"auto",marginRight:"auto"}}>
            <h1 style={{animation: "fadeInLeft 3.25s infinite",fontSize:"80px"}}>ICASCIE <br/>2020</h1>
        <p>9TH - 12TH Nov, 2020 | American University of Nigeria</p>
    </div>
    <div className="reg-but" style={{paddingTop:"5rem",marginTop:"3rem",width:"40%",marginLeft:"auto",marginRight:"auto"}}>
    <h2 style={{animation: "fadeInBottom 2.25s",}}> International Conference on Addressing Societal Challenges Through Innovative Engineering Research</h2>

    <a href="/register_now"> <div className="join-now-btn">
             <span style={{ marginLeft: "1.2rem" }}>REGISTER NOW</span>{" "}
              <i style={{ marginLeft: "0.6rem" }} class="material-icons">
                arrow_forward
              </i>
            </div></a>
    </div>
</div>


  </div>
  <div id="background2">
      <div style={{padding:"3.5rem", textAlign:"center", width:"90%",marginTop:"6rem", marginLeft:"auto", marginRight:"auto"}}>
      <h1>About ICASCIE</h1>
     <div style={{marginTop:"5rem", textAlign:"justify"}}>
     <p style={{fontSize:"22px", color:"#fff"}}>The International Conference is organized to address Societal Challenges through Innovative
          Engineering Research (ICASCIE 2020). The conference is amied at bringing together from all works of life,
          worldwide researchers in the provision of sustainable and ensuring lasting solutions are proffered to global 
          societal challenges faced by larger populous through innovative research.
          However, the conference is not limited to only engineers but also extended to multidisplinary research
          involving Engineering management, Education Technology, ICT, Health and Safety. The 
          conference will be 3-day technical presentations that cover the highlighted challenges
          and their solutions.
      </p>
      <p style={{fontSize:"22px", color:"#fff"}}>
          The Conference Technical Sessions will be devoted to:
      </p>
      <ul style={{fontSize:"22px", color:"#fff"}}>
          <li>Infrastructure</li>
          <li>Food Security</li>
          <li>Renewable Energy</li>
          <li>Engineering Materials</li>
          <li>Environmental Remediation</li>
          <li>Soil and Water</li>
          <li>Smart Grid System</li>
          <li>Internet of Things (IoT)</li>
          <li>Machine Learning</li>
          <li>Artificial Intelligience</li>
          <li>Big Data</li>
      </ul>

     </div>
      </div>
  </div>

 
<div id="background4">
<div style={{ width:"90%",marginTop:"5rem", marginLeft:"auto", marginRight:"auto"}}>
     <div style={{textAlign:"center"}}>
      <h1>Technical Committee</h1>
      </div>
      <ul style={{animation: "fadeIn 13.25s infinite",fontSize:"22px", marginTop:"5rem", color:"#000"}}>

          <li>Dr. Olawale Olanrewaju | Federal University of Technology Akure, Nigeria</li>
          <li>Dr. Oladeji Ige | Obafemi Awolowo University IIe-Ife, Nigeria</li>
          <li>Engr. (Dr.) Feyisayo V. Adams | American University of Nigeria, Yola, Nigeria</li>
          <li>Dr. Isaac O. Fayomi | Covenant University, Ota, Nigeria</li>
          <li>Prof. Bolanle D. Ikotun | University of South Africa, Johannesburg, South Africa </li>
          <li>Dr. Andrew John | Petroleum Training Institute, Effurun, Nigeria</li>
          <li>Engr. Ifeoma V. Joseph | University of Manchester, Manchester, United Kingdom</li>
          <li>Prof. Olugbenga T. Johnson | University of Namibia, Namibia</li>
          <li>Dr. Richard R. Sule | University of South Africa, Johannesburg, South Africa </li>
          <li>Engr. (Dr.) Tasiu Idi | Federal College of Education, Yola, Nigeria</li>
          <li>Prof. Olayinka Ohunakin | Covenant University, Ota, Nigeria</li>
          <li>Dr. Ayodeji O. Apata | Federal Polytechnic, Idah, Nigeria</li>
          <li>Dr. Monday O. Oma | Council for Scientific and Industrial Research, Pretoria, South Africa</li>
          <li>Prof. Michael O. Daramola | University of Witwatersrand, Johannesburg, South Africa</li>
          <li>Engr. Hassan Onawola | Federal Polytechnic Offa, Nigeria</li>
          <li>Dr. Brendon Shongwe | Tshwane University of Technology, Pretoria, South Africa </li>
          <li>Engr. (Prof.) Shehu Iya | Modibbo Adama University of Technology, Yola, Nigeria</li>
          <li>Engr. Ojo Samuel | Federal Polytechnic, Mubi, Nigeria </li>
          <li>Dr. Oladotun Bolade | University of the Witwatersrand, Johannesburg, South Africa </li>
          <li>Dr. Ogheneruona Diemu | University of Port Harcourt, Nigeria</li>
          <li>Prof. Akeem A. Raheem | Ladoke Akintola University, Ogbomosho, Nigeria</li>
          <li>Prof. Bolade O. Agboola | American University of Nigeria, Yola</li>
          <li>Prof. Olumide Longe | American University of Nigeria, Yola, Nigeria</li>
          <li>Dr. Prabhakar Rontala Subramaniam | University of KwaZulu-Natal, South Africa</li>
          <li>Prof. Seun Oyekola | Cape Peninsula University of Technology</li>
          <li>Dr. Babatunde Ogunleye | Military Technological College, Oman</li>
          <li>Dr. Henry Ohize | Federal University of Technology, Minna, Nigeria</li>
          <li>Dr. Philip Oni | Huawei Toronto Research Center, Canada</li>
          <li>Dr. Joseph Orimolade | Federal University of Agriculture, Abeokuta, Nigeria</li>
          <li>Prof. Zirra Peter | Federal University of Kashere, Gombe</li>
          <li>Prof Anthony Chan | Caritas Institute of Higher Education, Hong Kong</li>
          <li>Dr. Enoch N. Ogunmuyiwa | Botswana International University of Science and Technology, Palapye, Botswana</li>
          <li>Engr.(Dr.) Z. Belel | Modibbo Adama University of Technology, Yola, Nigeria</li>
          
      </ul>
</div>
</div>

<div id="background3">
<div style={{width:"90%",marginTop:"3.5rem", marginLeft:"auto", marginRight:"auto"}}>
     <div style={{textAlign:"center"}}>
      <h1>Organizing Committee</h1>
      </div>
      <ul style={{ animation: "fadeIn 13.25s infinite",fontSize:"22px",  padding:"7rem", color:"#fff"}}>

          <li>Engr. Umar Adamu | Local Government Service Commision, Yola, Nigeria</li>
          <li>Engr. Mundi M. Ibrahim | Adamawa State Ministry of Works, Yola, Nigeria</li>
          <li>Engr. (Dr.) Feyisayo V. Adams | American University of Nigeria, Yola, Nigeria</li>
          <li> Engr. Umar A. Umar | Modibbo Adama University of Technology, Yola, Nigeria</li>
          <li>Dr. Ajibesin A. Abel | American University of Nigeria, Yola, Nigeria </li>
          <li>Engr. Raphael O. Orosun | Savannah Sugar Company Limited, Numan, Nigeria</li>
          <li>Engr. Dahiru A. Dama | Adamawa State Ministry of Works, Yola, Nigeria</li>
          <li>Engr. Aminu A. Yaro | Federal College of Education, Yola, Nigeria</li>
          <li>Engr. Munyale Zira | Union Bank of Nigeria, Yola, Nigeria</li>
          <li>Engr. Kachalla A. Kau | Modibbo Adama University of Technology, Yola, Nigeria</li>
          
      </ul>
</div>
</div>

<div >
<div className="title-div" style={{marginBottom:"2rem",display:"flex", width:"100%", height:"450px",marginLeft:"auto",marginRight:"auto"}}>
    <div className="title-text" style={{color:"gray",boxShadow: "0 5px 45px 0 rgba(89, 109, 121, 0.2)",paddingTop:"1rem",marginTop:"6rem",borderRadius:"20px",width:"60%", background:"#fff",marginLeft:"auto",marginRight:"auto"}}>
        <div style={{textAlign:"center"}}><h1 style={{fontSize:"35px"}}>Important Dates</h1></div>
        <div style={{marginTop:"2rem", fontSize:"20px"}}><strong style={{marginRight:"12rem", marginLeft:"1em", fontSize:"22px"}}>Date</strong><strong>Topic</strong></div>
    <hr/>
    <div style={{marginTop:"2rem"}}><strong style={{marginRight:"1rem", marginLeft:"1rem" , color:"red"}}>Jan 20th - June 20th, 2020</strong> - <strong >  Abstract/full paper submission</strong></div>
    <hr/>
    <div style={{marginTop:"2rem"}}><strong style={{marginRight:"6.9rem", marginLeft:"1rem", color:"red"}}>July 20th, 2020</strong> - <strong >  Final notification of acceptance abstract/full paper submission</strong></div>
    </div>
    <div className="reg-but" style={{color:"gray",paddingTop:"5rem",marginTop:"5rem",width:"30%",marginLeft:"auto",marginRight:"auto"}}>
    <h2>Get an Early Bird Discount</h2>

    <a href="/register_now"><div className="join-now-btn2">
              <span style={{ marginLeft: "1.2rem" }}>REGISTER NOW</span>{" "}
              <i style={{ marginLeft: "0.6rem" }} class="material-icons">
                arrow_forward
              </i>
            </div></a>
    </div>
</div>
</div>
<Route path="/register_now"  component={Register}/>

</Router>
        </Fragment> );
    }
}
 
export default Home;