import React, { Component, Fragment } from 'react';
import { Container, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

class Register extends Component {
    state = {  }
    render() { 
        return ( 
        <Fragment >
        <div className="background_reg" >
        <div style={{ width:"90%", marginLeft:"auto", marginRight:"auto"}}>
            <div style={{paddingTop:"3rem",textAlign:"center", color:"#fff"}}>
                 <h1>Registration</h1>
    <Table striped style={{marginTop:"4rem", fontSize:"18px"}}>
      <thead>
        <tr>
          <th>PARTICIPANT TYPE</th>
          <th>COST</th>
          <th>OPENING DATE</th>
          <th>CLOSING DATE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Early Bird</th>
          <td>45,000 NGN</td>
          <td>Feb. 15, 2020</td>
          <td>Aug. 30, 2020</td>
        </tr>
        <tr>
          <th scope="row">Regular</th>
          <td>50,000 NGN</td>
          <td>Sep. 1, 2020</td>
          <td>Nov. 12, 2020</td>
        </tr>
        <tr>
          <th scope="row">Students</th>
          <td>25,000 NGN</td>
          <td>Feb. 15, 2020</td>
          <td>N/A</td>
        </tr>
        <tr>
          <th scope="row">Government Agencies</th>
          <td>75,000 NGN</td>
          <td>Feb. 15, 2020</td>
          <td>N/A</td>
        </tr>
       
        <tr>
          <th scope="row">Companies</th>
          <td>100,000 NGN</td>
          <td>Feb. 15, 2020</td>
          <td>N/A</td>
        </tr>
        <tr>
          <th scope="row">Foreign Particpants</th>
          <td> 400 USD</td>
          <td>Feb. 15, 2020</td>
          <td>Nov. 12, 2020</td>
        </tr>
        <tr>
          <th scope="row">Extra Paper</th>
          <td>30,000 NGN</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <th scope="row">Extra Paper Foreign Participant</th>
          <td> 150 USD</td>
          <td></td>
          <td></td>
        </tr>
        </tbody>
        </Table>
            </div>
        </div>
        </div>
        
        
        
        <div style={{ width:"90%", marginLeft:"auto", marginRight:"auto"}}>>
        <div style={{paddingTop:"3rem",textAlign:"center", color:"#fff"}}>
                 <h1 style={{color:"red"}}>Payment Options</h1>
                 <p style={{marginBottom:"5rem",color:"#333", fontSize:"20px"}}>Bank Transfer in any of the following Bank Accounts: 
                     <br/> <strong>CLEARLY INDICATE "ICASCIE 2020" on the teller <br/>
                     <br/>
                     Local Currency (Naira) Foreign Currency (USD) <br/>
                     Bank Name: <span style={{color:"blue"}}>Zenith Bank</span> <br/>
                     Name: <span style={{color:"blue"}}>NSE Yola Branch</span> <br/>
                     Account No: <span style={{color:"blue"}}>1013650851</span> <br/><br/>
                     Domiciliary Account: <br/>
                     Name:<br/>
                     SORT CODE:<br/>
                     SWIFT CODE:

                     </strong>
                 </p>
                 
        </div>
        </div>
        </Fragment> );
    }
}
 
export default Register;