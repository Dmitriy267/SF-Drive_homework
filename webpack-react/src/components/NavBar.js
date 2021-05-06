import React, {Component} from "react";
import "../styles/NavBar.css"
class NavBar extends Component{
    render(){
        return (
            <nav>
                 <ul aria-label="Основные разделы сайта">
                     <li><a href="#">О нас </a></li>
                     <li><a href="#">Условия</a></li>
                     <li><a href="#">Частые вопросы</a></li>
                    
                 </ul>
              
             </nav>
        );
    }
}

export default NavBar