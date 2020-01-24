import React, { Component, Fragment } from 'react';

class Submission extends Component {
    state = {  }
    render() { 
        return ( <Fragment>
             <div className="submission" >
            <div style={{fontSize:"20px",paddingTop:"3rem",textAlign:"center", color:"#333"}}>
                 <h2 style={{textDecoration:"underline"}}>Submission</h2>
                 <p> All papers should be submitted to 
                     <strong style={{color:"red",textDecoration:""}}> yolabranchnse@gmail.com</strong>
                 </p>
                 <p>For general queries and technical issues, please contact salojohope@yahoo.com</p>
                 </div>
                 </div>
        
        </Fragment> );
    }
}
 
export default Submission;