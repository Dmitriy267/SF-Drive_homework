import React, {Component} from "react";
import "../styles/AutorizationSection.css";
import sign  from "../images/autorization/undraw_sign.png";
class AutorizationSection extends Component{
    render(){
        return(
             <section className="autorization-section">
            <img src={sign} alt="Рисунок страницы авторизации"/>
            <form className="autorization-form">
                <legend>Авторизация</legend>
                <input  type="email" name="mail" placeholder="Электронная почта"/>
                   <input type="password" name="password" placeholder="Пароль"/>
                <a href="#" className="autorization-form__link-recovery">Забыли?</a>
                <button className="autorization-form__btn-enter">Войти</button>
            </form>
        </section>
        );
    }
}
export default AutorizationSection;

