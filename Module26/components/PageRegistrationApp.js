import React, {Component, Fragment} from "react";
import '../styles/PageRegistrationApp.css';
import Header from "./Header";
import SectionRegistrationMain from "./SectionRegistrationMain";
import  RegistrationFooter from "./RegistrationFooter";
class PageRegistrationApp extends Component {
    render(){
        return (
          <Fragment>
           <Header />
        <SectionRegistrationMain/>
            <RegistrationFooter/>
      </Fragment>
        );
             
       
      
    }
}
 
export default PageRegistrationApp;