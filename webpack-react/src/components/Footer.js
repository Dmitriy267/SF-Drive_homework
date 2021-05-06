import React from "react";
import "../styles/Footer.css";
import vk from "../images/icons/icon-vk.png";
import inst from "../images/icons/icon-inst.png";
import fb from "../images/icons/icon-fb.png";
function Footer (){
return (
    <footer>
    <div className="footer">
            <p lang="en">&#169; SkillDrive Inc. 2020</p>
            <div className="icons">
             <a href="#"><img src={vk} alt="Иконка ВКонтакте"/></a>
                <a href="#"><img src={inst} alt="Иконка Инстаграм"/></a>
                <a href="#"><img src={fb} alt="Иконка Фейсбук"/></a>
            </div>
    </div>
    </footer>
);
}
export default Footer;