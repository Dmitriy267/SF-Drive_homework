import React, {Component} from "react";
import "../styles/EntranceButton.css"
class EntranceButton extends Component{
    activButton=()=>{
        console.log ('нажали на кнопку:',this);
    }
    render(){
    return(
    <button className="entrance" onClick={this.activButton} aria-label="Кнопка входа">Войти</button>
           
    );
    }
}
export default Button;