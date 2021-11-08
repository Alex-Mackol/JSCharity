import React from 'react'
import Text from '../text-div'
import logo from '../../img/logo.svg'
import Icons from '../../components/icons-comp/icon'


import "../footer/footer.scss"
import "../../scss/index.scss"

const MyFooter = () => {
    return (
        <footer class="footer">
            <div className="container">
                <div class="footer-grid">
                    <div class="footer-grid-text">
                        <img src={logo} className="My-logo" alt="logo" width="180px" />
                    </div>
                    <div class="footer-grid-text">
                        <Text title={"Як допомогти?"}
                            titleStyle={"p-WS-18 color-blue"}
                            width={"widthText-200"}
                            label={"Бути волонтером, або допомогати як спеціаліст. Тисніть кнопку!"}
                            labelStyle={"p-WS-12 color-grey"} />
                    </div>
                    <div class="footer-grid-text">
                        <Text title={"Контакти"}
                            titleStyle={"p-WS-18 color-blue"}
                            width={"widthText-200"}
                            label={" E-mail: info@turbota.org.ua Телефон: +38 (098) 187-99-99 Дніпро, вул. Короленка, 8/10"}
                            labelStyle={"p-WS-12 color-grey"} />
                    </div>
                    <div class="footer-grid-text">
                        <Text title={"Ми у Facebook"}
                            titleStyle={"p-WS-18 color-blue"}
                            label={""}
                            labelStyle={"p-WS-12 color-grey"} />
                            <Icons/>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default MyFooter;