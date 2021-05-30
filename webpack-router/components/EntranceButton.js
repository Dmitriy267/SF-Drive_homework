import React, {Component} from "react";
import "../styles/EntranceButton.css"
class EntranceButton extends Component{
    constructor(props){
        super(props);
        this.state={
            clicks: 0
        }
        this.activButton=this.activButton.bind(this);
    }
    activButton (){
        this.setState({clicks:1})
       console.log ('нажали на кнопку: "Войти"');
        
    }
    render(){
    return(
    <button className="entrance" onClick={this.activButton}  aria-label="Кнопка входа" value={'clicks'}>Войти</button>
           
    );
    }
}
export default EntranceButton;