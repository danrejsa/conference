import React, { Component, Fragment } from 'react';

class Symposium extends Component {
    state = {  }
    render() { 
        return ( <Fragment>
             <div className="background_other">
             <div style={{marginBottom:"-22px",color:"#333", width:"50%", marginLeft:"auto", marginRight:"auto"}}>
                <div style={{paddingTop:"3rem",textAlign:"center", color:"#333"}}>
                    <h1>Plenary Speakers</h1>
                    <ul style={{animation: "fadeIn 8.25s infinite",color:"#333", fontSize:"18px", listStyleType:"none"}}>
                    <hr/>
                    <li><strong>Engr. Farouk A. Tarfa (FNSE, FNICE)</strong> <br/><i> Adamawa State Minsitry of Works, Yola, Nigeria</i></li><br/>
                   <hr/>
                    <li><strong>Engr. (Prof.) Bashir Aliyu</strong> <br/> <i>Modibbo Adama University of Technology, Yola, Nigeria</i></li><br/>
                    <hr/>
                    <li><strong>Prof. Semiu A. Kareem</strong> <br/> <i>Modibbo Adama University of Technology, Yola, Nigeria</i></li><br/>
                    <hr/>
                    <li><strong>Prof. Elvis Fosso-Kankeu</strong> <br/> <i>Northwest University, Potchefstroom, South Africa</i></li><br/>
                </ul>
                </div>
              
            </div>
             </div>

             <div id="background-speaker">
             <div style={{color:"#fff", width:"50%", marginLeft:"auto", marginRight:"auto"}}>
                <div style={{paddingTop:"9rem",textAlign:"center", color:"#fff"}}>
                    <h1>Keynote Speakers</h1>
                    <ul style={{animation: "fadeIn 8.25s infinite",color:"#fff", fontSize:"17px", listStyleType:"none"}}>
                    <hr/>
                    <li><strong>Engr. T.S.G Wudil</strong> <br/><i> Deputy Presisent, The Nigerian Society of Engineers</i></li><br/>
                   <hr/>
                    <li><strong>Engr. (Prof.) A. Raji</strong> <br/> <i>Modibbo Adama University of Technology, Yola, Nigeria</i></li><br/>
                    <hr/>
                    <li><strong>Prof. P.A Olubambi</strong> <br/> <i>Johannesburg, South Africa</i></li><br/>
                    <hr/>
                    <li><strong>Prof. A.P.I. Popoola</strong> <br/> <i>Tshwane University of Technology, Pretoria, South Africa</i></li><br/>
                    <li><strong>Dr. David Dodoo-Arhin</strong><br/><i>University of Ghana, Accra, Ghana</i></li>
                </ul>
                </div>
              
            </div>
             </div>
        </Fragment> );
    }
}
 
export default Symposium;